var util = require('util');
var uuid = require('uuid');
var Long = require('long');
var client = require('../../lib/dist');
var FileLogger = require('../../src/common/log/fileLogger');
var NoopLogger = require('../../src/common/log/noopLogger');

// Make sure we mess with protobufjs setup for bug #91
var protobufJS = require('protobufjs');
protobufJS.util.Long = undefined;
protobufJS.configure();

var settings = {
  log: new NoopLogger(),
  useSslConnection: true,
  validateServer: false
};
if (process.env.TESTS_VERBOSE_LOGGING === '1') {
  settings.verboseLogging = true;
  settings.log = new FileLogger('test-verbose.log');
}

function setUpWithGossipSeeds(cb) {
  var gossipSeeds = [
    new client.GossipSeed({ host: process.env.EVENTSTORE_HOST_1 || '192.168.33.10', port: 2113 }),
    new client.GossipSeed({ host: process.env.EVENTSTORE_HOST_2 || '192.168.33.11', port: 2113 }),
    new client.GossipSeed({ host: process.env.EVENTSTORE_HOST_3 || '192.168.33.12', port: 2113 }),
  ];
  this.log = settings.log;
  this.testStreamName = 'test-' + uuid.v4();
  var connected = false;
  this.conn = client.createConnection(settings, gossipSeeds);
  this.conn
    .connect()
    .then(function () {
      //Doesn't mean anything, connection is just initiated
      settings.log.debug('Connection to %j initialized.', gossipSeeds);
    })
    .catch(function (err) {
      settings.log.error(err, 'Initializing connection to %j failed.', gossipSeeds);
      cb(err);
    });
  this.conn.on('closed', function (reason) {
    if (connected) return;
    var error = new Error('Connection failed: ' + reason);
    settings.log.error(error, 'Connection to %j failed.', gossipSeeds);
    cb(error);
  });
  this.conn.on('connected', function (tcpEndPoint) {
    if (connected) return;
    settings.log.debug('Connected to %j.', tcpEndPoint);
    connected = true;
    cb();
  });
}

function setUpWithDns(cb) {
  var clusterDns = 'discover://eventstore.local:2113';
  this.log = settings.log;
  this.testStreamName = 'test-' + uuid.v4();
  var connected = false;
  this.conn = client.createConnection(settings, clusterDns);
  this.conn
    .connect()
    .then(function () {
      //Doesn't mean anything, connection is just initiated
      settings.log.debug('Connection to %j initialized.', clusterDns);
    })
    .catch(function (err) {
      settings.log.error(err, 'Initializing connection to %j failed.', clusterDns);
      cb(err);
    });
  this.conn.on('closed', function (reason) {
    if (connected) return;
    var error = new Error('Connection failed: ' + reason);
    settings.log.error(error, 'Connection to %j failed.', clusterDns);
    cb(error);
  });
  this.conn.on('connected', function (tcpEndPoint) {
    if (connected) return;
    settings.log.debug('Connected to %j.', tcpEndPoint);
    connected = true;
    cb();
  });
}

function setUpWithTcpEndpoint(cb) {
  var tcpEndPoint = { host: process.env.EVENTSTORE_HOST || 'localhost', port: 1113 };
  this.log = settings.log;
  this.testStreamName = 'test-' + uuid.v4();
  var connected = false;
  this.conn = client.EventStoreConnection.create(settings, tcpEndPoint);
  this.conn
    .connect()
    .then(function () {
      //Doesn't mean anything, connection is just initiated
      settings.log.debug('Connection to %j initialized.', tcpEndPoint);
    })
    .catch(function (err) {
      settings.log.error(err, 'Initializing connection to %j failed.', tcpEndPoint);
      cb(err);
    });
  this.conn.on('closed', function (reason) {
    if (connected) return;
    var error = new Error('Connection failed: ' + reason);
    settings.log.error(error, 'Connection to %j failed.', tcpEndPoint);
    cb(error);
  });
  this.conn.on('connected', function (tcpEndPoint) {
    if (connected) return;
    settings.log.debug('Connected to %j.', tcpEndPoint);
    connected = true;
    cb();
  });
}

function tearDown(cb) {
  this.conn.close();
  this.conn.on('closed', function () {
    cb();
  });
  this.conn = null;
}

function areEqual(name, actual, expected) {
  if (typeof expected !== 'object' || expected === null)
    this.strictEqual(actual, expected, util.format('Failed %s === %s, got %s.', name, expected, actual));
  else this.deepEqual(actual, expected, util.format('Failed %s deepEqual %j, got %j.', name, expected, actual));
}

function fail(reason) {
  this.ok(false, reason);
}

function eventEqualEventData(name, resolvedEvent, eventData) {
  var ev = resolvedEvent.originalEvent;
  this.ok(ev !== null, util.format('Failed %s !== null.', name + '.originalEvent'));
  if (ev === null) return;
  this.areEqual(name + '.originalEvent.eventId', ev.eventId, eventData.eventId);
  this.areEqual(name + '.originalEvent.eventType', ev.eventType, eventData.type);
  this.ok(Buffer.compare(ev.data, eventData.data) === 0, name + '.originalEvent.data is not equal to original data.');
  this.ok(
    Buffer.compare(ev.metadata, eventData.metadata) === 0,
    name + '.originalEvent.metadata is not equal to original metadata.'
  );
}

function testRecordedEvent(name, event) {
  this.ok(Long.isLong(event.eventNumber), name + '.eventNumber is not a Long');
  this.ok(event.created instanceof Date, name + '.created is not a Date');
  this.ok(typeof event.createdEpoch === 'number', name + '.createdEpoch is not a number');
}

function testLiveEvent(name, event, evNumber) {
  this.ok(event.event, name + '.event not defined (or null)');
  this.ok(event.originalEvent, name + '.originalEvent not defined (or null)');
  this.ok(event.isResolved === false, name + '.isResolved should be true');
  this.ok(event.originalPosition instanceof client.Position, name + '.originalPosition is not an instance of Position');
  this.ok(event.originalStreamId, name + '.originalStreamId not defined (or null)');
  this.ok(Long.isLong(event.originalEventNumber), name + '.originalEventNumber is not a Long');
  if (typeof evNumber === 'number') {
    this.ok(
      event.originalEventNumber.toNumber() === evNumber,
      name + '.originalEventNumber expected ' + evNumber + ' got ' + event.originalEventNumber
    );
  }
  testRecordedEvent.call(this, name + '.event', event.event);
}

function testReadEvent(name, event, evNumber) {
  this.ok(event.event, name + '.event not defined (or null)');
  this.ok(event.originalEvent, name + '.originalEvent not defined (or null)');
  this.ok(event.isResolved === false, name + '.isResolved should be true');
  this.ok(event.originalPosition === null, name + '.originalPosition is not null');
  this.ok(event.originalStreamId, name + '.originalStreamId not defined (or null)');
  this.ok(Long.isLong(event.originalEventNumber), name + '.originalEventNumber is not a Long');
  if (typeof evNumber === 'number') {
    this.ok(
      event.originalEventNumber.toNumber() === evNumber,
      name + '.originalEventNumber expected ' + evNumber + ' got ' + event.originalEventNumber
    );
  }
  testRecordedEvent.call(this, name + '.event', event.event);
}

var _ = {
  tearDown: tearDown,
};

switch (process.env.EVENTSTORE_CONNECTION_TYPE) {
  case 'gossip':
    _.setUp = setUpWithGossipSeeds;
    break;
  case 'dns':
    _.setUp = setUpWithDns;
    break;
  case 'tcp':
  default:
    _.setUp = setUpWithTcpEndpoint;
}

function wrap(name, testFunc) {
  var base = _[name];
  if (base === undefined) {
    return function (test) {
      settings.log.debug('--- %s ---', name);
      test.areEqual = areEqual.bind(test);
      test.fail = fail.bind(test);
      test.eventEqualEventData = eventEqualEventData.bind(test);
      test.testLiveEvent = testLiveEvent.bind(test);
      test.testReadEvent = testReadEvent.bind(test);
      return testFunc.call(this, test);
    };
  }
  return function (cb) {
    var self = this;
    base.call(this, function (err) {
      if (err) return cb(err);
      return testFunc.call(self, cb);
    });
  };
}

module.exports.init = function (testSuite, addSetUpTearDownIfNotPresent) {
  var thisObj = {};
  if (addSetUpTearDownIfNotPresent === undefined) addSetUpTearDownIfNotPresent = true;
  for (var k in testSuite) {
    if (testSuite.hasOwnProperty(k)) {
      testSuite[k] = wrap(k, testSuite[k]).bind(thisObj);
    }
  }
  if (!addSetUpTearDownIfNotPresent) return;
  if (!testSuite.hasOwnProperty('setUp')) {
    switch (process.env.EVENTSTORE_CONNECTION_TYPE) {
      case 'gossip':
        testSuite['setUp'] = setUpWithGossipSeeds.bind(thisObj);
        break;
      case 'dns':
        testSuite['setUp'] = setUpWithDns.bind(thisObj);
        break;
      case 'tcp':
      default:
        testSuite['setUp'] = setUpWithTcpEndpoint.bind(thisObj);
    }
  }
  if (!testSuite.hasOwnProperty('tearDown')) testSuite['tearDown'] = tearDown.bind(thisObj);
};
module.exports.settings = function (settingsOverride) {
  var obj = {};
  for (var prop in settings) {
    obj[prop] = settings[prop];
  }
  if (!settingsOverride) return obj;
  for (var prop in settingsOverride) {
    obj[prop] = settingsOverride[prop];
  }
  return obj;
};
