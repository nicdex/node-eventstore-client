var client = require('../lib/dist');
var GossipSeed = require('../src/gossipSeed');

var testBase = require('./common/base_test');

var withSsl = !!process.env.NODE_ESC_WITH_SSL;
const evenstStoreType = process.env.EVENTSTORE_CONNECTION_TYPE;

module.exports = {}

switch(evenstStoreType){
  case 'gossip':
    module.exports['Connect to Cluster using gossip seeds'] = function (test) {
      test.expect(1);
      var gossipSeeds = [
        new GossipSeed({host: process.env.EVENTSTORE_HOST_1 || '192.168.33.10', port: 2113}),
        new GossipSeed({host: process.env.EVENTSTORE_HOST_2 || '192.168.33.11', port: 2113}),
        new GossipSeed({host: process.env.EVENTSTORE_HOST_3 || '192.168.33.12', port: 2113})
      ];
      var conn = client.EventStoreConnection.create(testBase.settings(), gossipSeeds);
      conn.connect()
        .catch(function(err) {
          test.done(err);
        });
      conn.on('connected', function(endPoint){
        test.ok(endPoint, 'no endpoint');
        done();
      });
      conn.on('error', done);

      function done(err) {
        conn.close();
        if (err) return test.done(err);
        test.done();
      }
    };

    module.exports['Connect To Cluster with bad gossip seeds'] = function (test) {
      test.expect(3);
      var gossipSeeds = [
        new GossipSeed({host: '1.2.3.4', port: 1113}),
        new GossipSeed({host: '2.3.4.5', port: 2113}),
        new GossipSeed({host: '3.4.5.6', port: 3113})
      ];
      var conn = client.EventStoreConnection.create(testBase.settings({maxDiscoverAttempts: 1}), gossipSeeds);
      conn.connect()
        .catch(function (err) {
          test.ok(err.message.indexOf('Couldn\'t resolve target end point') === 0, 'Wrong expected reason.');
        });
      conn.on('connected', function () {
        test.ok(false, 'Should not be able to connect.');
      });
      conn.on('error', function (err) {
        test.ok(err.message.indexOf('Failed to discover candidate in 1 attempts') === 0, 'Wrong expected reason.');
      });
      conn.on('closed', function (reason) {
        test.ok(reason.indexOf('Failed to resolve TCP end point to which to connect') === 0, 'Wrong expected reason.');
        test.done();
      });
    };
  break;
  case 'dns':
    module.exports['Connect to Cluster using dns discover'] = function (test) {
      test.expect(1);
      var clusterDns = 'discover://' + process.env.EVENTSTORE_HOST + ':2113';
      var conn = client.EventStoreConnection.create(testBase.settings(), clusterDns);
      conn.connect()
        .catch(function(err) {
          test.done(err);
        });
      conn.on('connected', function(endPoint){
        test.ok(endPoint, 'no endpoint');
        done();
      });
      conn.on('error', done);

      function done(err) {
        conn.close();
        if (err) return test.done(err);
        test.done();
      }
    };

    module.exports['Connect To Cluster with bad dns discover'] = function (test) {
      test.expect(3);
      var clusterDns = 'discover://abc.def.com:2113';
      var conn = client.EventStoreConnection.create(testBase.settings({maxDiscoverAttempts: 1}), clusterDns);
      conn.connect()
        .catch(function (err) {
          test.ok(err.message.indexOf('Couldn\'t resolve target end point') === 0, 'Wrong expected reason.');
        });
      conn.on('connected', function () {
        test.ok(false, 'Should not be able to connect.');
        conn.close();
      });
      conn.on('error', function (err) {
        test.ok(err.message.indexOf('Failed to discover candidate in 1 attempts') === 0, 'Wrong expected reason.');
      });
      conn.on('closed', function (reason) {
        test.ok(reason.indexOf('Failed to resolve TCP end point to which to connect') === 0, 'Wrong expected reason.');
        test.done();
      });
    };
  break;
  case 'tcp':
  default:
    module.exports['Connect To Endpoint Happy Path'] = function (test) {
      test.expect(1);
      var tcpEndpoint = {host: process.env.EVENTSTORE_HOST || 'localhost', port: 1113};
      var conn = client.EventStoreConnection.create(testBase.settings(), tcpEndpoint);
      conn.connect()
        .catch(function (err) {
          test.done(err);
        });
      conn.on('connected', function (endPoint) {
        test.areEqual('connected endPoint', endPoint, tcpEndpoint);
        done();
      });
      conn.on('error', done);

      function done(err) {
        conn.close();
        if (err) return test.done(err);
        test.done();
      }
    };

    module.exports['Connect To Endpoint That Doesn\'t Exist'] = function (test) {
      test.expect(1);
      var tcpEndpoint = {host: process.env.EVENTSTORE_HOST || 'localhost', port: 11112};
      var conn = client.EventStoreConnection.create(testBase.settings({maxReconnections: 1}), tcpEndpoint);
      conn.connect()
        .catch(function (err) {
          test.done(err);
        });
      conn.on('connected', function () {
        test.ok(false, 'Should not be able to connect.');
        test.done();
      });
      conn.on('error', function (err) {
        test.done(err);
      });
      conn.on('closed', function (reason) {
        test.ok(reason.indexOf('Reconnection limit reached') === 0, 'Wrong expected reason.');
        test.done();
      });
    };

    module.exports['Create a connection with tcp://host:port string'] = function (test) {
      var conn = client.createConnection({}, `tcp://${process.env.EVENTSTORE_HOST || 'localhost'}:1113`);
      conn.close();
      test.done();
    };
}

if (withSsl) {
  module.exports['Connect to secure tcp endpoint'] = function(test) {
    var conn = client.createConnection({
      useSslConnection: true,
      targetHost: process.env.EVENTSTORE_HOST || 'localhost',
      validateServer: false
    }, `tcp://${process.env.EVENTSTORE_HOST || 'localhost'}:1115`);
    conn.on('error', function (err) {
      test.done(err);
    });
    conn.connect()
      .catch(function (err) {
        test.done(err);
      });
    conn.on('connected', function () {
      test.done();
    });
  }
}

testBase.init(module.exports, false);
