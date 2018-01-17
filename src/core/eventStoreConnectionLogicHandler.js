var util = require('util');
var uuid = require('uuid');
var EventEmitter = require('events').EventEmitter;

var SimpleQueuedHandler = require('./simpleQueuedHandler');
var TcpPackageConnection = require('../transport/tcp/tcpPackageConnection');
var OperationsManager = require('./operationsManager');
var SubscriptionsManager = require('./subscriptionsManager');
var VolatileSubscriptionOperation = require('../clientOperations/volatileSubscriptionOperation');
var ConnectToPersistentSubscriptionOperation = require('../clientOperations/connectToPersistentSubscriptionOperation');
var messages = require('./messages');

var TcpPackage = require('../systemData/tcpPackage');
var TcpCommand = require('../systemData/tcpCommand');
var TcpFlags = require('../systemData/tcpFlags');
var InspectionDecision = require('../systemData/inspectionDecision');

const ConnectionState = {
  Init: 'init',
  Connecting: 'connecting',
  Connected: 'connected',
  Closed: 'closed'
};

const ConnectingPhase = {
  Invalid: 'invalid',
  Reconnecting: 'reconnecting',
  EndPointDiscovery: 'endpointDiscovery',
  ConnectionEstablishing: 'connectionEstablishing',
  Authentication: 'authentication',
  Connected: 'connected'
};

const TimerPeriod = 200;
const TimerTickMessage = new messages.TimerTickMessage();
const EmptyGuid = '00000000-0000-0000-0000-000000000000';

/**
 * @private
 * @param {EventStoreNodeConnection} esConnection
 * @param {Object} settings
 * @constructor
 * @property {Number} totalOperationCount
 */
function EventStoreConnectionLogicHandler(esConnection, settings) {
  EventEmitter.call(this);
  this._esConnection = esConnection;
  this._settings = settings;
  this._queue = new SimpleQueuedHandler();
  this._state = ConnectionState.Init;
  this._connectingPhase = ConnectingPhase.Invalid;
  this._endpointDiscoverer = null;
  this._connection = null;
  this._wasConnected = false;
  this._packageNumber = 0;
  this._authInfo = null;
  this._lastTimeoutsTimeStamp = 0;

  this._operations = new OperationsManager(esConnection.connectionName, settings);
  this._subscriptions = new SubscriptionsManager(esConnection.connectionName, settings);

  var self = this;
  this._queue.registerHandler(messages.StartConnectionMessage, function(msg) {
    self._startConnection(msg.cb, msg.endpointDiscoverer);
  });
  this._queue.registerHandler(messages.CloseConnectionMessage, function(msg) {
    self._closeConnection(msg.reason, msg.error);
  });

  this._queue.registerHandler(messages.StartOperationMessage, function(msg) {
    self._startOperation(msg.operation, msg.maxRetries, msg.timeout);
  });
  this._queue.registerHandler(messages.StartSubscriptionMessage, function(msg) {
    self._startSubscription(msg);
  });
  this._queue.registerHandler(messages.StartPersistentSubscriptionMessage, function(msg) {
    self._startPersistentSubscription(msg);
  });

  this._queue.registerHandler(messages.EstablishTcpConnectionMessage, function(msg) {
    self._establishTcpConnection(msg.endPoints);
  });
  this._queue.registerHandler(messages.TcpConnectionEstablishedMessage, function(msg) {
    self._tcpConnectionEstablished(msg.connection);
  });
  this._queue.registerHandler(messages.TcpConnectionErrorMessage, function(msg) {
    self._tcpConnectionError(msg.connection, msg.error);
  });
  this._queue.registerHandler(messages.TcpConnectionClosedMessage, function(msg) {
    self._tcpConnectionClosed(msg.connection, msg.error);
  });
  this._queue.registerHandler(messages.HandleTcpPackageMessage, function(msg) {
    self._handleTcpPackage(msg.connection, msg.package);
  });

  this._queue.registerHandler(messages.TimerTickMessage, function(msg) {
    self._timerTick();
  });

  this._timer = setInterval(function() {
    self.enqueueMessage(TimerTickMessage);
  }, TimerPeriod);
}
util.inherits(EventStoreConnectionLogicHandler, EventEmitter);

Object.defineProperty(EventStoreConnectionLogicHandler.prototype, 'totalOperationCount', {
  get: function() {
    return this._operations.totalOperationCount;
  }
});

EventStoreConnectionLogicHandler.prototype.enqueueMessage = function(msg) {
  if (this._settings.verboseLogging && msg !== TimerTickMessage) this._logDebug("enqueuing message %s.", msg);
  this._queue.enqueueMessage(msg);
};

EventStoreConnectionLogicHandler.prototype._discoverEndpoint = function(cb) {
  this._logDebug('DiscoverEndpoint');

  if (this._state !== ConnectionState.Connecting) return;
  if (this._connectingPhase !== ConnectingPhase.Reconnecting) return;

  this._connectingPhase = ConnectingPhase.EndPointDiscovery;

  cb = cb || function() {};

  var self = this;
  this._endpointDiscoverer.discover(this._connection !== null ? this._connection.remoteEndPoint : null)
      .then(function(nodeEndpoints){
        self.enqueueMessage(new messages.EstablishTcpConnectionMessage(nodeEndpoints));
        cb();
      })
      .catch(function(err) {
        self.enqueueMessage(new messages.CloseConnectionMessage("Failed to resolve TCP end point to which to connect.", err));
        cb(new Error("Couldn't resolve target end point: " + err.message));
      });
};

/**
 * @param {Function} cb
 * @param {StaticEndpointDiscoverer} endpointDiscoverer
 * @private
 */
EventStoreConnectionLogicHandler.prototype._startConnection = function(cb, endpointDiscoverer) {
  this._logDebug('StartConnection');

  switch(this._state) {
    case ConnectionState.Init:
      this._endpointDiscoverer = endpointDiscoverer;
      this._state = ConnectionState.Connecting;
      this._connectingPhase = ConnectingPhase.Reconnecting;
      this._discoverEndpoint(cb);
      break;
    case ConnectionState.Connecting:
    case ConnectionState.Connected:
      return cb(new Error(['EventStoreConnection', this._esConnection.connectionName, 'is already active.'].join(' ')));
    case ConnectionState.Closed:
      return cb(new Error(['EventStoreConnection', this._esConnection.connectionName, 'is closed.'].join(' ')));
    default:
      return cb(new Error(['Unknown state:', this._state].join(' ')));
  }
};

/**
 * @param {string} reason
 * @param {Error} [error]
 * @private
 */
EventStoreConnectionLogicHandler.prototype._closeConnection = function(reason, error) {
  if (this._state === ConnectionState.Closed) {
    this._logDebug("CloseConnection IGNORED because is ESConnection is CLOSED, reason %s, error %s.", reason, error ? error.stack : '');
    return;
  }

  this._logDebug("CloseConnection, reason %s, error %s.", reason, error ? error.stack : '');

  this._state = ConnectionState.Closed;

  clearInterval(this._timer);
  this._operations.cleanUp();
  this._subscriptions.cleanUp();
  this._closeTcpConnection(reason);

  this._logInfo("Closed. Reason: %s", reason);

  if (error)
      this.emit('error', error);

  this.emit('closed', reason);
};

EventStoreConnectionLogicHandler.prototype._closeTcpConnection = function(reason) {
  if (!this._connection) {
    this._logDebug("CloseTcpConnection IGNORED because _connection === null");
    return;
  }

  this._logDebug("CloseTcpConnection");
  this._connection.close(reason);
  this._tcpConnectionClosed(this._connection);
  this._connection = null;
};

var _nextSeqNo = -1;
function createOperationItem(operation, maxRetries, timeout) {
  var operationItem = {
    seqNo: _nextSeqNo++,
    operation: operation,
    maxRetries: maxRetries,
    timeout: timeout,
    createdTime: Date.now(),
    correlationId: uuid.v4(),
    retryCount: 0,
    lastUpdated: Date.now()
  };
  operationItem.toString = (function() {
    return util.format("Operation %s (%s): %s, retry count: %d, created: %s, last updated: %s",
                       this.operation.constructor.name, this.correlationId, this.operation, this.retryCount,
                       new Date(this.createdTime).toISOString().substr(11,12),
                       new Date(this.lastUpdated).toISOString().substr(11,12));
  }).bind(operationItem);
  return operationItem;
}

EventStoreConnectionLogicHandler.prototype._startOperation = function(operation, maxRetries, timeout) {
  switch(this._state) {
    case ConnectionState.Init:
      operation.fail(new Error("EventStoreConnection '" + this._esConnection.connectionName + "' is not active."));
      break;
    case ConnectionState.Connecting:
      this._logDebug("StartOperation enqueue %s, %s, %d, %d.", operation.constructor.name, operation, maxRetries, timeout);
      this._operations.enqueueOperation(createOperationItem(operation, maxRetries, timeout));
      break;
    case ConnectionState.Connected:
      this._logDebug("StartOperation schedule %s, %s, %d, %d.", operation.constructor.name, operation, maxRetries, timeout);
      this._operations.scheduleOperation(createOperationItem(operation, maxRetries, timeout), this._connection);
      break;
    case ConnectionState.Closed:
      operation.fail(new Error("EventStoreConnection '" + this._esConnection.connectionName + "' is closed."));
      break;
    default:
      throw new Error("Unknown state: " + this._state + '.');
  }
};

function createSubscriptionItem(operation, maxRetries, timeout) {
  var subscriptionItem = {
    operation: operation,
    maxRetries: maxRetries,
    timeout: timeout,
    createdTime: Date.now(),
    correlationId: uuid.v4(),
    retryCount: 0,
    lastUpdated: Date.now(),
    isSubscribed: false
  };
  subscriptionItem.toString = (function(){
    return util.format("Subscription %s (%s): %s, is subscribed: %s, retry count: %d, created: %s, last updated: %s",
        this.operation.constructor.name, this.correlationId, this.operation, this.isSubscribed, this.retryCount,
        new Date(this.createdTime).toISOString().substr(11,12),
        new Date(this.lastUpdated).toISOString().substr(11,12));
  }).bind(subscriptionItem);
  return subscriptionItem;
}

EventStoreConnectionLogicHandler.prototype._startSubscription = function(msg) {
  switch (this._state)
  {
    case ConnectionState.Init:
      msg.cb(new Error(util.format("EventStoreConnection '%s' is not active.", this._esConnection.connectionName)));
      break;
    case ConnectionState.Connecting:
    case ConnectionState.Connected:
      var self = this;
      var operation = new VolatileSubscriptionOperation(this._settings.log, msg.cb, msg.streamId, msg.resolveLinkTos,
              msg.userCredentials, msg.eventAppeared, msg.subscriptionDropped,
              this._settings.verboseLogging, function() { return self._connection });
      this._logDebug("StartSubscription %s %s, %s, %d, %d.",
          this._state === ConnectionState.Connected ? "fire" : "enqueue",
          operation.constructor.name, operation, msg.maxRetries, msg.timeout);
      var subscription = createSubscriptionItem(operation, msg.maxRetries, msg.timeout);
      if (this._state === ConnectionState.Connecting)
        this._subscriptions.enqueueSubscription(subscription);
      else
        this._subscriptions.startSubscription(subscription, this._connection);
      break;
    case ConnectionState.Closed:
      msg.cb(new Error("Connection closed. Connection: " + this._esConnection.connectionName));
      break;
    default:
      throw new Error(util.format("Unknown state: %s.", this._state));
  }
};

EventStoreConnectionLogicHandler.prototype._startPersistentSubscription = function(msg) {
  var self = this;
  switch (this._state)
  {
    case ConnectionState.Init:
      msg.cb(new Error(util.format("EventStoreConnection '%s' is not active.", this._esConnection.connectionName)));
      break;
    case ConnectionState.Connecting:
    case ConnectionState.Connected:
      var operation = new ConnectToPersistentSubscriptionOperation(this._settings.log, msg.cb, msg.subscriptionId,
              msg.bufferSize, msg.streamId, msg.userCredentials, msg.eventAppeared, msg.subscriptionDropped,
              this._settings.verboseLogging, function() { return self._connection });
      this._logDebug("StartSubscription %s %s, %s, %d, %d.",
          this._state === ConnectionState.Connected ? "fire" : "enqueue",
          operation.constructor.name, operation, msg.maxRetries, msg.timeout);
      var subscription = createSubscriptionItem(operation, msg.maxRetries, msg.timeout);
      if (this._state === ConnectionState.Connecting)
        this._subscriptions.enqueueSubscription(subscription);
      else
        this._subscriptions.startSubscription(subscription, this._connection);
      break;
    case ConnectionState.Closed:
      msg.cb(new Error("Connection closed. " + this._esConnection.connectionName));
      break;
    default: throw new Error(util.format("Unknown state: %s.", this._state));
  }
};

EventStoreConnectionLogicHandler.prototype._establishTcpConnection = function(endPoints) {
  var endPoint = this._settings.useSslConnection ? endPoints.secureTcpEndPoint : endPoints.tcpEndPoint;
  if (endPoint === null)
  {
    this._closeConnection("No end point to node specified.");
    return;
  }

  this._logDebug("EstablishTcpConnection to [%j]", endPoint);

  if (this._state !== ConnectionState.Connecting) return;
  if (this._connectingPhase !== ConnectingPhase.EndPointDiscovery) return;

  var self = this;
  this._connectingPhase = ConnectingPhase.ConnectionEstablishing;
  this._connection = new TcpPackageConnection(
          this._settings.log,
          endPoint,
          uuid.v4(),
          this._settings.useSslConnection,
          this._settings.targetHost,
          this._settings.validateServer,
          this._settings.clientConnectionTimeout,
          function(connection, pkg) {
            self.enqueueMessage(new messages.HandleTcpPackageMessage(connection, pkg));
          },
          function(connection, error) {
            self.enqueueMessage(new messages.TcpConnectionErrorMessage(connection, error));
          },
          function(connection) {
            connection.startReceiving();
            self.enqueueMessage(new messages.TcpConnectionEstablishedMessage(connection));
          },
          function(connection, error) {
            self.enqueueMessage(new messages.TcpConnectionClosedMessage(connection, error));
          }
      );
};

EventStoreConnectionLogicHandler.prototype._tcpConnectionEstablished = function(connection) {
  if (this._state !== ConnectionState.Connecting || !this._connection || !this._connection.equals(connection) || connection.isClosed)
  {
    this._logDebug("IGNORED (_state %s, _conn.Id %s, conn.Id %s, conn.closed %s): TCP connection to [%j, L%j] established.",
        this._state, this._connection === null ? EmptyGuid : this._connection.connectionId, connection.connectionId,
        connection.isClosed, connection.remoteEndPoint, connection.localEndPoint);
    return;
  }

  this._logDebug("TCP connection to [%j, L%j, %s] established.", connection.remoteEndPoint, connection.localEndPoint, connection.connectionId);
  this._heartbeatInfo = {
    lastPackageNumber: this._packageNumber,
    isIntervalStage: true,
    timeStamp: Date.now()
  };

  if (this._settings.defaultUserCredentials !== null)
  {
    this._connectingPhase = ConnectingPhase.Authentication;

    this._authInfo = {
      correlationId: uuid.v4(),
      timeStamp: Date.now()
    };
    this._connection.enqueueSend(new TcpPackage(
      TcpCommand.Authenticate,
      TcpFlags.Authenticated,
      this._authInfo.correlationId,
      this._settings.defaultUserCredentials.username,
      this._settings.defaultUserCredentials.password));
  }
  else
  {
    this._goToConnectedState();
  }
};

EventStoreConnectionLogicHandler.prototype._goToConnectedState = function() {
  this._state = ConnectionState.Connected;
  this._connectingPhase = ConnectingPhase.Connected;

  this._wasConnected = true;

  this.emit('connected', this._connection.remoteEndPoint);

  if ((Date.now() - this._lastTimeoutsTimeStamp) >= this._settings.operationTimeoutCheckPeriod)
  {
    this._operations.checkTimeoutsAndRetry(this._connection);
    this._subscriptions.checkTimeoutsAndRetry(this._connection);
    this._lastTimeoutsTimeStamp = Date.now();
  }
};

EventStoreConnectionLogicHandler.prototype._tcpConnectionError = function(connection, error) {
  if (!this._connection || !this._connection.equals(connection)) return;
  if (this._state === ConnectionState.Closed) return;

  this._logDebug("TcpConnectionError connId %s, exc %s.", connection.connectionId, error);
  this._closeConnection("TCP connection error occurred.", error);
};

EventStoreConnectionLogicHandler.prototype._tcpConnectionClosed = function(connection, error) {
  if (this._state === ConnectionState.Init) throw new Error();
  if (this._state === ConnectionState.Closed || !this._connection || !this._connection.equals(connection))
  {
    this._logDebug("IGNORED (_state: %s, _conn.ID: %s, conn.ID: %s): TCP connection to [%j, L%j] closed.",
        this._state, this._connection === null ? EmptyGuid : this._connection.connectionId,  connection.connectionId,
        connection.remoteEndPoint, connection.localEndPoint);
    return;
  }

  this._state = ConnectionState.Connecting;
  this._connectingPhase = ConnectingPhase.Reconnecting;

  this._logDebug("TCP connection to [%j, L%j, %s] closed. %s", connection.remoteEndPoint, connection.localEndPoint, connection.connectionId, error);

  this._subscriptions.purgeSubscribedAndDroppedSubscriptions(this._connection.connectionId);
  this._reconnInfo = {
    reconnectionAttempt: this._reconnInfo ? this._reconnInfo.reconnectionAttempt : 0,
    timeStamp: Date.now()
  };

  if (this._wasConnected)
  {
    this._wasConnected = false;
    this.emit('disconnected', connection.remoteEndPoint);
  }
};

EventStoreConnectionLogicHandler.prototype._handleTcpPackage = function(connection, pkg) {
  if (!connection.equals(this._connection) || this._state === ConnectionState.Closed || this._state === ConnectionState.Init)
  {
    this._logDebug("IGNORED: HandleTcpPackage connId %s, package %s, %s.",
                   connection.connectionId, TcpCommand.getName(pkg.command), pkg.correlationId);
    return;
  }

  this._logDebug("HandleTcpPackage connId %s, package %s, %s.",
                 this._connection.connectionId, TcpCommand.getName(pkg.command), pkg.correlationId);
  this._packageNumber += 1;

  if (pkg.command === TcpCommand.HeartbeatResponseCommand)
  {
    if (pkg.correlationId === this._heartbeatInfo.correlationId)
    {
      var now = Date.now();
      var heartbeatEvent = {
        connectionId: this._connection.connectionId,
        remoteEndPoint: this._connection.remoteEndPoint,
        requestSentAt: this._heartbeatInfo.timeStamp,
        requestPkgNumber: this._heartbeatInfo.lastPackageNumber,
        responseReceivedAt: now,
        responsePkgNumber: this._packageNumber
      };
      try {
        this.emit('heartbeatInfo', heartbeatEvent);
      } catch(e) {
        this._logDebug("IGNORED: emit heartbeat event failed.\n%s", e.stack);
      }
    }
    return;
  }
  if (pkg.command === TcpCommand.HeartbeatRequestCommand)
  {
    this._connection.enqueueSend(new TcpPackage(
      TcpCommand.HeartbeatResponseCommand,
      TcpFlags.None,
      pkg.correlationId));
    return;
  }

  if (pkg.command === TcpCommand.Authenticated || pkg.command === TcpCommand.NotAuthenticated)
  {
    if (this._state === ConnectionState.Connecting
        && this._connectingPhase === ConnectingPhase.Authentication
        && this._authInfo.correlationId === pkg.correlationId)
    {
      if (pkg.command === TcpCommand.NotAuthenticated)
        this.emit('authenticationFailed', "Not authenticated");

      this._goToConnectedState();
      return;
    }
  }

  if (pkg.command === TcpCommand.BadRequest && pkg.correlationId === EmptyGuid)
  {
    var message = "<no message>";
    try {
      message = pkg.data.toString();
    } catch(e) {}
    var err = new Error("Bad request received from server. Error: " + message);
    this._closeConnection("Connection-wide BadRequest received. Too dangerous to continue.", err);
    return;
  }

  var operation = this._operations.getActiveOperation(pkg.correlationId);
  if (operation)
  {
    var result = operation.operation.inspectPackage(pkg);
    this._logDebug("HandleTcpPackage OPERATION DECISION %s (%s), %s", result.decision, result.description, operation.operation);
    switch (result.decision)
    {
      case InspectionDecision.DoNothing: break;
      case InspectionDecision.EndOperation:
        this._operations.removeOperation(operation);
        break;
      case InspectionDecision.Retry:
        this._operations.scheduleOperationRetry(operation);
        break;
      case InspectionDecision.Reconnect:
        this._reconnectTo({tcpEndPoint: result.tcpEndPoint, secureTcpEndPoint: result.secureTcpEndPoint});
        this._operations.scheduleOperationRetry(operation);
        break;
      default:
        throw new Error("Unknown InspectionDecision: " + result.decision);
    }
    if (this._state === ConnectionState.Connected)
      this._operations.scheduleWaitingOperations(connection);

    return;
  }

  var subscription = this._subscriptions.getActiveSubscription(pkg.correlationId);
  if (subscription)
  {
    var result = subscription.operation.inspectPackage(pkg);
    this._logDebug("HandleTcpPackage SUBSCRIPTION DECISION %s (%s), %s", result.decision, result.description, subscription);
    switch (result.decision)
    {
      case InspectionDecision.DoNothing: break;
      case InspectionDecision.EndOperation:
        this._subscriptions.removeSubscription(subscription);
        break;
      case InspectionDecision.Retry:
        this._subscriptions.scheduleSubscriptionRetry(subscription);
        break;
      case InspectionDecision.Reconnect:
        this._reconnectTo({tcpEndPoint: result.tcpEndPoint, secureTcpEndPoint: result.secureTcpEndPoint});
        this._subscriptions.scheduleSubscriptionRetry(subscription);
        break;
      case InspectionDecision.Subscribed:
        subscription.isSubscribed = true;
        break;
      default:
        throw new Error("Unknown InspectionDecision: " + result.decision);
    }

    return;
  }

  this._logDebug("HandleTcpPackage UNMAPPED PACKAGE with CorrelationId %s, Command: %s",
                 pkg.correlationId, TcpCommand.getName(pkg.command));
};

EventStoreConnectionLogicHandler.prototype._reconnectTo = function(endPoints) {
  var endPoint = this._settings.useSslConnection
      ? endPoints.secureTcpEndPoint
      : endPoints.tcpEndPoint;
  if (endPoint === null)
  {
    this._closeConnection("No end point is specified while trying to reconnect.");
    return;
  }

  if (this._state !== ConnectionState.Connected || this._connection.remoteEndPoint === endPoint)
    return;

  var msg = util.format("EventStoreConnection '%s': going to reconnect to [%j]. Current endpoint: [%j, L%j].",
      this._esConnection.connectionName, endPoint, this._connection.remoteEndPoint, this._connection.localEndPoint);
  if (this._settings.verboseLogging) this._settings.log.info(msg);
  this._closeTcpConnection(msg);

  this._state = ConnectionState.Connecting;
  this._connectingPhase = ConnectingPhase.EndPointDiscovery;
  this._establishTcpConnection(endPoints);
};

EventStoreConnectionLogicHandler.prototype._timerTick = function() {
  switch (this._state)
  {
    case ConnectionState.Init: break;
    case ConnectionState.Connecting:
      if (this._connectingPhase === ConnectingPhase.Reconnecting && (Date.now() - this._reconnInfo.timeStamp) >= this._settings.reconnectionDelay)
      {
        this._logDebug("TimerTick checking reconnection...");

        this._reconnInfo = {reconnectionAttempt: this._reconnInfo.reconnectionAttempt + 1, timeStamp: Date.now()};
        if (this._settings.maxReconnections >= 0 && this._reconnInfo.reconnectionAttempt > this._settings.maxReconnections)
          this._closeConnection("Reconnection limit reached.");
        else
        {
          this.emit('reconnecting', {});
          this._discoverEndpoint(null);
        }
      }
      else if (this._connectingPhase === ConnectingPhase.Authentication && (Date.now() - this._authInfo.timeStamp) >= this._settings.operationTimeout)
      {
        this.emit('authenticationFailed', "Authentication timed out.");
        this._goToConnectedState();
      }
      else if (this._connectingPhase === ConnectingPhase.Authentication || this._connectingPhase === ConnectingPhase.Connected)
        this._manageHeartbeats();
      break;
    case ConnectionState.Connected:
      // operations timeouts are checked only if connection is established and check period time passed
      if ((Date.now() - this._lastTimeoutsTimeStamp) >= this._settings.operationTimeoutCheckPeriod)
      {
        // On mono even impossible connection first says that it is established
        // so clearing of reconnection count on ConnectionEstablished event causes infinite reconnections.
        // So we reset reconnection count to zero on each timeout check period when connection is established
        this._reconnInfo = {reconnectionAttempt: 0, timeStamp: Date.now()};
        this._operations.checkTimeoutsAndRetry(this._connection);
        this._subscriptions.checkTimeoutsAndRetry(this._connection);
        this._lastTimeoutsTimeStamp = Date.now();
      }
      this._manageHeartbeats();
      break;
    case ConnectionState.Closed:
      break;
    default:
      throw new Error("Unknown state: " + this._state + ".");
  }
};

EventStoreConnectionLogicHandler.prototype._manageHeartbeats = function() {
  if (this._connection === null) return;

  var timeout = this._heartbeatInfo.isIntervalStage ? this._settings.heartbeatInterval : this._settings.heartbeatTimeout;
  if ((Date.now() - this._heartbeatInfo.timeStamp) < timeout)
    return;

  var packageNumber = this._packageNumber;
  if (this._heartbeatInfo.lastPackageNumber !== packageNumber)
  {
    this._heartbeatInfo = {lastPackageNumber: packageNumber, isIntervalStage: true, timeStamp: Date.now()};
    return;
  }

  if (this._heartbeatInfo.isIntervalStage)
  {
    var correlationId = uuid.v4();
    // TcpMessage.Heartbeat analog
    this._connection.enqueueSend(new TcpPackage(
      TcpCommand.HeartbeatRequestCommand,
      TcpFlags.None,
      correlationId));
    this._heartbeatInfo = {correlationId: correlationId, lastPackageNumber: this._heartbeatInfo.lastPackageNumber, isIntervalStage: false, timeStamp: Date.now()};
  }
  else
  {
    // TcpMessage.HeartbeatTimeout analog
    var msg = util.format("EventStoreConnection '%s': closing TCP connection [%j, L%j, %s] due to HEARTBEAT TIMEOUT at pkgNum %d.",
        this._esConnection.connectionName, this._connection.remoteEndPoint, this._connection.localEndPoint,
        this._connection.connectionId, packageNumber);
    this._settings.log.info(msg);
    this._closeTcpConnection(msg);
  }
};

EventStoreConnectionLogicHandler.prototype._logDebug = function(message) {
  if (!this._settings.verboseLogging) return;

  if (arguments.length > 1)
      message = util.format.apply(util, Array.prototype.slice.call(arguments));

  this._settings.log.debug("EventStoreConnection '%s': %s", this._esConnection.connectionName, message);
};

EventStoreConnectionLogicHandler.prototype._logInfo = function(message){
  if (arguments.length > 1)
    message = util.format.apply(util, Array.prototype.slice.call(arguments));

  this._settings.log.info("EventStoreConnection '%s': %s", this._esConnection.connectionName, message);
};

module.exports = EventStoreConnectionLogicHandler;