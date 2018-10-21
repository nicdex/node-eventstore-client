var util = require('util');

var SubscriptionDropReason = require('./subscriptionDropReason');
var results = require('./results');

const DefaultReadBatchSize = 500;
const DefaultMaxPushQueueSize = 10000;
const MaxReadSize = 4096;

function DropSubscriptionEvent() {}

/**
 * @param connection
 * @param log
 * @param streamId
 * @param resolveLinkTos
 * @param userCredentials
 * @param eventAppeared
 * @param liveProcessingStarted
 * @param subscriptionDropped
 * @param verboseLogging
 * @param readBatchSize
 * @param maxPushQueueSize
 * @constructor
 * @property {boolean} isSubscribedToAll
 * @property {string} streamId
 * @property {number} readBatchSize
 * @property {number} maxPushQueueSize
 */
function EventStoreCatchUpSubscription(
    connection, log, streamId, resolveLinkTos, userCredentials,
    eventAppeared, liveProcessingStarted, subscriptionDropped,
    verboseLogging, readBatchSize, maxPushQueueSize
) {
  readBatchSize = readBatchSize || DefaultReadBatchSize;
  maxPushQueueSize = maxPushQueueSize || DefaultMaxPushQueueSize;
  //Ensure.NotNull(connection, "connection");
  //Ensure.NotNull(log, "log");
  //Ensure.NotNull(eventAppeared, "eventAppeared");
  //Ensure.Positive(readBatchSize, "readBatchSize");
  //Ensure.Positive(maxPushQueueSize, "maxPushQueueSize");
  if (readBatchSize > MaxReadSize) throw new Error(util.format("Read batch size should be less than %d. For larger reads you should page.", MaxReadSize));

  this._connection = connection;
  this._log = log;
  this._streamId = streamId || '';
  this._resolveLinkTos = resolveLinkTos;
  this._userCredentials = userCredentials;
  this._shouldStop = false;
  this._stopped = false;
  this._isDropped = false;
  this._subscription = null;
  this._liveQueue = [];
  this._dropData = null;
  this._isProcessing = false;

  Object.defineProperties(this, {
    isSubscribedToAll: { value: this._streamId === '' },
    streamId: { value: this._streamId },
    readBatchSize: { value: readBatchSize },
    maxPushQueueSize: { value: maxPushQueueSize }
  });

  this._eventAppeared = eventAppeared;
  this._liveProcessingStarted = liveProcessingStarted;
  this._subscriptionDropped = subscriptionDropped;
  this._verbose = verboseLogging;

  var self = this;
  this._onReconnect = function() {
    if (self._verbose) self._log.debug("Catch-up Subscription to %s: recovering after reconnection.", self._streamId || '<all>');
    if (self._verbose) self._log.debug("Catch-up Subscription to %s: unhooking from connection.Connected.", self._streamId || '<all>');
    self._connection.removeListener('connected', self._onReconnect);
    self._runSubscription();
  }
}

/**
 * @param {EventStoreNodeConnection} connection
 * @param {boolean} resolveLinkTos
 * @param {UserCredentials} userCredentials
 * @param {?number} lastCommitPosition
 * @param {?number} lastEventNumber
 * @private
 * @abstract
 */
EventStoreCatchUpSubscription.prototype._readEventsTill = function(
    connection, resolveLinkTos, userCredentials, lastCommitPosition, lastEventNumber
) {
  throw new Error("EventStoreCatchUpSubscription._readEventsTill abstract method called. " + this.constructor.name);
};

/**
 * @param {ResolvedEvent} e
 * @private
 * @abstract
 */
EventStoreCatchUpSubscription.prototype._tryProcess = function(e) {
  throw new Error("EventStoreCatchUpSubscription._tryProcess abstract method called. " + this.constructor.name);
};

EventStoreCatchUpSubscription.prototype.start = function() {
  if (this._verbose) this._log.debug("Catch-up Subscription to %s: starting...", this._streamId || '<all>');
  this._runSubscription();
};

EventStoreCatchUpSubscription.prototype.stop = function() {
  if (this._verbose) this._log.debug("Catch-up Subscription to %s: requesting stop...", this._streamId || '<all>');

  if (this._verbose) this._log.debug("Catch-up Subscription to %s: unhooking from connection.Connected.", this._streamId || '<all>');
  this._connection.removeListener('connected', this._onReconnect);

  this._shouldStop = true;
  this._enqueueSubscriptionDropNotification(SubscriptionDropReason.UserInitiated, null);
/*
  if (timeout) {
    if (this._verbose) this._log.debug("Waiting on subscription to stop");
    if (!this._stopped.Wait(timeout))
      throw new TimeoutException(string.Format("Could not stop {0} in time.", GetType().Name));
  }
  */
};

EventStoreCatchUpSubscription.prototype._runSubscription = function() {
  var logStreamName = this._streamId || '<all>';

  if (this._verbose) this._log.debug("Catch-up Subscription to %s: running...", logStreamName);

  var self = this;
  this._stopped = false;
  this._isDropped = false;
  this._dropData = null;
  if (this._verbose) this._log.debug("Catch-up Subscription to %s: pulling events...", logStreamName);
  this._readEventsTill(this._connection, this._resolveLinkTos, this._userCredentials, null, null)
      .then(function() {
        if (self._shouldStop) return;
        if (self._verbose) self._log.debug("Catch-up Subscription to %s: subscribing...", logStreamName);
        if (self._streamId === '')
          return self._connection.subscribeToAll(self._resolveLinkTos, self._enqueuePushedEvent.bind(self), self._serverSubscriptionDropped.bind(self), self._userCredentials);
        else
          return self._connection.subscribeToStream(self._streamId, self._resolveLinkTos, self._enqueuePushedEvent.bind(self), self._serverSubscriptionDropped.bind(self), self._userCredentials);
      })
      .then(function(subscription) {
        if (subscription === undefined) return;
        if (self._verbose) self._log.debug("Catch-up Subscription to %s: pulling events (if left)...", logStreamName);
        self._subscription = subscription;
        return self._readEventsTill(self._connection, self._resolveLinkTos, self._userCredentials, subscription.lastCommitPosition, subscription.lastEventNumber)
      })
      .catch(function(err) {
        self._dropSubscription(SubscriptionDropReason.CatchUpError, err);
        return true;
      })
      .then(function(faulted) {
        if (faulted) return;
        if (self._shouldStop) {
          self._dropSubscription(SubscriptionDropReason.UserInitiated, null);
          return;
        }
        if (self._verbose) self._log.debug("Catch-up Subscription to %s: processing live events...", logStreamName);
        if (self._liveProcessingStarted)
          try {
            self._liveProcessingStarted(self);
          } catch(e) {
            self._log.error(e, "Catch-up Subscription to %s: liveProcessingStarted callback failed.", logStreamName);
          }
        if (self._verbose) self._log.debug("Catch-up Subscription to %s: hooking to connection.Connected", logStreamName);
        self._connection.on('connected', self._onReconnect);
        self._allowProcessing = true;
        self._ensureProcessingPushQueue();
      });
};

EventStoreCatchUpSubscription.prototype._enqueuePushedEvent = function(subscription, e) {
  if (this._verbose)
    this._log.debug("Catch-up Subscription to %s: event appeared (%s, %d, %s @ %s).",
        this._streamId || '<all>',
        e.originalStreamId, e.originalEventNumber, e.originalEvent.eventType, e.originalPosition);

  if (this._liveQueue.length >= this.maxPushQueueSize)
  {
    this._enqueueSubscriptionDropNotification(SubscriptionDropReason.ProcessingQueueOverflow, null);
    subscription.unsubscribe();
    return;
  }

  this._liveQueue.push(e);

  if (this._allowProcessing)
    this._ensureProcessingPushQueue();
};

EventStoreCatchUpSubscription.prototype._serverSubscriptionDropped = function(subscription, reason, err) {
  this._enqueueSubscriptionDropNotification(reason, err);
};

EventStoreCatchUpSubscription.prototype._enqueueSubscriptionDropNotification = function(reason, error) {
  // if drop data was already set -- no need to enqueue drop again, somebody did that already
  if (this._dropData) return;
  this._dropData = {reason: reason, error: error};
  this._liveQueue.push(new DropSubscriptionEvent());
  if (this._allowProcessing)
    this._ensureProcessingPushQueue();
};

EventStoreCatchUpSubscription.prototype._ensureProcessingPushQueue = function() {
  if (this._isProcessing) return;

  this._isProcessing = true;
  setImmediate(this._processLiveQueue.bind(this));
};

EventStoreCatchUpSubscription.prototype._processLiveQueue = function() {
  var ev = this._liveQueue.shift();
  if (!ev) {
    this._isProcessing = false;
    return;
  }
  if (ev instanceof DropSubscriptionEvent) {
    if (!this._dropData) this._dropData = {reason: SubscriptionDropReason.Unknown, error: new Error("Drop reason not specified.")};
    this._dropSubscription(this._dropData.reason, this._dropData.error);
    this._isProcessing = false;
    return;
  }
  var promise;
  try {
    promise = this._tryProcess(ev);
  }
  catch(err) {
    this._dropSubscription(SubscriptionDropReason.EventHandlerException, err);
    this._isProcessing = false;
    return;
  }
  if (promise && promise.then) {
    var self = this;
    promise
      .then(this._processLiveQueue.bind(this), function(err) {
        self._dropSubscription(SubscriptionDropReason.EventHandlerException, err);
        self._isProcessing = false;
      });
  } else {
    setImmediate(this._processLiveQueue.bind(this));
  }
};

EventStoreCatchUpSubscription.prototype._dropSubscription = function(reason, error) {
  if (this._isDropped) return;

  this._isDropped = true;
  if (this._verbose)
    this._log.debug("Catch-up Subscription to %s: dropping subscription, reason: %s %s.",
                    this._streamId || '<all>', reason, error);

  if (this._subscription)
    this._subscription.unsubscribe();
  if (this._subscriptionDropped)
    try {
      this._subscriptionDropped(this, reason, error);
    } catch(e) {
      this._log.error(e, "Catch-up Subscription to %s: subscriptionDropped callback failed.", this._streamId || '<all>');
    }
  this._stopped = true;
};

module.exports = EventStoreCatchUpSubscription;