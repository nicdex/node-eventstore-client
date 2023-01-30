const MemberInfo = require('./memberInfo.js');

const VNodeStates = Object.freeze({
  Initializing: 0,
  DiscoverLeader: 1,
  Unknown: 2,
  PreReplica: 3,
  CatchingUp: 4,
  Clone: 5,
  Follower: 6,
  PreLeader: 7,
  Leader: 8,
  Manager: 9,
  ShuttingDown: 10,
  Shutdown: 11,
  ReadOnlyLeaderless: 12,
  PreReadOnlyReplica: 13,
  ReadOnlyReplica: 14,
  ResigningLeader: 15,
});

function ClusterInfo(members) {
  this._members = members.map(member => new MemberInfo(member));

  Object.defineProperty(this, 'bestNode', {
    enumerable: true,
    get: function () {
      return this._getBestNode();
    }
  });
}

ClusterInfo.prototype._getBestNode = function () {
  return this._members
  .filter(member => member.isAlive && member.isAllowedToConnect)
  .sort(function (a, b) {
    return VNodeStates[b.state] - VNodeStates[a.state];
  })[0];
}

module.exports = ClusterInfo;
