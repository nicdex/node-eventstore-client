var util = require('util');
var uuid = require('uuid');
var client = require('../lib/dist');
const adminCredentials = new client.UserCredentials("admin", "changeit");

function createRandomEvent() {
  return client.createJsonEventData(uuid.v4(), {a: uuid.v4(), b: Math.random()}, {createdAt: Date.now()}, 'testEvent');
}

var testStreamName = 'test-' + uuid.v4();

module.exports = {
  'Test Create Persistent Subscription': function(test) {
    var settings = client.PersistentSubscriptionSettings.create();
    this.conn.createPersistentSubscription(testStreamName, 'consumer-1', settings, adminCredentials)
      .then(function(result) {
        test.done();
      })
      .catch(function(err) {
        test.done(err);
      });
  },
  //TODO: Update Persistent Subscription
  'Test ConnectTo Persistent Subscription': function(test) {
    test.expect(4);
    var receivedEvents = [];
    var _doneCount = 0;
    function done(err) {
      test.ok(!err, err ? err.stack : '');
      _doneCount++;
      if (_doneCount < 2) return;
      test.done();
    }
    function eventAppeared(s, e) {
      receivedEvents.push(e);
      if (receivedEvents.length === 2) s.stop();
    }
    function subscriptionDropped(connection, reason, error) {
      if (error) return done(error);
      test.ok(receivedEvents[1].originalEventNumber > receivedEvents[0].originalEventNumber, "Received events are out of order.");
      done();
    }
    var self = this;
    this.conn.connectToPersistentSubscription(testStreamName, 'consumer-1', eventAppeared, subscriptionDropped, adminCredentials)
      .then(function(subscription) {
        test.ok(subscription, "Subscription is null.");
        return self.conn.appendToStream(testStreamName, client.expectedVersion.any, [createRandomEvent(), createRandomEvent()]);
      })
      .then(function () {
        done();
      })
      .catch(done);
  },
  'Test Delete Persistent Subscription': function(test) {
    this.conn.deletePersistentSubscription(testStreamName, 'consumer-1', adminCredentials)
      .then(function(result) {
        test.done();
      })
      .catch(function(err) {
        test.done(err);
      });
  }
};

require('./common/base_test').init(module.exports);
