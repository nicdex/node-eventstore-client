var util = require('util');
var uuid = require('uuid');
var EventEmitter = require('events').EventEmitter;
var ensure = require('./common/utils/ensure');

var messages = require('./core/messages');
var EventStoreConnectionLogicHandler = require('./core/eventStoreConnectionLogicHandler');

var DeleteStreamOperation = require('./clientOperations/deleteStreamOperation');
var AppendToStreamOperation = require('./clientOperations/appendToStreamOperation');
var StartTransactionOperation = require('./clientOperations/startTransactionOperation');
var TransactionalWriteOperation = require('./clientOperations/transactionalWriteOperation');
var CommitTransactionOperation = require('./clientOperations/commitTransactionOperation');
var ReadEventOperation = require('./clientOperations/readEventOperation');
var ReadStreamEventsForwardOperation = require('./clientOperations/readStreamEventsForwardOperation');
var ReadStreamEventsBackwardOperation = require('./clientOperations/readStreamEventsBackwardOperation');
var ReadAllEventsForwardOperation = require('./clientOperations/readAllEventsForwardOperation');
var ReadAllEventsBackwardOperation = require('./clientOperations/readAllEventsBackwardOperation');
var CreatePersistentSubscriptionOperation = require('./clientOperations/createPersistentSubscriptionOperation');
var UpdatePersistentSubscriptionOperation = require('./clientOperations/updatePersistentSubscriptionOperation');
var DeletePersistentSubscriptionOperation = require('./clientOperations/deletePersistentSubscriptionOperation');

var EventStoreTransaction = require('./eventStoreTransaction');
var EventStoreStreamCatchUpSubscription = require('./eventStoreStreamCatchUpSubscription');
var EventStoreAllCatchUpSubscription = require('./eventStoreAllCatchUpSubscription');
var EventStorePersistentSubscription = require('./eventStorePersistentSubscription');

var results = require('./results');
var systemStreams = require('./common/systemStreams');
var systemEventTypes = require('./common/systemEventTypes');
var EventData = require('./eventData');

const MaxReadSize = 4096;

/**
 * @protected
 * @constructor
 */
function EventStoreNodeConnection(settings, clusterSettings, endpointDiscoverer, connectionName) {
  EventEmitter.call(this);
  this._connectionName = connectionName || ['ES-', uuid.v4()].join('');
  this._settings = settings;
  this._clusterSettings = clusterSettings;
  this._endpointDiscoverer = endpointDiscoverer;
  this._handler = new EventStoreConnectionLogicHandler(this, settings);

  var self = this;
  this._handler.on('connected', function(e) {
    self.emit('connected', e);
  });
  this._handler.on('disconnected', function(e) {
    self.emit('disconnected', e);
  });
  this._handler.on('reconnecting', function(e) {
    self.emit('reconnecting', e);
  });
  this._handler.on('closed', function(e) {
    self.emit('closed', e);
  });
  this._handler.on('error', function(e) {
    self.emit('error', e);
  });
  this._handler.on('heartbeatInfo', function(e) {
    self.emit('heartbeatInfo', e);
  });
}
util.inherits(EventStoreNodeConnection, EventEmitter);

Object.defineProperty(EventStoreNodeConnection.prototype, 'connectionName', {
  get: function() {
    return this._connectionName;
  }
});

/**
 * Start connection task
 * @public
 * @returns {Promise}
 */
EventStoreNodeConnection.prototype.connect = function() {
  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err) {
      if (err) return reject(err);
      resolve();
    }
    var startConnectionMessage = new messages.StartConnectionMessage(cb, self._endpointDiscoverer);
    self._handler.enqueueMessage(startConnectionMessage);
  });
};

/**
 * Close connection
 * @public
 */
EventStoreNodeConnection.prototype.close = function() {
  this._handler.enqueueMessage(new messages.CloseConnectionMessage("Connection close requested by client.", null));
};

/**
 * Delete a stream (async)
 * @public
 * @param {string} stream
 * @param {number} expectedVersion
 * @param {boolean} [hardDelete]
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<DeleteResult>}
 */
EventStoreNodeConnection.prototype.deleteStream = function(stream, expectedVersion, hardDelete, userCredentials) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.isInteger(expectedVersion, "expectedVersion");
  hardDelete = !!hardDelete;
  userCredentials = userCredentials || null;

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }

    var deleteStreamOperation = new DeleteStreamOperation(
        self._settings.log, cb, self._settings.requireMaster, stream, expectedVersion, hardDelete, userCredentials);
    self._enqueueOperation(deleteStreamOperation);
  });
};

/**
 * Append events to a stream (async)
 * @public
 * @param {string} stream The name of the stream to which to append.
 * @param {number} expectedVersion The version at which we currently expect the stream to be in order that an optimistic concurrency check can be performed.
 * @param {EventData[]|EventData} events The event(s) to append.
 * @param {UserCredentials} [userCredentials] User credentials
 * @returns {Promise.<WriteResult>}
 */
EventStoreNodeConnection.prototype.appendToStream = function(stream, expectedVersion, events, userCredentials) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.isInteger(expectedVersion, "expectedVersion");
  if (!Array.isArray(events))
    events = [events];
  ensure.isArrayOf(EventData, events, "events");
  userCredentials = userCredentials || null;

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    var operation = new AppendToStreamOperation(self._settings.log, cb, self._settings.requireMaster, stream,
        expectedVersion, events, userCredentials);
    self._enqueueOperation(operation);
  });
};

/**
 * Start a transaction (async)
 * @public
 * @param {string} stream
 * @param {number} expectedVersion
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<EventStoreTransaction>}
 */
EventStoreNodeConnection.prototype.startTransaction = function(stream, expectedVersion, userCredentials) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.isInteger(expectedVersion, "expectedVersion");
  userCredentials = userCredentials || null;

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    var operation = new StartTransactionOperation(self._settings.log, cb, self._settings.requireMaster, stream,
        expectedVersion, self, userCredentials);
    self._enqueueOperation(operation);
  });
};

/**
 * Continue a transaction
 * @public
 * @param {number} transactionId
 * @param {UserCredentials} userCredentials
 * @returns {EventStoreTransaction}
 */
EventStoreNodeConnection.prototype.continueTransaction = function(transactionId, userCredentials) {
  ensure.nonNegative(transactionId, "transactionId");

  return new EventStoreTransaction(transactionId, userCredentials, this);
};

EventStoreNodeConnection.prototype.transactionalWrite = function(transaction, events, userCredentials) {
  ensure.isTypeOf(EventStoreTransaction, transaction, "transaction");
  ensure.isArrayOf(EventData, events, "events");
  userCredentials = userCredentials || null;

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err) {
      if (err) return reject(err);
      resolve();
    }
    var operation = new TransactionalWriteOperation(self._settings.log, cb, self._settings.requireMaster,
        transaction.transactionId, events, userCredentials);
    self._enqueueOperation(operation);
  });
};

/**
 * Commit a transaction
 * @public
 * @param transaction
 * @param userCredentials
 * @returns {Promise.<WriteResult>}
 */
EventStoreNodeConnection.prototype.commitTransaction = function(transaction, userCredentials) {
  ensure.isTypeOf(EventStoreTransaction, transaction, "transaction");

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    var operation = new CommitTransactionOperation(self._settings.log, cb, self._settings.requireMaster,
        transaction.transactionId, userCredentials);
    self._enqueueOperation(operation);
  });
};

/**
 * Read a single event (async)
 * @public
 * @param {string} stream
 * @param {number} eventNumber
 * @param {boolean} [resolveLinkTos]
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<EventReadResult>}
 */
EventStoreNodeConnection.prototype.readEvent = function(stream, eventNumber, resolveLinkTos, userCredentials) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.isInteger(eventNumber, "eventNumber");
  if (eventNumber < -1) throw new Error("eventNumber out of range.");
  resolveLinkTos = !!resolveLinkTos;
  userCredentials = userCredentials || null;

  if (typeof stream !== 'string' || stream === '') throw new TypeError("stream must be an non-empty string.");
  if (typeof eventNumber !== 'number' || eventNumber % 1 !== 0) throw new TypeError("eventNumber must be an integer.");
  if (eventNumber < -1) throw new Error("eventNumber out of range.");
  if (resolveLinkTos && typeof resolveLinkTos !== 'boolean') throw new TypeError("resolveLinkTos must be a boolean.");

  var self = this;
  return new Promise(function(resolve, reject){
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    var operation = new ReadEventOperation(self._settings.log, cb, stream, eventNumber, resolveLinkTos,
        self._settings.requireMaster, userCredentials);
    self._enqueueOperation(operation);
  });
};

/**
 * Reading a specific stream forwards (async)
 * @public
 * @param {string} stream
 * @param {number} start
 * @param {number} count
 * @param {boolean} [resolveLinkTos]
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<StreamEventsSlice>}
 */
EventStoreNodeConnection.prototype.readStreamEventsForward = function(
    stream, start, count, resolveLinkTos, userCredentials
) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.isInteger(start, "start");
  ensure.nonNegative(start, "start");
  ensure.isInteger(count, "count");
  ensure.positive(count, "count");
  if (count > MaxReadSize) throw new Error(util.format("Count should be less than %d. For larger reads you should page.", MaxReadSize));
  resolveLinkTos = !!resolveLinkTos;
  userCredentials = userCredentials || null;

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    var operation = new ReadStreamEventsForwardOperation(self._settings.log, cb, stream, start, count,
        resolveLinkTos, self._settings.requireMaster, userCredentials);
    self._enqueueOperation(operation);
  });
};

/**
 * Reading a specific stream backwards (async)
 * @public
 * @param {string} stream
 * @param {number} start
 * @param {number} count
 * @param {boolean} [resolveLinkTos]
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<StreamEventsSlice>}
 */
EventStoreNodeConnection.prototype.readStreamEventsBackward = function(
    stream, start, count, resolveLinkTos, userCredentials
) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.isInteger(start, "start");
  ensure.isInteger(count, "count");
  ensure.positive(count, "count");
  if (count > MaxReadSize) throw new Error(util.format("Count should be less than %d. For larger reads you should page.", MaxReadSize));
  resolveLinkTos = !!resolveLinkTos;
  userCredentials = userCredentials || null;

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    var operation = new ReadStreamEventsBackwardOperation(self._settings.log, cb, stream, start, count,
        resolveLinkTos, self._settings.requireMaster, userCredentials);
    self._enqueueOperation(operation);
  });
};

/**
 * Reading all events forwards (async)
 * @public
 * @param {Position} position
 * @param {number} maxCount
 * @param {boolean} [resolveLinkTos]
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<AllEventsSlice>}
 */
EventStoreNodeConnection.prototype.readAllEventsForward = function(
    position, maxCount, resolveLinkTos, userCredentials
) {
  ensure.isTypeOf(results.Position, position, "position");
  ensure.isInteger(maxCount, "maxCount");
  ensure.positive(maxCount, "maxCount");
  if (maxCount > MaxReadSize) throw new Error(util.format("Count should be less than %d. For larger reads you should page.", MaxReadSize));
  resolveLinkTos = !!resolveLinkTos;
  userCredentials = userCredentials || null;

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    var operation = new ReadAllEventsForwardOperation(self._settings.log, cb, position, maxCount,
        resolveLinkTos, self._settings.requireMaster, userCredentials);
    self._enqueueOperation(operation);
  });
};

/**
 * Reading all events backwards (async)
 * @public
 * @param {Position} position
 * @param {number} maxCount
 * @param {boolean} [resolveLinkTos]
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<AllEventsSlice>}
 */
EventStoreNodeConnection.prototype.readAllEventsBackward = function(
    position, maxCount, resolveLinkTos, userCredentials
) {
  ensure.isTypeOf(results.Position, position, "position");
  ensure.isInteger(maxCount, "maxCount");
  ensure.positive(maxCount, "maxCount");
  if (maxCount > MaxReadSize) throw new Error(util.format("Count should be less than %d. For larger reads you should page.", MaxReadSize));
  resolveLinkTos = !!resolveLinkTos;
  userCredentials = userCredentials || null;

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    var operation = new ReadAllEventsBackwardOperation(self._settings.log, cb, position, maxCount,
        resolveLinkTos || false, self._settings.requireMaster, userCredentials || null);
    self._enqueueOperation(operation);
  });
};

/**
 * Subscribe to a stream (async)
 * @public
 * @param {!string} stream
 * @param {!boolean} resolveLinkTos
 * @param {function} eventAppeared
 * @param {function} [subscriptionDropped]
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<EventStoreSubscription>}
 */
EventStoreNodeConnection.prototype.subscribeToStream = function(
    stream, resolveLinkTos, eventAppeared, subscriptionDropped, userCredentials
) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.isTypeOf(Function, eventAppeared, "eventAppeared");
  if (subscriptionDropped)
    ensure.isTypeOf(Function, subscriptionDropped, "subscriptionDropped");

  var self = this;
  return new Promise(function(resolve,reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    self._handler.enqueueMessage(
        new messages.StartSubscriptionMessage(
            cb, stream, !!resolveLinkTos, userCredentials || null, eventAppeared, subscriptionDropped || null,
            self._settings.maxRetries, self._settings.operationTimeout));
  });
};

/**
 * Subscribe to a stream from position
 * @public
 * @param {!string} stream
 * @param {?number} lastCheckpoint
 * @param {!boolean} resolveLinkTos
 * @param {!function} eventAppeared
 * @param {function} [liveProcessingStarted]
 * @param {function} [subscriptionDropped]
 * @param {UserCredentials} [userCredentials]
 * @param {!number} [readBatchSize]
 * @returns {EventStoreStreamCatchUpSubscription}
 */
EventStoreNodeConnection.prototype.subscribeToStreamFrom = function(
    stream, lastCheckpoint, resolveLinkTos, eventAppeared, liveProcessingStarted, subscriptionDropped,
    userCredentials, readBatchSize
) {
  if (typeof stream !== 'string' || stream === '') throw new TypeError("stream must be a non-empty string.");
  if (lastCheckpoint !== null && typeof lastCheckpoint !== 'number') throw new TypeError("lastCheckpoint must be a number or null.");
  if (typeof eventAppeared !== 'function') throw new TypeError("eventAppeared must be a function.");

  var catchUpSubscription =
      new EventStoreStreamCatchUpSubscription(this, this._settings.log, stream, lastCheckpoint,
          resolveLinkTos, userCredentials || null, eventAppeared,
          liveProcessingStarted || null, subscriptionDropped || null, this._settings.verboseLogging,
          readBatchSize);
  catchUpSubscription.start();
  return catchUpSubscription;
};

/**
 * Subscribe to all (async)
 * @public
 * @param {!boolean} resolveLinkTos
 * @param {!function} eventAppeared
 * @param {function} [subscriptionDropped]
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<EventStoreSubscription>}
 */
EventStoreNodeConnection.prototype.subscribeToAll = function(
    resolveLinkTos, eventAppeared, subscriptionDropped, userCredentials
) {
  if (typeof eventAppeared !== 'function') throw new TypeError("eventAppeared must be a function.");

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    self._handler.enqueueMessage(
        new messages.StartSubscriptionMessage(
            cb, '', resolveLinkTos, userCredentials || null, eventAppeared, subscriptionDropped || null,
            self._settings.maxRetries, self._settings.operationTimeout));
  });
};

/**
 * Subscribe to all from
 * @public
 * @param {?Position} lastCheckpoint
 * @param {!boolean} resolveLinkTos
 * @param {!function} eventAppeared
 * @param {function} [liveProcessingStarted]
 * @param {function} [subscriptionDropped]
 * @param {UserCredentials} [userCredentials]
 * @param {!number} [readBatchSize]
 * @returns {EventStoreAllCatchUpSubscription}
 */
EventStoreNodeConnection.prototype.subscribeToAllFrom = function(
    lastCheckpoint, resolveLinkTos, eventAppeared, liveProcessingStarted, subscriptionDropped,
    userCredentials, readBatchSize
) {
  ensure.isTypeOf(results.Position, lastCheckpoint, "lastCheckpoint", true);
  ensure.isTypeOf(Function, eventAppeared, "eventAppeared", false);
  if (liveProcessingStarted) ensure.isTypeOf(Function, liveProcessingStarted, "liveProcessingStarted", false);
  if (subscriptionDropped) ensure.isTypeOf(Function, subscriptionDropped, "subscriptionDropped", false);

  var catchUpSubscription =
      new EventStoreAllCatchUpSubscription(this, this._settings.log, lastCheckpoint, resolveLinkTos,
          userCredentials || null, eventAppeared, liveProcessingStarted || null,
          subscriptionDropped || null, this._settings.verboseLogging, readBatchSize || 500);
  catchUpSubscription.start();
  return catchUpSubscription;
};

/**
 * Subscribe to a persistent subscription
 * @public
 * @param {string} stream
 * @param {string} groupName
 * @param {function} eventAppeared
 * @param {function} [subscriptionDropped]
 * @param {UserCredentials} [userCredentials]
 * @param {number} [bufferSize]
 * @param {boolean} [autoAck]
 * @return {Promise<EventStorePersistentSubscription>}
 */
EventStoreNodeConnection.prototype.connectToPersistentSubscription = function(
    stream, groupName, eventAppeared, subscriptionDropped, userCredentials, bufferSize, autoAck
) {
  ensure.notNullOrEmpty(groupName, "groupName");
  ensure.notNullOrEmpty(stream, "stream");
  ensure.notNull(eventAppeared, "eventAppeared");

  subscriptionDropped = subscriptionDropped || null;
  userCredentials = userCredentials || null;
  bufferSize = bufferSize === undefined ? 10 : bufferSize;
  autoAck = autoAck === undefined ? true : !!autoAck;

  var subscription = new EventStorePersistentSubscription(
      groupName, stream, eventAppeared, subscriptionDropped, userCredentials, this._settings.log,
      this._settings.verboseLogging, this._settings, this._handler, bufferSize, autoAck);
  return subscription.start();
};

/**
 * Create a persistent subscription
 * @public
 * @param {string} stream
 * @param {string} groupName
 * @param {PersistentSubscriptionSettings} settings
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<PersistentSubscriptionCreateResult>}
 */
EventStoreNodeConnection.prototype.createPersistentSubscription = function(stream, groupName, settings, userCredentials) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.notNullOrEmpty(groupName, "groupName");
  ensure.notNull(settings, "settings");

  var self = this;
  return new Promise(function(resolve, reject){
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    self._enqueueOperation(
        new CreatePersistentSubscriptionOperation(self._settings.log, cb, stream, groupName, settings, userCredentials || null));
  });
};

/**
 * Update a persistent subscription
 * @public
 * @param {string} stream
 * @param {string} groupName
 * @param {PersistentSubscriptionSettings} settings
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<PersistentSubscriptionUpdateResult>}
 */
EventStoreNodeConnection.prototype.updatePersistentSubscription = function(stream, groupName, settings, userCredentials) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.notNullOrEmpty(groupName, "groupName");
  ensure.notNull(settings, "settings");
  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    self._enqueueOperation(
        new UpdatePersistentSubscriptionOperation(self._settings.log, cb, stream, groupName, settings, userCredentials || null));
  });
};

/**
 * Delete a persistent subscription
 * @public
 * @param {string} stream
 * @param {string} groupName
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<PersistentSubscriptionDeleteResult>}
 */
EventStoreNodeConnection.prototype.deletePersistentSubscription = function(stream, groupName, userCredentials) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.notNullOrEmpty(groupName, "groupName");
  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    self._enqueueOperation(
        new DeletePersistentSubscriptionOperation(self._settings.log, cb, stream, groupName, userCredentials || null));
  });
};

/**
 * Set stream metadata
 * @private
 */
EventStoreNodeConnection.prototype.setStreamMetadata = function() {
  //TODO: set stream metadata (non-raw)
  throw new Error("Not implemented.");
};

/**
 * Set stream metadata with raw object (async)
 * @public
 * @param {string} stream
 * @param {number} expectedMetastreamVersion
 * @param {object} metadata
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<WriteResult>}
 */
EventStoreNodeConnection.prototype.setStreamMetadataRaw = function(
    stream, expectedMetastreamVersion, metadata, userCredentials
) {
  ensure.notNullOrEmpty(stream, "stream");
  if (systemStreams.isMetastream(stream))
    throw new Error(util.format("Setting metadata for metastream '%s' is not supported.", stream));
  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    var data = metadata ? new Buffer(JSON.stringify(metadata)) : null;
    var metaevent = new EventData(uuid.v4(), systemEventTypes.StreamMetadata, true, data, null);
    self._enqueueOperation(
        new AppendToStreamOperation(self._settings.log, cb, self._settings.requireMaster,
                                    systemStreams.metastreamOf(stream), expectedMetastreamVersion,
                                    [metaevent], userCredentials));
  });
};

/**
 * Get stream metadata
 * @private
 * @param stream
 * @param userCredentials
 */
EventStoreNodeConnection.prototype.getStreamMetadata = function(stream, userCredentials) {
  //TODO: get stream metadata (non-raw)
  throw new Error("Not implemented.");
};

/**
 * Get stream metadata as raw object (async)
 * @public
 * @param {string} stream
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<RawStreamMetadataResult>}
 */
EventStoreNodeConnection.prototype.getStreamMetadataRaw = function(stream, userCredentials) {
  return this.readEvent(systemStreams.metastreamOf(stream), -1, false, userCredentials)
      .then(function(res) {
        switch(res.status) {
          case results.EventReadStatus.Success:
            if (res.event === null) throw new Error("Event is null while operation result is Success.");
            var evnt = res.event.originalEvent;
            var version = evnt ? evnt.eventNumber : -1;
            var data = evnt ? JSON.parse(evnt.data.toString()) : null;
            return new results.RawStreamMetadataResult(stream, false, version, data);
          case results.EventReadStatus.NotFound:
          case results.EventReadStatus.NoStream:
            return new results.RawStreamMetadataResult(stream, false, -1, null);
          case results.EventReadStatus.StreamDeleted:
            return new results.RawStreamMetadataResult(stream, true, 0x7fffffff, null);
          default:
            throw new Error(util.format("Unexpected ReadEventResult: %s.", res.status));
        }
      });
};

/**
 * Set system settings
 * @private
 */
EventStoreNodeConnection.prototype.setSystemSettings = function() {
  //TODO: set system settings
  throw new Error("Not implemented.");
};

EventStoreNodeConnection.prototype._enqueueOperation = function(operation) {
  var self = this;
  var message = new messages.StartOperationMessage(operation, self._settings.maxRetries, self._settings.operationTimeout);
  function tryEnqueue() {
    if (self._handler.totalOperationCount >= self._settings.maxQueueSize) {
      setImmediate(tryEnqueue);
      return;
    }
    self._handler.enqueueMessage(message);
  }
  setImmediate(tryEnqueue)
};

module.exports = EventStoreNodeConnection;
