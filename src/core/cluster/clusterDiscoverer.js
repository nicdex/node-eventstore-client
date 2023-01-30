const ClusterInfo = require('./clusterInfo');
const GossipSeed = require('../../gossipSeed');
const NodeEndPoints = require('./nodeEndpoints');
const shuffle = require('../../common/utils/shuffle');

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * ClusterDiscoverer
 * @constructor
 * @class
 * @param {Logger} log - Logger instance
 * @param {Object} settings - Settings object
 * @param {Object} dnsService - DNS service to perform DNS lookup
 * @param {Object} httpService - HTTP service to perform http requests
 */
function ClusterDiscoverer(log, settings, dnsService, httpService) {
  if (!settings.clusterDns && (!settings.seeds || settings.seeds.length === 0))
    throw new Error('Both clusterDns and seeds are null/empty.');
  this._log = log;

  this._settings = settings;
  this._dnsService = dnsService;
  this._httpService = httpService;
}

/**
 * Discover Cluster endpoints
 * @param {Object} failedTcpEndPoint - The failed TCP endpoint which were used by the handler
 * @returns {Promise.<NodeEndPoints>}
 */
ClusterDiscoverer.prototype.discover = async function (failedTcpEndPoint) {
  let attempts = 0;
  while (attempts++ < this._settings.maxDiscoverAttempts) {
    try {
      const candidates = await this._getGossipCandidates(this._settings.managerExternalHttpPort);
      const gossipSeeds = candidates.filter(
        (candidate) =>
          !failedTcpEndPoint ||
          !(candidate.endPoint.host === failedTcpEndPoint.host && candidate.endPoint.port === failedTcpEndPoint.port)
      );
      let gossipSeedsIndex = 0;
      let clusterInfo;
      do {
        try {
          clusterInfo = await this._clusterInfo(gossipSeeds[gossipSeedsIndex], this._settings.gossipTimeout);
          if (!clusterInfo.bestNode) {
            this._log.info(
              `Discovering attempt ${attempts}/${this._settings.maxDiscoverAttempts} failed: no candidate found.`
            );
            continue;
          }
        } catch (err) {}
      } while (++gossipSeedsIndex < gossipSeeds.length);
      if (clusterInfo) {
        return NodeEndPoints.createFromGossipMember(clusterInfo.bestNode);
      }
    } catch (err) {
      this._log.info(
        `Discovering attempt ${attempts}/${this._settings.maxDiscoverAttempts} failed with error: ${err}.\n${err.stack}`
      );
    }
    await wait(this._settings.discoverDelay);
  }
  throw new Error(`Failed to discover candidate in ${this._settings.maxDiscoverAttempts} attempts.`);
};

/**
 * Get gossip candidates either from DNS or from gossipSeeds settings
 * @private
 * @param {Number} managerExternalHttpPort - Http port of the manager (or the http port of the node for OSS clusters)
 * @returns {Promise.<GossipSeed[]>}
 */
ClusterDiscoverer.prototype._getGossipCandidates = async function (managerExternalHttpPort) {
  const gossipSeeds =
    this._settings.seeds && this._settings.seeds.length > 0
      ? this._settings.seeds
      : (await this._resolveDns(this._settings.clusterDns)).map(
          (address) => new GossipSeed({ host: address, port: managerExternalHttpPort }, address, this._settings.clusterDns)
        );
  return shuffle(gossipSeeds);
};

/**
 * Resolve the cluster DNS discovery address to retrieve belonging ip addresses
 * @private
 * @param {String} clusterDns - Cluster DNS discovery address
 * @returns {Promise.<String[]>}
 */
ClusterDiscoverer.prototype._resolveDns = async function (clusterDns) {
  const dnsOptions = {
    family: 4,
    hints: this._dnsService.ADDRCONFIG | this._dnsService.V4MAPPED,
    all: true,
  };
  const result = await this._dnsService.lookup(clusterDns, dnsOptions);
  if (!result || result.length === 0) {
    throw new Error(`No result from dns lookup for ${clusterDns}`);
  }
  return result.map((address) => address.address);
};

/**
 * Get cluster informations (gossip members)
 * @param {GossipSeed} candidate - candidate to get informations from
 * @param {Number} timeout - timeout for the http request
 * @returns {Promise.<ClusterInfo>}
 */
ClusterDiscoverer.prototype._clusterInfo = async function (candidate, timeout) {
  var self = this;
  return new Promise((resolve, reject) => {
    const options = {
      host: candidate.endPoint.host,
      port: candidate.endPoint.port,
      path: '/gossip?format=json',
      timeout: timeout,
      rejectUnauthorized: self._settings.rejectUnauthorized
    };
    if (candidate.hostHeader) {
      options.headers = {
        Host: candidate.hostHeader,
      };
    }

    const request = this._httpService.request(options, (res) => {
      if (res.statusCode !== 200) {
        this._log.info('Trying to get gossip from', candidate, 'failed with status code:', res.statusCode);
        reject(new Error(`Gossip candidate returns a ${res.statusCode} error`));
        return;
      }
      let result = '';
      res.on('data', (chunk) => {
        result += chunk.toString();
      });
      res.on('end', function () {
        try {
          result = JSON.parse(result);
        } catch (e) {
          reject(new Error('Unable to parse gossip response'));
        }
        resolve(new ClusterInfo(result.members));
      });
    });

    request.setTimeout(timeout);

    request.on('timeout', () => {
      this._log.info('Trying to get gossip from', candidate, 'timed out.');
      request.destroy();
      reject(new Error('Connection to gossip timed out'));
    });

    request.on('error', (error) => {
      this._log.info('Trying to get gossip from', candidate, 'errored', error);
      request.destroy();
      reject(new Error('Connection to gossip errored'));
    });

    request.end();
  });
};

module.exports = ClusterDiscoverer;
