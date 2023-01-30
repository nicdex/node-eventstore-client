var util = require('util');

var TcpCommand = require('../systemData/tcpCommand');
var ClientMessage = require('../messages/clientMessage');
var ReadDirection = require('../readDirection');
var InspectionResult = require('./../systemData/inspectionResult');
var InspectionDecision = require('../systemData/inspectionDecision');
var results = require('../results');
var AccessDeniedError = require('../errors/accessDeniedError');

var OperationBase = require('./operationBase');

function ReadAllEventsBackwardOperation(
    log, cb, position, maxCount, resolveLinkTos, requireMaster, userCredentials
) {
  OperationBase.call(this, log, cb, TcpCommand.ReadAllEventsBackward, TcpCommand.ReadAllEventsBackwardCompleted, userCredentials);
  this._responseType = ClientMessage.ReadAllEventsCompleted;

  this._position = position;
  this._maxCount = maxCount;
  this._resolveLinkTos = resolveLinkTos;
  this._requireMaster = requireMaster;
}
util.inherits(ReadAllEventsBackwardOperation, OperationBase);

ReadAllEventsBackwardOperation.prototype._createRequestDto = function() {
  return new ClientMessage.ReadAllEvents({
    commitPosition: this._position.commitPosition,
    preparePosition: this._position.preparePosition,
    maxCount: this._maxCount,
    resolveLinkTos: this._resolveLinkTos,
    requireLeader: this._requireMaster
  });
};

ReadAllEventsBackwardOperation.prototype._inspectResponse = function(response) {
  switch (response.result)
  {
    case ClientMessage.ReadAllEventsCompleted.ReadAllResult.Success:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "Success");
    case ClientMessage.ReadAllEventsCompleted.ReadAllResult.Error:
      this.fail(new Error("Server error: " + response.error));
      return new InspectionResult(InspectionDecision.EndOperation, "Error");
    case ClientMessage.ReadAllEventsCompleted.ReadAllResult.AccessDenied:
      this.fail(new AccessDeniedError("Read", "$all"));
      return new InspectionResult(InspectionDecision.EndOperation, "AccessDenied");
    default:
      throw new Error(util.format("Unexpected ReadStreamResult: %s.", response.result));
  }
};

ReadAllEventsBackwardOperation.prototype._transformResponse = function(response) {
  return new results.AllEventsSlice(
      ReadDirection.Backward,
      new results.Position(response.commitPosition, response.preparePosition),
      new results.Position(response.nextCommitPosition, response.nextPreparePosition),
      response.events
  )
};

ReadAllEventsBackwardOperation.prototype.toString = function() {
  return util.format("Position: %j, MaxCount: %d, ResolveLinkTos: %s, RequireMaster: %s",
      this._position, this._maxCount, this._resolveLinkTos, this._requireMaster);
};

module.exports = ReadAllEventsBackwardOperation;
