var util = require('util');
var ensure = require('./common/utils/ensure');
var PersistentSubscriptionNakEventAction = require('./persistentSubscriptionNakEventAction');
var SubscriptionDropReason = require('./subscriptionDropReason');

function DropSubscriptionEvent() {}

function EventStorePersistentSubscriptionBase(
    subscriptionId, streamId,
    eventAppeared, subscriptionDropped,
    userCredentials, log, verboseLogging, settings, bufferSize, autoAck
) {
  bufferSize = bufferSize === undefined ? 10 : bufferSize;
  autoAck = autoAck === undefined ? true : autoAck;

  this._subscriptionId = subscriptionId;
  this._streamId = streamId;
  this._eventAppeared = eventAppeared;
  this._subscriptionDropped = subscriptionDropped;
  this._userCredentials = userCredentials;
  this._log = log;
  this._verbose = verboseLogging;
  this._settings = settings;
  this._bufferSize = bufferSize;
  this._autoAck = autoAck;

  this._subscription = null;
  this._dropData = null;
  this._queue = [];
  this._isProcessing = false;
  this._isDropped = false;
}

EventStorePersistentSubscriptionBase.prototype.start = function() {
  this._stopped = false;

  var self = this;
  var promise = this._startSubscription(this._subscriptionId, this._streamId, this._bufferSize, this._userCredentials,
                          this._onEventAppeared.bind(this), this._onSubscriptionDropped.bind(this), this._settings)
      .then(function(subscription) {
        console.log('Subscription started.');
        self._subscription = subscription;
      });
  if (this._onSubscriptionDropped !== null) {
    promise.catch(function(error) {
      self._onSubscriptionDropped(this, error.message, error);
    })
  }
};

EventStorePersistentSubscriptionBase.prototype._startSubscription = function() {
  throw new Error("EventStorePersistentSubscriptionBase._startSubscription abstract method called." +
                  this.constructor.name);
};

/**
 * @param {ResolvedEvent[]|ResolvedEvent} events
 */
EventStorePersistentSubscriptionBase.prototype.acknowledge = function(events) {
  ensure.notNull(events, "events");

  if (this._subscription === null) throw new Error("Invalid operation. Subscription is not active yet.");
  if (!Array.isArray(events))
    events = [events];
  var ids = events.map(function(x) { return x.originalEvent.eventId; });
  this._subscription.notifyEventsProcessed(ids);
};

/**
 * @param {ResolvedEvent[]|ResolvedEvent} events
 * @param {number} action One of PersistentSubscriptionNakEventAction
 * @param {string} reason
 */
EventStorePersistentSubscriptionBase.prototype.fail = function(events, action, reason) {
  ensure.notNull(events, "events");
  PersistentSubscriptionNakEventAction.isValid(action);
  ensure.notNull(reason, "reason");

  if (this._subscription === null) throw new Error("Invalid operation. Subscription is not active yet.");
  if (!Array.isArray(events))
    events = [events];
  var ids = events.map(function(x) { return x.originalEvent.eventId; });
  this._subscription.notifyEventsFailed(ids, action, reason);
};

EventStorePersistentSubscriptionBase.prototype.stop = function() {
  if (this._verbose) this._log.debug("Persistent Subscription to %s: requesting stop...", this._streamId);
  this._enqueueSubscriptionDropNotification(SubscriptionDropReason.UserInitiated, null);
  //TODO figure out timeout with Promise still running
  //if (!_stopped.Wait(timeout))
    //throw new TimeoutException(string.Format("Could not stop {0} in time.", GetType().Name));
};

EventStorePersistentSubscriptionBase.prototype._enqueueSubscriptionDropNotification = function(reason, error) {
  // if drop data was already set -- no need to enqueue drop again, somebody did that already
  if (!this._dropData) {
    this._dropData = {reason: reason, error: error};
    this._enqueue(new DropSubscriptionEvent());
  }
};

EventStorePersistentSubscriptionBase.prototype._onSubscriptionDropped = function(subscription, reason, exception) {
  this._enqueueSubscriptionDropNotification(reason, exception);
};

EventStorePersistentSubscriptionBase.prototype._onEventAppeared = function(subscription, resolvedEvent) {
  this._enqueue(resolvedEvent);
};

EventStorePersistentSubscriptionBase.prototype._enqueue = function(resolvedEvent) {
  this._queue.push(resolvedEvent);
  if (!this._isProcessing) {
    this._isProcessing = true;
    setImmediate(this._processQueue.bind(this));
  }
};

EventStorePersistentSubscriptionBase.prototype._processQueue = function() {
  var ev = this._queue.shift();
  if (!ev) {
    this._isProcessing = false;
    return;
  }

  if (ev instanceof DropSubscriptionEvent) // drop subscription artificial ResolvedEvent
  {
    if (this._dropData === null) throw new Error("Drop reason not specified.");
    this._dropSubscription(this._dropData.reason, this._dropData.error);
    this._isProcessing = false;
    return;
  }
  if (this._dropData !== null)
  {
    this._dropSubscription(this._dropData.reason, this._dropData.error);
    this._isProcessing = false;
    return;
  }
  try
  {
    this._eventAppeared(this, ev);
    if(this._autoAck)
      this._subscription.notifyEventsProcessed([ev.originalEvent.eventId]);
    if (this._verbose)
      this._log.debug("Persistent Subscription to %s: processed event (%s, %d, %s @ %d).",
          this._streamId, ev.originalEvent.eventStreamId, ev.originalEvent.eventNumber, ev.originalEvent.eventType,
          ev.originalEventNumber);
  }
  catch (err)
  {
    //TODO GFY should we autonak here?
    this._dropSubscription(SubscriptionDropReason.EventHandlerException, err);
    this._isProcessing = false;
    return;
  }
  setImmediate(this._processQueue.bind(this));
};

EventStorePersistentSubscriptionBase.prototype._dropSubscription = function(reason, error) {
  if (!this._isDropped)
  {
    this._isDropped = true;
    if (this._verbose)
      this._log.debug("Persistent Subscription to %s: dropping subscription, reason: %s %s.",
                      this._streamId, reason, error);

    if (this._subscription !== null)
      this._subscription.unsubscribe();
    if (this._subscriptionDropped !== null)
      this._subscriptionDropped(this, reason, error);
    this._stopped = true;
  }
};

module.exports = EventStorePersistentSubscriptionBase;
