var util = require('util');
var guidParse = require('../common/guid-parse');

var TcpCommand = require('../systemData/tcpCommand');
var InspectionDecision = require('../systemData/inspectionDecision');
var InspectionResult = require('./../systemData/inspectionResult');
var ClientMessage = require('../messages/clientMessage');
var WriteResult = require('../results').WriteResult;
var Position = require('../results').Position;
var WrongExpectedVersionError = require('../errors/wrongExpectedVersionError');
var StreamDeletedError = require('../errors/streamDeletedError');
var AccessDeniedError = require('../errors/accessDeniedError');

var OperationBase = require('../clientOperations/operationBase');

function AppendToStreamOperation(log, cb, requireMaster, stream, expectedVersion, events, userCredentials) {
  OperationBase.call(this, log, cb, TcpCommand.WriteEvents, TcpCommand.WriteEventsCompleted, userCredentials);
  this._responseType = ClientMessage.WriteEventsCompleted;

  this._requireMaster = requireMaster;
  this._stream = stream;
  this._expectedVersion = expectedVersion;
  this._events = events;
}
util.inherits(AppendToStreamOperation, OperationBase);

AppendToStreamOperation.prototype._createRequestDto = function() {
  var dtos = this._events.map(function(ev) {
    var eventId = guidParse.parse(ev.eventId);
    return {
      eventId: eventId, eventType: ev.type,
      dataContentType: ev.isJson ? 1 : 0, metadataContentType: 0,
      data: ev.data, metadata: ev.metadata
    };
  });
  return new ClientMessage.WriteEvents({
    eventStreamId: this._stream,
    expectedVersion: this._expectedVersion,
    events: dtos,
    requireLeader: this._requireMaster});
};

AppendToStreamOperation.prototype._inspectResponse = function(response) {
  switch (response.result)
  {
    case ClientMessage.OperationResult.Success:
      if (this._wasCommitTimeout) this.log.debug("IDEMPOTENT WRITE SUCCEEDED FOR %s.", this);
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "Success");
    case ClientMessage.OperationResult.PrepareTimeout:
      return new InspectionResult(InspectionDecision.Retry, "PrepareTimeout");
    case ClientMessage.OperationResult.ForwardTimeout:
      return new InspectionResult(InspectionDecision.Retry, "ForwardTimeout");
    case ClientMessage.OperationResult.CommitTimeout:
      this._wasCommitTimeout = true;
      return new InspectionResult(InspectionDecision.Retry, "CommitTimeout");
    case ClientMessage.OperationResult.WrongExpectedVersion:
      this.fail(new WrongExpectedVersionError("Append", this._stream, this._expectedVersion));
      return new InspectionResult(InspectionDecision.EndOperation, "WrongExpectedVersion");
    case ClientMessage.OperationResult.StreamDeleted:
      this.fail(new StreamDeletedError(this._stream));
      return new InspectionResult(InspectionDecision.EndOperation, "StreamDeleted");
    case ClientMessage.OperationResult.InvalidTransaction:
      this.fail(new Error("Invalid transaction."));
      return new InspectionResult(InspectionDecision.EndOperation, "InvalidTransaction");
    case ClientMessage.OperationResult.AccessDenied:
      this.fail(new AccessDeniedError("Write", this._stream));
      return new InspectionResult(InspectionDecision.EndOperation, "AccessDenied");
    default:
      throw new Error("Unexpected OperationResult: " + response.result);
  }
};

AppendToStreamOperation.prototype._transformResponse = function(response) {
  return new WriteResult(response.lastEventNumber, new Position(response.preparePosition || -1, response.commitPosition || -1));
};

AppendToStreamOperation.prototype.toString = function() {
  return util.format("Stream: %s, ExpectedVersion: %d", this._stream, this._expectedVersion);
};

module.exports = AppendToStreamOperation;
