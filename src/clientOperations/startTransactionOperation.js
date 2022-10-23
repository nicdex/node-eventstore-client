var util = require('util');

var TcpCommand = require('../systemData/tcpCommand');
var InspectionDecision = require('../systemData/inspectionDecision');
var InspectionResult = require('./../systemData/inspectionResult');
var ClientMessage = require('../messages/clientMessage');
var EventStoreTransaction = require('../eventStoreTransaction');
var AccessDeniedError = require('../errors/accessDeniedError');
var WrongExpectedVersionError = require('../errors/wrongExpectedVersionError');
var StreamDeletedError = require('../errors/streamDeletedError');
var OperationBase = require('../clientOperations/operationBase');

function StartTransactionOperation(log, cb, requireMaster, stream, expectedVersion, parentConnection, userCredentials) {
  OperationBase.call(this, log, cb, TcpCommand.TransactionStart, TcpCommand.TransactionStartCompleted, userCredentials);
  this._responseType = ClientMessage.TransactionStartCompleted;

  this._requireMaster = requireMaster;
  this._stream = stream;
  this._expectedVersion = expectedVersion;
  this._parentConnection = parentConnection;
}
util.inherits(StartTransactionOperation, OperationBase);

StartTransactionOperation.prototype._createRequestDto = function() {
  return new ClientMessage.TransactionStart({
      eventStreamId: this._stream,
      expectedVersion: this._expectedVersion,
      requireLeader: this._requireMaster
  });
};

StartTransactionOperation.prototype._inspectResponse = function(response) {
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
    case ClientMessage.OperationResult.WrongExpectedVersion:
      this.fail(new WrongExpectedVersionError("Start transaction", this._stream, this._expectedVersion));
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
      throw new Error(util.format("Unexpected OperationResult: %s.", response.result));
  }
};

StartTransactionOperation.prototype._transformResponse = function(response) {
  return new EventStoreTransaction(response.transactionId, this.userCredentials, this._parentConnection);
};

StartTransactionOperation.prototype.toString = function() {
  return util.format("Stream: %s, ExpectedVersion: %d", this._stream, this._expectedVersion);
};

module.exports = StartTransactionOperation;
