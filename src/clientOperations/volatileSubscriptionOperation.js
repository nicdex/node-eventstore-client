var util = require('util');

var SubscriptionOperation = require('./subscriptionOperation');
var ClientMessage = require('../messages/clientMessage');
var TcpPackage = require('../systemData/tcpPackage');
var TcpCommand = require('../systemData/tcpCommand');
var TcpFlags = require('../systemData/tcpFlags');
var BufferSegment = require('../common/bufferSegment');
var InspectionDecision = require('../systemData/inspectionDecision');
var InspectionResult = require('./../systemData/inspectionResult');
var results = require('../results');
var VolatileEventStoreSubscription = require('../volatileEventStoreSubscription');

function VolatileSubscriptionOperation(
    log, cb, streamId, resolveLinkTos, userCredentials, eventAppeared,
    subscriptionDropped, verboseLogging, getConnection
) {
  SubscriptionOperation.call(this, log, cb, streamId, resolveLinkTos, userCredentials, eventAppeared, subscriptionDropped, verboseLogging, getConnection);
}
util.inherits(VolatileSubscriptionOperation, SubscriptionOperation);

VolatileSubscriptionOperation.prototype._createSubscriptionPackage = function() {
  var dto = new ClientMessage.SubscribeToStream({
      eventStreamId: this._streamId,
      resolveLinkTos: this._resolveLinkTos
  });
  return new TcpPackage(TcpCommand.SubscribeToStream,
      this._userCredentials !== null ? TcpFlags.Authenticated : TcpFlags.None,
      this._correlationId,
      this._userCredentials !== null ? this._userCredentials.username : null,
      this._userCredentials !== null ? this._userCredentials.password : null,
      new BufferSegment(ClientMessage.SubscribeToStream.encode(dto).finish()));
};

VolatileSubscriptionOperation.prototype._inspectPackage = function(pkg) {
  try {
    if (pkg.command === TcpCommand.SubscriptionConfirmation) {
      var dto = ClientMessage.SubscriptionConfirmation.decode(pkg.data.toBuffer());
      this._confirmSubscription(dto.lastCommitPosition, dto.lastEventNumber);
      return new InspectionResult(InspectionDecision.Subscribed, "SubscriptionConfirmation");
    }
    if (pkg.command === TcpCommand.StreamEventAppeared) {
      var dto = ClientMessage.StreamEventAppeared.decode(pkg.data.toBuffer());
      this._onEventAppeared(new results.ResolvedEvent(dto.event));
      return new InspectionResult(InspectionDecision.DoNothing, "StreamEventAppeared");
    }
    return null;
  } catch(e) {
    //this._log.warn(e.stack); no default warn impl
    console.warn(e.stack);
    return null;
  }
};

VolatileSubscriptionOperation.prototype._createSubscriptionObject = function(lastCommitPosition, lastEventNumber) {
  return new VolatileEventStoreSubscription(this, this._streamId, lastCommitPosition, lastEventNumber);
};

module.exports = VolatileSubscriptionOperation;
