var util = require('util');
var uuid = require('uuid');

var ClientMessage = require('../messages/clientMessage');
var TcpCommand = require('../systemData/tcpCommand');
var OperationBase = require('../clientOperations/operationBase');

function PingOperation(log, cb, requireMaster, userCredentials) {
  OperationBase.call(this, log, cb, TcpCommand.Ping, TcpCommand.Pong, userCredentials);
  this._responseType = ClientMessage.Pong;
  this._cb = cb;

  this._requireMaster = requireMaster;
}
util.inherits(PingOperation, OperationBase);

PingOperation.prototype._createRequestDto = function() {
  return new ClientMessage.Ping();
}

PingOperation.prototype._inspectResponse = function(r) {
  this._succeed();
  return new InspectionResult(InspectionDecision.EndOperation, "Success");
}

PingOperation.prototype._transformResponse = function(r) {
  return {};
}

module.exports = PingOperation;
