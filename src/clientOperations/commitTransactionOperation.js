var util = require('util');

var TcpCommand = require('../systemData/tcpCommand');
var InspectionDecision = require('../systemData/inspectionDecision');
var InspectionResult = require('./../systemData/inspectionResult');
var ClientMessage = require('../messages/clientMessage');
var results = require('../results');
var WrongExpectedVersionError = require('../errors/wrongExpectedVersionError');
var StreamDeletedError = require('../errors/streamDeletedError');
var AccessDeniedError = require('../errors/accessDeniedError');

var OperationBase = require('../clientOperations/operationBase');


function CommitTransactionOperation(log, cb, requireMaster, transactionId, userCredentials) {
  OperationBase.call(this, log, cb, TcpCommand.TransactionCommit, TcpCommand.TransactionCommitCompleted, userCredentials);
  this._responseType = ClientMessage.TransactionCommitCompleted;

  this._requireMaster = requireMaster;
  this._transactionId = transactionId;
}
util.inherits(CommitTransactionOperation, OperationBase);

CommitTransactionOperation.prototype._createRequestDto = function() {
  return new ClientMessage.TransactionCommit({
    transactionId: this._transactionId,
    requireLeader: this._requireMaster
  });
};

CommitTransactionOperation.prototype._inspectResponse = function(response) {
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
      this.fail(new WrongExpectedVersionError("Commit", this._transactionId));
      return new InspectionResult(InspectionDecision.EndOperation, "WrongExpectedVersion");
    case ClientMessage.OperationResult.StreamDeleted:
      this.fail(new StreamDeletedError(this._transactionId));
      return new InspectionResult(InspectionDecision.EndOperation, "StreamDeleted");
    case ClientMessage.OperationResult.InvalidTransaction:
      this.fail(new Error("Invalid transaction."));
      return new InspectionResult(InspectionDecision.EndOperation, "InvalidTransaction");
    case ClientMessage.OperationResult.AccessDenied:
      this.fail(new AccessDeniedError("Write", this._transactionId));
      return new InspectionResult(InspectionDecision.EndOperation, "AccessDenied");
    default:
      throw new Error(util.format("Unexpected OperationResult: %s.", response.result));
  }
};

CommitTransactionOperation.prototype._transformResponse = function(response) {
  var logPosition = new results.Position(response.preparePosition || -1, response.commitPosition || -1);
  return new results.WriteResult(response.lastEventNumber, logPosition);
};

CommitTransactionOperation.prototype.toString = function() {
  return util.format("TransactionId: %s", this._transactionId);
};

module.exports = CommitTransactionOperation;
