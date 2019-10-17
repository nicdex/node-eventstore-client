var util = require('util');
var Long = require('long');

var EventStoreCatchUpSubscription = require('./eventStoreCatchUpSubscription');
var SliceReadStatus = require('./sliceReadStatus');

function EventStoreStreamCatchUpSubscription(
    connection, log, streamId, fromEventNumberExclusive, resolveLinkTos, userCredentials,
    eventAppeared, liveProcessingStarted, subscriptionDropped,
    verboseLogging, readBatchSize
){
  EventStoreCatchUpSubscription.call(this, connection, log, streamId, resolveLinkTos, userCredentials,
                                           eventAppeared, liveProcessingStarted, subscriptionDropped,
                                           verboseLogging, readBatchSize);

  //Ensure.NotNullOrEmpty(streamId, "streamId");

  this._lastProcessedEventNumber = fromEventNumberExclusive === null ? Long.fromNumber(-1) : fromEventNumberExclusive;
  this._nextReadEventNumber = fromEventNumberExclusive === null ? Long.fromNumber(0) : fromEventNumberExclusive.add(1);
}
util.inherits(EventStoreStreamCatchUpSubscription, EventStoreCatchUpSubscription);

function delay(ms, result) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms, result);
  })
}

EventStoreStreamCatchUpSubscription.prototype._readEventsTill = function(
    connection, resolveLinkTos, userCredentials, lastCommitPosition, lastEventNumber
) {
  var self = this;

  function processEvents(events, index) {
    if (index >= events.length) return Promise.resolve();

    return self._tryProcess(events[index])
        .then(function() {
          return processEvents(events, index + 1);
        });
  }

  function readNext() {
    return connection.readStreamEventsForward(self.streamId, self._nextReadEventNumber, self.readBatchSize, resolveLinkTos, userCredentials)
        .then(function(slice) {
          switch(slice.status) {
            case SliceReadStatus.Success:
              return processEvents(slice.events, 0)
                  .then(function() {
                    self._nextReadEventNumber = slice.nextEventNumber;
                    var done = Promise.resolve(lastEventNumber === null ? slice.isEndOfStream : Long.fromValue(slice.nextEventNumber).compare(lastEventNumber) > 0);
                    if (!done && slice.isEndOfStream) return delay(100, false);
                    return done;
                  });
            case SliceReadStatus.StreamNotFound:
              if (lastEventNumber && Long.fromValue(lastEventNumber).compare(-1) !== 0) {
                throw new Error(util.format("Impossible: stream %s disappeared in the middle of catching up subscription.", self.streamId));
              }
              return true;
            case SliceReadStatus.StreamDeleted:
              throw new Error("Stream deleted: " + self.streamId);
            default:
              throw new Error(util.format("Unexpected StreamEventsSlice.Status: %s.", slice.status));
          }
        })
        .then(function(done) {
          if (done || self._shouldStop)
              return;
          return readNext();
        })
  }
  return readNext()
      .then(function() {
        if (self._verbose) {
          self._log.debug("Catch-up Subscription to %s: finished reading events, nextReadEventNumber = %d.",
            self.isSubscribedToAll ? '<all>' : self.streamId, self._nextReadEventNumber);
        }
      });
};

EventStoreStreamCatchUpSubscription.prototype._tryProcess = function(e) {
  var processed = false;
  var promise;
  if (Long.fromValue(e.originalEventNumber).compare(this._lastProcessedEventNumber) > 0) {
    promise = this._eventAppeared(this, e);
    this._lastProcessedEventNumber = e.originalEventNumber;
    processed = true;
  }
  if (this._verbose) {
    this._log.debug("Catch-up Subscription to %s: %s event (%s, %d, %s @ %d).",
      this.isSubscribedToAll ? '<all>' : this.streamId, processed ? "processed" : "skipping",
      e.originalEvent.eventStreamId, e.originalEvent.eventNumber, e.originalEvent.eventType, e.originalEventNumber);
  }
  return (promise && promise.then) ? promise : Promise.resolve();
};


module.exports = EventStoreStreamCatchUpSubscription;