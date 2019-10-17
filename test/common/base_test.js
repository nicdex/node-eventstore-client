var util = require('util');
var uuid = require('uuid');
var client = require('../../src/client');
var FileLogger = require('../../src/common/log/fileLogger');
var NoopLogger = require('../../src/common/log/noopLogger');

var settings = {
  log: new NoopLogger()
};
if (process.env.TESTS_VERBOSE_LOGGING === '1') {
  settings.verboseLogging = true;
  settings.log = new FileLogger('test-verbose.log');
}

var tcpEndPoint = {host: 'localhost', port: 1113};

function setUp(cb) {
  this.log = settings.log;
  this.testStreamName = 'test-' + uuid.v4();
  var connected = false;
  this.conn = client.EventStoreConnection.create(settings, tcpEndPoint);
  this.conn.connect()
      .then(function () {
        //Doesn't mean anything, connection is just initiated
        settings.log.debug("Connection to %j initialized.", tcpEndPoint);
      })
      .catch(function (err) {
        settings.log.error(err, "Initializing connection to %j failed.", tcpEndPoint);
        cb(err);
      });
  this.conn.on('closed', function (reason) {
    if (connected) return;
    var error = new Error("Connection failed: " + reason);
    settings.log.error(error, "Connection to %j failed.", tcpEndPoint);
    cb(error);
  });
  this.conn.on('connected', function (tcpEndPoint) {
    if (connected) return;
    settings.log.debug("Connected to %j.", tcpEndPoint);
    connected = true;
    cb();
  });
}

function tearDown(cb) {
  this.conn.close();
  this.conn.on('closed', function() {
    cb();
  });
  this.conn = null;
}

function areEqual(name, actual, expected) {
  if (typeof expected !== 'object' || expected === null)
    this.strictEqual(actual, expected, util.format("Failed %s === %s, got %s.", name, expected, actual));
  else
    this.deepEqual(actual, expected, util.format("Failed %s deepEqual %j, got %j.", name, expected, actual));
}

function fail(reason) {
  this.ok(false, reason);
}

function eventEqualEventData(name, resolvedEvent, eventData) {
  var ev = resolvedEvent.originalEvent;
  this.ok(ev !== null, util.format("Failed %s !== null.", name + ".originalEvent"));
  if (ev === null) return;
  this.areEqual(name + ".originalEvent.eventId", ev.eventId, eventData.eventId);
  this.areEqual(name + ".originalEvent.eventType", ev.eventType, eventData.type);
  this.ok(Buffer.compare(ev.data, eventData.data) === 0, name + ".originalEvent.data is not equal to original data.");
  this.ok(Buffer.compare(ev.metadata, eventData.metadata) === 0, name + ".originalEvent.metadata is not equal to original metadata.");
}

function testLiveEvent(name, event, evNumber) {
  this.ok(event.event, name + ".event not defined (or null)");
  this.ok(event.originalEvent, name + ".originalEvent not defined (or null)");
  this.ok(event.isResolved === false, name + ".isResolved should be true");
  this.ok(event.originalPosition instanceof client.Position, name + ".originalPosition is not an instance of Position");
  this.ok(event.originalStreamId, name + ".originalStreamId not defined (or null)");
  if (typeof evNumber === 'number') {
    this.ok(Long.fromValue(event.originalEventNumber).toNumber() === evNumber, name + '.originalEventNumber expected ' + evNumber + ' got ' + event.originalEventNumber);
  } else {
    this.ok(typeof event.originalEventNumber === 'number', name + ".originalEventNumber is not a number");
  }
}

function testReadEvent(name, event, evNumber) {
  this.ok(event.event, name + ".event not defined (or null)");
  this.ok(event.originalEvent, name + ".originalEvent not defined (or null)");
  this.ok(event.isResolved === false, name + ".isResolved should be true");
  this.ok(event.originalPosition === null, name + ".originalPosition is not null");
  this.ok(event.originalStreamId, name + ".originalStreamId not defined (or null)");
  if (typeof evNumber === 'number') {
    this.ok(Long.fromValue(event.originalEventNumber).toNumber() === evNumber, name + '.originalEventNumber expected ' + evNumber + ' got ' + event.originalEventNumber);
  } else {
    this.ok(typeof event.originalEventNumber === 'number', name + ".originalEventNumber is not a number");
  }
}

var _ = {
  'setUp': setUp,
  'tearDown': tearDown
};

function wrap(name, testFunc) {
  var base = _[name];
  if (base === undefined) {
    return function(test) {
      settings.log.debug('--- %s ---', name);
      test.areEqual = areEqual.bind(test);
      test.fail = fail.bind(test);
      test.eventEqualEventData = eventEqualEventData.bind(test);
      test.testLiveEvent = testLiveEvent.bind(test);
      test.testReadEvent = testReadEvent.bind(test);
      return testFunc.call(this, test);
    }
  }
  return function(cb) {
    var self = this;
    base.call(this, function(err) {
      if (err) return cb(err);
      return testFunc.call(self, cb);
    });
  }
}

module.exports.init = function(testSuite, addSetUpTearDownIfNotPresent) {
  var thisObj = {};
  if (addSetUpTearDownIfNotPresent === undefined) addSetUpTearDownIfNotPresent = true;
  for(var k in testSuite) {
    if (testSuite.hasOwnProperty(k)) {
      testSuite[k] = wrap(k, testSuite[k]).bind(thisObj);
    }
  }
  if (!addSetUpTearDownIfNotPresent) return;
  if (!testSuite.hasOwnProperty('setUp')) testSuite['setUp'] = setUp.bind(thisObj);
  if (!testSuite.hasOwnProperty('tearDown')) testSuite['tearDown'] = tearDown.bind(thisObj);
};
module.exports.settings = function(settingsOverride) {
  var obj = {};
  for(var prop in settings) {
    obj[prop] = settings[prop];
  }
  if (!settingsOverride) return obj;
  for(var prop in settingsOverride) {
    obj[prop] = settingsOverride[prop];
  }
  return obj;
};
