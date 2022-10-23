var util = require('util');

var TcpCommand = require('../systemData/tcpCommand');
var TcpFlags = require('../systemData/tcpFlags');
var InspectionDecision = require('../systemData/inspectionDecision');
var InspectionResult = require('./../systemData/inspectionResult');
var ClientMessage = require('../messages/clientMessage');
var TcpPackage = require('../systemData/tcpPackage');
var BufferSegment = require('../common/bufferSegment');
var results = require('../results');
var SubscriptionDropReason = require('../subscriptionDropReason');

//TODO: nodify eventAppeared and subscriptionDropped, should be emit on subscription
function SubscriptionOperation(
    log, cb, streamId, resolveLinkTos, userCredentials, eventAppeared,
    subscriptionDropped, verboseLogging, getConnection
) {
  //TODO: validations
  //Ensure.NotNull(log, "log");
  //Ensure.NotNull(source, "source");
  //Ensure.NotNull(eventAppeared, "eventAppeared");
  //Ensure.NotNull(getConnection, "getConnection");

  this._log = log;
  this._cb = cb;
  this._streamId = streamId || '';
  this._resolveLinkTos = resolveLinkTos;
  this._userCredentials = userCredentials;
  this._eventAppeared = eventAppeared;
  this._subscriptionDropped = subscriptionDropped || function() {};
  this._verboseLogging = verboseLogging;
  this._getConnection = getConnection;

  this._correlationId = null;
  this._unsubscribed = false;
  this._subscription = null;
  this._actionExecuting = false;
  this._actionQueue = [];
}

SubscriptionOperation.prototype._enqueueSend = function(pkg) {
  this._getConnection().enqueueSend(pkg);
};

SubscriptionOperation.prototype.subscribe = function(correlationId, connection) {
  if (connection === null) throw new TypeError("connection is null.");

  if (this._subscription !== null || this._unsubscribed) return false;

  this._correlationId = correlationId;
  connection.enqueueSend(this._createSubscriptionPackage());
  return true;
};

SubscriptionOperation.prototype._createSubscriptionPackage = function() {
  throw new Error("SubscriptionOperation._createSubscriptionPackage abstract method called. " + this.constructor.name);
};

SubscriptionOperation.prototype.unsubscribe = function() {
  this.dropSubscription(SubscriptionDropReason.UserInitiated, null, this._getConnection());
};

SubscriptionOperation.prototype._createUnsubscriptionPackage = function() {
  var msg = new ClientMessage.UnsubscribeFromStream();
  var data = new BufferSegment(ClientMessage.UnsubscribeFromStream.encode(msg).finish());
  return new TcpPackage(TcpCommand.UnsubscribeFromStream, TcpFlags.None, this._correlationId, null, null, data);
};

SubscriptionOperation.prototype._inspectPackage = function(pkg) {
  throw new Error("SubscriptionOperation._inspectPackage abstract method called." + this.constructor.name);
};

SubscriptionOperation.prototype.inspectPackage = function(pkg) {
  try
  {
    var result = this._inspectPackage(pkg);
    if (result !== null) return result;

    switch (pkg.command)
    {
      case TcpCommand.StreamEventAppeared:
      {
        var dto = ClientMessage.StreamEventAppeared.decode(pkg.data.toBuffer());
        this._onEventAppeared(new results.ResolvedEvent(dto.event));
        return new InspectionResult(InspectionDecision.DoNothing, "StreamEventAppeared");
      }

      case TcpCommand.SubscriptionDropped:
      {
        var dto = ClientMessage.SubscriptionDropped.decode(pkg.data.toBuffer());
        switch (dto.reason)
        {
          case ClientMessage.SubscriptionDropped.SubscriptionDropReason.Unsubscribed:
            this.dropSubscription(SubscriptionDropReason.UserInitiated, null);
            break;
          case ClientMessage.SubscriptionDropped.SubscriptionDropReason.AccessDenied:
            this.dropSubscription(SubscriptionDropReason.AccessDenied,
                new Error(util.format("Subscription to '%s' failed due to access denied.", this._streamId || "<all>")));
            break;
          default:
            if (this._verboseLogging) this._log.debug("Subscription dropped by server. Reason: %s.", dto.reason);
            this.dropSubscription(SubscriptionDropReason.Unknown,
                new Error(util.format("Unsubscribe reason: '%s'.", dto.reason)));
            break;
        }
        return new InspectionResult(InspectionDecision.EndOperation, util.format("SubscriptionDropped: %s", dto.reason));
      }

      case TcpCommand.NotAuthenticated:
      {
        var message = pkg.data.toString();
        this.dropSubscription(SubscriptionDropReason.NotAuthenticated,
            new Error(message || "Authentication error"));
        return new InspectionResult(InspectionDecision.EndOperation, "NotAuthenticated");
      }

      case TcpCommand.BadRequest:
      {
        var message = pkg.data.toString();
        this.dropSubscription(SubscriptionDropReason.ServerError,
            new Error("Server error: " + (message || "<no message>")));
        return new InspectionResult(InspectionDecision.EndOperation, util.format("BadRequest: %s", message));
      }

      case TcpCommand.NotHandled:
      {
        if (this._subscription !== null) {
          throw new Error("NotHandled command appeared while we already subscribed.");
        }

        var message = ClientMessage.NotHandled.decode(pkg.data.toBuffer());
        switch (message.reason)
        {
          case ClientMessage.NotHandled.NotHandledReason.NotReady:
            return new InspectionResult(InspectionDecision.Retry, "NotHandled - NotReady");

          case ClientMessage.NotHandled.NotHandledReason.TooBusy:
            return new InspectionResult(InspectionDecision.Retry, "NotHandled - TooBusy");

          case ClientMessage.NotHandled.NotHandledReason.NotLeader:
            var masterInfo = ClientMessage.NotHandled.LeaderInfo.decode(message.additionalInfo);
            return new InspectionResult(InspectionDecision.Reconnect, "NotHandled - NotLeader",
                {host: masterInfo.externalTcpAddress, port: masterInfo.externalTcpPort},
                {host: masterInfo.externalSecureTcpAddress, port: masterInfo.externalSecureTcpPort});

          default:
            this._log.error("Unknown NotHandledReason: %s.", message.reason);
            return new InspectionResult(InspectionDecision.Retry, "NotHandled - <unknown>");
        }
      }

      default:
      {
        this.dropSubscription(SubscriptionDropReason.ServerError,
            new Error("Command not expected: " + TcpCommand.getName(pkg.command)));
        return new InspectionResult(InspectionDecision.EndOperation, pkg.command);
      }
    }
  }
  catch (e)
  {
    this.dropSubscription(SubscriptionDropReason.Unknown, e);
    return new InspectionResult(InspectionDecision.EndOperation, util.format("Exception - %s", e.Message));
  }
};

SubscriptionOperation.prototype.connectionClosed = function() {
  this.dropSubscription(SubscriptionDropReason.ConnectionClosed, new Error("Connection was closed."));
};

SubscriptionOperation.prototype.timeOutSubscription = function() {
  if (this._subscription !== null) return false;
  this.dropSubscription(SubscriptionDropReason.SubscribingError, null);
  return true;
};

SubscriptionOperation.prototype.dropSubscription = function(reason, err, connection) {
  if (!this._unsubscribed)
  {
    this._unsubscribed = true;
    if (this._verboseLogging) {
      this._log.debug("Subscription %s to %s: closing subscription, reason: %s, exception: %s...",
        this._correlationId, this._streamId || "<all>", reason, err);
    }

    if (reason !== SubscriptionDropReason.UserInitiated && this._subscription === null)
    {
      if (err === null) throw new Error(util.format("No exception provided for subscription drop reason '%s", reason));
      this._cb(err);
      return;
    }

    if (reason === SubscriptionDropReason.UserInitiated && this._subscription !== null && connection !== null) {
      connection.enqueueSend(this._createUnsubscriptionPackage());
    }

    var self = this;
    if (this._subscription !== null) {
      this._executeAction(function () {
        self._subscriptionDropped(self._subscription, reason, err);
      });
    }
  }
};

SubscriptionOperation.prototype._confirmSubscription = function(lastCommitPosition, lastEventNumber) {
  if (lastCommitPosition < -1) {
    throw new Error(util.format("Invalid lastCommitPosition %s on subscription confirmation.", lastCommitPosition));
  }
  if (this._subscription !== null) {
    throw new Error("Double confirmation of subscription.");
  }

  if (this._verboseLogging) {
    this._log.debug("Subscription %s to %s: subscribed at CommitPosition: %d, EventNumber: %d.",
      this._correlationId, this._streamId || "<all>", lastCommitPosition, lastEventNumber);
  }

  this._subscription = this._createSubscriptionObject(lastCommitPosition, lastEventNumber);
  this._cb(null, this._subscription);
};

SubscriptionOperation.prototype._createSubscriptionObject = function(lastCommitPosition, lastEventNumber) {
  throw new Error("SubscriptionOperation._createSubscriptionObject abstract method called. " + this.constructor.name);
};

SubscriptionOperation.prototype._onEventAppeared = function(e) {
  if (this._unsubscribed) return;

  if (this._subscription === null) throw new Error("Subscription not confirmed, but event appeared!");

  if (this._verboseLogging) {
    this._log.debug("Subscription %s to %s: event appeared (%s, %d, %s @ %s).",
      this._correlationId, this._streamId || "<all>",
      e.originalStreamId, e.originalEventNumber, e.originalEvent.eventType, e.originalPosition);
  }

  var self = this;
  this._executeAction(function() { return self._eventAppeared(self._subscription, e); });
};

SubscriptionOperation.prototype._executeAction = function(action) {
  this._actionQueue.push(action);
  if (!this._actionExecuting) {
    this._actionExecuting = true;
    setImmediate(this._executeActions.bind(this));
  }
};

SubscriptionOperation.prototype._executeActions = function() {
  var action = this._actionQueue.shift();
  if (!action) {
    this._actionExecuting = false;
    return;
  }
  var promise;
  try
  {
    promise = action();
  }
  catch (err)
  {
    this._log.error(err, "Exception during executing user callback: %s.", err.message);
  }
  if (promise && promise.then) {
    var self = this;
    promise
      .catch(function (err) {
        self._log.error(err, "Exception during executing user callback: %s.", err.message);
      })
      .then(this._executeActions.bind(this));
  } else {
    setImmediate(this._executeActions.bind(this));
  }
};

SubscriptionOperation.prototype.toString = function() {
  return this.constructor.name;
};


module.exports = SubscriptionOperation;
