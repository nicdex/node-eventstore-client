var util = require('util');

var TcpPackage = require('../systemData/tcpPackage');
var TcpCommand = require('../systemData/tcpCommand');
var TcpFlags = require('../systemData/tcpFlags');
var InspectionDecision = require('../systemData/inspectionDecision');
var ClientMessage = require('../messages/clientMessage');
var InspectionResult = require('./../systemData/inspectionResult');
var createBufferSegment = require('../common/bufferSegment');

function OperationBase(log, cb, requestCommand, responseCommand, userCredentials) {
  this.log = log;
  this._cb = cb;
  this._requestCommand = requestCommand;
  this._responseCommand = responseCommand;
  this.userCredentials = userCredentials;

  this._completed = false;
  this._response = null;

  this._responseType = null;
}

OperationBase.prototype._createRequestDto = function() {
  throw new Error('_createRequestDto not implemented.');
};

OperationBase.prototype._inspectResponse = function() {
  throw new Error('_inspectResponse not implemented.');
};

OperationBase.prototype._transformResponse = function() {
  throw new Error('_transformResponse not implemented.');
};

OperationBase.prototype.fail = function(error) {
  this._completed = true;
  this._cb(error);
};

OperationBase.prototype._succeed = function() {
  if (!this._completed) {
    this._completed = true;

    if (this._response) {
      this._cb(null, this._transformResponse(this._response));
    } else {
      this._cb(new Error("No result."))
    }
  }
};

OperationBase.prototype.createNetworkPackage = function(correlationId) {
  var dto = this._createRequestDto();
  var buf = dto.constructor.encode(dto).finish();
  return new TcpPackage(
      this._requestCommand,
      this.userCredentials ? TcpFlags.Authenticated : TcpFlags.None,
      correlationId,
      this.userCredentials ? this.userCredentials.username : null,
      this.userCredentials ? this.userCredentials.password : null,
      createBufferSegment(buf));
};

OperationBase.prototype.inspectPackage = function(pkg) {
  try {
    if (pkg.command === this._responseCommand) {
      this._response = this._responseType.decode(pkg.data.toBuffer());
      return this._inspectResponse(this._response);
    }
    switch (pkg.command) {
      case TcpCommand.NotAuthenticated:
        return this._inspectNotAuthenticated(pkg);
      case TcpCommand.BadRequest:
        return this._inspectBadRequest(pkg);
      case TcpCommand.NotHandled:
        return this._inspectNotHandled(pkg);
      default:
        return this._inspectUnexpectedCommand(pkg, this._responseCommand);
    }
  } catch(e) {
    this.fail(e);
    return new InspectionResult(InspectionDecision.EndOperation, "Error - " + e.message);
  }
};

OperationBase.prototype._inspectNotAuthenticated = function(pkg)
{
  var message = '';
  try {
    message = pkg.data.toString();
  } catch(e) {}
  //TODO typed error
  this.fail(new Error("Authentication error: " + message));
  return new InspectionResult(InspectionDecision.EndOperation, "NotAuthenticated");
};

OperationBase.prototype._inspectBadRequest = function(pkg)
{
  var message = '';
  try {
    message = pkg.data.toString();
  } catch(e) {}
  //TODO typed error
  this.fail(new Error("Bad request: " + message));
  return new InspectionResult(InspectionDecision.EndOperation, "BadRequest - " + message);
};

OperationBase.prototype._inspectNotHandled = function(pkg)
{
  var message = ClientMessage.NotHandled.decode(pkg.data.toBuffer());
  switch (message.reason)
  {
    case ClientMessage.NotHandled.NotHandledReason.NotReady:
      return new InspectionResult(InspectionDecision.Retry, "NotHandled - NotReady");

    case ClientMessage.NotHandled.NotHandledReason.TooBusy:
      return new InspectionResult(InspectionDecision.Retry, "NotHandled - TooBusy");

    case ClientMessage.NotHandled.NotHandledReason.NotLeader:
      var masterInfo = ClientMessage.NotHandled.LeaderInfo.decode(message.additionalInfo);
      return new InspectionResult(InspectionDecision.Reconnect, "NotHandled - NotLeader",
          {host: masterInfo.externalTcpAddress, port: masterInfo.externalTcpPort},
          {host: masterInfo.externalSecureTcpAddress, port: masterInfo.externalSecureTcpPort});

    default:
      this.log.error("Unknown NotHandledReason: %s.", message.reason);
      return new InspectionResult(InspectionDecision.Retry, "NotHandled - <unknown>");
  }
};

OperationBase.prototype._inspectUnexpectedCommand = function(pkg, expectedCommand)
{
  if (pkg.command === expectedCommand) throw new Error("Command shouldn't be " + TcpCommand.getName(pkg.command));

  this.log.error("Unexpected TcpCommand received.\n"
      + "Expected: %s, Actual: %s, Flags: %s, CorrelationId: %s\n"
      + "Operation (%s): %s\n"
      + "TcpPackage Data Dump:\n%j",
      expectedCommand, TcpCommand.getName(pkg.command), pkg.flags, pkg.correlationId,
      this.constructor.name, this, pkg.data);

  this.fail(new Error(util.format("Unexpected command. Expecting %s got %s.", TcpCommand.getName(expectedCommand), TcpCommand.getName(pkg.command))));
  return new InspectionResult(InspectionDecision.EndOperation, "Unexpected command - " + TcpCommand.getName(pkg.command));
};


module.exports = OperationBase;
