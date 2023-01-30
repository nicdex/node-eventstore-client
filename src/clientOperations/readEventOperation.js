var util = require('util');

var TcpCommand = require('../systemData/tcpCommand');
var ClientMessage = require('../messages/clientMessage');
var InspectionResult = require('./../systemData/inspectionResult');
var InspectionDecision = require('../systemData/inspectionDecision');
var results = require('../results');
var AccessDeniedError = require('../errors/accessDeniedError');

var OperationBase = require('./operationBase');

function ReadEventOperation(log, cb, stream, eventNumber, resolveLinkTos, requireMaster, userCredentials) {
  OperationBase.call(this, log, cb, TcpCommand.ReadEvent, TcpCommand.ReadEventCompleted, userCredentials);
  this._responseType = ClientMessage.ReadEventCompleted;

  this._stream = stream;
  this._eventNumber = eventNumber;
  this._resolveLinkTos = resolveLinkTos;
  this._requireMaster = requireMaster;
}
util.inherits(ReadEventOperation, OperationBase);

ReadEventOperation.prototype._createRequestDto = function() {
  return new ClientMessage.ReadEvent({
      eventStreamId: this._stream,
      eventNumber: this._eventNumber,
      resolveLinkTos: this._resolveLinkTos,
      requireLeader: this._requireMaster
  });
};

ReadEventOperation.prototype._inspectResponse = function(response) {
  switch (response.result)
  {
    case ClientMessage.ReadEventCompleted.ReadEventResult.Success:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "Success");
    case ClientMessage.ReadEventCompleted.ReadEventResult.NotFound:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "NotFound");
    case ClientMessage.ReadEventCompleted.ReadEventResult.NoStream:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "NoStream");
    case ClientMessage.ReadEventCompleted.ReadEventResult.StreamDeleted:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "StreamDeleted");
    case ClientMessage.ReadEventCompleted.ReadEventResult.Error:
      this.fail(new Error("Server error: " + response.error));
      return new InspectionResult(InspectionDecision.EndOperation, "Error");
    case ClientMessage.ReadEventCompleted.ReadEventResult.AccessDenied:
      this.fail(new AccessDeniedError("Read", this._stream));
      return new InspectionResult(InspectionDecision.EndOperation, "AccessDenied");
    default:
      throw new Error(util.format("Unexpected ReadEventResult: %s.", response.result));
  }
};

ReadEventOperation.prototype._transformResponse = function(response) {
  return new results.EventReadResult(convert(response.result), this._stream, this._eventNumber, response.event);
};

function convert(result)
{
  switch (result)
  {
    case ClientMessage.ReadEventCompleted.ReadEventResult.Success:
      return results.EventReadStatus.Success;
    case ClientMessage.ReadEventCompleted.ReadEventResult.NotFound:
      return results.EventReadStatus.NotFound;
    case ClientMessage.ReadEventCompleted.ReadEventResult.NoStream:
      return results.EventReadStatus.NoStream;
    case ClientMessage.ReadEventCompleted.ReadEventResult.StreamDeleted:
      return results.EventReadStatus.StreamDeleted;
    default:
      throw new Error(util.format("Unexpected ReadEventResult: %s.", result));
  }
}

ReadEventOperation.prototype.toString = function() {
  return util.format("Stream: %s, EventNumber: %s, ResolveLinkTo: %s, RequireMaster: %s",
      this._stream, this._eventNumber, this._resolveLinkTos, this._requireMaster);
};

module.exports = ReadEventOperation;
