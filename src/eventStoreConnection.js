var EventStoreNodeConnection = require('./eventStoreNodeConnection');
var StaticEndpointDiscoverer = require('./core/staticEndpointDiscoverer');
var ClusterDiscoverer = require('./core/cluster/clusterDiscoverer');
var NoopLogger = require('./common/log/noopLogger');
var ensure = require('./common/utils/ensure');

const util = require('util');
const http = require('http');
const https = require('https');
const dns = require('dns');

const dnsService = {
  lookup : util.promisify(dns.lookup),
  ADDRCONFIG: dns.ADDRCONFIG,
  V4MAPPED: dns.V4MAPPED
};

var defaultConnectionSettings = Object.freeze({
  log: new NoopLogger(),
  verboseLogging: false,

  maxQueueSize: 5000,
  maxConcurrentItems: 5000,
  maxRetries: 10,
  maxReconnections: 10,

  requireMaster: true,

  reconnectionDelay: 100,
  operationTimeout: 7*1000,
  operationTimeoutCheckPeriod: 1000,

  defaultUserCredentials: null,
  useSslConnection: false,
  targetHost: null,
  validateServer: false,

  failOnNoServerResponse: false,
  heartbeatInterval: 750,
  heartbeatTimeout: 1500,
  clientConnectionTimeout: 1000,

  // Cluster Settings
  clusterDns: '',
  maxDiscoverAttempts: 10,
  discoverDelay: 500,
  externalGossipPort: 0,
  gossipTimeout: 1000
});


function merge(a,b) {
  var c = {};
  Object.getOwnPropertyNames(a).forEach(function(k) {
    c[k] = a[k];
  });
  Object.getOwnPropertyNames(b).forEach(function(k) {
    c[k] = b[k];
  });
  return c;
}

function createFromTcpEndpoint(settings, tcpEndpoint, connectionName) {
  if (!tcpEndpoint.port || !tcpEndpoint.host) throw new TypeError('endPoint object must have host and port properties.');
  var mergedSettings = merge(defaultConnectionSettings, settings || {});
  var endpointDiscoverer = new StaticEndpointDiscoverer(tcpEndpoint, settings.useSslConnection);
  return new EventStoreNodeConnection(mergedSettings, null, endpointDiscoverer, connectionName || null);
}

function createFromStringEndpoint(settings, endPoint, connectionName) {
  var m = endPoint.match(/^(tcp|discover):\/\/([^:]+):?(\d+)?$/);
  if (!m) throw new Error('endPoint string must be tcp://hostname[:port] or discover://dns[:port]');
  var scheme = m[1];
  var host = m[2] || null;
  var port = m[3] ? parseInt(m[3]) : null;
  if (scheme === 'tcp') {
    var tcpEndpoint = {
      host: host,
      port: port || 1113
    };
    return createFromTcpEndpoint(settings, tcpEndpoint, connectionName);
  }
  if (scheme === 'discover') {
    return createFromClusterDns(settings, host, port || 2113, connectionName);
  }
  throw new Error('Invalid scheme for endPoint: ' + scheme);
}

function createFromClusterDns(connectionSettings, clusterDns, externalGossipPort, connectionName) {
  ensure.notNull(connectionSettings, "connectionSettings");
  ensure.notNull(clusterDns, "clusterDns");
  var mergedSettings = merge(defaultConnectionSettings, connectionSettings || {});
  var clusterSettings = {
    clusterDns: clusterDns,
    seeds: null,
    managerExternalHttpPort: externalGossipPort,
    maxDiscoverAttempts: mergedSettings.maxDiscoverAttempts,
    discoverDelay: mergedSettings.discoverDelay,
    gossipTimeout: mergedSettings.gossipTimeout,
    rejectUnauthorized: connectionSettings.useSslConnection ? connectionSettings.validateServer : undefined
  };
  var endPointDiscoverer = new ClusterDiscoverer(
    mergedSettings.log,
    clusterSettings,
    dnsService,
    connectionSettings.useSslConnection ? https : http
  );
  return new EventStoreNodeConnection(mergedSettings, clusterSettings, endPointDiscoverer, connectionName);
}

function createFromGossipSeeds(connectionSettings, gossipSeeds, connectionName) {
  ensure.notNull(connectionSettings, "connectionSettings");
  ensure.notNull(gossipSeeds, "gossipSeeds");
  var mergedSettings = merge(defaultConnectionSettings, connectionSettings || {});
  var clusterSettings = {
    clusterDns: '',
    seeds: gossipSeeds,
    externalGossipPort: 0,
    maxDiscoverAttempts: mergedSettings.maxDiscoverAttempts,
    discoverDelay: mergedSettings.discoverDelay,
    gossipTimeout: mergedSettings.gossipTimeout,
    rejectUnauthorized: connectionSettings.useSslConnection ? connectionSettings.validateServer : undefined
  };
  var endPointDiscoverer = new ClusterDiscoverer(
    mergedSettings.log,
    clusterSettings,
    dnsService,
    connectionSettings.useSslConnection ? https : http
  );
  return new EventStoreNodeConnection(mergedSettings, clusterSettings, endPointDiscoverer, connectionName);
}

/**
 * Create an EventStore connection
 * @public
 * @alias createConnection
 * @param {object} settings
 * @param {boolean} [settings.verboseLogging=false]
 * @param {number} [settings.maxQueueSize=5000]
 * @param {number} [settings.maxConcurrentItems=5000]
 * @param {number} [settings.maxRetries=10]
 * @param {number} [settings.maxReconnections=10]
 * @param {boolean} [settings.requireMaster=true]
 * @param {number} [settings.reconnectionDelay=100]
 * @param {number} [settings.operationTimeout=7000]
 * @param {number} [settings.operationTimeoutCheckPeriod=1000]
 * @param {object} [settings.defaultUserCredentials=null] - The default user credentials to use for requests
 * @param {boolean} [settings.useSslConnection=false] - Whether to use SSL or not
 * @param {object} [settings.targetHost=null]
 * @param {boolean} [settings.validateServer=false]
 * @param {boolean} [settings.failOnNoServerResponse=false]
 * @param {number} [settings.heartbeatInterval=750]
 * @param {number} [settings.heartbeatTimeout=1500]
 * @param {number} [settings.clientConnectionTimeout=1000]
 * @param {string} [settings.clusterDns='']
 * @param {number} [settings.maxDiscoverAttempts=10]
 * @param {number} [settings.externalGossipPort=0]
 * @param {number} [settings.gossipTimeout=1000]
 * @param {string|object|array} endPointOrGossipSeeds
 * @param {string} [connectionName]
 * @returns {EventStoreNodeConnection}
 */
module.exports.create = function(settings, endPointOrGossipSeeds, connectionName) {
  if (Array.isArray(endPointOrGossipSeeds)) return createFromGossipSeeds(settings, endPointOrGossipSeeds, connectionName);
  if (typeof endPointOrGossipSeeds === 'object') return createFromTcpEndpoint(settings, endPointOrGossipSeeds, connectionName);
  if (typeof endPointOrGossipSeeds === 'string') return createFromStringEndpoint(settings, endPointOrGossipSeeds, connectionName);
  throw new TypeError('endPointOrGossipSeeds must be an object, a string or an array.');
};
