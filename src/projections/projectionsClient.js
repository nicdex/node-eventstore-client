const https = require("https");
const http = require("http");
const url = require("url");
const util = require("util");
const ProjectionCommandFailedError = require("../errors/projectionCommandFailedError");

const HTTP_OK = 200;
const HTTP_CREATED = 201;

function safeParseJson(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
}

function ProjectionsClient(log, operationTimeout) {
  this._log = log;
  this._operationTimeout = operationTimeout;
}

ProjectionsClient.prototype.enable = function(
  httpEndPoint,
  name,
  userCredentials
) {
  return this.sendPost(
    httpEndPoint + "/projection/" + name + "/command/enable",
    "",
    userCredentials,
    HTTP_OK
  );
};

ProjectionsClient.prototype.disable = function(
  httpEndPoint,
  name,
  userCredentials
) {
  return this.sendPost(
    httpEndPoint + "/projection/" + name + "/command/disable",
    "",
    userCredentials,
    HTTP_OK
  );
};

ProjectionsClient.prototype.abort = function(
  httpEndPoint,
  name,
  userCredentials
) {
  return this.sendPost(
    httpEndPoint + "/projection/" + name + "/command/abort",
    "",
    userCredentials,
    HTTP_OK
  );
};

ProjectionsClient.prototype.reset = function(
  httpEndPoint,
  name,
  userCredentials
) {
  return this.sendPost(
    httpEndPoint + "/projection/" + name + "/command/reset",
    "",
    userCredentials,
    HTTP_OK
  );
};

ProjectionsClient.prototype.createOneTime = function(
  httpEndPoint,
  query,
  userCredentials
) {
  return this.sendPost(
    httpEndPoint + "/projections/onetime?type=JS",
    query,
    userCredentials,
    HTTP_CREATED
  );
};

ProjectionsClient.prototype.createTransient = function(
  httpEndPoint,
  name,
  query,
  userCredentials
) {
  return this.sendPost(
    httpEndPoint + "/projections/transient?name=" + name + "&type=JS",
    query,
    userCredentials,
    HTTP_CREATED
  );
};

ProjectionsClient.prototype.createContinuous = function(
  httpEndPoint,
  name,
  query,
  trackEmittedStreams,
  userCredentials
) {
  return this.sendPost(
    httpEndPoint +
      "/projections/continuous?name=" +
      name +
      "&type=JS&emit=1&trackemittedstreams=" +
      trackEmittedStreams,
    query,
    userCredentials,
    HTTP_CREATED
  );
};

ProjectionsClient.prototype.listAll = function(httpEndPoint, userCredentials) {
  return this.sendGet(
    httpEndPoint + "/projections/any",
    userCredentials,
    HTTP_OK
  ).then(function(json) {
    var r = safeParseJson(json);
    if (r && r.projections) return r.projections;
    return null;
  });
};

ProjectionsClient.prototype.listOneTime = function(
  httpEndPoint,
  userCredentials
) {
  return this.sendGet(
    httpEndPoint + "/projections/onetime",
    userCredentials,
    HTTP_OK
  ).then(function(json) {
    var r = safeParseJson(json);
    if (r && r.projections) return r.projections;
    return null;
  });
};

ProjectionsClient.prototype.listContinuous = function(
  httpEndPoint,
  userCredentials
) {
  return this.sendGet(
    httpEndPoint + "/projections/continuous",
    userCredentials,
    HTTP_OK
  ).then(function(json) {
    var r = safeParseJson(json);
    if (r && r.projections) return r.projections;
    return null;
  });
};

ProjectionsClient.prototype.getStatus = function(
  httpEndPoint,
  name,
  userCredentials
) {
  return this.sendGet(
    httpEndPoint + "/projection/" + name,
    userCredentials,
    HTTP_OK
  );
};

ProjectionsClient.prototype.getState = function(
  httpEndPoint,
  name,
  userCredentials
) {
  return this.sendGet(
    httpEndPoint + "/projection/" + name + "/state",
    userCredentials,
    HTTP_OK
  );
};

ProjectionsClient.prototype.getPartitionState = function(
  httpEndPoint,
  name,
  partitionId,
  userCredentials
) {
  return this.sendGet(
    httpEndPoint + "/projection/" + name + "/state?partition=" + partitionId,
    userCredentials,
    HTTP_OK
  );
};

ProjectionsClient.prototype.getResult = function(
  httpEndPoint,
  name,
  userCredentials
) {
  return this.sendGet(
    httpEndPoint + "/projection/" + name + "/result",
    userCredentials,
    HTTP_OK
  );
};

ProjectionsClient.prototype.getPartitionResult = function(
  httpEndPoint,
  name,
  partitionId,
  userCredentials
) {
  return this.sendGet(
    httpEndPoint + "/projection/" + name + "/result?partition=" + partitionId,
    userCredentials,
    HTTP_OK
  );
};

ProjectionsClient.prototype.getStatistics = function(
  httpEndPoint,
  name,
  userCredentials
) {
  return this.sendGet(
    httpEndPoint + "/projection/" + name + "/statistics",
    userCredentials,
    HTTP_OK
  );
};

ProjectionsClient.prototype.getQuery = function(
  httpEndPoint,
  name,
  userCredentials
) {
  return this.sendGet(
    httpEndPoint + "/projection/" + name + "/query",
    userCredentials,
    HTTP_OK
  );
};

ProjectionsClient.prototype.updateQuery = function(
  httpEndPoint,
  name,
  query,
  userCredentials
) {
  return this.sendPut(
    httpEndPoint + "/projection/" + name + "/query?type=JS",
    query,
    userCredentials,
    HTTP_OK
  );
};

ProjectionsClient.prototype.delete = function(
  httpEndPoint,
  name,
  deleteEmittedStreams,
  deleteStateStream,
  deleteCheckpointStream,
  userCredentials
) {
  return this.sendDelete(
    httpEndPoint +
      "/projection/" +
      name +
      "?deleteStateStream=" +
      deleteStateStream +
      "&deleteCheckpointStream=" +
      deleteCheckpointStream +
      "&deleteEmittedStreams=" +
      deleteEmittedStreams,
    "",
    userCredentials,
    HTTP_OK
  );
};

ProjectionsClient.prototype.request = function(
  method,
  _url,
  data,
  userCredentials,
  expectedCode
) {
  const options = url.parse(_url);
  const httplib = options.protocol === "https" ? https : http;
  options.method = method;
  if (userCredentials) {
    options.auth = [userCredentials.username, userCredentials.password].join(
      ":"
    );
  }
  var self = this;
  return new Promise(function(resolve, reject) {
    const timeout = setTimeout(function() {
      reject(
        new Error(util.format("Request timed out for %s on %s", method, _url))
      );
    }, self._operationTimeout);
    const req = httplib.request(options, function(res) {
      const hasExpectedCode = res.statusCode === expectedCode;
      var result = "";
      res.setEncoding("utf8");
      res.on("data", function(chunk) {
        result += chunk;
      });
      res.on("end", function() {
        if (hasExpectedCode) {
          clearTimeout(timeout);
          resolve(result);
        } else {
          clearTimeout(timeout);
          reject(
            new ProjectionCommandFailedError(
              res.statusCode,
              util.format(
                "Server returned %d (%s) for %s on %s",
                res.statusCode,
                res.statusMessage,
                method,
                _url
              )
            )
          );
        }
      });
    });
    req.on("error", reject);
    if (data) {
      req.setHeader("Content-Length", data.length);
      req.setHeader("Content-Type", "application/json");
      req.write(data);
    }
    req.end();
  });
};

function voidResult() {}

ProjectionsClient.prototype.sendGet = function(
  _url,
  userCredentials,
  expectedCode
) {
  return this.request("GET", _url, null, userCredentials, expectedCode);
};

ProjectionsClient.prototype.sendPost = function(
  _url,
  data,
  userCredentials,
  expectedCode
) {
  return this.request("POST", _url, data, userCredentials, expectedCode).then(
    voidResult
  );
};

ProjectionsClient.prototype.sendPut = function(
  _url,
  data,
  userCredentials,
  expectedCode
) {
  return this.request("PUT", _url, data, userCredentials, expectedCode).then(
    voidResult
  );
};

ProjectionsClient.prototype.sendDelete = function(
  _url,
  data,
  userCredentials,
  expectedCode
) {
  return this.request("DELETE", _url, data, userCredentials, expectedCode).then(
    voidResult
  );
};

module.exports = ProjectionsClient;
