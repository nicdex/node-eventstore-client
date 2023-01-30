const ensure = require('../common/utils/ensure');
const ProjectionsClient = require('./projectionsClient');

/**
 * Creates a new instance of ProjectionsManager.
 * @param {Logger} log              Instance of Logger to use for logging.
 * @param {string} httpEndPoint     HTTP endpoint of an Event Store server.
 * @param {number} operationTimeout Operation timeout in milliseconds.
 * @param {boolean} [rejectUnauthorized] Reject authorized SSL certs (if using SSL) - set to false if using self-signed certs
 * @constructor
 */
function ProjectionsManager(log, httpEndPoint, operationTimeout, rejectUnauthorized) {
  ensure.notNull(log, "log");
  ensure.notNull(httpEndPoint, "httpEndPoint");
  this._client = new ProjectionsClient(log, operationTimeout, rejectUnauthorized);
  this._httpEndPoint = httpEndPoint;
}

/**
 * Enables a projection.
 * @param name            The name of the projection.
 * @param userCredentials Credentials for a user with permission to enable a projection.
 * @returns {Promise<void>}
 */
ProjectionsManager.prototype.enable = function(name, userCredentials) {
  return this._client.enable(this._httpEndPoint, name, userCredentials);
};

/**
 * Aborts and disables a projection without writing a checkpoint.
 * @param name            The name of the projection.
 * @param userCredentials Credentials for a user with permission to disable a projection.
 * @returns {Promise<void>}
 */
ProjectionsManager.prototype.disable = function(name, userCredentials) {
  return this._client.disable(this._httpEndPoint, name, userCredentials);
};

/**
 * Disables a projection.
 * @param name            The name of the projection.
 * @param userCredentials Credentials for a user with permission to disable a projection.
 * @returns {Promise<void>}
 */
ProjectionsManager.prototype.abort = function(name, userCredentials) {
  return this._client.abort(this._httpEndPoint, name, userCredentials);
};

/**
 * Reset a projection. (This will re-emit events, streams that are written to from the projection will also be soft deleted)
 * @param name            The name of the projection.
 * @param userCredentials Credentials for a user with permission to reset a projection.
 * @returns {Promise<void>}
 */
ProjectionsManager.prototype.reset = function(name, userCredentials) {
  return this._client.reset(this._httpEndPoint, name, userCredentials);
};

/**
 * Creates a one-time query.
 * @param query           The JavaScript source code for the query.
 * @param userCredentials Credentials for a user with permission to create a query.
 * @returns {Promise<void>}
 */
ProjectionsManager.prototype.createOneTime = function(query, userCredentials) {
  return this._client.createOneTime(this._httpEndPoint, query, userCredentials);
};

/**
 * Creates a one-time query.
 * @param name            A name for the query.
 * @param query           The JavaScript source code for the query.
 * @param userCredentials Credentials for a user with permission to create a query.
 * @returns {Promise<void>}
 */
ProjectionsManager.prototype.createTransient = function(name, query, userCredentials) {
  return this._client.createTransient(this._httpEndPoint, query, userCredentials);
};

/**
 * Creates a one-time query.
 * @param name                The name of the projection.
 * @param query               The JavaScript source code for the query.
 * @param trackEmittedStreams Whether the streams emitted by this projection should be tracked.
 * @param userCredentials     Credentials for a user with permission to create a query.
 * @returns {Promise<void>}
 */
ProjectionsManager.prototype.createContinuous = function(name, query, trackEmittedStreams, userCredentials) {
  return this._client.createContinuous(this._httpEndPoint, name, query, trackEmittedStreams, userCredentials);
};

/**
 * Lists the status of all projections.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<ProjectionDetails[]>}
 */
ProjectionsManager.prototype.listAll = function(userCredentials) {
  return this._client.listAll(this._httpEndPoint, userCredentials);
};

/**
 * Lists the status of all one-time projections.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<ProjectionDetails[]>}
 */
ProjectionsManager.prototype.listOneTime = function(userCredentials) {
  return this._client.listOneTime(this._httpEndPoint, userCredentials);
};

/**
 * Lists the status of all continuous projections.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<ProjectionDetails[]>}
 */
ProjectionsManager.prototype.listContinuous = function(userCredentials) {
  return this._client.listContinuous(this._httpEndPoint, userCredentials);
};

/**
 * Gets the status of a projection.
 * @param name            The name of the projection.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<string>} String of JSON containing projection status.
 */
ProjectionsManager.prototype.getStatus = function(name, userCredentials) {
  return this._client.getStatus(this._httpEndPoint, name, userCredentials);
};

/**
 * Gets the state of a projection.
 * @param name            The name of the projection.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<string>} String of JSON containing projection state.
 */
ProjectionsManager.prototype.getState = function(name, userCredentials) {
  return this._client.getState(this._httpEndPoint, name, userCredentials);
};

/**
 * Gets the state of a projection for a specified partition.
 * @param name            The name of the projection.
 * @param partitionId     The id of the partition.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<string>} String of JSON containing projection state.
 */
ProjectionsManager.prototype.getPartitionState = function(name, partitionId, userCredentials) {
  return this._client.getPartitionState(this._httpEndPoint, name, partitionId, userCredentials);
};

/**
 * Gets the state of a projection.
 * @param name            The name of the projection.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<string>} String of JSON containing projection state.
 */
ProjectionsManager.prototype.getResult = function(name, userCredentials) {
  return this._client.getResult(this._httpEndPoint, name, userCredentials);
};

/**
 * Gets the state of a projection for a specified partition.
 * @param name            The name of the projection.
 * @param partitionId     The id of the partition.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<string>} String of JSON containing projection state.
 */
ProjectionsManager.prototype.getPartitionResult = function(name, partitionId, userCredentials) {
  return this._client.getPartitionResult(this._httpEndPoint, name, partitionId, userCredentials);
};

/**
 * Gets the statistics of a projection.
 * @param name            The name of the projection.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<string>} String of JSON containing projection statistics.
 */
ProjectionsManager.prototype.getStatistics = function(name, userCredentials) {
  return this._client.getStatistics(this._httpEndPoint, name, userCredentials);
};

/**
 * Gets the status of a query.
 * @param name            The name of the query.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<string>} String of JSON containing query status.
 */
ProjectionsManager.prototype.getQuery = function(name, userCredentials) {
  return this._client.getQuery(this._httpEndPoint, name, userCredentials);
};

/**
 * Updates the definition of a query.
 * @param name            The name of the query.
 * @param query           The JavaScript source code for the query.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<void>}
 */
ProjectionsManager.prototype.updateQuery = function(name, query, userCredentials) {
  return this._client.updateQuery(this._httpEndPoint, name, query, userCredentials);
};

/**
 * Updates the definition of a query.
 * @param name                    The name of the projection.
 * @param deleteEmittedStreams    Whether to delete the streams that were emitted by this projection.
 * @param deleteStateStream       Where to delete the state stream for this projection
 * @param deleteCheckpointStream  Where to delete the checkpoint stream for this projection
 * @param userCredentials         Credentials for a user with permission to delete a projection.
 * @returns {Promise<void>}
 */
ProjectionsManager.prototype.delete = function(name, deleteEmittedStreams, deleteStateStream, deleteCheckpointStream, userCredentials) {
  return this._client.delete(this._httpEndPoint, name, deleteEmittedStreams, deleteStateStream, deleteCheckpointStream, userCredentials);
};

module.exports = ProjectionsManager;
