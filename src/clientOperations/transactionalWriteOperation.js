var util = require('util');
var guidParse = require('../common/guid-parse');

var TcpCommand = require('../systemData/tcpCommand');
var InspectionDecision = require('../systemData/inspectionDecision');
var InspectionResult = require('./../systemData/inspectionResult');
var ClientMessage = require('../messages/clientMessage');
var AccessDeniedError = require('../errors/accessDeniedError');

var OperationBase = require('../clientOperations/operationBase');


function TransactionalWriteOperation(log, cb, requireMaster, transactionId, events, userCredentials) {
  OperationBase.call(this, log, cb, TcpCommand.TransactionWrite, TcpCommand.TransactionWriteCompleted, userCredentials);
  this._responseType = ClientMessage.TransactionWriteCompleted;

  this._requireMaster = requireMaster;
  this._transactionId = transactionId;
  this._events = events;
}
util.inherits(TransactionalWriteOperation, OperationBase);

TransactionalWriteOperation.prototype._createRequestDto = function() {
  var dtos = this._events.map(function(ev) {
    var eventId = guidParse.parse(ev.eventId);
    return {
      eventId: eventId, eventType: ev.type,
      dataContentType: ev.isJson ? 1 : 0, metadataContentType: 0,
      data: ev.data, metadata: ev.metadata
    };
  });
  return new ClientMessage.TransactionWrite({
    transactionId: this._transactionId,
    events: dtos,
    requireLeader: this._requireMaster
  });
};

TransactionalWriteOperation.prototype._inspectResponse = function(response) {
  switch (response.result)
  {
    case ClientMessage.OperationResult.Success:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "Success");
    case ClientMessage.OperationResult.PrepareTimeout:
      return new InspectionResult(InspectionDecision.Retry, "PrepareTimeout");
    case ClientMessage.OperationResult.CommitTimeout:
      return new InspectionResult(InspectionDecision.Retry, "CommitTimeout");
    case ClientMessage.OperationResult.ForwardTimeout:
      return new InspectionResult(InspectionDecision.Retry, "ForwardTimeout");
    case ClientMessage.OperationResult.AccessDenied:
      this.fail(new AccessDeniedError("Write", "trx:" + this._transactionId));
      return new InspectionResult(InspectionDecision.EndOperation, "AccessDenied");
    default:
      throw new Error(util.format("Unexpected OperationResult: %s.", response.result));
  }
};

TransactionalWriteOperation.prototype._transformResponse = function(response) {
  return null;
};

TransactionalWriteOperation.prototype.toString = function() {
  return util.format("TransactionId: %s", this._transactionId);
};

module.exports = TransactionalWriteOperation;
