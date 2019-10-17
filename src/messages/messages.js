/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.EventStore = (function() {
    
        /**
         * Namespace EventStore.
         * @exports EventStore
         * @namespace
         */
        var EventStore = {};
    
        EventStore.Client = (function() {
    
            /**
             * Namespace Client.
             * @memberof EventStore
             * @namespace
             */
            var Client = {};
    
            Client.Messages = (function() {
    
                /**
                 * Namespace Messages.
                 * @memberof EventStore.Client
                 * @namespace
                 */
                var Messages = {};
    
                /**
                 * OperationResult enum.
                 * @name EventStore.Client.Messages.OperationResult
                 * @enum {string}
                 * @property {number} Success=0 Success value
                 * @property {number} PrepareTimeout=1 PrepareTimeout value
                 * @property {number} CommitTimeout=2 CommitTimeout value
                 * @property {number} ForwardTimeout=3 ForwardTimeout value
                 * @property {number} WrongExpectedVersion=4 WrongExpectedVersion value
                 * @property {number} StreamDeleted=5 StreamDeleted value
                 * @property {number} InvalidTransaction=6 InvalidTransaction value
                 * @property {number} AccessDenied=7 AccessDenied value
                 */
                Messages.OperationResult = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "Success"] = 0;
                    values[valuesById[1] = "PrepareTimeout"] = 1;
                    values[valuesById[2] = "CommitTimeout"] = 2;
                    values[valuesById[3] = "ForwardTimeout"] = 3;
                    values[valuesById[4] = "WrongExpectedVersion"] = 4;
                    values[valuesById[5] = "StreamDeleted"] = 5;
                    values[valuesById[6] = "InvalidTransaction"] = 6;
                    values[valuesById[7] = "AccessDenied"] = 7;
                    return values;
                })();
    
                Messages.NewEvent = (function() {
    
                    /**
                     * Properties of a NewEvent.
                     * @memberof EventStore.Client.Messages
                     * @interface INewEvent
                     * @property {Uint8Array} eventId NewEvent eventId
                     * @property {string} eventType NewEvent eventType
                     * @property {number} dataContentType NewEvent dataContentType
                     * @property {number} metadataContentType NewEvent metadataContentType
                     * @property {Uint8Array} data NewEvent data
                     * @property {Uint8Array|null} [metadata] NewEvent metadata
                     */
    
                    /**
                     * Constructs a new NewEvent.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a NewEvent.
                     * @implements INewEvent
                     * @constructor
                     * @param {EventStore.Client.Messages.INewEvent=} [properties] Properties to set
                     */
                    function NewEvent(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * NewEvent eventId.
                     * @member {Uint8Array} eventId
                     * @memberof EventStore.Client.Messages.NewEvent
                     * @instance
                     */
                    NewEvent.prototype.eventId = $util.newBuffer([]);
    
                    /**
                     * NewEvent eventType.
                     * @member {string} eventType
                     * @memberof EventStore.Client.Messages.NewEvent
                     * @instance
                     */
                    NewEvent.prototype.eventType = "";
    
                    /**
                     * NewEvent dataContentType.
                     * @member {number} dataContentType
                     * @memberof EventStore.Client.Messages.NewEvent
                     * @instance
                     */
                    NewEvent.prototype.dataContentType = 0;
    
                    /**
                     * NewEvent metadataContentType.
                     * @member {number} metadataContentType
                     * @memberof EventStore.Client.Messages.NewEvent
                     * @instance
                     */
                    NewEvent.prototype.metadataContentType = 0;
    
                    /**
                     * NewEvent data.
                     * @member {Uint8Array} data
                     * @memberof EventStore.Client.Messages.NewEvent
                     * @instance
                     */
                    NewEvent.prototype.data = $util.newBuffer([]);
    
                    /**
                     * NewEvent metadata.
                     * @member {Uint8Array} metadata
                     * @memberof EventStore.Client.Messages.NewEvent
                     * @instance
                     */
                    NewEvent.prototype.metadata = $util.newBuffer([]);
    
                    /**
                     * Creates a new NewEvent instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.NewEvent
                     * @static
                     * @param {EventStore.Client.Messages.INewEvent=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.NewEvent} NewEvent instance
                     */
                    NewEvent.create = function create(properties) {
                        return new NewEvent(properties);
                    };
    
                    /**
                     * Encodes the specified NewEvent message. Does not implicitly {@link EventStore.Client.Messages.NewEvent.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.NewEvent
                     * @static
                     * @param {EventStore.Client.Messages.INewEvent} message NewEvent message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NewEvent.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.eventId);
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.eventType);
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.dataContentType);
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.metadataContentType);
                        writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.data);
                        if (message.metadata != null && message.hasOwnProperty("metadata"))
                            writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.metadata);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NewEvent message, length delimited. Does not implicitly {@link EventStore.Client.Messages.NewEvent.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.NewEvent
                     * @static
                     * @param {EventStore.Client.Messages.INewEvent} message NewEvent message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NewEvent.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a NewEvent message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.NewEvent
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.NewEvent} NewEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NewEvent.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.NewEvent();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.eventId = reader.bytes();
                                break;
                            case 2:
                                message.eventType = reader.string();
                                break;
                            case 3:
                                message.dataContentType = reader.int32();
                                break;
                            case 4:
                                message.metadataContentType = reader.int32();
                                break;
                            case 5:
                                message.data = reader.bytes();
                                break;
                            case 6:
                                message.metadata = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("eventId"))
                            throw $util.ProtocolError("missing required 'eventId'", { instance: message });
                        if (!message.hasOwnProperty("eventType"))
                            throw $util.ProtocolError("missing required 'eventType'", { instance: message });
                        if (!message.hasOwnProperty("dataContentType"))
                            throw $util.ProtocolError("missing required 'dataContentType'", { instance: message });
                        if (!message.hasOwnProperty("metadataContentType"))
                            throw $util.ProtocolError("missing required 'metadataContentType'", { instance: message });
                        if (!message.hasOwnProperty("data"))
                            throw $util.ProtocolError("missing required 'data'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a NewEvent message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.NewEvent
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.NewEvent} NewEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NewEvent.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a NewEvent message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.NewEvent
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NewEvent.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!(message.eventId && typeof message.eventId.length === "number" || $util.isString(message.eventId)))
                            return "eventId: buffer expected";
                        if (!$util.isString(message.eventType))
                            return "eventType: string expected";
                        if (!$util.isInteger(message.dataContentType))
                            return "dataContentType: integer expected";
                        if (!$util.isInteger(message.metadataContentType))
                            return "metadataContentType: integer expected";
                        if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                            return "data: buffer expected";
                        if (message.metadata != null && message.hasOwnProperty("metadata"))
                            if (!(message.metadata && typeof message.metadata.length === "number" || $util.isString(message.metadata)))
                                return "metadata: buffer expected";
                        return null;
                    };
    
                    /**
                     * Creates a NewEvent message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.NewEvent
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.NewEvent} NewEvent
                     */
                    NewEvent.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.NewEvent)
                            return object;
                        var message = new $root.EventStore.Client.Messages.NewEvent();
                        if (object.eventId != null)
                            if (typeof object.eventId === "string")
                                $util.base64.decode(object.eventId, message.eventId = $util.newBuffer($util.base64.length(object.eventId)), 0);
                            else if (object.eventId.length)
                                message.eventId = object.eventId;
                        if (object.eventType != null)
                            message.eventType = String(object.eventType);
                        if (object.dataContentType != null)
                            message.dataContentType = object.dataContentType | 0;
                        if (object.metadataContentType != null)
                            message.metadataContentType = object.metadataContentType | 0;
                        if (object.data != null)
                            if (typeof object.data === "string")
                                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                            else if (object.data.length)
                                message.data = object.data;
                        if (object.metadata != null)
                            if (typeof object.metadata === "string")
                                $util.base64.decode(object.metadata, message.metadata = $util.newBuffer($util.base64.length(object.metadata)), 0);
                            else if (object.metadata.length)
                                message.metadata = object.metadata;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a NewEvent message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.NewEvent
                     * @static
                     * @param {EventStore.Client.Messages.NewEvent} message NewEvent
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NewEvent.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.eventId = "";
                            else {
                                object.eventId = [];
                                if (options.bytes !== Array)
                                    object.eventId = $util.newBuffer(object.eventId);
                            }
                            object.eventType = "";
                            object.dataContentType = 0;
                            object.metadataContentType = 0;
                            if (options.bytes === String)
                                object.data = "";
                            else {
                                object.data = [];
                                if (options.bytes !== Array)
                                    object.data = $util.newBuffer(object.data);
                            }
                            if (options.bytes === String)
                                object.metadata = "";
                            else {
                                object.metadata = [];
                                if (options.bytes !== Array)
                                    object.metadata = $util.newBuffer(object.metadata);
                            }
                        }
                        if (message.eventId != null && message.hasOwnProperty("eventId"))
                            object.eventId = options.bytes === String ? $util.base64.encode(message.eventId, 0, message.eventId.length) : options.bytes === Array ? Array.prototype.slice.call(message.eventId) : message.eventId;
                        if (message.eventType != null && message.hasOwnProperty("eventType"))
                            object.eventType = message.eventType;
                        if (message.dataContentType != null && message.hasOwnProperty("dataContentType"))
                            object.dataContentType = message.dataContentType;
                        if (message.metadataContentType != null && message.hasOwnProperty("metadataContentType"))
                            object.metadataContentType = message.metadataContentType;
                        if (message.data != null && message.hasOwnProperty("data"))
                            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                        if (message.metadata != null && message.hasOwnProperty("metadata"))
                            object.metadata = options.bytes === String ? $util.base64.encode(message.metadata, 0, message.metadata.length) : options.bytes === Array ? Array.prototype.slice.call(message.metadata) : message.metadata;
                        return object;
                    };
    
                    /**
                     * Converts this NewEvent to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.NewEvent
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NewEvent.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return NewEvent;
                })();
    
                Messages.EventRecord = (function() {
    
                    /**
                     * Properties of an EventRecord.
                     * @memberof EventStore.Client.Messages
                     * @interface IEventRecord
                     * @property {string} eventStreamId EventRecord eventStreamId
                     * @property {number|Long} eventNumber EventRecord eventNumber
                     * @property {Uint8Array} eventId EventRecord eventId
                     * @property {string} eventType EventRecord eventType
                     * @property {number} dataContentType EventRecord dataContentType
                     * @property {number} metadataContentType EventRecord metadataContentType
                     * @property {Uint8Array} data EventRecord data
                     * @property {Uint8Array|null} [metadata] EventRecord metadata
                     * @property {number|Long|null} [created] EventRecord created
                     * @property {number|Long|null} [createdEpoch] EventRecord createdEpoch
                     */
    
                    /**
                     * Constructs a new EventRecord.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents an EventRecord.
                     * @implements IEventRecord
                     * @constructor
                     * @param {EventStore.Client.Messages.IEventRecord=} [properties] Properties to set
                     */
                    function EventRecord(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * EventRecord eventStreamId.
                     * @member {string} eventStreamId
                     * @memberof EventStore.Client.Messages.EventRecord
                     * @instance
                     */
                    EventRecord.prototype.eventStreamId = "";
    
                    /**
                     * EventRecord eventNumber.
                     * @member {number|Long} eventNumber
                     * @memberof EventStore.Client.Messages.EventRecord
                     * @instance
                     */
                    EventRecord.prototype.eventNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * EventRecord eventId.
                     * @member {Uint8Array} eventId
                     * @memberof EventStore.Client.Messages.EventRecord
                     * @instance
                     */
                    EventRecord.prototype.eventId = $util.newBuffer([]);
    
                    /**
                     * EventRecord eventType.
                     * @member {string} eventType
                     * @memberof EventStore.Client.Messages.EventRecord
                     * @instance
                     */
                    EventRecord.prototype.eventType = "";
    
                    /**
                     * EventRecord dataContentType.
                     * @member {number} dataContentType
                     * @memberof EventStore.Client.Messages.EventRecord
                     * @instance
                     */
                    EventRecord.prototype.dataContentType = 0;
    
                    /**
                     * EventRecord metadataContentType.
                     * @member {number} metadataContentType
                     * @memberof EventStore.Client.Messages.EventRecord
                     * @instance
                     */
                    EventRecord.prototype.metadataContentType = 0;
    
                    /**
                     * EventRecord data.
                     * @member {Uint8Array} data
                     * @memberof EventStore.Client.Messages.EventRecord
                     * @instance
                     */
                    EventRecord.prototype.data = $util.newBuffer([]);
    
                    /**
                     * EventRecord metadata.
                     * @member {Uint8Array} metadata
                     * @memberof EventStore.Client.Messages.EventRecord
                     * @instance
                     */
                    EventRecord.prototype.metadata = $util.newBuffer([]);
    
                    /**
                     * EventRecord created.
                     * @member {number|Long} created
                     * @memberof EventStore.Client.Messages.EventRecord
                     * @instance
                     */
                    EventRecord.prototype.created = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * EventRecord createdEpoch.
                     * @member {number|Long} createdEpoch
                     * @memberof EventStore.Client.Messages.EventRecord
                     * @instance
                     */
                    EventRecord.prototype.createdEpoch = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * Creates a new EventRecord instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.EventRecord
                     * @static
                     * @param {EventStore.Client.Messages.IEventRecord=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.EventRecord} EventRecord instance
                     */
                    EventRecord.create = function create(properties) {
                        return new EventRecord(properties);
                    };
    
                    /**
                     * Encodes the specified EventRecord message. Does not implicitly {@link EventStore.Client.Messages.EventRecord.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.EventRecord
                     * @static
                     * @param {EventStore.Client.Messages.IEventRecord} message EventRecord message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EventRecord.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventStreamId);
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.eventNumber);
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.eventId);
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.eventType);
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.dataContentType);
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.metadataContentType);
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.data);
                        if (message.metadata != null && message.hasOwnProperty("metadata"))
                            writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.metadata);
                        if (message.created != null && message.hasOwnProperty("created"))
                            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.created);
                        if (message.createdEpoch != null && message.hasOwnProperty("createdEpoch"))
                            writer.uint32(/* id 10, wireType 0 =*/80).int64(message.createdEpoch);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified EventRecord message, length delimited. Does not implicitly {@link EventStore.Client.Messages.EventRecord.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.EventRecord
                     * @static
                     * @param {EventStore.Client.Messages.IEventRecord} message EventRecord message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EventRecord.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an EventRecord message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.EventRecord
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.EventRecord} EventRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EventRecord.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.EventRecord();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.eventStreamId = reader.string();
                                break;
                            case 2:
                                message.eventNumber = reader.int64();
                                break;
                            case 3:
                                message.eventId = reader.bytes();
                                break;
                            case 4:
                                message.eventType = reader.string();
                                break;
                            case 5:
                                message.dataContentType = reader.int32();
                                break;
                            case 6:
                                message.metadataContentType = reader.int32();
                                break;
                            case 7:
                                message.data = reader.bytes();
                                break;
                            case 8:
                                message.metadata = reader.bytes();
                                break;
                            case 9:
                                message.created = reader.int64();
                                break;
                            case 10:
                                message.createdEpoch = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("eventStreamId"))
                            throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                        if (!message.hasOwnProperty("eventNumber"))
                            throw $util.ProtocolError("missing required 'eventNumber'", { instance: message });
                        if (!message.hasOwnProperty("eventId"))
                            throw $util.ProtocolError("missing required 'eventId'", { instance: message });
                        if (!message.hasOwnProperty("eventType"))
                            throw $util.ProtocolError("missing required 'eventType'", { instance: message });
                        if (!message.hasOwnProperty("dataContentType"))
                            throw $util.ProtocolError("missing required 'dataContentType'", { instance: message });
                        if (!message.hasOwnProperty("metadataContentType"))
                            throw $util.ProtocolError("missing required 'metadataContentType'", { instance: message });
                        if (!message.hasOwnProperty("data"))
                            throw $util.ProtocolError("missing required 'data'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes an EventRecord message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.EventRecord
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.EventRecord} EventRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EventRecord.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an EventRecord message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.EventRecord
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EventRecord.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.eventStreamId))
                            return "eventStreamId: string expected";
                        if (!$util.isInteger(message.eventNumber) && !(message.eventNumber && $util.isInteger(message.eventNumber.low) && $util.isInteger(message.eventNumber.high)))
                            return "eventNumber: integer|Long expected";
                        if (!(message.eventId && typeof message.eventId.length === "number" || $util.isString(message.eventId)))
                            return "eventId: buffer expected";
                        if (!$util.isString(message.eventType))
                            return "eventType: string expected";
                        if (!$util.isInteger(message.dataContentType))
                            return "dataContentType: integer expected";
                        if (!$util.isInteger(message.metadataContentType))
                            return "metadataContentType: integer expected";
                        if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                            return "data: buffer expected";
                        if (message.metadata != null && message.hasOwnProperty("metadata"))
                            if (!(message.metadata && typeof message.metadata.length === "number" || $util.isString(message.metadata)))
                                return "metadata: buffer expected";
                        if (message.created != null && message.hasOwnProperty("created"))
                            if (!$util.isInteger(message.created) && !(message.created && $util.isInteger(message.created.low) && $util.isInteger(message.created.high)))
                                return "created: integer|Long expected";
                        if (message.createdEpoch != null && message.hasOwnProperty("createdEpoch"))
                            if (!$util.isInteger(message.createdEpoch) && !(message.createdEpoch && $util.isInteger(message.createdEpoch.low) && $util.isInteger(message.createdEpoch.high)))
                                return "createdEpoch: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates an EventRecord message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.EventRecord
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.EventRecord} EventRecord
                     */
                    EventRecord.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.EventRecord)
                            return object;
                        var message = new $root.EventStore.Client.Messages.EventRecord();
                        if (object.eventStreamId != null)
                            message.eventStreamId = String(object.eventStreamId);
                        if (object.eventNumber != null)
                            if ($util.Long)
                                (message.eventNumber = $util.Long.fromValue(object.eventNumber)).unsigned = false;
                            else if (typeof object.eventNumber === "string")
                                message.eventNumber = parseInt(object.eventNumber, 10);
                            else if (typeof object.eventNumber === "number")
                                message.eventNumber = object.eventNumber;
                            else if (typeof object.eventNumber === "object")
                                message.eventNumber = new $util.LongBits(object.eventNumber.low >>> 0, object.eventNumber.high >>> 0).toNumber();
                        if (object.eventId != null)
                            if (typeof object.eventId === "string")
                                $util.base64.decode(object.eventId, message.eventId = $util.newBuffer($util.base64.length(object.eventId)), 0);
                            else if (object.eventId.length)
                                message.eventId = object.eventId;
                        if (object.eventType != null)
                            message.eventType = String(object.eventType);
                        if (object.dataContentType != null)
                            message.dataContentType = object.dataContentType | 0;
                        if (object.metadataContentType != null)
                            message.metadataContentType = object.metadataContentType | 0;
                        if (object.data != null)
                            if (typeof object.data === "string")
                                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                            else if (object.data.length)
                                message.data = object.data;
                        if (object.metadata != null)
                            if (typeof object.metadata === "string")
                                $util.base64.decode(object.metadata, message.metadata = $util.newBuffer($util.base64.length(object.metadata)), 0);
                            else if (object.metadata.length)
                                message.metadata = object.metadata;
                        if (object.created != null)
                            if ($util.Long)
                                (message.created = $util.Long.fromValue(object.created)).unsigned = false;
                            else if (typeof object.created === "string")
                                message.created = parseInt(object.created, 10);
                            else if (typeof object.created === "number")
                                message.created = object.created;
                            else if (typeof object.created === "object")
                                message.created = new $util.LongBits(object.created.low >>> 0, object.created.high >>> 0).toNumber();
                        if (object.createdEpoch != null)
                            if ($util.Long)
                                (message.createdEpoch = $util.Long.fromValue(object.createdEpoch)).unsigned = false;
                            else if (typeof object.createdEpoch === "string")
                                message.createdEpoch = parseInt(object.createdEpoch, 10);
                            else if (typeof object.createdEpoch === "number")
                                message.createdEpoch = object.createdEpoch;
                            else if (typeof object.createdEpoch === "object")
                                message.createdEpoch = new $util.LongBits(object.createdEpoch.low >>> 0, object.createdEpoch.high >>> 0).toNumber();
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an EventRecord message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.EventRecord
                     * @static
                     * @param {EventStore.Client.Messages.EventRecord} message EventRecord
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EventRecord.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.eventStreamId = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.eventNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.eventNumber = options.longs === String ? "0" : 0;
                            if (options.bytes === String)
                                object.eventId = "";
                            else {
                                object.eventId = [];
                                if (options.bytes !== Array)
                                    object.eventId = $util.newBuffer(object.eventId);
                            }
                            object.eventType = "";
                            object.dataContentType = 0;
                            object.metadataContentType = 0;
                            if (options.bytes === String)
                                object.data = "";
                            else {
                                object.data = [];
                                if (options.bytes !== Array)
                                    object.data = $util.newBuffer(object.data);
                            }
                            if (options.bytes === String)
                                object.metadata = "";
                            else {
                                object.metadata = [];
                                if (options.bytes !== Array)
                                    object.metadata = $util.newBuffer(object.metadata);
                            }
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.created = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.created = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.createdEpoch = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.createdEpoch = options.longs === String ? "0" : 0;
                        }
                        if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                            object.eventStreamId = message.eventStreamId;
                        if (message.eventNumber != null && message.hasOwnProperty("eventNumber"))
                            if (typeof message.eventNumber === "number")
                                object.eventNumber = options.longs === String ? String(message.eventNumber) : message.eventNumber;
                            else
                                object.eventNumber = options.longs === String ? $util.Long.prototype.toString.call(message.eventNumber) : options.longs === Number ? new $util.LongBits(message.eventNumber.low >>> 0, message.eventNumber.high >>> 0).toNumber() : message.eventNumber;
                        if (message.eventId != null && message.hasOwnProperty("eventId"))
                            object.eventId = options.bytes === String ? $util.base64.encode(message.eventId, 0, message.eventId.length) : options.bytes === Array ? Array.prototype.slice.call(message.eventId) : message.eventId;
                        if (message.eventType != null && message.hasOwnProperty("eventType"))
                            object.eventType = message.eventType;
                        if (message.dataContentType != null && message.hasOwnProperty("dataContentType"))
                            object.dataContentType = message.dataContentType;
                        if (message.metadataContentType != null && message.hasOwnProperty("metadataContentType"))
                            object.metadataContentType = message.metadataContentType;
                        if (message.data != null && message.hasOwnProperty("data"))
                            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                        if (message.metadata != null && message.hasOwnProperty("metadata"))
                            object.metadata = options.bytes === String ? $util.base64.encode(message.metadata, 0, message.metadata.length) : options.bytes === Array ? Array.prototype.slice.call(message.metadata) : message.metadata;
                        if (message.created != null && message.hasOwnProperty("created"))
                            if (typeof message.created === "number")
                                object.created = options.longs === String ? String(message.created) : message.created;
                            else
                                object.created = options.longs === String ? $util.Long.prototype.toString.call(message.created) : options.longs === Number ? new $util.LongBits(message.created.low >>> 0, message.created.high >>> 0).toNumber() : message.created;
                        if (message.createdEpoch != null && message.hasOwnProperty("createdEpoch"))
                            if (typeof message.createdEpoch === "number")
                                object.createdEpoch = options.longs === String ? String(message.createdEpoch) : message.createdEpoch;
                            else
                                object.createdEpoch = options.longs === String ? $util.Long.prototype.toString.call(message.createdEpoch) : options.longs === Number ? new $util.LongBits(message.createdEpoch.low >>> 0, message.createdEpoch.high >>> 0).toNumber() : message.createdEpoch;
                        return object;
                    };
    
                    /**
                     * Converts this EventRecord to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.EventRecord
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EventRecord.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return EventRecord;
                })();
    
                Messages.ResolvedIndexedEvent = (function() {
    
                    /**
                     * Properties of a ResolvedIndexedEvent.
                     * @memberof EventStore.Client.Messages
                     * @interface IResolvedIndexedEvent
                     * @property {EventStore.Client.Messages.IEventRecord|null} [event] ResolvedIndexedEvent event
                     * @property {EventStore.Client.Messages.IEventRecord|null} [link] ResolvedIndexedEvent link
                     */
    
                    /**
                     * Constructs a new ResolvedIndexedEvent.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a ResolvedIndexedEvent.
                     * @implements IResolvedIndexedEvent
                     * @constructor
                     * @param {EventStore.Client.Messages.IResolvedIndexedEvent=} [properties] Properties to set
                     */
                    function ResolvedIndexedEvent(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ResolvedIndexedEvent event.
                     * @member {EventStore.Client.Messages.IEventRecord|null|undefined} event
                     * @memberof EventStore.Client.Messages.ResolvedIndexedEvent
                     * @instance
                     */
                    ResolvedIndexedEvent.prototype.event = null;
    
                    /**
                     * ResolvedIndexedEvent link.
                     * @member {EventStore.Client.Messages.IEventRecord|null|undefined} link
                     * @memberof EventStore.Client.Messages.ResolvedIndexedEvent
                     * @instance
                     */
                    ResolvedIndexedEvent.prototype.link = null;
    
                    /**
                     * Creates a new ResolvedIndexedEvent instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.ResolvedIndexedEvent
                     * @static
                     * @param {EventStore.Client.Messages.IResolvedIndexedEvent=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.ResolvedIndexedEvent} ResolvedIndexedEvent instance
                     */
                    ResolvedIndexedEvent.create = function create(properties) {
                        return new ResolvedIndexedEvent(properties);
                    };
    
                    /**
                     * Encodes the specified ResolvedIndexedEvent message. Does not implicitly {@link EventStore.Client.Messages.ResolvedIndexedEvent.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.ResolvedIndexedEvent
                     * @static
                     * @param {EventStore.Client.Messages.IResolvedIndexedEvent} message ResolvedIndexedEvent message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ResolvedIndexedEvent.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.event != null && message.hasOwnProperty("event"))
                            $root.EventStore.Client.Messages.EventRecord.encode(message.event, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.link != null && message.hasOwnProperty("link"))
                            $root.EventStore.Client.Messages.EventRecord.encode(message.link, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ResolvedIndexedEvent message, length delimited. Does not implicitly {@link EventStore.Client.Messages.ResolvedIndexedEvent.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.ResolvedIndexedEvent
                     * @static
                     * @param {EventStore.Client.Messages.IResolvedIndexedEvent} message ResolvedIndexedEvent message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ResolvedIndexedEvent.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ResolvedIndexedEvent message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.ResolvedIndexedEvent
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.ResolvedIndexedEvent} ResolvedIndexedEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResolvedIndexedEvent.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.ResolvedIndexedEvent();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.event = $root.EventStore.Client.Messages.EventRecord.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.link = $root.EventStore.Client.Messages.EventRecord.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ResolvedIndexedEvent message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.ResolvedIndexedEvent
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.ResolvedIndexedEvent} ResolvedIndexedEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResolvedIndexedEvent.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ResolvedIndexedEvent message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.ResolvedIndexedEvent
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ResolvedIndexedEvent.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.event != null && message.hasOwnProperty("event")) {
                            var error = $root.EventStore.Client.Messages.EventRecord.verify(message.event);
                            if (error)
                                return "event." + error;
                        }
                        if (message.link != null && message.hasOwnProperty("link")) {
                            var error = $root.EventStore.Client.Messages.EventRecord.verify(message.link);
                            if (error)
                                return "link." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a ResolvedIndexedEvent message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.ResolvedIndexedEvent
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.ResolvedIndexedEvent} ResolvedIndexedEvent
                     */
                    ResolvedIndexedEvent.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.ResolvedIndexedEvent)
                            return object;
                        var message = new $root.EventStore.Client.Messages.ResolvedIndexedEvent();
                        if (object.event != null) {
                            if (typeof object.event !== "object")
                                throw TypeError(".EventStore.Client.Messages.ResolvedIndexedEvent.event: object expected");
                            message.event = $root.EventStore.Client.Messages.EventRecord.fromObject(object.event);
                        }
                        if (object.link != null) {
                            if (typeof object.link !== "object")
                                throw TypeError(".EventStore.Client.Messages.ResolvedIndexedEvent.link: object expected");
                            message.link = $root.EventStore.Client.Messages.EventRecord.fromObject(object.link);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ResolvedIndexedEvent message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.ResolvedIndexedEvent
                     * @static
                     * @param {EventStore.Client.Messages.ResolvedIndexedEvent} message ResolvedIndexedEvent
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ResolvedIndexedEvent.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.event = null;
                            object.link = null;
                        }
                        if (message.event != null && message.hasOwnProperty("event"))
                            object.event = $root.EventStore.Client.Messages.EventRecord.toObject(message.event, options);
                        if (message.link != null && message.hasOwnProperty("link"))
                            object.link = $root.EventStore.Client.Messages.EventRecord.toObject(message.link, options);
                        return object;
                    };
    
                    /**
                     * Converts this ResolvedIndexedEvent to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.ResolvedIndexedEvent
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ResolvedIndexedEvent.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ResolvedIndexedEvent;
                })();
    
                Messages.ResolvedEvent = (function() {
    
                    /**
                     * Properties of a ResolvedEvent.
                     * @memberof EventStore.Client.Messages
                     * @interface IResolvedEvent
                     * @property {EventStore.Client.Messages.IEventRecord|null} [event] ResolvedEvent event
                     * @property {EventStore.Client.Messages.IEventRecord|null} [link] ResolvedEvent link
                     * @property {number|Long} commitPosition ResolvedEvent commitPosition
                     * @property {number|Long} preparePosition ResolvedEvent preparePosition
                     */
    
                    /**
                     * Constructs a new ResolvedEvent.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a ResolvedEvent.
                     * @implements IResolvedEvent
                     * @constructor
                     * @param {EventStore.Client.Messages.IResolvedEvent=} [properties] Properties to set
                     */
                    function ResolvedEvent(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ResolvedEvent event.
                     * @member {EventStore.Client.Messages.IEventRecord|null|undefined} event
                     * @memberof EventStore.Client.Messages.ResolvedEvent
                     * @instance
                     */
                    ResolvedEvent.prototype.event = null;
    
                    /**
                     * ResolvedEvent link.
                     * @member {EventStore.Client.Messages.IEventRecord|null|undefined} link
                     * @memberof EventStore.Client.Messages.ResolvedEvent
                     * @instance
                     */
                    ResolvedEvent.prototype.link = null;
    
                    /**
                     * ResolvedEvent commitPosition.
                     * @member {number|Long} commitPosition
                     * @memberof EventStore.Client.Messages.ResolvedEvent
                     * @instance
                     */
                    ResolvedEvent.prototype.commitPosition = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * ResolvedEvent preparePosition.
                     * @member {number|Long} preparePosition
                     * @memberof EventStore.Client.Messages.ResolvedEvent
                     * @instance
                     */
                    ResolvedEvent.prototype.preparePosition = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * Creates a new ResolvedEvent instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.ResolvedEvent
                     * @static
                     * @param {EventStore.Client.Messages.IResolvedEvent=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.ResolvedEvent} ResolvedEvent instance
                     */
                    ResolvedEvent.create = function create(properties) {
                        return new ResolvedEvent(properties);
                    };
    
                    /**
                     * Encodes the specified ResolvedEvent message. Does not implicitly {@link EventStore.Client.Messages.ResolvedEvent.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.ResolvedEvent
                     * @static
                     * @param {EventStore.Client.Messages.IResolvedEvent} message ResolvedEvent message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ResolvedEvent.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.event != null && message.hasOwnProperty("event"))
                            $root.EventStore.Client.Messages.EventRecord.encode(message.event, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.link != null && message.hasOwnProperty("link"))
                            $root.EventStore.Client.Messages.EventRecord.encode(message.link, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.commitPosition);
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.preparePosition);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ResolvedEvent message, length delimited. Does not implicitly {@link EventStore.Client.Messages.ResolvedEvent.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.ResolvedEvent
                     * @static
                     * @param {EventStore.Client.Messages.IResolvedEvent} message ResolvedEvent message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ResolvedEvent.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ResolvedEvent message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.ResolvedEvent
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.ResolvedEvent} ResolvedEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResolvedEvent.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.ResolvedEvent();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.event = $root.EventStore.Client.Messages.EventRecord.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.link = $root.EventStore.Client.Messages.EventRecord.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.commitPosition = reader.int64();
                                break;
                            case 4:
                                message.preparePosition = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("commitPosition"))
                            throw $util.ProtocolError("missing required 'commitPosition'", { instance: message });
                        if (!message.hasOwnProperty("preparePosition"))
                            throw $util.ProtocolError("missing required 'preparePosition'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a ResolvedEvent message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.ResolvedEvent
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.ResolvedEvent} ResolvedEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResolvedEvent.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ResolvedEvent message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.ResolvedEvent
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ResolvedEvent.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.event != null && message.hasOwnProperty("event")) {
                            var error = $root.EventStore.Client.Messages.EventRecord.verify(message.event);
                            if (error)
                                return "event." + error;
                        }
                        if (message.link != null && message.hasOwnProperty("link")) {
                            var error = $root.EventStore.Client.Messages.EventRecord.verify(message.link);
                            if (error)
                                return "link." + error;
                        }
                        if (!$util.isInteger(message.commitPosition) && !(message.commitPosition && $util.isInteger(message.commitPosition.low) && $util.isInteger(message.commitPosition.high)))
                            return "commitPosition: integer|Long expected";
                        if (!$util.isInteger(message.preparePosition) && !(message.preparePosition && $util.isInteger(message.preparePosition.low) && $util.isInteger(message.preparePosition.high)))
                            return "preparePosition: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates a ResolvedEvent message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.ResolvedEvent
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.ResolvedEvent} ResolvedEvent
                     */
                    ResolvedEvent.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.ResolvedEvent)
                            return object;
                        var message = new $root.EventStore.Client.Messages.ResolvedEvent();
                        if (object.event != null) {
                            if (typeof object.event !== "object")
                                throw TypeError(".EventStore.Client.Messages.ResolvedEvent.event: object expected");
                            message.event = $root.EventStore.Client.Messages.EventRecord.fromObject(object.event);
                        }
                        if (object.link != null) {
                            if (typeof object.link !== "object")
                                throw TypeError(".EventStore.Client.Messages.ResolvedEvent.link: object expected");
                            message.link = $root.EventStore.Client.Messages.EventRecord.fromObject(object.link);
                        }
                        if (object.commitPosition != null)
                            if ($util.Long)
                                (message.commitPosition = $util.Long.fromValue(object.commitPosition)).unsigned = false;
                            else if (typeof object.commitPosition === "string")
                                message.commitPosition = parseInt(object.commitPosition, 10);
                            else if (typeof object.commitPosition === "number")
                                message.commitPosition = object.commitPosition;
                            else if (typeof object.commitPosition === "object")
                                message.commitPosition = new $util.LongBits(object.commitPosition.low >>> 0, object.commitPosition.high >>> 0).toNumber();
                        if (object.preparePosition != null)
                            if ($util.Long)
                                (message.preparePosition = $util.Long.fromValue(object.preparePosition)).unsigned = false;
                            else if (typeof object.preparePosition === "string")
                                message.preparePosition = parseInt(object.preparePosition, 10);
                            else if (typeof object.preparePosition === "number")
                                message.preparePosition = object.preparePosition;
                            else if (typeof object.preparePosition === "object")
                                message.preparePosition = new $util.LongBits(object.preparePosition.low >>> 0, object.preparePosition.high >>> 0).toNumber();
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ResolvedEvent message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.ResolvedEvent
                     * @static
                     * @param {EventStore.Client.Messages.ResolvedEvent} message ResolvedEvent
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ResolvedEvent.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.event = null;
                            object.link = null;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.commitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.commitPosition = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.preparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.preparePosition = options.longs === String ? "0" : 0;
                        }
                        if (message.event != null && message.hasOwnProperty("event"))
                            object.event = $root.EventStore.Client.Messages.EventRecord.toObject(message.event, options);
                        if (message.link != null && message.hasOwnProperty("link"))
                            object.link = $root.EventStore.Client.Messages.EventRecord.toObject(message.link, options);
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            if (typeof message.commitPosition === "number")
                                object.commitPosition = options.longs === String ? String(message.commitPosition) : message.commitPosition;
                            else
                                object.commitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.commitPosition) : options.longs === Number ? new $util.LongBits(message.commitPosition.low >>> 0, message.commitPosition.high >>> 0).toNumber() : message.commitPosition;
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            if (typeof message.preparePosition === "number")
                                object.preparePosition = options.longs === String ? String(message.preparePosition) : message.preparePosition;
                            else
                                object.preparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.preparePosition) : options.longs === Number ? new $util.LongBits(message.preparePosition.low >>> 0, message.preparePosition.high >>> 0).toNumber() : message.preparePosition;
                        return object;
                    };
    
                    /**
                     * Converts this ResolvedEvent to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.ResolvedEvent
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ResolvedEvent.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ResolvedEvent;
                })();
    
                Messages.WriteEvents = (function() {
    
                    /**
                     * Properties of a WriteEvents.
                     * @memberof EventStore.Client.Messages
                     * @interface IWriteEvents
                     * @property {string} eventStreamId WriteEvents eventStreamId
                     * @property {number|Long} expectedVersion WriteEvents expectedVersion
                     * @property {Array.<EventStore.Client.Messages.INewEvent>|null} [events] WriteEvents events
                     * @property {boolean} requireMaster WriteEvents requireMaster
                     */
    
                    /**
                     * Constructs a new WriteEvents.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a WriteEvents.
                     * @implements IWriteEvents
                     * @constructor
                     * @param {EventStore.Client.Messages.IWriteEvents=} [properties] Properties to set
                     */
                    function WriteEvents(properties) {
                        this.events = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * WriteEvents eventStreamId.
                     * @member {string} eventStreamId
                     * @memberof EventStore.Client.Messages.WriteEvents
                     * @instance
                     */
                    WriteEvents.prototype.eventStreamId = "";
    
                    /**
                     * WriteEvents expectedVersion.
                     * @member {number|Long} expectedVersion
                     * @memberof EventStore.Client.Messages.WriteEvents
                     * @instance
                     */
                    WriteEvents.prototype.expectedVersion = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * WriteEvents events.
                     * @member {Array.<EventStore.Client.Messages.INewEvent>} events
                     * @memberof EventStore.Client.Messages.WriteEvents
                     * @instance
                     */
                    WriteEvents.prototype.events = $util.emptyArray;
    
                    /**
                     * WriteEvents requireMaster.
                     * @member {boolean} requireMaster
                     * @memberof EventStore.Client.Messages.WriteEvents
                     * @instance
                     */
                    WriteEvents.prototype.requireMaster = false;
    
                    /**
                     * Creates a new WriteEvents instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.WriteEvents
                     * @static
                     * @param {EventStore.Client.Messages.IWriteEvents=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.WriteEvents} WriteEvents instance
                     */
                    WriteEvents.create = function create(properties) {
                        return new WriteEvents(properties);
                    };
    
                    /**
                     * Encodes the specified WriteEvents message. Does not implicitly {@link EventStore.Client.Messages.WriteEvents.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.WriteEvents
                     * @static
                     * @param {EventStore.Client.Messages.IWriteEvents} message WriteEvents message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    WriteEvents.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventStreamId);
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.expectedVersion);
                        if (message.events != null && message.events.length)
                            for (var i = 0; i < message.events.length; ++i)
                                $root.EventStore.Client.Messages.NewEvent.encode(message.events[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.requireMaster);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified WriteEvents message, length delimited. Does not implicitly {@link EventStore.Client.Messages.WriteEvents.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.WriteEvents
                     * @static
                     * @param {EventStore.Client.Messages.IWriteEvents} message WriteEvents message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    WriteEvents.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a WriteEvents message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.WriteEvents
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.WriteEvents} WriteEvents
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    WriteEvents.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.WriteEvents();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.eventStreamId = reader.string();
                                break;
                            case 2:
                                message.expectedVersion = reader.int64();
                                break;
                            case 3:
                                if (!(message.events && message.events.length))
                                    message.events = [];
                                message.events.push($root.EventStore.Client.Messages.NewEvent.decode(reader, reader.uint32()));
                                break;
                            case 4:
                                message.requireMaster = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("eventStreamId"))
                            throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                        if (!message.hasOwnProperty("expectedVersion"))
                            throw $util.ProtocolError("missing required 'expectedVersion'", { instance: message });
                        if (!message.hasOwnProperty("requireMaster"))
                            throw $util.ProtocolError("missing required 'requireMaster'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a WriteEvents message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.WriteEvents
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.WriteEvents} WriteEvents
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    WriteEvents.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a WriteEvents message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.WriteEvents
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    WriteEvents.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.eventStreamId))
                            return "eventStreamId: string expected";
                        if (!$util.isInteger(message.expectedVersion) && !(message.expectedVersion && $util.isInteger(message.expectedVersion.low) && $util.isInteger(message.expectedVersion.high)))
                            return "expectedVersion: integer|Long expected";
                        if (message.events != null && message.hasOwnProperty("events")) {
                            if (!Array.isArray(message.events))
                                return "events: array expected";
                            for (var i = 0; i < message.events.length; ++i) {
                                var error = $root.EventStore.Client.Messages.NewEvent.verify(message.events[i]);
                                if (error)
                                    return "events." + error;
                            }
                        }
                        if (typeof message.requireMaster !== "boolean")
                            return "requireMaster: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a WriteEvents message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.WriteEvents
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.WriteEvents} WriteEvents
                     */
                    WriteEvents.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.WriteEvents)
                            return object;
                        var message = new $root.EventStore.Client.Messages.WriteEvents();
                        if (object.eventStreamId != null)
                            message.eventStreamId = String(object.eventStreamId);
                        if (object.expectedVersion != null)
                            if ($util.Long)
                                (message.expectedVersion = $util.Long.fromValue(object.expectedVersion)).unsigned = false;
                            else if (typeof object.expectedVersion === "string")
                                message.expectedVersion = parseInt(object.expectedVersion, 10);
                            else if (typeof object.expectedVersion === "number")
                                message.expectedVersion = object.expectedVersion;
                            else if (typeof object.expectedVersion === "object")
                                message.expectedVersion = new $util.LongBits(object.expectedVersion.low >>> 0, object.expectedVersion.high >>> 0).toNumber();
                        if (object.events) {
                            if (!Array.isArray(object.events))
                                throw TypeError(".EventStore.Client.Messages.WriteEvents.events: array expected");
                            message.events = [];
                            for (var i = 0; i < object.events.length; ++i) {
                                if (typeof object.events[i] !== "object")
                                    throw TypeError(".EventStore.Client.Messages.WriteEvents.events: object expected");
                                message.events[i] = $root.EventStore.Client.Messages.NewEvent.fromObject(object.events[i]);
                            }
                        }
                        if (object.requireMaster != null)
                            message.requireMaster = Boolean(object.requireMaster);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a WriteEvents message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.WriteEvents
                     * @static
                     * @param {EventStore.Client.Messages.WriteEvents} message WriteEvents
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    WriteEvents.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.events = [];
                        if (options.defaults) {
                            object.eventStreamId = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.expectedVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.expectedVersion = options.longs === String ? "0" : 0;
                            object.requireMaster = false;
                        }
                        if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                            object.eventStreamId = message.eventStreamId;
                        if (message.expectedVersion != null && message.hasOwnProperty("expectedVersion"))
                            if (typeof message.expectedVersion === "number")
                                object.expectedVersion = options.longs === String ? String(message.expectedVersion) : message.expectedVersion;
                            else
                                object.expectedVersion = options.longs === String ? $util.Long.prototype.toString.call(message.expectedVersion) : options.longs === Number ? new $util.LongBits(message.expectedVersion.low >>> 0, message.expectedVersion.high >>> 0).toNumber() : message.expectedVersion;
                        if (message.events && message.events.length) {
                            object.events = [];
                            for (var j = 0; j < message.events.length; ++j)
                                object.events[j] = $root.EventStore.Client.Messages.NewEvent.toObject(message.events[j], options);
                        }
                        if (message.requireMaster != null && message.hasOwnProperty("requireMaster"))
                            object.requireMaster = message.requireMaster;
                        return object;
                    };
    
                    /**
                     * Converts this WriteEvents to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.WriteEvents
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    WriteEvents.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return WriteEvents;
                })();
    
                Messages.WriteEventsCompleted = (function() {
    
                    /**
                     * Properties of a WriteEventsCompleted.
                     * @memberof EventStore.Client.Messages
                     * @interface IWriteEventsCompleted
                     * @property {EventStore.Client.Messages.OperationResult} result WriteEventsCompleted result
                     * @property {string|null} [message] WriteEventsCompleted message
                     * @property {number|Long} firstEventNumber WriteEventsCompleted firstEventNumber
                     * @property {number|Long} lastEventNumber WriteEventsCompleted lastEventNumber
                     * @property {number|Long|null} [preparePosition] WriteEventsCompleted preparePosition
                     * @property {number|Long|null} [commitPosition] WriteEventsCompleted commitPosition
                     * @property {number|Long|null} [currentVersion] WriteEventsCompleted currentVersion
                     */
    
                    /**
                     * Constructs a new WriteEventsCompleted.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a WriteEventsCompleted.
                     * @implements IWriteEventsCompleted
                     * @constructor
                     * @param {EventStore.Client.Messages.IWriteEventsCompleted=} [properties] Properties to set
                     */
                    function WriteEventsCompleted(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * WriteEventsCompleted result.
                     * @member {EventStore.Client.Messages.OperationResult} result
                     * @memberof EventStore.Client.Messages.WriteEventsCompleted
                     * @instance
                     */
                    WriteEventsCompleted.prototype.result = 0;
    
                    /**
                     * WriteEventsCompleted message.
                     * @member {string} message
                     * @memberof EventStore.Client.Messages.WriteEventsCompleted
                     * @instance
                     */
                    WriteEventsCompleted.prototype.message = "";
    
                    /**
                     * WriteEventsCompleted firstEventNumber.
                     * @member {number|Long} firstEventNumber
                     * @memberof EventStore.Client.Messages.WriteEventsCompleted
                     * @instance
                     */
                    WriteEventsCompleted.prototype.firstEventNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * WriteEventsCompleted lastEventNumber.
                     * @member {number|Long} lastEventNumber
                     * @memberof EventStore.Client.Messages.WriteEventsCompleted
                     * @instance
                     */
                    WriteEventsCompleted.prototype.lastEventNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * WriteEventsCompleted preparePosition.
                     * @member {number|Long} preparePosition
                     * @memberof EventStore.Client.Messages.WriteEventsCompleted
                     * @instance
                     */
                    WriteEventsCompleted.prototype.preparePosition = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * WriteEventsCompleted commitPosition.
                     * @member {number|Long} commitPosition
                     * @memberof EventStore.Client.Messages.WriteEventsCompleted
                     * @instance
                     */
                    WriteEventsCompleted.prototype.commitPosition = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * WriteEventsCompleted currentVersion.
                     * @member {number|Long} currentVersion
                     * @memberof EventStore.Client.Messages.WriteEventsCompleted
                     * @instance
                     */
                    WriteEventsCompleted.prototype.currentVersion = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * Creates a new WriteEventsCompleted instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.WriteEventsCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IWriteEventsCompleted=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.WriteEventsCompleted} WriteEventsCompleted instance
                     */
                    WriteEventsCompleted.create = function create(properties) {
                        return new WriteEventsCompleted(properties);
                    };
    
                    /**
                     * Encodes the specified WriteEventsCompleted message. Does not implicitly {@link EventStore.Client.Messages.WriteEventsCompleted.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.WriteEventsCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IWriteEventsCompleted} message WriteEventsCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    WriteEventsCompleted.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
                        if (message.message != null && message.hasOwnProperty("message"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.firstEventNumber);
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.lastEventNumber);
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.preparePosition);
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.commitPosition);
                        if (message.currentVersion != null && message.hasOwnProperty("currentVersion"))
                            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.currentVersion);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified WriteEventsCompleted message, length delimited. Does not implicitly {@link EventStore.Client.Messages.WriteEventsCompleted.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.WriteEventsCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IWriteEventsCompleted} message WriteEventsCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    WriteEventsCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a WriteEventsCompleted message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.WriteEventsCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.WriteEventsCompleted} WriteEventsCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    WriteEventsCompleted.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.WriteEventsCompleted();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.result = reader.int32();
                                break;
                            case 2:
                                message.message = reader.string();
                                break;
                            case 3:
                                message.firstEventNumber = reader.int64();
                                break;
                            case 4:
                                message.lastEventNumber = reader.int64();
                                break;
                            case 5:
                                message.preparePosition = reader.int64();
                                break;
                            case 6:
                                message.commitPosition = reader.int64();
                                break;
                            case 7:
                                message.currentVersion = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("result"))
                            throw $util.ProtocolError("missing required 'result'", { instance: message });
                        if (!message.hasOwnProperty("firstEventNumber"))
                            throw $util.ProtocolError("missing required 'firstEventNumber'", { instance: message });
                        if (!message.hasOwnProperty("lastEventNumber"))
                            throw $util.ProtocolError("missing required 'lastEventNumber'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a WriteEventsCompleted message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.WriteEventsCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.WriteEventsCompleted} WriteEventsCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    WriteEventsCompleted.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a WriteEventsCompleted message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.WriteEventsCompleted
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    WriteEventsCompleted.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        switch (message.result) {
                        default:
                            return "result: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            break;
                        }
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        if (!$util.isInteger(message.firstEventNumber) && !(message.firstEventNumber && $util.isInteger(message.firstEventNumber.low) && $util.isInteger(message.firstEventNumber.high)))
                            return "firstEventNumber: integer|Long expected";
                        if (!$util.isInteger(message.lastEventNumber) && !(message.lastEventNumber && $util.isInteger(message.lastEventNumber.low) && $util.isInteger(message.lastEventNumber.high)))
                            return "lastEventNumber: integer|Long expected";
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            if (!$util.isInteger(message.preparePosition) && !(message.preparePosition && $util.isInteger(message.preparePosition.low) && $util.isInteger(message.preparePosition.high)))
                                return "preparePosition: integer|Long expected";
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            if (!$util.isInteger(message.commitPosition) && !(message.commitPosition && $util.isInteger(message.commitPosition.low) && $util.isInteger(message.commitPosition.high)))
                                return "commitPosition: integer|Long expected";
                        if (message.currentVersion != null && message.hasOwnProperty("currentVersion"))
                            if (!$util.isInteger(message.currentVersion) && !(message.currentVersion && $util.isInteger(message.currentVersion.low) && $util.isInteger(message.currentVersion.high)))
                                return "currentVersion: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates a WriteEventsCompleted message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.WriteEventsCompleted
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.WriteEventsCompleted} WriteEventsCompleted
                     */
                    WriteEventsCompleted.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.WriteEventsCompleted)
                            return object;
                        var message = new $root.EventStore.Client.Messages.WriteEventsCompleted();
                        switch (object.result) {
                        case "Success":
                        case 0:
                            message.result = 0;
                            break;
                        case "PrepareTimeout":
                        case 1:
                            message.result = 1;
                            break;
                        case "CommitTimeout":
                        case 2:
                            message.result = 2;
                            break;
                        case "ForwardTimeout":
                        case 3:
                            message.result = 3;
                            break;
                        case "WrongExpectedVersion":
                        case 4:
                            message.result = 4;
                            break;
                        case "StreamDeleted":
                        case 5:
                            message.result = 5;
                            break;
                        case "InvalidTransaction":
                        case 6:
                            message.result = 6;
                            break;
                        case "AccessDenied":
                        case 7:
                            message.result = 7;
                            break;
                        }
                        if (object.message != null)
                            message.message = String(object.message);
                        if (object.firstEventNumber != null)
                            if ($util.Long)
                                (message.firstEventNumber = $util.Long.fromValue(object.firstEventNumber)).unsigned = false;
                            else if (typeof object.firstEventNumber === "string")
                                message.firstEventNumber = parseInt(object.firstEventNumber, 10);
                            else if (typeof object.firstEventNumber === "number")
                                message.firstEventNumber = object.firstEventNumber;
                            else if (typeof object.firstEventNumber === "object")
                                message.firstEventNumber = new $util.LongBits(object.firstEventNumber.low >>> 0, object.firstEventNumber.high >>> 0).toNumber();
                        if (object.lastEventNumber != null)
                            if ($util.Long)
                                (message.lastEventNumber = $util.Long.fromValue(object.lastEventNumber)).unsigned = false;
                            else if (typeof object.lastEventNumber === "string")
                                message.lastEventNumber = parseInt(object.lastEventNumber, 10);
                            else if (typeof object.lastEventNumber === "number")
                                message.lastEventNumber = object.lastEventNumber;
                            else if (typeof object.lastEventNumber === "object")
                                message.lastEventNumber = new $util.LongBits(object.lastEventNumber.low >>> 0, object.lastEventNumber.high >>> 0).toNumber();
                        if (object.preparePosition != null)
                            if ($util.Long)
                                (message.preparePosition = $util.Long.fromValue(object.preparePosition)).unsigned = false;
                            else if (typeof object.preparePosition === "string")
                                message.preparePosition = parseInt(object.preparePosition, 10);
                            else if (typeof object.preparePosition === "number")
                                message.preparePosition = object.preparePosition;
                            else if (typeof object.preparePosition === "object")
                                message.preparePosition = new $util.LongBits(object.preparePosition.low >>> 0, object.preparePosition.high >>> 0).toNumber();
                        if (object.commitPosition != null)
                            if ($util.Long)
                                (message.commitPosition = $util.Long.fromValue(object.commitPosition)).unsigned = false;
                            else if (typeof object.commitPosition === "string")
                                message.commitPosition = parseInt(object.commitPosition, 10);
                            else if (typeof object.commitPosition === "number")
                                message.commitPosition = object.commitPosition;
                            else if (typeof object.commitPosition === "object")
                                message.commitPosition = new $util.LongBits(object.commitPosition.low >>> 0, object.commitPosition.high >>> 0).toNumber();
                        if (object.currentVersion != null)
                            if ($util.Long)
                                (message.currentVersion = $util.Long.fromValue(object.currentVersion)).unsigned = false;
                            else if (typeof object.currentVersion === "string")
                                message.currentVersion = parseInt(object.currentVersion, 10);
                            else if (typeof object.currentVersion === "number")
                                message.currentVersion = object.currentVersion;
                            else if (typeof object.currentVersion === "object")
                                message.currentVersion = new $util.LongBits(object.currentVersion.low >>> 0, object.currentVersion.high >>> 0).toNumber();
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a WriteEventsCompleted message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.WriteEventsCompleted
                     * @static
                     * @param {EventStore.Client.Messages.WriteEventsCompleted} message WriteEventsCompleted
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    WriteEventsCompleted.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.result = options.enums === String ? "Success" : 0;
                            object.message = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.firstEventNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.firstEventNumber = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.lastEventNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.lastEventNumber = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.preparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.preparePosition = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.commitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.commitPosition = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.currentVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.currentVersion = options.longs === String ? "0" : 0;
                        }
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = options.enums === String ? $root.EventStore.Client.Messages.OperationResult[message.result] : message.result;
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        if (message.firstEventNumber != null && message.hasOwnProperty("firstEventNumber"))
                            if (typeof message.firstEventNumber === "number")
                                object.firstEventNumber = options.longs === String ? String(message.firstEventNumber) : message.firstEventNumber;
                            else
                                object.firstEventNumber = options.longs === String ? $util.Long.prototype.toString.call(message.firstEventNumber) : options.longs === Number ? new $util.LongBits(message.firstEventNumber.low >>> 0, message.firstEventNumber.high >>> 0).toNumber() : message.firstEventNumber;
                        if (message.lastEventNumber != null && message.hasOwnProperty("lastEventNumber"))
                            if (typeof message.lastEventNumber === "number")
                                object.lastEventNumber = options.longs === String ? String(message.lastEventNumber) : message.lastEventNumber;
                            else
                                object.lastEventNumber = options.longs === String ? $util.Long.prototype.toString.call(message.lastEventNumber) : options.longs === Number ? new $util.LongBits(message.lastEventNumber.low >>> 0, message.lastEventNumber.high >>> 0).toNumber() : message.lastEventNumber;
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            if (typeof message.preparePosition === "number")
                                object.preparePosition = options.longs === String ? String(message.preparePosition) : message.preparePosition;
                            else
                                object.preparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.preparePosition) : options.longs === Number ? new $util.LongBits(message.preparePosition.low >>> 0, message.preparePosition.high >>> 0).toNumber() : message.preparePosition;
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            if (typeof message.commitPosition === "number")
                                object.commitPosition = options.longs === String ? String(message.commitPosition) : message.commitPosition;
                            else
                                object.commitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.commitPosition) : options.longs === Number ? new $util.LongBits(message.commitPosition.low >>> 0, message.commitPosition.high >>> 0).toNumber() : message.commitPosition;
                        if (message.currentVersion != null && message.hasOwnProperty("currentVersion"))
                            if (typeof message.currentVersion === "number")
                                object.currentVersion = options.longs === String ? String(message.currentVersion) : message.currentVersion;
                            else
                                object.currentVersion = options.longs === String ? $util.Long.prototype.toString.call(message.currentVersion) : options.longs === Number ? new $util.LongBits(message.currentVersion.low >>> 0, message.currentVersion.high >>> 0).toNumber() : message.currentVersion;
                        return object;
                    };
    
                    /**
                     * Converts this WriteEventsCompleted to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.WriteEventsCompleted
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    WriteEventsCompleted.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return WriteEventsCompleted;
                })();
    
                Messages.DeleteStream = (function() {
    
                    /**
                     * Properties of a DeleteStream.
                     * @memberof EventStore.Client.Messages
                     * @interface IDeleteStream
                     * @property {string} eventStreamId DeleteStream eventStreamId
                     * @property {number|Long} expectedVersion DeleteStream expectedVersion
                     * @property {boolean} requireMaster DeleteStream requireMaster
                     * @property {boolean|null} [hardDelete] DeleteStream hardDelete
                     */
    
                    /**
                     * Constructs a new DeleteStream.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a DeleteStream.
                     * @implements IDeleteStream
                     * @constructor
                     * @param {EventStore.Client.Messages.IDeleteStream=} [properties] Properties to set
                     */
                    function DeleteStream(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * DeleteStream eventStreamId.
                     * @member {string} eventStreamId
                     * @memberof EventStore.Client.Messages.DeleteStream
                     * @instance
                     */
                    DeleteStream.prototype.eventStreamId = "";
    
                    /**
                     * DeleteStream expectedVersion.
                     * @member {number|Long} expectedVersion
                     * @memberof EventStore.Client.Messages.DeleteStream
                     * @instance
                     */
                    DeleteStream.prototype.expectedVersion = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * DeleteStream requireMaster.
                     * @member {boolean} requireMaster
                     * @memberof EventStore.Client.Messages.DeleteStream
                     * @instance
                     */
                    DeleteStream.prototype.requireMaster = false;
    
                    /**
                     * DeleteStream hardDelete.
                     * @member {boolean} hardDelete
                     * @memberof EventStore.Client.Messages.DeleteStream
                     * @instance
                     */
                    DeleteStream.prototype.hardDelete = false;
    
                    /**
                     * Creates a new DeleteStream instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.DeleteStream
                     * @static
                     * @param {EventStore.Client.Messages.IDeleteStream=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.DeleteStream} DeleteStream instance
                     */
                    DeleteStream.create = function create(properties) {
                        return new DeleteStream(properties);
                    };
    
                    /**
                     * Encodes the specified DeleteStream message. Does not implicitly {@link EventStore.Client.Messages.DeleteStream.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.DeleteStream
                     * @static
                     * @param {EventStore.Client.Messages.IDeleteStream} message DeleteStream message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteStream.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventStreamId);
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.expectedVersion);
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.requireMaster);
                        if (message.hardDelete != null && message.hasOwnProperty("hardDelete"))
                            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.hardDelete);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified DeleteStream message, length delimited. Does not implicitly {@link EventStore.Client.Messages.DeleteStream.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.DeleteStream
                     * @static
                     * @param {EventStore.Client.Messages.IDeleteStream} message DeleteStream message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteStream.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a DeleteStream message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.DeleteStream
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.DeleteStream} DeleteStream
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteStream.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.DeleteStream();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.eventStreamId = reader.string();
                                break;
                            case 2:
                                message.expectedVersion = reader.int64();
                                break;
                            case 3:
                                message.requireMaster = reader.bool();
                                break;
                            case 4:
                                message.hardDelete = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("eventStreamId"))
                            throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                        if (!message.hasOwnProperty("expectedVersion"))
                            throw $util.ProtocolError("missing required 'expectedVersion'", { instance: message });
                        if (!message.hasOwnProperty("requireMaster"))
                            throw $util.ProtocolError("missing required 'requireMaster'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a DeleteStream message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.DeleteStream
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.DeleteStream} DeleteStream
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteStream.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a DeleteStream message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.DeleteStream
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeleteStream.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.eventStreamId))
                            return "eventStreamId: string expected";
                        if (!$util.isInteger(message.expectedVersion) && !(message.expectedVersion && $util.isInteger(message.expectedVersion.low) && $util.isInteger(message.expectedVersion.high)))
                            return "expectedVersion: integer|Long expected";
                        if (typeof message.requireMaster !== "boolean")
                            return "requireMaster: boolean expected";
                        if (message.hardDelete != null && message.hasOwnProperty("hardDelete"))
                            if (typeof message.hardDelete !== "boolean")
                                return "hardDelete: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a DeleteStream message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.DeleteStream
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.DeleteStream} DeleteStream
                     */
                    DeleteStream.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.DeleteStream)
                            return object;
                        var message = new $root.EventStore.Client.Messages.DeleteStream();
                        if (object.eventStreamId != null)
                            message.eventStreamId = String(object.eventStreamId);
                        if (object.expectedVersion != null)
                            if ($util.Long)
                                (message.expectedVersion = $util.Long.fromValue(object.expectedVersion)).unsigned = false;
                            else if (typeof object.expectedVersion === "string")
                                message.expectedVersion = parseInt(object.expectedVersion, 10);
                            else if (typeof object.expectedVersion === "number")
                                message.expectedVersion = object.expectedVersion;
                            else if (typeof object.expectedVersion === "object")
                                message.expectedVersion = new $util.LongBits(object.expectedVersion.low >>> 0, object.expectedVersion.high >>> 0).toNumber();
                        if (object.requireMaster != null)
                            message.requireMaster = Boolean(object.requireMaster);
                        if (object.hardDelete != null)
                            message.hardDelete = Boolean(object.hardDelete);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a DeleteStream message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.DeleteStream
                     * @static
                     * @param {EventStore.Client.Messages.DeleteStream} message DeleteStream
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeleteStream.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.eventStreamId = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.expectedVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.expectedVersion = options.longs === String ? "0" : 0;
                            object.requireMaster = false;
                            object.hardDelete = false;
                        }
                        if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                            object.eventStreamId = message.eventStreamId;
                        if (message.expectedVersion != null && message.hasOwnProperty("expectedVersion"))
                            if (typeof message.expectedVersion === "number")
                                object.expectedVersion = options.longs === String ? String(message.expectedVersion) : message.expectedVersion;
                            else
                                object.expectedVersion = options.longs === String ? $util.Long.prototype.toString.call(message.expectedVersion) : options.longs === Number ? new $util.LongBits(message.expectedVersion.low >>> 0, message.expectedVersion.high >>> 0).toNumber() : message.expectedVersion;
                        if (message.requireMaster != null && message.hasOwnProperty("requireMaster"))
                            object.requireMaster = message.requireMaster;
                        if (message.hardDelete != null && message.hasOwnProperty("hardDelete"))
                            object.hardDelete = message.hardDelete;
                        return object;
                    };
    
                    /**
                     * Converts this DeleteStream to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.DeleteStream
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeleteStream.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return DeleteStream;
                })();
    
                Messages.DeleteStreamCompleted = (function() {
    
                    /**
                     * Properties of a DeleteStreamCompleted.
                     * @memberof EventStore.Client.Messages
                     * @interface IDeleteStreamCompleted
                     * @property {EventStore.Client.Messages.OperationResult} result DeleteStreamCompleted result
                     * @property {string|null} [message] DeleteStreamCompleted message
                     * @property {number|Long|null} [preparePosition] DeleteStreamCompleted preparePosition
                     * @property {number|Long|null} [commitPosition] DeleteStreamCompleted commitPosition
                     */
    
                    /**
                     * Constructs a new DeleteStreamCompleted.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a DeleteStreamCompleted.
                     * @implements IDeleteStreamCompleted
                     * @constructor
                     * @param {EventStore.Client.Messages.IDeleteStreamCompleted=} [properties] Properties to set
                     */
                    function DeleteStreamCompleted(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * DeleteStreamCompleted result.
                     * @member {EventStore.Client.Messages.OperationResult} result
                     * @memberof EventStore.Client.Messages.DeleteStreamCompleted
                     * @instance
                     */
                    DeleteStreamCompleted.prototype.result = 0;
    
                    /**
                     * DeleteStreamCompleted message.
                     * @member {string} message
                     * @memberof EventStore.Client.Messages.DeleteStreamCompleted
                     * @instance
                     */
                    DeleteStreamCompleted.prototype.message = "";
    
                    /**
                     * DeleteStreamCompleted preparePosition.
                     * @member {number|Long} preparePosition
                     * @memberof EventStore.Client.Messages.DeleteStreamCompleted
                     * @instance
                     */
                    DeleteStreamCompleted.prototype.preparePosition = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * DeleteStreamCompleted commitPosition.
                     * @member {number|Long} commitPosition
                     * @memberof EventStore.Client.Messages.DeleteStreamCompleted
                     * @instance
                     */
                    DeleteStreamCompleted.prototype.commitPosition = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * Creates a new DeleteStreamCompleted instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.DeleteStreamCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IDeleteStreamCompleted=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.DeleteStreamCompleted} DeleteStreamCompleted instance
                     */
                    DeleteStreamCompleted.create = function create(properties) {
                        return new DeleteStreamCompleted(properties);
                    };
    
                    /**
                     * Encodes the specified DeleteStreamCompleted message. Does not implicitly {@link EventStore.Client.Messages.DeleteStreamCompleted.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.DeleteStreamCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IDeleteStreamCompleted} message DeleteStreamCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteStreamCompleted.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
                        if (message.message != null && message.hasOwnProperty("message"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.preparePosition);
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.commitPosition);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified DeleteStreamCompleted message, length delimited. Does not implicitly {@link EventStore.Client.Messages.DeleteStreamCompleted.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.DeleteStreamCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IDeleteStreamCompleted} message DeleteStreamCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteStreamCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a DeleteStreamCompleted message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.DeleteStreamCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.DeleteStreamCompleted} DeleteStreamCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteStreamCompleted.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.DeleteStreamCompleted();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.result = reader.int32();
                                break;
                            case 2:
                                message.message = reader.string();
                                break;
                            case 3:
                                message.preparePosition = reader.int64();
                                break;
                            case 4:
                                message.commitPosition = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("result"))
                            throw $util.ProtocolError("missing required 'result'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a DeleteStreamCompleted message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.DeleteStreamCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.DeleteStreamCompleted} DeleteStreamCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteStreamCompleted.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a DeleteStreamCompleted message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.DeleteStreamCompleted
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeleteStreamCompleted.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        switch (message.result) {
                        default:
                            return "result: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            break;
                        }
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            if (!$util.isInteger(message.preparePosition) && !(message.preparePosition && $util.isInteger(message.preparePosition.low) && $util.isInteger(message.preparePosition.high)))
                                return "preparePosition: integer|Long expected";
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            if (!$util.isInteger(message.commitPosition) && !(message.commitPosition && $util.isInteger(message.commitPosition.low) && $util.isInteger(message.commitPosition.high)))
                                return "commitPosition: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates a DeleteStreamCompleted message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.DeleteStreamCompleted
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.DeleteStreamCompleted} DeleteStreamCompleted
                     */
                    DeleteStreamCompleted.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.DeleteStreamCompleted)
                            return object;
                        var message = new $root.EventStore.Client.Messages.DeleteStreamCompleted();
                        switch (object.result) {
                        case "Success":
                        case 0:
                            message.result = 0;
                            break;
                        case "PrepareTimeout":
                        case 1:
                            message.result = 1;
                            break;
                        case "CommitTimeout":
                        case 2:
                            message.result = 2;
                            break;
                        case "ForwardTimeout":
                        case 3:
                            message.result = 3;
                            break;
                        case "WrongExpectedVersion":
                        case 4:
                            message.result = 4;
                            break;
                        case "StreamDeleted":
                        case 5:
                            message.result = 5;
                            break;
                        case "InvalidTransaction":
                        case 6:
                            message.result = 6;
                            break;
                        case "AccessDenied":
                        case 7:
                            message.result = 7;
                            break;
                        }
                        if (object.message != null)
                            message.message = String(object.message);
                        if (object.preparePosition != null)
                            if ($util.Long)
                                (message.preparePosition = $util.Long.fromValue(object.preparePosition)).unsigned = false;
                            else if (typeof object.preparePosition === "string")
                                message.preparePosition = parseInt(object.preparePosition, 10);
                            else if (typeof object.preparePosition === "number")
                                message.preparePosition = object.preparePosition;
                            else if (typeof object.preparePosition === "object")
                                message.preparePosition = new $util.LongBits(object.preparePosition.low >>> 0, object.preparePosition.high >>> 0).toNumber();
                        if (object.commitPosition != null)
                            if ($util.Long)
                                (message.commitPosition = $util.Long.fromValue(object.commitPosition)).unsigned = false;
                            else if (typeof object.commitPosition === "string")
                                message.commitPosition = parseInt(object.commitPosition, 10);
                            else if (typeof object.commitPosition === "number")
                                message.commitPosition = object.commitPosition;
                            else if (typeof object.commitPosition === "object")
                                message.commitPosition = new $util.LongBits(object.commitPosition.low >>> 0, object.commitPosition.high >>> 0).toNumber();
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a DeleteStreamCompleted message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.DeleteStreamCompleted
                     * @static
                     * @param {EventStore.Client.Messages.DeleteStreamCompleted} message DeleteStreamCompleted
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeleteStreamCompleted.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.result = options.enums === String ? "Success" : 0;
                            object.message = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.preparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.preparePosition = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.commitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.commitPosition = options.longs === String ? "0" : 0;
                        }
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = options.enums === String ? $root.EventStore.Client.Messages.OperationResult[message.result] : message.result;
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            if (typeof message.preparePosition === "number")
                                object.preparePosition = options.longs === String ? String(message.preparePosition) : message.preparePosition;
                            else
                                object.preparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.preparePosition) : options.longs === Number ? new $util.LongBits(message.preparePosition.low >>> 0, message.preparePosition.high >>> 0).toNumber() : message.preparePosition;
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            if (typeof message.commitPosition === "number")
                                object.commitPosition = options.longs === String ? String(message.commitPosition) : message.commitPosition;
                            else
                                object.commitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.commitPosition) : options.longs === Number ? new $util.LongBits(message.commitPosition.low >>> 0, message.commitPosition.high >>> 0).toNumber() : message.commitPosition;
                        return object;
                    };
    
                    /**
                     * Converts this DeleteStreamCompleted to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.DeleteStreamCompleted
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeleteStreamCompleted.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return DeleteStreamCompleted;
                })();
    
                Messages.TransactionStart = (function() {
    
                    /**
                     * Properties of a TransactionStart.
                     * @memberof EventStore.Client.Messages
                     * @interface ITransactionStart
                     * @property {string} eventStreamId TransactionStart eventStreamId
                     * @property {number|Long} expectedVersion TransactionStart expectedVersion
                     * @property {boolean} requireMaster TransactionStart requireMaster
                     */
    
                    /**
                     * Constructs a new TransactionStart.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a TransactionStart.
                     * @implements ITransactionStart
                     * @constructor
                     * @param {EventStore.Client.Messages.ITransactionStart=} [properties] Properties to set
                     */
                    function TransactionStart(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * TransactionStart eventStreamId.
                     * @member {string} eventStreamId
                     * @memberof EventStore.Client.Messages.TransactionStart
                     * @instance
                     */
                    TransactionStart.prototype.eventStreamId = "";
    
                    /**
                     * TransactionStart expectedVersion.
                     * @member {number|Long} expectedVersion
                     * @memberof EventStore.Client.Messages.TransactionStart
                     * @instance
                     */
                    TransactionStart.prototype.expectedVersion = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * TransactionStart requireMaster.
                     * @member {boolean} requireMaster
                     * @memberof EventStore.Client.Messages.TransactionStart
                     * @instance
                     */
                    TransactionStart.prototype.requireMaster = false;
    
                    /**
                     * Creates a new TransactionStart instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.TransactionStart
                     * @static
                     * @param {EventStore.Client.Messages.ITransactionStart=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.TransactionStart} TransactionStart instance
                     */
                    TransactionStart.create = function create(properties) {
                        return new TransactionStart(properties);
                    };
    
                    /**
                     * Encodes the specified TransactionStart message. Does not implicitly {@link EventStore.Client.Messages.TransactionStart.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.TransactionStart
                     * @static
                     * @param {EventStore.Client.Messages.ITransactionStart} message TransactionStart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TransactionStart.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventStreamId);
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.expectedVersion);
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.requireMaster);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified TransactionStart message, length delimited. Does not implicitly {@link EventStore.Client.Messages.TransactionStart.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.TransactionStart
                     * @static
                     * @param {EventStore.Client.Messages.ITransactionStart} message TransactionStart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TransactionStart.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a TransactionStart message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.TransactionStart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.TransactionStart} TransactionStart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TransactionStart.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.TransactionStart();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.eventStreamId = reader.string();
                                break;
                            case 2:
                                message.expectedVersion = reader.int64();
                                break;
                            case 3:
                                message.requireMaster = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("eventStreamId"))
                            throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                        if (!message.hasOwnProperty("expectedVersion"))
                            throw $util.ProtocolError("missing required 'expectedVersion'", { instance: message });
                        if (!message.hasOwnProperty("requireMaster"))
                            throw $util.ProtocolError("missing required 'requireMaster'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a TransactionStart message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.TransactionStart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.TransactionStart} TransactionStart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TransactionStart.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a TransactionStart message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.TransactionStart
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TransactionStart.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.eventStreamId))
                            return "eventStreamId: string expected";
                        if (!$util.isInteger(message.expectedVersion) && !(message.expectedVersion && $util.isInteger(message.expectedVersion.low) && $util.isInteger(message.expectedVersion.high)))
                            return "expectedVersion: integer|Long expected";
                        if (typeof message.requireMaster !== "boolean")
                            return "requireMaster: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a TransactionStart message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.TransactionStart
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.TransactionStart} TransactionStart
                     */
                    TransactionStart.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.TransactionStart)
                            return object;
                        var message = new $root.EventStore.Client.Messages.TransactionStart();
                        if (object.eventStreamId != null)
                            message.eventStreamId = String(object.eventStreamId);
                        if (object.expectedVersion != null)
                            if ($util.Long)
                                (message.expectedVersion = $util.Long.fromValue(object.expectedVersion)).unsigned = false;
                            else if (typeof object.expectedVersion === "string")
                                message.expectedVersion = parseInt(object.expectedVersion, 10);
                            else if (typeof object.expectedVersion === "number")
                                message.expectedVersion = object.expectedVersion;
                            else if (typeof object.expectedVersion === "object")
                                message.expectedVersion = new $util.LongBits(object.expectedVersion.low >>> 0, object.expectedVersion.high >>> 0).toNumber();
                        if (object.requireMaster != null)
                            message.requireMaster = Boolean(object.requireMaster);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a TransactionStart message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.TransactionStart
                     * @static
                     * @param {EventStore.Client.Messages.TransactionStart} message TransactionStart
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TransactionStart.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.eventStreamId = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.expectedVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.expectedVersion = options.longs === String ? "0" : 0;
                            object.requireMaster = false;
                        }
                        if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                            object.eventStreamId = message.eventStreamId;
                        if (message.expectedVersion != null && message.hasOwnProperty("expectedVersion"))
                            if (typeof message.expectedVersion === "number")
                                object.expectedVersion = options.longs === String ? String(message.expectedVersion) : message.expectedVersion;
                            else
                                object.expectedVersion = options.longs === String ? $util.Long.prototype.toString.call(message.expectedVersion) : options.longs === Number ? new $util.LongBits(message.expectedVersion.low >>> 0, message.expectedVersion.high >>> 0).toNumber() : message.expectedVersion;
                        if (message.requireMaster != null && message.hasOwnProperty("requireMaster"))
                            object.requireMaster = message.requireMaster;
                        return object;
                    };
    
                    /**
                     * Converts this TransactionStart to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.TransactionStart
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TransactionStart.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return TransactionStart;
                })();
    
                Messages.TransactionStartCompleted = (function() {
    
                    /**
                     * Properties of a TransactionStartCompleted.
                     * @memberof EventStore.Client.Messages
                     * @interface ITransactionStartCompleted
                     * @property {number|Long} transactionId TransactionStartCompleted transactionId
                     * @property {EventStore.Client.Messages.OperationResult} result TransactionStartCompleted result
                     * @property {string|null} [message] TransactionStartCompleted message
                     */
    
                    /**
                     * Constructs a new TransactionStartCompleted.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a TransactionStartCompleted.
                     * @implements ITransactionStartCompleted
                     * @constructor
                     * @param {EventStore.Client.Messages.ITransactionStartCompleted=} [properties] Properties to set
                     */
                    function TransactionStartCompleted(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * TransactionStartCompleted transactionId.
                     * @member {number|Long} transactionId
                     * @memberof EventStore.Client.Messages.TransactionStartCompleted
                     * @instance
                     */
                    TransactionStartCompleted.prototype.transactionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * TransactionStartCompleted result.
                     * @member {EventStore.Client.Messages.OperationResult} result
                     * @memberof EventStore.Client.Messages.TransactionStartCompleted
                     * @instance
                     */
                    TransactionStartCompleted.prototype.result = 0;
    
                    /**
                     * TransactionStartCompleted message.
                     * @member {string} message
                     * @memberof EventStore.Client.Messages.TransactionStartCompleted
                     * @instance
                     */
                    TransactionStartCompleted.prototype.message = "";
    
                    /**
                     * Creates a new TransactionStartCompleted instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.TransactionStartCompleted
                     * @static
                     * @param {EventStore.Client.Messages.ITransactionStartCompleted=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.TransactionStartCompleted} TransactionStartCompleted instance
                     */
                    TransactionStartCompleted.create = function create(properties) {
                        return new TransactionStartCompleted(properties);
                    };
    
                    /**
                     * Encodes the specified TransactionStartCompleted message. Does not implicitly {@link EventStore.Client.Messages.TransactionStartCompleted.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.TransactionStartCompleted
                     * @static
                     * @param {EventStore.Client.Messages.ITransactionStartCompleted} message TransactionStartCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TransactionStartCompleted.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.transactionId);
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
                        if (message.message != null && message.hasOwnProperty("message"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified TransactionStartCompleted message, length delimited. Does not implicitly {@link EventStore.Client.Messages.TransactionStartCompleted.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.TransactionStartCompleted
                     * @static
                     * @param {EventStore.Client.Messages.ITransactionStartCompleted} message TransactionStartCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TransactionStartCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a TransactionStartCompleted message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.TransactionStartCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.TransactionStartCompleted} TransactionStartCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TransactionStartCompleted.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.TransactionStartCompleted();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.transactionId = reader.int64();
                                break;
                            case 2:
                                message.result = reader.int32();
                                break;
                            case 3:
                                message.message = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("transactionId"))
                            throw $util.ProtocolError("missing required 'transactionId'", { instance: message });
                        if (!message.hasOwnProperty("result"))
                            throw $util.ProtocolError("missing required 'result'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a TransactionStartCompleted message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.TransactionStartCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.TransactionStartCompleted} TransactionStartCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TransactionStartCompleted.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a TransactionStartCompleted message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.TransactionStartCompleted
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TransactionStartCompleted.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isInteger(message.transactionId) && !(message.transactionId && $util.isInteger(message.transactionId.low) && $util.isInteger(message.transactionId.high)))
                            return "transactionId: integer|Long expected";
                        switch (message.result) {
                        default:
                            return "result: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            break;
                        }
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a TransactionStartCompleted message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.TransactionStartCompleted
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.TransactionStartCompleted} TransactionStartCompleted
                     */
                    TransactionStartCompleted.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.TransactionStartCompleted)
                            return object;
                        var message = new $root.EventStore.Client.Messages.TransactionStartCompleted();
                        if (object.transactionId != null)
                            if ($util.Long)
                                (message.transactionId = $util.Long.fromValue(object.transactionId)).unsigned = false;
                            else if (typeof object.transactionId === "string")
                                message.transactionId = parseInt(object.transactionId, 10);
                            else if (typeof object.transactionId === "number")
                                message.transactionId = object.transactionId;
                            else if (typeof object.transactionId === "object")
                                message.transactionId = new $util.LongBits(object.transactionId.low >>> 0, object.transactionId.high >>> 0).toNumber();
                        switch (object.result) {
                        case "Success":
                        case 0:
                            message.result = 0;
                            break;
                        case "PrepareTimeout":
                        case 1:
                            message.result = 1;
                            break;
                        case "CommitTimeout":
                        case 2:
                            message.result = 2;
                            break;
                        case "ForwardTimeout":
                        case 3:
                            message.result = 3;
                            break;
                        case "WrongExpectedVersion":
                        case 4:
                            message.result = 4;
                            break;
                        case "StreamDeleted":
                        case 5:
                            message.result = 5;
                            break;
                        case "InvalidTransaction":
                        case 6:
                            message.result = 6;
                            break;
                        case "AccessDenied":
                        case 7:
                            message.result = 7;
                            break;
                        }
                        if (object.message != null)
                            message.message = String(object.message);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a TransactionStartCompleted message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.TransactionStartCompleted
                     * @static
                     * @param {EventStore.Client.Messages.TransactionStartCompleted} message TransactionStartCompleted
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TransactionStartCompleted.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.transactionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.transactionId = options.longs === String ? "0" : 0;
                            object.result = options.enums === String ? "Success" : 0;
                            object.message = "";
                        }
                        if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                            if (typeof message.transactionId === "number")
                                object.transactionId = options.longs === String ? String(message.transactionId) : message.transactionId;
                            else
                                object.transactionId = options.longs === String ? $util.Long.prototype.toString.call(message.transactionId) : options.longs === Number ? new $util.LongBits(message.transactionId.low >>> 0, message.transactionId.high >>> 0).toNumber() : message.transactionId;
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = options.enums === String ? $root.EventStore.Client.Messages.OperationResult[message.result] : message.result;
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        return object;
                    };
    
                    /**
                     * Converts this TransactionStartCompleted to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.TransactionStartCompleted
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TransactionStartCompleted.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return TransactionStartCompleted;
                })();
    
                Messages.TransactionWrite = (function() {
    
                    /**
                     * Properties of a TransactionWrite.
                     * @memberof EventStore.Client.Messages
                     * @interface ITransactionWrite
                     * @property {number|Long} transactionId TransactionWrite transactionId
                     * @property {Array.<EventStore.Client.Messages.INewEvent>|null} [events] TransactionWrite events
                     * @property {boolean} requireMaster TransactionWrite requireMaster
                     */
    
                    /**
                     * Constructs a new TransactionWrite.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a TransactionWrite.
                     * @implements ITransactionWrite
                     * @constructor
                     * @param {EventStore.Client.Messages.ITransactionWrite=} [properties] Properties to set
                     */
                    function TransactionWrite(properties) {
                        this.events = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * TransactionWrite transactionId.
                     * @member {number|Long} transactionId
                     * @memberof EventStore.Client.Messages.TransactionWrite
                     * @instance
                     */
                    TransactionWrite.prototype.transactionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * TransactionWrite events.
                     * @member {Array.<EventStore.Client.Messages.INewEvent>} events
                     * @memberof EventStore.Client.Messages.TransactionWrite
                     * @instance
                     */
                    TransactionWrite.prototype.events = $util.emptyArray;
    
                    /**
                     * TransactionWrite requireMaster.
                     * @member {boolean} requireMaster
                     * @memberof EventStore.Client.Messages.TransactionWrite
                     * @instance
                     */
                    TransactionWrite.prototype.requireMaster = false;
    
                    /**
                     * Creates a new TransactionWrite instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.TransactionWrite
                     * @static
                     * @param {EventStore.Client.Messages.ITransactionWrite=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.TransactionWrite} TransactionWrite instance
                     */
                    TransactionWrite.create = function create(properties) {
                        return new TransactionWrite(properties);
                    };
    
                    /**
                     * Encodes the specified TransactionWrite message. Does not implicitly {@link EventStore.Client.Messages.TransactionWrite.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.TransactionWrite
                     * @static
                     * @param {EventStore.Client.Messages.ITransactionWrite} message TransactionWrite message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TransactionWrite.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.transactionId);
                        if (message.events != null && message.events.length)
                            for (var i = 0; i < message.events.length; ++i)
                                $root.EventStore.Client.Messages.NewEvent.encode(message.events[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.requireMaster);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified TransactionWrite message, length delimited. Does not implicitly {@link EventStore.Client.Messages.TransactionWrite.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.TransactionWrite
                     * @static
                     * @param {EventStore.Client.Messages.ITransactionWrite} message TransactionWrite message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TransactionWrite.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a TransactionWrite message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.TransactionWrite
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.TransactionWrite} TransactionWrite
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TransactionWrite.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.TransactionWrite();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.transactionId = reader.int64();
                                break;
                            case 2:
                                if (!(message.events && message.events.length))
                                    message.events = [];
                                message.events.push($root.EventStore.Client.Messages.NewEvent.decode(reader, reader.uint32()));
                                break;
                            case 3:
                                message.requireMaster = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("transactionId"))
                            throw $util.ProtocolError("missing required 'transactionId'", { instance: message });
                        if (!message.hasOwnProperty("requireMaster"))
                            throw $util.ProtocolError("missing required 'requireMaster'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a TransactionWrite message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.TransactionWrite
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.TransactionWrite} TransactionWrite
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TransactionWrite.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a TransactionWrite message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.TransactionWrite
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TransactionWrite.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isInteger(message.transactionId) && !(message.transactionId && $util.isInteger(message.transactionId.low) && $util.isInteger(message.transactionId.high)))
                            return "transactionId: integer|Long expected";
                        if (message.events != null && message.hasOwnProperty("events")) {
                            if (!Array.isArray(message.events))
                                return "events: array expected";
                            for (var i = 0; i < message.events.length; ++i) {
                                var error = $root.EventStore.Client.Messages.NewEvent.verify(message.events[i]);
                                if (error)
                                    return "events." + error;
                            }
                        }
                        if (typeof message.requireMaster !== "boolean")
                            return "requireMaster: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a TransactionWrite message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.TransactionWrite
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.TransactionWrite} TransactionWrite
                     */
                    TransactionWrite.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.TransactionWrite)
                            return object;
                        var message = new $root.EventStore.Client.Messages.TransactionWrite();
                        if (object.transactionId != null)
                            if ($util.Long)
                                (message.transactionId = $util.Long.fromValue(object.transactionId)).unsigned = false;
                            else if (typeof object.transactionId === "string")
                                message.transactionId = parseInt(object.transactionId, 10);
                            else if (typeof object.transactionId === "number")
                                message.transactionId = object.transactionId;
                            else if (typeof object.transactionId === "object")
                                message.transactionId = new $util.LongBits(object.transactionId.low >>> 0, object.transactionId.high >>> 0).toNumber();
                        if (object.events) {
                            if (!Array.isArray(object.events))
                                throw TypeError(".EventStore.Client.Messages.TransactionWrite.events: array expected");
                            message.events = [];
                            for (var i = 0; i < object.events.length; ++i) {
                                if (typeof object.events[i] !== "object")
                                    throw TypeError(".EventStore.Client.Messages.TransactionWrite.events: object expected");
                                message.events[i] = $root.EventStore.Client.Messages.NewEvent.fromObject(object.events[i]);
                            }
                        }
                        if (object.requireMaster != null)
                            message.requireMaster = Boolean(object.requireMaster);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a TransactionWrite message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.TransactionWrite
                     * @static
                     * @param {EventStore.Client.Messages.TransactionWrite} message TransactionWrite
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TransactionWrite.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.events = [];
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.transactionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.transactionId = options.longs === String ? "0" : 0;
                            object.requireMaster = false;
                        }
                        if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                            if (typeof message.transactionId === "number")
                                object.transactionId = options.longs === String ? String(message.transactionId) : message.transactionId;
                            else
                                object.transactionId = options.longs === String ? $util.Long.prototype.toString.call(message.transactionId) : options.longs === Number ? new $util.LongBits(message.transactionId.low >>> 0, message.transactionId.high >>> 0).toNumber() : message.transactionId;
                        if (message.events && message.events.length) {
                            object.events = [];
                            for (var j = 0; j < message.events.length; ++j)
                                object.events[j] = $root.EventStore.Client.Messages.NewEvent.toObject(message.events[j], options);
                        }
                        if (message.requireMaster != null && message.hasOwnProperty("requireMaster"))
                            object.requireMaster = message.requireMaster;
                        return object;
                    };
    
                    /**
                     * Converts this TransactionWrite to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.TransactionWrite
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TransactionWrite.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return TransactionWrite;
                })();
    
                Messages.TransactionWriteCompleted = (function() {
    
                    /**
                     * Properties of a TransactionWriteCompleted.
                     * @memberof EventStore.Client.Messages
                     * @interface ITransactionWriteCompleted
                     * @property {number|Long} transactionId TransactionWriteCompleted transactionId
                     * @property {EventStore.Client.Messages.OperationResult} result TransactionWriteCompleted result
                     * @property {string|null} [message] TransactionWriteCompleted message
                     */
    
                    /**
                     * Constructs a new TransactionWriteCompleted.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a TransactionWriteCompleted.
                     * @implements ITransactionWriteCompleted
                     * @constructor
                     * @param {EventStore.Client.Messages.ITransactionWriteCompleted=} [properties] Properties to set
                     */
                    function TransactionWriteCompleted(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * TransactionWriteCompleted transactionId.
                     * @member {number|Long} transactionId
                     * @memberof EventStore.Client.Messages.TransactionWriteCompleted
                     * @instance
                     */
                    TransactionWriteCompleted.prototype.transactionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * TransactionWriteCompleted result.
                     * @member {EventStore.Client.Messages.OperationResult} result
                     * @memberof EventStore.Client.Messages.TransactionWriteCompleted
                     * @instance
                     */
                    TransactionWriteCompleted.prototype.result = 0;
    
                    /**
                     * TransactionWriteCompleted message.
                     * @member {string} message
                     * @memberof EventStore.Client.Messages.TransactionWriteCompleted
                     * @instance
                     */
                    TransactionWriteCompleted.prototype.message = "";
    
                    /**
                     * Creates a new TransactionWriteCompleted instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.TransactionWriteCompleted
                     * @static
                     * @param {EventStore.Client.Messages.ITransactionWriteCompleted=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.TransactionWriteCompleted} TransactionWriteCompleted instance
                     */
                    TransactionWriteCompleted.create = function create(properties) {
                        return new TransactionWriteCompleted(properties);
                    };
    
                    /**
                     * Encodes the specified TransactionWriteCompleted message. Does not implicitly {@link EventStore.Client.Messages.TransactionWriteCompleted.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.TransactionWriteCompleted
                     * @static
                     * @param {EventStore.Client.Messages.ITransactionWriteCompleted} message TransactionWriteCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TransactionWriteCompleted.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.transactionId);
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
                        if (message.message != null && message.hasOwnProperty("message"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified TransactionWriteCompleted message, length delimited. Does not implicitly {@link EventStore.Client.Messages.TransactionWriteCompleted.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.TransactionWriteCompleted
                     * @static
                     * @param {EventStore.Client.Messages.ITransactionWriteCompleted} message TransactionWriteCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TransactionWriteCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a TransactionWriteCompleted message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.TransactionWriteCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.TransactionWriteCompleted} TransactionWriteCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TransactionWriteCompleted.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.TransactionWriteCompleted();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.transactionId = reader.int64();
                                break;
                            case 2:
                                message.result = reader.int32();
                                break;
                            case 3:
                                message.message = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("transactionId"))
                            throw $util.ProtocolError("missing required 'transactionId'", { instance: message });
                        if (!message.hasOwnProperty("result"))
                            throw $util.ProtocolError("missing required 'result'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a TransactionWriteCompleted message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.TransactionWriteCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.TransactionWriteCompleted} TransactionWriteCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TransactionWriteCompleted.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a TransactionWriteCompleted message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.TransactionWriteCompleted
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TransactionWriteCompleted.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isInteger(message.transactionId) && !(message.transactionId && $util.isInteger(message.transactionId.low) && $util.isInteger(message.transactionId.high)))
                            return "transactionId: integer|Long expected";
                        switch (message.result) {
                        default:
                            return "result: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            break;
                        }
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a TransactionWriteCompleted message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.TransactionWriteCompleted
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.TransactionWriteCompleted} TransactionWriteCompleted
                     */
                    TransactionWriteCompleted.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.TransactionWriteCompleted)
                            return object;
                        var message = new $root.EventStore.Client.Messages.TransactionWriteCompleted();
                        if (object.transactionId != null)
                            if ($util.Long)
                                (message.transactionId = $util.Long.fromValue(object.transactionId)).unsigned = false;
                            else if (typeof object.transactionId === "string")
                                message.transactionId = parseInt(object.transactionId, 10);
                            else if (typeof object.transactionId === "number")
                                message.transactionId = object.transactionId;
                            else if (typeof object.transactionId === "object")
                                message.transactionId = new $util.LongBits(object.transactionId.low >>> 0, object.transactionId.high >>> 0).toNumber();
                        switch (object.result) {
                        case "Success":
                        case 0:
                            message.result = 0;
                            break;
                        case "PrepareTimeout":
                        case 1:
                            message.result = 1;
                            break;
                        case "CommitTimeout":
                        case 2:
                            message.result = 2;
                            break;
                        case "ForwardTimeout":
                        case 3:
                            message.result = 3;
                            break;
                        case "WrongExpectedVersion":
                        case 4:
                            message.result = 4;
                            break;
                        case "StreamDeleted":
                        case 5:
                            message.result = 5;
                            break;
                        case "InvalidTransaction":
                        case 6:
                            message.result = 6;
                            break;
                        case "AccessDenied":
                        case 7:
                            message.result = 7;
                            break;
                        }
                        if (object.message != null)
                            message.message = String(object.message);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a TransactionWriteCompleted message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.TransactionWriteCompleted
                     * @static
                     * @param {EventStore.Client.Messages.TransactionWriteCompleted} message TransactionWriteCompleted
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TransactionWriteCompleted.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.transactionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.transactionId = options.longs === String ? "0" : 0;
                            object.result = options.enums === String ? "Success" : 0;
                            object.message = "";
                        }
                        if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                            if (typeof message.transactionId === "number")
                                object.transactionId = options.longs === String ? String(message.transactionId) : message.transactionId;
                            else
                                object.transactionId = options.longs === String ? $util.Long.prototype.toString.call(message.transactionId) : options.longs === Number ? new $util.LongBits(message.transactionId.low >>> 0, message.transactionId.high >>> 0).toNumber() : message.transactionId;
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = options.enums === String ? $root.EventStore.Client.Messages.OperationResult[message.result] : message.result;
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        return object;
                    };
    
                    /**
                     * Converts this TransactionWriteCompleted to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.TransactionWriteCompleted
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TransactionWriteCompleted.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return TransactionWriteCompleted;
                })();
    
                Messages.TransactionCommit = (function() {
    
                    /**
                     * Properties of a TransactionCommit.
                     * @memberof EventStore.Client.Messages
                     * @interface ITransactionCommit
                     * @property {number|Long} transactionId TransactionCommit transactionId
                     * @property {boolean} requireMaster TransactionCommit requireMaster
                     */
    
                    /**
                     * Constructs a new TransactionCommit.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a TransactionCommit.
                     * @implements ITransactionCommit
                     * @constructor
                     * @param {EventStore.Client.Messages.ITransactionCommit=} [properties] Properties to set
                     */
                    function TransactionCommit(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * TransactionCommit transactionId.
                     * @member {number|Long} transactionId
                     * @memberof EventStore.Client.Messages.TransactionCommit
                     * @instance
                     */
                    TransactionCommit.prototype.transactionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * TransactionCommit requireMaster.
                     * @member {boolean} requireMaster
                     * @memberof EventStore.Client.Messages.TransactionCommit
                     * @instance
                     */
                    TransactionCommit.prototype.requireMaster = false;
    
                    /**
                     * Creates a new TransactionCommit instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.TransactionCommit
                     * @static
                     * @param {EventStore.Client.Messages.ITransactionCommit=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.TransactionCommit} TransactionCommit instance
                     */
                    TransactionCommit.create = function create(properties) {
                        return new TransactionCommit(properties);
                    };
    
                    /**
                     * Encodes the specified TransactionCommit message. Does not implicitly {@link EventStore.Client.Messages.TransactionCommit.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.TransactionCommit
                     * @static
                     * @param {EventStore.Client.Messages.ITransactionCommit} message TransactionCommit message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TransactionCommit.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.transactionId);
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.requireMaster);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified TransactionCommit message, length delimited. Does not implicitly {@link EventStore.Client.Messages.TransactionCommit.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.TransactionCommit
                     * @static
                     * @param {EventStore.Client.Messages.ITransactionCommit} message TransactionCommit message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TransactionCommit.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a TransactionCommit message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.TransactionCommit
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.TransactionCommit} TransactionCommit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TransactionCommit.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.TransactionCommit();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.transactionId = reader.int64();
                                break;
                            case 2:
                                message.requireMaster = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("transactionId"))
                            throw $util.ProtocolError("missing required 'transactionId'", { instance: message });
                        if (!message.hasOwnProperty("requireMaster"))
                            throw $util.ProtocolError("missing required 'requireMaster'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a TransactionCommit message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.TransactionCommit
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.TransactionCommit} TransactionCommit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TransactionCommit.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a TransactionCommit message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.TransactionCommit
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TransactionCommit.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isInteger(message.transactionId) && !(message.transactionId && $util.isInteger(message.transactionId.low) && $util.isInteger(message.transactionId.high)))
                            return "transactionId: integer|Long expected";
                        if (typeof message.requireMaster !== "boolean")
                            return "requireMaster: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a TransactionCommit message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.TransactionCommit
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.TransactionCommit} TransactionCommit
                     */
                    TransactionCommit.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.TransactionCommit)
                            return object;
                        var message = new $root.EventStore.Client.Messages.TransactionCommit();
                        if (object.transactionId != null)
                            if ($util.Long)
                                (message.transactionId = $util.Long.fromValue(object.transactionId)).unsigned = false;
                            else if (typeof object.transactionId === "string")
                                message.transactionId = parseInt(object.transactionId, 10);
                            else if (typeof object.transactionId === "number")
                                message.transactionId = object.transactionId;
                            else if (typeof object.transactionId === "object")
                                message.transactionId = new $util.LongBits(object.transactionId.low >>> 0, object.transactionId.high >>> 0).toNumber();
                        if (object.requireMaster != null)
                            message.requireMaster = Boolean(object.requireMaster);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a TransactionCommit message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.TransactionCommit
                     * @static
                     * @param {EventStore.Client.Messages.TransactionCommit} message TransactionCommit
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TransactionCommit.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.transactionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.transactionId = options.longs === String ? "0" : 0;
                            object.requireMaster = false;
                        }
                        if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                            if (typeof message.transactionId === "number")
                                object.transactionId = options.longs === String ? String(message.transactionId) : message.transactionId;
                            else
                                object.transactionId = options.longs === String ? $util.Long.prototype.toString.call(message.transactionId) : options.longs === Number ? new $util.LongBits(message.transactionId.low >>> 0, message.transactionId.high >>> 0).toNumber() : message.transactionId;
                        if (message.requireMaster != null && message.hasOwnProperty("requireMaster"))
                            object.requireMaster = message.requireMaster;
                        return object;
                    };
    
                    /**
                     * Converts this TransactionCommit to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.TransactionCommit
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TransactionCommit.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return TransactionCommit;
                })();
    
                Messages.TransactionCommitCompleted = (function() {
    
                    /**
                     * Properties of a TransactionCommitCompleted.
                     * @memberof EventStore.Client.Messages
                     * @interface ITransactionCommitCompleted
                     * @property {number|Long} transactionId TransactionCommitCompleted transactionId
                     * @property {EventStore.Client.Messages.OperationResult} result TransactionCommitCompleted result
                     * @property {string|null} [message] TransactionCommitCompleted message
                     * @property {number|Long} firstEventNumber TransactionCommitCompleted firstEventNumber
                     * @property {number|Long} lastEventNumber TransactionCommitCompleted lastEventNumber
                     * @property {number|Long|null} [preparePosition] TransactionCommitCompleted preparePosition
                     * @property {number|Long|null} [commitPosition] TransactionCommitCompleted commitPosition
                     */
    
                    /**
                     * Constructs a new TransactionCommitCompleted.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a TransactionCommitCompleted.
                     * @implements ITransactionCommitCompleted
                     * @constructor
                     * @param {EventStore.Client.Messages.ITransactionCommitCompleted=} [properties] Properties to set
                     */
                    function TransactionCommitCompleted(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * TransactionCommitCompleted transactionId.
                     * @member {number|Long} transactionId
                     * @memberof EventStore.Client.Messages.TransactionCommitCompleted
                     * @instance
                     */
                    TransactionCommitCompleted.prototype.transactionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * TransactionCommitCompleted result.
                     * @member {EventStore.Client.Messages.OperationResult} result
                     * @memberof EventStore.Client.Messages.TransactionCommitCompleted
                     * @instance
                     */
                    TransactionCommitCompleted.prototype.result = 0;
    
                    /**
                     * TransactionCommitCompleted message.
                     * @member {string} message
                     * @memberof EventStore.Client.Messages.TransactionCommitCompleted
                     * @instance
                     */
                    TransactionCommitCompleted.prototype.message = "";
    
                    /**
                     * TransactionCommitCompleted firstEventNumber.
                     * @member {number|Long} firstEventNumber
                     * @memberof EventStore.Client.Messages.TransactionCommitCompleted
                     * @instance
                     */
                    TransactionCommitCompleted.prototype.firstEventNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * TransactionCommitCompleted lastEventNumber.
                     * @member {number|Long} lastEventNumber
                     * @memberof EventStore.Client.Messages.TransactionCommitCompleted
                     * @instance
                     */
                    TransactionCommitCompleted.prototype.lastEventNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * TransactionCommitCompleted preparePosition.
                     * @member {number|Long} preparePosition
                     * @memberof EventStore.Client.Messages.TransactionCommitCompleted
                     * @instance
                     */
                    TransactionCommitCompleted.prototype.preparePosition = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * TransactionCommitCompleted commitPosition.
                     * @member {number|Long} commitPosition
                     * @memberof EventStore.Client.Messages.TransactionCommitCompleted
                     * @instance
                     */
                    TransactionCommitCompleted.prototype.commitPosition = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * Creates a new TransactionCommitCompleted instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.TransactionCommitCompleted
                     * @static
                     * @param {EventStore.Client.Messages.ITransactionCommitCompleted=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.TransactionCommitCompleted} TransactionCommitCompleted instance
                     */
                    TransactionCommitCompleted.create = function create(properties) {
                        return new TransactionCommitCompleted(properties);
                    };
    
                    /**
                     * Encodes the specified TransactionCommitCompleted message. Does not implicitly {@link EventStore.Client.Messages.TransactionCommitCompleted.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.TransactionCommitCompleted
                     * @static
                     * @param {EventStore.Client.Messages.ITransactionCommitCompleted} message TransactionCommitCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TransactionCommitCompleted.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.transactionId);
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
                        if (message.message != null && message.hasOwnProperty("message"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.firstEventNumber);
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.lastEventNumber);
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.preparePosition);
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.commitPosition);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified TransactionCommitCompleted message, length delimited. Does not implicitly {@link EventStore.Client.Messages.TransactionCommitCompleted.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.TransactionCommitCompleted
                     * @static
                     * @param {EventStore.Client.Messages.ITransactionCommitCompleted} message TransactionCommitCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TransactionCommitCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a TransactionCommitCompleted message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.TransactionCommitCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.TransactionCommitCompleted} TransactionCommitCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TransactionCommitCompleted.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.TransactionCommitCompleted();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.transactionId = reader.int64();
                                break;
                            case 2:
                                message.result = reader.int32();
                                break;
                            case 3:
                                message.message = reader.string();
                                break;
                            case 4:
                                message.firstEventNumber = reader.int64();
                                break;
                            case 5:
                                message.lastEventNumber = reader.int64();
                                break;
                            case 6:
                                message.preparePosition = reader.int64();
                                break;
                            case 7:
                                message.commitPosition = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("transactionId"))
                            throw $util.ProtocolError("missing required 'transactionId'", { instance: message });
                        if (!message.hasOwnProperty("result"))
                            throw $util.ProtocolError("missing required 'result'", { instance: message });
                        if (!message.hasOwnProperty("firstEventNumber"))
                            throw $util.ProtocolError("missing required 'firstEventNumber'", { instance: message });
                        if (!message.hasOwnProperty("lastEventNumber"))
                            throw $util.ProtocolError("missing required 'lastEventNumber'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a TransactionCommitCompleted message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.TransactionCommitCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.TransactionCommitCompleted} TransactionCommitCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TransactionCommitCompleted.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a TransactionCommitCompleted message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.TransactionCommitCompleted
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TransactionCommitCompleted.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isInteger(message.transactionId) && !(message.transactionId && $util.isInteger(message.transactionId.low) && $util.isInteger(message.transactionId.high)))
                            return "transactionId: integer|Long expected";
                        switch (message.result) {
                        default:
                            return "result: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            break;
                        }
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        if (!$util.isInteger(message.firstEventNumber) && !(message.firstEventNumber && $util.isInteger(message.firstEventNumber.low) && $util.isInteger(message.firstEventNumber.high)))
                            return "firstEventNumber: integer|Long expected";
                        if (!$util.isInteger(message.lastEventNumber) && !(message.lastEventNumber && $util.isInteger(message.lastEventNumber.low) && $util.isInteger(message.lastEventNumber.high)))
                            return "lastEventNumber: integer|Long expected";
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            if (!$util.isInteger(message.preparePosition) && !(message.preparePosition && $util.isInteger(message.preparePosition.low) && $util.isInteger(message.preparePosition.high)))
                                return "preparePosition: integer|Long expected";
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            if (!$util.isInteger(message.commitPosition) && !(message.commitPosition && $util.isInteger(message.commitPosition.low) && $util.isInteger(message.commitPosition.high)))
                                return "commitPosition: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates a TransactionCommitCompleted message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.TransactionCommitCompleted
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.TransactionCommitCompleted} TransactionCommitCompleted
                     */
                    TransactionCommitCompleted.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.TransactionCommitCompleted)
                            return object;
                        var message = new $root.EventStore.Client.Messages.TransactionCommitCompleted();
                        if (object.transactionId != null)
                            if ($util.Long)
                                (message.transactionId = $util.Long.fromValue(object.transactionId)).unsigned = false;
                            else if (typeof object.transactionId === "string")
                                message.transactionId = parseInt(object.transactionId, 10);
                            else if (typeof object.transactionId === "number")
                                message.transactionId = object.transactionId;
                            else if (typeof object.transactionId === "object")
                                message.transactionId = new $util.LongBits(object.transactionId.low >>> 0, object.transactionId.high >>> 0).toNumber();
                        switch (object.result) {
                        case "Success":
                        case 0:
                            message.result = 0;
                            break;
                        case "PrepareTimeout":
                        case 1:
                            message.result = 1;
                            break;
                        case "CommitTimeout":
                        case 2:
                            message.result = 2;
                            break;
                        case "ForwardTimeout":
                        case 3:
                            message.result = 3;
                            break;
                        case "WrongExpectedVersion":
                        case 4:
                            message.result = 4;
                            break;
                        case "StreamDeleted":
                        case 5:
                            message.result = 5;
                            break;
                        case "InvalidTransaction":
                        case 6:
                            message.result = 6;
                            break;
                        case "AccessDenied":
                        case 7:
                            message.result = 7;
                            break;
                        }
                        if (object.message != null)
                            message.message = String(object.message);
                        if (object.firstEventNumber != null)
                            if ($util.Long)
                                (message.firstEventNumber = $util.Long.fromValue(object.firstEventNumber)).unsigned = false;
                            else if (typeof object.firstEventNumber === "string")
                                message.firstEventNumber = parseInt(object.firstEventNumber, 10);
                            else if (typeof object.firstEventNumber === "number")
                                message.firstEventNumber = object.firstEventNumber;
                            else if (typeof object.firstEventNumber === "object")
                                message.firstEventNumber = new $util.LongBits(object.firstEventNumber.low >>> 0, object.firstEventNumber.high >>> 0).toNumber();
                        if (object.lastEventNumber != null)
                            if ($util.Long)
                                (message.lastEventNumber = $util.Long.fromValue(object.lastEventNumber)).unsigned = false;
                            else if (typeof object.lastEventNumber === "string")
                                message.lastEventNumber = parseInt(object.lastEventNumber, 10);
                            else if (typeof object.lastEventNumber === "number")
                                message.lastEventNumber = object.lastEventNumber;
                            else if (typeof object.lastEventNumber === "object")
                                message.lastEventNumber = new $util.LongBits(object.lastEventNumber.low >>> 0, object.lastEventNumber.high >>> 0).toNumber();
                        if (object.preparePosition != null)
                            if ($util.Long)
                                (message.preparePosition = $util.Long.fromValue(object.preparePosition)).unsigned = false;
                            else if (typeof object.preparePosition === "string")
                                message.preparePosition = parseInt(object.preparePosition, 10);
                            else if (typeof object.preparePosition === "number")
                                message.preparePosition = object.preparePosition;
                            else if (typeof object.preparePosition === "object")
                                message.preparePosition = new $util.LongBits(object.preparePosition.low >>> 0, object.preparePosition.high >>> 0).toNumber();
                        if (object.commitPosition != null)
                            if ($util.Long)
                                (message.commitPosition = $util.Long.fromValue(object.commitPosition)).unsigned = false;
                            else if (typeof object.commitPosition === "string")
                                message.commitPosition = parseInt(object.commitPosition, 10);
                            else if (typeof object.commitPosition === "number")
                                message.commitPosition = object.commitPosition;
                            else if (typeof object.commitPosition === "object")
                                message.commitPosition = new $util.LongBits(object.commitPosition.low >>> 0, object.commitPosition.high >>> 0).toNumber();
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a TransactionCommitCompleted message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.TransactionCommitCompleted
                     * @static
                     * @param {EventStore.Client.Messages.TransactionCommitCompleted} message TransactionCommitCompleted
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TransactionCommitCompleted.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.transactionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.transactionId = options.longs === String ? "0" : 0;
                            object.result = options.enums === String ? "Success" : 0;
                            object.message = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.firstEventNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.firstEventNumber = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.lastEventNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.lastEventNumber = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.preparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.preparePosition = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.commitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.commitPosition = options.longs === String ? "0" : 0;
                        }
                        if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                            if (typeof message.transactionId === "number")
                                object.transactionId = options.longs === String ? String(message.transactionId) : message.transactionId;
                            else
                                object.transactionId = options.longs === String ? $util.Long.prototype.toString.call(message.transactionId) : options.longs === Number ? new $util.LongBits(message.transactionId.low >>> 0, message.transactionId.high >>> 0).toNumber() : message.transactionId;
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = options.enums === String ? $root.EventStore.Client.Messages.OperationResult[message.result] : message.result;
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        if (message.firstEventNumber != null && message.hasOwnProperty("firstEventNumber"))
                            if (typeof message.firstEventNumber === "number")
                                object.firstEventNumber = options.longs === String ? String(message.firstEventNumber) : message.firstEventNumber;
                            else
                                object.firstEventNumber = options.longs === String ? $util.Long.prototype.toString.call(message.firstEventNumber) : options.longs === Number ? new $util.LongBits(message.firstEventNumber.low >>> 0, message.firstEventNumber.high >>> 0).toNumber() : message.firstEventNumber;
                        if (message.lastEventNumber != null && message.hasOwnProperty("lastEventNumber"))
                            if (typeof message.lastEventNumber === "number")
                                object.lastEventNumber = options.longs === String ? String(message.lastEventNumber) : message.lastEventNumber;
                            else
                                object.lastEventNumber = options.longs === String ? $util.Long.prototype.toString.call(message.lastEventNumber) : options.longs === Number ? new $util.LongBits(message.lastEventNumber.low >>> 0, message.lastEventNumber.high >>> 0).toNumber() : message.lastEventNumber;
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            if (typeof message.preparePosition === "number")
                                object.preparePosition = options.longs === String ? String(message.preparePosition) : message.preparePosition;
                            else
                                object.preparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.preparePosition) : options.longs === Number ? new $util.LongBits(message.preparePosition.low >>> 0, message.preparePosition.high >>> 0).toNumber() : message.preparePosition;
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            if (typeof message.commitPosition === "number")
                                object.commitPosition = options.longs === String ? String(message.commitPosition) : message.commitPosition;
                            else
                                object.commitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.commitPosition) : options.longs === Number ? new $util.LongBits(message.commitPosition.low >>> 0, message.commitPosition.high >>> 0).toNumber() : message.commitPosition;
                        return object;
                    };
    
                    /**
                     * Converts this TransactionCommitCompleted to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.TransactionCommitCompleted
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TransactionCommitCompleted.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return TransactionCommitCompleted;
                })();
    
                Messages.ReadEvent = (function() {
    
                    /**
                     * Properties of a ReadEvent.
                     * @memberof EventStore.Client.Messages
                     * @interface IReadEvent
                     * @property {string} eventStreamId ReadEvent eventStreamId
                     * @property {number|Long} eventNumber ReadEvent eventNumber
                     * @property {boolean} resolveLinkTos ReadEvent resolveLinkTos
                     * @property {boolean} requireMaster ReadEvent requireMaster
                     */
    
                    /**
                     * Constructs a new ReadEvent.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a ReadEvent.
                     * @implements IReadEvent
                     * @constructor
                     * @param {EventStore.Client.Messages.IReadEvent=} [properties] Properties to set
                     */
                    function ReadEvent(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReadEvent eventStreamId.
                     * @member {string} eventStreamId
                     * @memberof EventStore.Client.Messages.ReadEvent
                     * @instance
                     */
                    ReadEvent.prototype.eventStreamId = "";
    
                    /**
                     * ReadEvent eventNumber.
                     * @member {number|Long} eventNumber
                     * @memberof EventStore.Client.Messages.ReadEvent
                     * @instance
                     */
                    ReadEvent.prototype.eventNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * ReadEvent resolveLinkTos.
                     * @member {boolean} resolveLinkTos
                     * @memberof EventStore.Client.Messages.ReadEvent
                     * @instance
                     */
                    ReadEvent.prototype.resolveLinkTos = false;
    
                    /**
                     * ReadEvent requireMaster.
                     * @member {boolean} requireMaster
                     * @memberof EventStore.Client.Messages.ReadEvent
                     * @instance
                     */
                    ReadEvent.prototype.requireMaster = false;
    
                    /**
                     * Creates a new ReadEvent instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.ReadEvent
                     * @static
                     * @param {EventStore.Client.Messages.IReadEvent=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.ReadEvent} ReadEvent instance
                     */
                    ReadEvent.create = function create(properties) {
                        return new ReadEvent(properties);
                    };
    
                    /**
                     * Encodes the specified ReadEvent message. Does not implicitly {@link EventStore.Client.Messages.ReadEvent.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.ReadEvent
                     * @static
                     * @param {EventStore.Client.Messages.IReadEvent} message ReadEvent message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReadEvent.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventStreamId);
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.eventNumber);
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.resolveLinkTos);
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.requireMaster);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReadEvent message, length delimited. Does not implicitly {@link EventStore.Client.Messages.ReadEvent.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.ReadEvent
                     * @static
                     * @param {EventStore.Client.Messages.IReadEvent} message ReadEvent message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReadEvent.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReadEvent message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.ReadEvent
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.ReadEvent} ReadEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReadEvent.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.ReadEvent();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.eventStreamId = reader.string();
                                break;
                            case 2:
                                message.eventNumber = reader.int64();
                                break;
                            case 3:
                                message.resolveLinkTos = reader.bool();
                                break;
                            case 4:
                                message.requireMaster = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("eventStreamId"))
                            throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                        if (!message.hasOwnProperty("eventNumber"))
                            throw $util.ProtocolError("missing required 'eventNumber'", { instance: message });
                        if (!message.hasOwnProperty("resolveLinkTos"))
                            throw $util.ProtocolError("missing required 'resolveLinkTos'", { instance: message });
                        if (!message.hasOwnProperty("requireMaster"))
                            throw $util.ProtocolError("missing required 'requireMaster'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a ReadEvent message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.ReadEvent
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.ReadEvent} ReadEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReadEvent.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReadEvent message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.ReadEvent
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReadEvent.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.eventStreamId))
                            return "eventStreamId: string expected";
                        if (!$util.isInteger(message.eventNumber) && !(message.eventNumber && $util.isInteger(message.eventNumber.low) && $util.isInteger(message.eventNumber.high)))
                            return "eventNumber: integer|Long expected";
                        if (typeof message.resolveLinkTos !== "boolean")
                            return "resolveLinkTos: boolean expected";
                        if (typeof message.requireMaster !== "boolean")
                            return "requireMaster: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReadEvent message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.ReadEvent
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.ReadEvent} ReadEvent
                     */
                    ReadEvent.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.ReadEvent)
                            return object;
                        var message = new $root.EventStore.Client.Messages.ReadEvent();
                        if (object.eventStreamId != null)
                            message.eventStreamId = String(object.eventStreamId);
                        if (object.eventNumber != null)
                            if ($util.Long)
                                (message.eventNumber = $util.Long.fromValue(object.eventNumber)).unsigned = false;
                            else if (typeof object.eventNumber === "string")
                                message.eventNumber = parseInt(object.eventNumber, 10);
                            else if (typeof object.eventNumber === "number")
                                message.eventNumber = object.eventNumber;
                            else if (typeof object.eventNumber === "object")
                                message.eventNumber = new $util.LongBits(object.eventNumber.low >>> 0, object.eventNumber.high >>> 0).toNumber();
                        if (object.resolveLinkTos != null)
                            message.resolveLinkTos = Boolean(object.resolveLinkTos);
                        if (object.requireMaster != null)
                            message.requireMaster = Boolean(object.requireMaster);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReadEvent message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.ReadEvent
                     * @static
                     * @param {EventStore.Client.Messages.ReadEvent} message ReadEvent
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReadEvent.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.eventStreamId = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.eventNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.eventNumber = options.longs === String ? "0" : 0;
                            object.resolveLinkTos = false;
                            object.requireMaster = false;
                        }
                        if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                            object.eventStreamId = message.eventStreamId;
                        if (message.eventNumber != null && message.hasOwnProperty("eventNumber"))
                            if (typeof message.eventNumber === "number")
                                object.eventNumber = options.longs === String ? String(message.eventNumber) : message.eventNumber;
                            else
                                object.eventNumber = options.longs === String ? $util.Long.prototype.toString.call(message.eventNumber) : options.longs === Number ? new $util.LongBits(message.eventNumber.low >>> 0, message.eventNumber.high >>> 0).toNumber() : message.eventNumber;
                        if (message.resolveLinkTos != null && message.hasOwnProperty("resolveLinkTos"))
                            object.resolveLinkTos = message.resolveLinkTos;
                        if (message.requireMaster != null && message.hasOwnProperty("requireMaster"))
                            object.requireMaster = message.requireMaster;
                        return object;
                    };
    
                    /**
                     * Converts this ReadEvent to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.ReadEvent
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReadEvent.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ReadEvent;
                })();
    
                Messages.ReadEventCompleted = (function() {
    
                    /**
                     * Properties of a ReadEventCompleted.
                     * @memberof EventStore.Client.Messages
                     * @interface IReadEventCompleted
                     * @property {EventStore.Client.Messages.ReadEventCompleted.ReadEventResult} result ReadEventCompleted result
                     * @property {EventStore.Client.Messages.IResolvedIndexedEvent} event ReadEventCompleted event
                     * @property {string|null} [error] ReadEventCompleted error
                     */
    
                    /**
                     * Constructs a new ReadEventCompleted.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a ReadEventCompleted.
                     * @implements IReadEventCompleted
                     * @constructor
                     * @param {EventStore.Client.Messages.IReadEventCompleted=} [properties] Properties to set
                     */
                    function ReadEventCompleted(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReadEventCompleted result.
                     * @member {EventStore.Client.Messages.ReadEventCompleted.ReadEventResult} result
                     * @memberof EventStore.Client.Messages.ReadEventCompleted
                     * @instance
                     */
                    ReadEventCompleted.prototype.result = 0;
    
                    /**
                     * ReadEventCompleted event.
                     * @member {EventStore.Client.Messages.IResolvedIndexedEvent} event
                     * @memberof EventStore.Client.Messages.ReadEventCompleted
                     * @instance
                     */
                    ReadEventCompleted.prototype.event = null;
    
                    /**
                     * ReadEventCompleted error.
                     * @member {string} error
                     * @memberof EventStore.Client.Messages.ReadEventCompleted
                     * @instance
                     */
                    ReadEventCompleted.prototype.error = "";
    
                    /**
                     * Creates a new ReadEventCompleted instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.ReadEventCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IReadEventCompleted=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.ReadEventCompleted} ReadEventCompleted instance
                     */
                    ReadEventCompleted.create = function create(properties) {
                        return new ReadEventCompleted(properties);
                    };
    
                    /**
                     * Encodes the specified ReadEventCompleted message. Does not implicitly {@link EventStore.Client.Messages.ReadEventCompleted.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.ReadEventCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IReadEventCompleted} message ReadEventCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReadEventCompleted.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
                        $root.EventStore.Client.Messages.ResolvedIndexedEvent.encode(message.event, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.error != null && message.hasOwnProperty("error"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.error);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReadEventCompleted message, length delimited. Does not implicitly {@link EventStore.Client.Messages.ReadEventCompleted.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.ReadEventCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IReadEventCompleted} message ReadEventCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReadEventCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReadEventCompleted message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.ReadEventCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.ReadEventCompleted} ReadEventCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReadEventCompleted.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.ReadEventCompleted();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.result = reader.int32();
                                break;
                            case 2:
                                message.event = $root.EventStore.Client.Messages.ResolvedIndexedEvent.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.error = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("result"))
                            throw $util.ProtocolError("missing required 'result'", { instance: message });
                        if (!message.hasOwnProperty("event"))
                            throw $util.ProtocolError("missing required 'event'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a ReadEventCompleted message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.ReadEventCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.ReadEventCompleted} ReadEventCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReadEventCompleted.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReadEventCompleted message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.ReadEventCompleted
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReadEventCompleted.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        switch (message.result) {
                        default:
                            return "result: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        }
                        {
                            var error = $root.EventStore.Client.Messages.ResolvedIndexedEvent.verify(message.event);
                            if (error)
                                return "event." + error;
                        }
                        if (message.error != null && message.hasOwnProperty("error"))
                            if (!$util.isString(message.error))
                                return "error: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReadEventCompleted message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.ReadEventCompleted
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.ReadEventCompleted} ReadEventCompleted
                     */
                    ReadEventCompleted.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.ReadEventCompleted)
                            return object;
                        var message = new $root.EventStore.Client.Messages.ReadEventCompleted();
                        switch (object.result) {
                        case "Success":
                        case 0:
                            message.result = 0;
                            break;
                        case "NotFound":
                        case 1:
                            message.result = 1;
                            break;
                        case "NoStream":
                        case 2:
                            message.result = 2;
                            break;
                        case "StreamDeleted":
                        case 3:
                            message.result = 3;
                            break;
                        case "Error":
                        case 4:
                            message.result = 4;
                            break;
                        case "AccessDenied":
                        case 5:
                            message.result = 5;
                            break;
                        }
                        if (object.event != null) {
                            if (typeof object.event !== "object")
                                throw TypeError(".EventStore.Client.Messages.ReadEventCompleted.event: object expected");
                            message.event = $root.EventStore.Client.Messages.ResolvedIndexedEvent.fromObject(object.event);
                        }
                        if (object.error != null)
                            message.error = String(object.error);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReadEventCompleted message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.ReadEventCompleted
                     * @static
                     * @param {EventStore.Client.Messages.ReadEventCompleted} message ReadEventCompleted
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReadEventCompleted.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.result = options.enums === String ? "Success" : 0;
                            object.event = null;
                            object.error = "";
                        }
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = options.enums === String ? $root.EventStore.Client.Messages.ReadEventCompleted.ReadEventResult[message.result] : message.result;
                        if (message.event != null && message.hasOwnProperty("event"))
                            object.event = $root.EventStore.Client.Messages.ResolvedIndexedEvent.toObject(message.event, options);
                        if (message.error != null && message.hasOwnProperty("error"))
                            object.error = message.error;
                        return object;
                    };
    
                    /**
                     * Converts this ReadEventCompleted to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.ReadEventCompleted
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReadEventCompleted.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * ReadEventResult enum.
                     * @name EventStore.Client.Messages.ReadEventCompleted.ReadEventResult
                     * @enum {string}
                     * @property {number} Success=0 Success value
                     * @property {number} NotFound=1 NotFound value
                     * @property {number} NoStream=2 NoStream value
                     * @property {number} StreamDeleted=3 StreamDeleted value
                     * @property {number} Error=4 Error value
                     * @property {number} AccessDenied=5 AccessDenied value
                     */
                    ReadEventCompleted.ReadEventResult = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "Success"] = 0;
                        values[valuesById[1] = "NotFound"] = 1;
                        values[valuesById[2] = "NoStream"] = 2;
                        values[valuesById[3] = "StreamDeleted"] = 3;
                        values[valuesById[4] = "Error"] = 4;
                        values[valuesById[5] = "AccessDenied"] = 5;
                        return values;
                    })();
    
                    return ReadEventCompleted;
                })();
    
                Messages.ReadStreamEvents = (function() {
    
                    /**
                     * Properties of a ReadStreamEvents.
                     * @memberof EventStore.Client.Messages
                     * @interface IReadStreamEvents
                     * @property {string} eventStreamId ReadStreamEvents eventStreamId
                     * @property {number|Long} fromEventNumber ReadStreamEvents fromEventNumber
                     * @property {number} maxCount ReadStreamEvents maxCount
                     * @property {boolean} resolveLinkTos ReadStreamEvents resolveLinkTos
                     * @property {boolean} requireMaster ReadStreamEvents requireMaster
                     */
    
                    /**
                     * Constructs a new ReadStreamEvents.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a ReadStreamEvents.
                     * @implements IReadStreamEvents
                     * @constructor
                     * @param {EventStore.Client.Messages.IReadStreamEvents=} [properties] Properties to set
                     */
                    function ReadStreamEvents(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReadStreamEvents eventStreamId.
                     * @member {string} eventStreamId
                     * @memberof EventStore.Client.Messages.ReadStreamEvents
                     * @instance
                     */
                    ReadStreamEvents.prototype.eventStreamId = "";
    
                    /**
                     * ReadStreamEvents fromEventNumber.
                     * @member {number|Long} fromEventNumber
                     * @memberof EventStore.Client.Messages.ReadStreamEvents
                     * @instance
                     */
                    ReadStreamEvents.prototype.fromEventNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * ReadStreamEvents maxCount.
                     * @member {number} maxCount
                     * @memberof EventStore.Client.Messages.ReadStreamEvents
                     * @instance
                     */
                    ReadStreamEvents.prototype.maxCount = 0;
    
                    /**
                     * ReadStreamEvents resolveLinkTos.
                     * @member {boolean} resolveLinkTos
                     * @memberof EventStore.Client.Messages.ReadStreamEvents
                     * @instance
                     */
                    ReadStreamEvents.prototype.resolveLinkTos = false;
    
                    /**
                     * ReadStreamEvents requireMaster.
                     * @member {boolean} requireMaster
                     * @memberof EventStore.Client.Messages.ReadStreamEvents
                     * @instance
                     */
                    ReadStreamEvents.prototype.requireMaster = false;
    
                    /**
                     * Creates a new ReadStreamEvents instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.ReadStreamEvents
                     * @static
                     * @param {EventStore.Client.Messages.IReadStreamEvents=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.ReadStreamEvents} ReadStreamEvents instance
                     */
                    ReadStreamEvents.create = function create(properties) {
                        return new ReadStreamEvents(properties);
                    };
    
                    /**
                     * Encodes the specified ReadStreamEvents message. Does not implicitly {@link EventStore.Client.Messages.ReadStreamEvents.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.ReadStreamEvents
                     * @static
                     * @param {EventStore.Client.Messages.IReadStreamEvents} message ReadStreamEvents message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReadStreamEvents.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventStreamId);
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.fromEventNumber);
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.maxCount);
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.resolveLinkTos);
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.requireMaster);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReadStreamEvents message, length delimited. Does not implicitly {@link EventStore.Client.Messages.ReadStreamEvents.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.ReadStreamEvents
                     * @static
                     * @param {EventStore.Client.Messages.IReadStreamEvents} message ReadStreamEvents message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReadStreamEvents.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReadStreamEvents message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.ReadStreamEvents
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.ReadStreamEvents} ReadStreamEvents
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReadStreamEvents.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.ReadStreamEvents();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.eventStreamId = reader.string();
                                break;
                            case 2:
                                message.fromEventNumber = reader.int64();
                                break;
                            case 3:
                                message.maxCount = reader.int32();
                                break;
                            case 4:
                                message.resolveLinkTos = reader.bool();
                                break;
                            case 5:
                                message.requireMaster = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("eventStreamId"))
                            throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                        if (!message.hasOwnProperty("fromEventNumber"))
                            throw $util.ProtocolError("missing required 'fromEventNumber'", { instance: message });
                        if (!message.hasOwnProperty("maxCount"))
                            throw $util.ProtocolError("missing required 'maxCount'", { instance: message });
                        if (!message.hasOwnProperty("resolveLinkTos"))
                            throw $util.ProtocolError("missing required 'resolveLinkTos'", { instance: message });
                        if (!message.hasOwnProperty("requireMaster"))
                            throw $util.ProtocolError("missing required 'requireMaster'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a ReadStreamEvents message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.ReadStreamEvents
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.ReadStreamEvents} ReadStreamEvents
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReadStreamEvents.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReadStreamEvents message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.ReadStreamEvents
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReadStreamEvents.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.eventStreamId))
                            return "eventStreamId: string expected";
                        if (!$util.isInteger(message.fromEventNumber) && !(message.fromEventNumber && $util.isInteger(message.fromEventNumber.low) && $util.isInteger(message.fromEventNumber.high)))
                            return "fromEventNumber: integer|Long expected";
                        if (!$util.isInteger(message.maxCount))
                            return "maxCount: integer expected";
                        if (typeof message.resolveLinkTos !== "boolean")
                            return "resolveLinkTos: boolean expected";
                        if (typeof message.requireMaster !== "boolean")
                            return "requireMaster: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReadStreamEvents message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.ReadStreamEvents
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.ReadStreamEvents} ReadStreamEvents
                     */
                    ReadStreamEvents.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.ReadStreamEvents)
                            return object;
                        var message = new $root.EventStore.Client.Messages.ReadStreamEvents();
                        if (object.eventStreamId != null)
                            message.eventStreamId = String(object.eventStreamId);
                        if (object.fromEventNumber != null)
                            if ($util.Long)
                                (message.fromEventNumber = $util.Long.fromValue(object.fromEventNumber)).unsigned = false;
                            else if (typeof object.fromEventNumber === "string")
                                message.fromEventNumber = parseInt(object.fromEventNumber, 10);
                            else if (typeof object.fromEventNumber === "number")
                                message.fromEventNumber = object.fromEventNumber;
                            else if (typeof object.fromEventNumber === "object")
                                message.fromEventNumber = new $util.LongBits(object.fromEventNumber.low >>> 0, object.fromEventNumber.high >>> 0).toNumber();
                        if (object.maxCount != null)
                            message.maxCount = object.maxCount | 0;
                        if (object.resolveLinkTos != null)
                            message.resolveLinkTos = Boolean(object.resolveLinkTos);
                        if (object.requireMaster != null)
                            message.requireMaster = Boolean(object.requireMaster);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReadStreamEvents message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.ReadStreamEvents
                     * @static
                     * @param {EventStore.Client.Messages.ReadStreamEvents} message ReadStreamEvents
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReadStreamEvents.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.eventStreamId = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.fromEventNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.fromEventNumber = options.longs === String ? "0" : 0;
                            object.maxCount = 0;
                            object.resolveLinkTos = false;
                            object.requireMaster = false;
                        }
                        if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                            object.eventStreamId = message.eventStreamId;
                        if (message.fromEventNumber != null && message.hasOwnProperty("fromEventNumber"))
                            if (typeof message.fromEventNumber === "number")
                                object.fromEventNumber = options.longs === String ? String(message.fromEventNumber) : message.fromEventNumber;
                            else
                                object.fromEventNumber = options.longs === String ? $util.Long.prototype.toString.call(message.fromEventNumber) : options.longs === Number ? new $util.LongBits(message.fromEventNumber.low >>> 0, message.fromEventNumber.high >>> 0).toNumber() : message.fromEventNumber;
                        if (message.maxCount != null && message.hasOwnProperty("maxCount"))
                            object.maxCount = message.maxCount;
                        if (message.resolveLinkTos != null && message.hasOwnProperty("resolveLinkTos"))
                            object.resolveLinkTos = message.resolveLinkTos;
                        if (message.requireMaster != null && message.hasOwnProperty("requireMaster"))
                            object.requireMaster = message.requireMaster;
                        return object;
                    };
    
                    /**
                     * Converts this ReadStreamEvents to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.ReadStreamEvents
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReadStreamEvents.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ReadStreamEvents;
                })();
    
                Messages.ReadStreamEventsCompleted = (function() {
    
                    /**
                     * Properties of a ReadStreamEventsCompleted.
                     * @memberof EventStore.Client.Messages
                     * @interface IReadStreamEventsCompleted
                     * @property {Array.<EventStore.Client.Messages.IResolvedIndexedEvent>|null} [events] ReadStreamEventsCompleted events
                     * @property {EventStore.Client.Messages.ReadStreamEventsCompleted.ReadStreamResult} result ReadStreamEventsCompleted result
                     * @property {number|Long} nextEventNumber ReadStreamEventsCompleted nextEventNumber
                     * @property {number|Long} lastEventNumber ReadStreamEventsCompleted lastEventNumber
                     * @property {boolean} isEndOfStream ReadStreamEventsCompleted isEndOfStream
                     * @property {number|Long} lastCommitPosition ReadStreamEventsCompleted lastCommitPosition
                     * @property {string|null} [error] ReadStreamEventsCompleted error
                     */
    
                    /**
                     * Constructs a new ReadStreamEventsCompleted.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a ReadStreamEventsCompleted.
                     * @implements IReadStreamEventsCompleted
                     * @constructor
                     * @param {EventStore.Client.Messages.IReadStreamEventsCompleted=} [properties] Properties to set
                     */
                    function ReadStreamEventsCompleted(properties) {
                        this.events = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReadStreamEventsCompleted events.
                     * @member {Array.<EventStore.Client.Messages.IResolvedIndexedEvent>} events
                     * @memberof EventStore.Client.Messages.ReadStreamEventsCompleted
                     * @instance
                     */
                    ReadStreamEventsCompleted.prototype.events = $util.emptyArray;
    
                    /**
                     * ReadStreamEventsCompleted result.
                     * @member {EventStore.Client.Messages.ReadStreamEventsCompleted.ReadStreamResult} result
                     * @memberof EventStore.Client.Messages.ReadStreamEventsCompleted
                     * @instance
                     */
                    ReadStreamEventsCompleted.prototype.result = 0;
    
                    /**
                     * ReadStreamEventsCompleted nextEventNumber.
                     * @member {number|Long} nextEventNumber
                     * @memberof EventStore.Client.Messages.ReadStreamEventsCompleted
                     * @instance
                     */
                    ReadStreamEventsCompleted.prototype.nextEventNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * ReadStreamEventsCompleted lastEventNumber.
                     * @member {number|Long} lastEventNumber
                     * @memberof EventStore.Client.Messages.ReadStreamEventsCompleted
                     * @instance
                     */
                    ReadStreamEventsCompleted.prototype.lastEventNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * ReadStreamEventsCompleted isEndOfStream.
                     * @member {boolean} isEndOfStream
                     * @memberof EventStore.Client.Messages.ReadStreamEventsCompleted
                     * @instance
                     */
                    ReadStreamEventsCompleted.prototype.isEndOfStream = false;
    
                    /**
                     * ReadStreamEventsCompleted lastCommitPosition.
                     * @member {number|Long} lastCommitPosition
                     * @memberof EventStore.Client.Messages.ReadStreamEventsCompleted
                     * @instance
                     */
                    ReadStreamEventsCompleted.prototype.lastCommitPosition = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * ReadStreamEventsCompleted error.
                     * @member {string} error
                     * @memberof EventStore.Client.Messages.ReadStreamEventsCompleted
                     * @instance
                     */
                    ReadStreamEventsCompleted.prototype.error = "";
    
                    /**
                     * Creates a new ReadStreamEventsCompleted instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.ReadStreamEventsCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IReadStreamEventsCompleted=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.ReadStreamEventsCompleted} ReadStreamEventsCompleted instance
                     */
                    ReadStreamEventsCompleted.create = function create(properties) {
                        return new ReadStreamEventsCompleted(properties);
                    };
    
                    /**
                     * Encodes the specified ReadStreamEventsCompleted message. Does not implicitly {@link EventStore.Client.Messages.ReadStreamEventsCompleted.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.ReadStreamEventsCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IReadStreamEventsCompleted} message ReadStreamEventsCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReadStreamEventsCompleted.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.events != null && message.events.length)
                            for (var i = 0; i < message.events.length; ++i)
                                $root.EventStore.Client.Messages.ResolvedIndexedEvent.encode(message.events[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.nextEventNumber);
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.lastEventNumber);
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isEndOfStream);
                        writer.uint32(/* id 6, wireType 0 =*/48).int64(message.lastCommitPosition);
                        if (message.error != null && message.hasOwnProperty("error"))
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.error);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReadStreamEventsCompleted message, length delimited. Does not implicitly {@link EventStore.Client.Messages.ReadStreamEventsCompleted.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.ReadStreamEventsCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IReadStreamEventsCompleted} message ReadStreamEventsCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReadStreamEventsCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReadStreamEventsCompleted message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.ReadStreamEventsCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.ReadStreamEventsCompleted} ReadStreamEventsCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReadStreamEventsCompleted.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.ReadStreamEventsCompleted();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.events && message.events.length))
                                    message.events = [];
                                message.events.push($root.EventStore.Client.Messages.ResolvedIndexedEvent.decode(reader, reader.uint32()));
                                break;
                            case 2:
                                message.result = reader.int32();
                                break;
                            case 3:
                                message.nextEventNumber = reader.int64();
                                break;
                            case 4:
                                message.lastEventNumber = reader.int64();
                                break;
                            case 5:
                                message.isEndOfStream = reader.bool();
                                break;
                            case 6:
                                message.lastCommitPosition = reader.int64();
                                break;
                            case 7:
                                message.error = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("result"))
                            throw $util.ProtocolError("missing required 'result'", { instance: message });
                        if (!message.hasOwnProperty("nextEventNumber"))
                            throw $util.ProtocolError("missing required 'nextEventNumber'", { instance: message });
                        if (!message.hasOwnProperty("lastEventNumber"))
                            throw $util.ProtocolError("missing required 'lastEventNumber'", { instance: message });
                        if (!message.hasOwnProperty("isEndOfStream"))
                            throw $util.ProtocolError("missing required 'isEndOfStream'", { instance: message });
                        if (!message.hasOwnProperty("lastCommitPosition"))
                            throw $util.ProtocolError("missing required 'lastCommitPosition'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a ReadStreamEventsCompleted message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.ReadStreamEventsCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.ReadStreamEventsCompleted} ReadStreamEventsCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReadStreamEventsCompleted.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReadStreamEventsCompleted message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.ReadStreamEventsCompleted
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReadStreamEventsCompleted.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.events != null && message.hasOwnProperty("events")) {
                            if (!Array.isArray(message.events))
                                return "events: array expected";
                            for (var i = 0; i < message.events.length; ++i) {
                                var error = $root.EventStore.Client.Messages.ResolvedIndexedEvent.verify(message.events[i]);
                                if (error)
                                    return "events." + error;
                            }
                        }
                        switch (message.result) {
                        default:
                            return "result: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        }
                        if (!$util.isInteger(message.nextEventNumber) && !(message.nextEventNumber && $util.isInteger(message.nextEventNumber.low) && $util.isInteger(message.nextEventNumber.high)))
                            return "nextEventNumber: integer|Long expected";
                        if (!$util.isInteger(message.lastEventNumber) && !(message.lastEventNumber && $util.isInteger(message.lastEventNumber.low) && $util.isInteger(message.lastEventNumber.high)))
                            return "lastEventNumber: integer|Long expected";
                        if (typeof message.isEndOfStream !== "boolean")
                            return "isEndOfStream: boolean expected";
                        if (!$util.isInteger(message.lastCommitPosition) && !(message.lastCommitPosition && $util.isInteger(message.lastCommitPosition.low) && $util.isInteger(message.lastCommitPosition.high)))
                            return "lastCommitPosition: integer|Long expected";
                        if (message.error != null && message.hasOwnProperty("error"))
                            if (!$util.isString(message.error))
                                return "error: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReadStreamEventsCompleted message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.ReadStreamEventsCompleted
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.ReadStreamEventsCompleted} ReadStreamEventsCompleted
                     */
                    ReadStreamEventsCompleted.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.ReadStreamEventsCompleted)
                            return object;
                        var message = new $root.EventStore.Client.Messages.ReadStreamEventsCompleted();
                        if (object.events) {
                            if (!Array.isArray(object.events))
                                throw TypeError(".EventStore.Client.Messages.ReadStreamEventsCompleted.events: array expected");
                            message.events = [];
                            for (var i = 0; i < object.events.length; ++i) {
                                if (typeof object.events[i] !== "object")
                                    throw TypeError(".EventStore.Client.Messages.ReadStreamEventsCompleted.events: object expected");
                                message.events[i] = $root.EventStore.Client.Messages.ResolvedIndexedEvent.fromObject(object.events[i]);
                            }
                        }
                        switch (object.result) {
                        case "Success":
                        case 0:
                            message.result = 0;
                            break;
                        case "NoStream":
                        case 1:
                            message.result = 1;
                            break;
                        case "StreamDeleted":
                        case 2:
                            message.result = 2;
                            break;
                        case "NotModified":
                        case 3:
                            message.result = 3;
                            break;
                        case "Error":
                        case 4:
                            message.result = 4;
                            break;
                        case "AccessDenied":
                        case 5:
                            message.result = 5;
                            break;
                        }
                        if (object.nextEventNumber != null)
                            if ($util.Long)
                                (message.nextEventNumber = $util.Long.fromValue(object.nextEventNumber)).unsigned = false;
                            else if (typeof object.nextEventNumber === "string")
                                message.nextEventNumber = parseInt(object.nextEventNumber, 10);
                            else if (typeof object.nextEventNumber === "number")
                                message.nextEventNumber = object.nextEventNumber;
                            else if (typeof object.nextEventNumber === "object")
                                message.nextEventNumber = new $util.LongBits(object.nextEventNumber.low >>> 0, object.nextEventNumber.high >>> 0).toNumber();
                        if (object.lastEventNumber != null)
                            if ($util.Long)
                                (message.lastEventNumber = $util.Long.fromValue(object.lastEventNumber)).unsigned = false;
                            else if (typeof object.lastEventNumber === "string")
                                message.lastEventNumber = parseInt(object.lastEventNumber, 10);
                            else if (typeof object.lastEventNumber === "number")
                                message.lastEventNumber = object.lastEventNumber;
                            else if (typeof object.lastEventNumber === "object")
                                message.lastEventNumber = new $util.LongBits(object.lastEventNumber.low >>> 0, object.lastEventNumber.high >>> 0).toNumber();
                        if (object.isEndOfStream != null)
                            message.isEndOfStream = Boolean(object.isEndOfStream);
                        if (object.lastCommitPosition != null)
                            if ($util.Long)
                                (message.lastCommitPosition = $util.Long.fromValue(object.lastCommitPosition)).unsigned = false;
                            else if (typeof object.lastCommitPosition === "string")
                                message.lastCommitPosition = parseInt(object.lastCommitPosition, 10);
                            else if (typeof object.lastCommitPosition === "number")
                                message.lastCommitPosition = object.lastCommitPosition;
                            else if (typeof object.lastCommitPosition === "object")
                                message.lastCommitPosition = new $util.LongBits(object.lastCommitPosition.low >>> 0, object.lastCommitPosition.high >>> 0).toNumber();
                        if (object.error != null)
                            message.error = String(object.error);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReadStreamEventsCompleted message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.ReadStreamEventsCompleted
                     * @static
                     * @param {EventStore.Client.Messages.ReadStreamEventsCompleted} message ReadStreamEventsCompleted
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReadStreamEventsCompleted.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.events = [];
                        if (options.defaults) {
                            object.result = options.enums === String ? "Success" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.nextEventNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.nextEventNumber = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.lastEventNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.lastEventNumber = options.longs === String ? "0" : 0;
                            object.isEndOfStream = false;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.lastCommitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.lastCommitPosition = options.longs === String ? "0" : 0;
                            object.error = "";
                        }
                        if (message.events && message.events.length) {
                            object.events = [];
                            for (var j = 0; j < message.events.length; ++j)
                                object.events[j] = $root.EventStore.Client.Messages.ResolvedIndexedEvent.toObject(message.events[j], options);
                        }
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = options.enums === String ? $root.EventStore.Client.Messages.ReadStreamEventsCompleted.ReadStreamResult[message.result] : message.result;
                        if (message.nextEventNumber != null && message.hasOwnProperty("nextEventNumber"))
                            if (typeof message.nextEventNumber === "number")
                                object.nextEventNumber = options.longs === String ? String(message.nextEventNumber) : message.nextEventNumber;
                            else
                                object.nextEventNumber = options.longs === String ? $util.Long.prototype.toString.call(message.nextEventNumber) : options.longs === Number ? new $util.LongBits(message.nextEventNumber.low >>> 0, message.nextEventNumber.high >>> 0).toNumber() : message.nextEventNumber;
                        if (message.lastEventNumber != null && message.hasOwnProperty("lastEventNumber"))
                            if (typeof message.lastEventNumber === "number")
                                object.lastEventNumber = options.longs === String ? String(message.lastEventNumber) : message.lastEventNumber;
                            else
                                object.lastEventNumber = options.longs === String ? $util.Long.prototype.toString.call(message.lastEventNumber) : options.longs === Number ? new $util.LongBits(message.lastEventNumber.low >>> 0, message.lastEventNumber.high >>> 0).toNumber() : message.lastEventNumber;
                        if (message.isEndOfStream != null && message.hasOwnProperty("isEndOfStream"))
                            object.isEndOfStream = message.isEndOfStream;
                        if (message.lastCommitPosition != null && message.hasOwnProperty("lastCommitPosition"))
                            if (typeof message.lastCommitPosition === "number")
                                object.lastCommitPosition = options.longs === String ? String(message.lastCommitPosition) : message.lastCommitPosition;
                            else
                                object.lastCommitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.lastCommitPosition) : options.longs === Number ? new $util.LongBits(message.lastCommitPosition.low >>> 0, message.lastCommitPosition.high >>> 0).toNumber() : message.lastCommitPosition;
                        if (message.error != null && message.hasOwnProperty("error"))
                            object.error = message.error;
                        return object;
                    };
    
                    /**
                     * Converts this ReadStreamEventsCompleted to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.ReadStreamEventsCompleted
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReadStreamEventsCompleted.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * ReadStreamResult enum.
                     * @name EventStore.Client.Messages.ReadStreamEventsCompleted.ReadStreamResult
                     * @enum {string}
                     * @property {number} Success=0 Success value
                     * @property {number} NoStream=1 NoStream value
                     * @property {number} StreamDeleted=2 StreamDeleted value
                     * @property {number} NotModified=3 NotModified value
                     * @property {number} Error=4 Error value
                     * @property {number} AccessDenied=5 AccessDenied value
                     */
                    ReadStreamEventsCompleted.ReadStreamResult = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "Success"] = 0;
                        values[valuesById[1] = "NoStream"] = 1;
                        values[valuesById[2] = "StreamDeleted"] = 2;
                        values[valuesById[3] = "NotModified"] = 3;
                        values[valuesById[4] = "Error"] = 4;
                        values[valuesById[5] = "AccessDenied"] = 5;
                        return values;
                    })();
    
                    return ReadStreamEventsCompleted;
                })();
    
                Messages.ReadAllEvents = (function() {
    
                    /**
                     * Properties of a ReadAllEvents.
                     * @memberof EventStore.Client.Messages
                     * @interface IReadAllEvents
                     * @property {number|Long} commitPosition ReadAllEvents commitPosition
                     * @property {number|Long} preparePosition ReadAllEvents preparePosition
                     * @property {number} maxCount ReadAllEvents maxCount
                     * @property {boolean} resolveLinkTos ReadAllEvents resolveLinkTos
                     * @property {boolean} requireMaster ReadAllEvents requireMaster
                     */
    
                    /**
                     * Constructs a new ReadAllEvents.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a ReadAllEvents.
                     * @implements IReadAllEvents
                     * @constructor
                     * @param {EventStore.Client.Messages.IReadAllEvents=} [properties] Properties to set
                     */
                    function ReadAllEvents(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReadAllEvents commitPosition.
                     * @member {number|Long} commitPosition
                     * @memberof EventStore.Client.Messages.ReadAllEvents
                     * @instance
                     */
                    ReadAllEvents.prototype.commitPosition = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * ReadAllEvents preparePosition.
                     * @member {number|Long} preparePosition
                     * @memberof EventStore.Client.Messages.ReadAllEvents
                     * @instance
                     */
                    ReadAllEvents.prototype.preparePosition = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * ReadAllEvents maxCount.
                     * @member {number} maxCount
                     * @memberof EventStore.Client.Messages.ReadAllEvents
                     * @instance
                     */
                    ReadAllEvents.prototype.maxCount = 0;
    
                    /**
                     * ReadAllEvents resolveLinkTos.
                     * @member {boolean} resolveLinkTos
                     * @memberof EventStore.Client.Messages.ReadAllEvents
                     * @instance
                     */
                    ReadAllEvents.prototype.resolveLinkTos = false;
    
                    /**
                     * ReadAllEvents requireMaster.
                     * @member {boolean} requireMaster
                     * @memberof EventStore.Client.Messages.ReadAllEvents
                     * @instance
                     */
                    ReadAllEvents.prototype.requireMaster = false;
    
                    /**
                     * Creates a new ReadAllEvents instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.ReadAllEvents
                     * @static
                     * @param {EventStore.Client.Messages.IReadAllEvents=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.ReadAllEvents} ReadAllEvents instance
                     */
                    ReadAllEvents.create = function create(properties) {
                        return new ReadAllEvents(properties);
                    };
    
                    /**
                     * Encodes the specified ReadAllEvents message. Does not implicitly {@link EventStore.Client.Messages.ReadAllEvents.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.ReadAllEvents
                     * @static
                     * @param {EventStore.Client.Messages.IReadAllEvents} message ReadAllEvents message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReadAllEvents.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.commitPosition);
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.preparePosition);
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.maxCount);
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.resolveLinkTos);
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.requireMaster);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReadAllEvents message, length delimited. Does not implicitly {@link EventStore.Client.Messages.ReadAllEvents.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.ReadAllEvents
                     * @static
                     * @param {EventStore.Client.Messages.IReadAllEvents} message ReadAllEvents message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReadAllEvents.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReadAllEvents message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.ReadAllEvents
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.ReadAllEvents} ReadAllEvents
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReadAllEvents.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.ReadAllEvents();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.commitPosition = reader.int64();
                                break;
                            case 2:
                                message.preparePosition = reader.int64();
                                break;
                            case 3:
                                message.maxCount = reader.int32();
                                break;
                            case 4:
                                message.resolveLinkTos = reader.bool();
                                break;
                            case 5:
                                message.requireMaster = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("commitPosition"))
                            throw $util.ProtocolError("missing required 'commitPosition'", { instance: message });
                        if (!message.hasOwnProperty("preparePosition"))
                            throw $util.ProtocolError("missing required 'preparePosition'", { instance: message });
                        if (!message.hasOwnProperty("maxCount"))
                            throw $util.ProtocolError("missing required 'maxCount'", { instance: message });
                        if (!message.hasOwnProperty("resolveLinkTos"))
                            throw $util.ProtocolError("missing required 'resolveLinkTos'", { instance: message });
                        if (!message.hasOwnProperty("requireMaster"))
                            throw $util.ProtocolError("missing required 'requireMaster'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a ReadAllEvents message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.ReadAllEvents
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.ReadAllEvents} ReadAllEvents
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReadAllEvents.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReadAllEvents message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.ReadAllEvents
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReadAllEvents.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isInteger(message.commitPosition) && !(message.commitPosition && $util.isInteger(message.commitPosition.low) && $util.isInteger(message.commitPosition.high)))
                            return "commitPosition: integer|Long expected";
                        if (!$util.isInteger(message.preparePosition) && !(message.preparePosition && $util.isInteger(message.preparePosition.low) && $util.isInteger(message.preparePosition.high)))
                            return "preparePosition: integer|Long expected";
                        if (!$util.isInteger(message.maxCount))
                            return "maxCount: integer expected";
                        if (typeof message.resolveLinkTos !== "boolean")
                            return "resolveLinkTos: boolean expected";
                        if (typeof message.requireMaster !== "boolean")
                            return "requireMaster: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReadAllEvents message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.ReadAllEvents
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.ReadAllEvents} ReadAllEvents
                     */
                    ReadAllEvents.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.ReadAllEvents)
                            return object;
                        var message = new $root.EventStore.Client.Messages.ReadAllEvents();
                        if (object.commitPosition != null)
                            if ($util.Long)
                                (message.commitPosition = $util.Long.fromValue(object.commitPosition)).unsigned = false;
                            else if (typeof object.commitPosition === "string")
                                message.commitPosition = parseInt(object.commitPosition, 10);
                            else if (typeof object.commitPosition === "number")
                                message.commitPosition = object.commitPosition;
                            else if (typeof object.commitPosition === "object")
                                message.commitPosition = new $util.LongBits(object.commitPosition.low >>> 0, object.commitPosition.high >>> 0).toNumber();
                        if (object.preparePosition != null)
                            if ($util.Long)
                                (message.preparePosition = $util.Long.fromValue(object.preparePosition)).unsigned = false;
                            else if (typeof object.preparePosition === "string")
                                message.preparePosition = parseInt(object.preparePosition, 10);
                            else if (typeof object.preparePosition === "number")
                                message.preparePosition = object.preparePosition;
                            else if (typeof object.preparePosition === "object")
                                message.preparePosition = new $util.LongBits(object.preparePosition.low >>> 0, object.preparePosition.high >>> 0).toNumber();
                        if (object.maxCount != null)
                            message.maxCount = object.maxCount | 0;
                        if (object.resolveLinkTos != null)
                            message.resolveLinkTos = Boolean(object.resolveLinkTos);
                        if (object.requireMaster != null)
                            message.requireMaster = Boolean(object.requireMaster);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReadAllEvents message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.ReadAllEvents
                     * @static
                     * @param {EventStore.Client.Messages.ReadAllEvents} message ReadAllEvents
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReadAllEvents.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.commitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.commitPosition = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.preparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.preparePosition = options.longs === String ? "0" : 0;
                            object.maxCount = 0;
                            object.resolveLinkTos = false;
                            object.requireMaster = false;
                        }
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            if (typeof message.commitPosition === "number")
                                object.commitPosition = options.longs === String ? String(message.commitPosition) : message.commitPosition;
                            else
                                object.commitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.commitPosition) : options.longs === Number ? new $util.LongBits(message.commitPosition.low >>> 0, message.commitPosition.high >>> 0).toNumber() : message.commitPosition;
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            if (typeof message.preparePosition === "number")
                                object.preparePosition = options.longs === String ? String(message.preparePosition) : message.preparePosition;
                            else
                                object.preparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.preparePosition) : options.longs === Number ? new $util.LongBits(message.preparePosition.low >>> 0, message.preparePosition.high >>> 0).toNumber() : message.preparePosition;
                        if (message.maxCount != null && message.hasOwnProperty("maxCount"))
                            object.maxCount = message.maxCount;
                        if (message.resolveLinkTos != null && message.hasOwnProperty("resolveLinkTos"))
                            object.resolveLinkTos = message.resolveLinkTos;
                        if (message.requireMaster != null && message.hasOwnProperty("requireMaster"))
                            object.requireMaster = message.requireMaster;
                        return object;
                    };
    
                    /**
                     * Converts this ReadAllEvents to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.ReadAllEvents
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReadAllEvents.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ReadAllEvents;
                })();
    
                Messages.ReadAllEventsCompleted = (function() {
    
                    /**
                     * Properties of a ReadAllEventsCompleted.
                     * @memberof EventStore.Client.Messages
                     * @interface IReadAllEventsCompleted
                     * @property {number|Long} commitPosition ReadAllEventsCompleted commitPosition
                     * @property {number|Long} preparePosition ReadAllEventsCompleted preparePosition
                     * @property {Array.<EventStore.Client.Messages.IResolvedEvent>|null} [events] ReadAllEventsCompleted events
                     * @property {number|Long} nextCommitPosition ReadAllEventsCompleted nextCommitPosition
                     * @property {number|Long} nextPreparePosition ReadAllEventsCompleted nextPreparePosition
                     * @property {EventStore.Client.Messages.ReadAllEventsCompleted.ReadAllResult|null} [result] ReadAllEventsCompleted result
                     * @property {string|null} [error] ReadAllEventsCompleted error
                     */
    
                    /**
                     * Constructs a new ReadAllEventsCompleted.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a ReadAllEventsCompleted.
                     * @implements IReadAllEventsCompleted
                     * @constructor
                     * @param {EventStore.Client.Messages.IReadAllEventsCompleted=} [properties] Properties to set
                     */
                    function ReadAllEventsCompleted(properties) {
                        this.events = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReadAllEventsCompleted commitPosition.
                     * @member {number|Long} commitPosition
                     * @memberof EventStore.Client.Messages.ReadAllEventsCompleted
                     * @instance
                     */
                    ReadAllEventsCompleted.prototype.commitPosition = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * ReadAllEventsCompleted preparePosition.
                     * @member {number|Long} preparePosition
                     * @memberof EventStore.Client.Messages.ReadAllEventsCompleted
                     * @instance
                     */
                    ReadAllEventsCompleted.prototype.preparePosition = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * ReadAllEventsCompleted events.
                     * @member {Array.<EventStore.Client.Messages.IResolvedEvent>} events
                     * @memberof EventStore.Client.Messages.ReadAllEventsCompleted
                     * @instance
                     */
                    ReadAllEventsCompleted.prototype.events = $util.emptyArray;
    
                    /**
                     * ReadAllEventsCompleted nextCommitPosition.
                     * @member {number|Long} nextCommitPosition
                     * @memberof EventStore.Client.Messages.ReadAllEventsCompleted
                     * @instance
                     */
                    ReadAllEventsCompleted.prototype.nextCommitPosition = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * ReadAllEventsCompleted nextPreparePosition.
                     * @member {number|Long} nextPreparePosition
                     * @memberof EventStore.Client.Messages.ReadAllEventsCompleted
                     * @instance
                     */
                    ReadAllEventsCompleted.prototype.nextPreparePosition = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * ReadAllEventsCompleted result.
                     * @member {EventStore.Client.Messages.ReadAllEventsCompleted.ReadAllResult} result
                     * @memberof EventStore.Client.Messages.ReadAllEventsCompleted
                     * @instance
                     */
                    ReadAllEventsCompleted.prototype.result = 0;
    
                    /**
                     * ReadAllEventsCompleted error.
                     * @member {string} error
                     * @memberof EventStore.Client.Messages.ReadAllEventsCompleted
                     * @instance
                     */
                    ReadAllEventsCompleted.prototype.error = "";
    
                    /**
                     * Creates a new ReadAllEventsCompleted instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.ReadAllEventsCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IReadAllEventsCompleted=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.ReadAllEventsCompleted} ReadAllEventsCompleted instance
                     */
                    ReadAllEventsCompleted.create = function create(properties) {
                        return new ReadAllEventsCompleted(properties);
                    };
    
                    /**
                     * Encodes the specified ReadAllEventsCompleted message. Does not implicitly {@link EventStore.Client.Messages.ReadAllEventsCompleted.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.ReadAllEventsCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IReadAllEventsCompleted} message ReadAllEventsCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReadAllEventsCompleted.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.commitPosition);
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.preparePosition);
                        if (message.events != null && message.events.length)
                            for (var i = 0; i < message.events.length; ++i)
                                $root.EventStore.Client.Messages.ResolvedEvent.encode(message.events[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.nextCommitPosition);
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.nextPreparePosition);
                        if (message.result != null && message.hasOwnProperty("result"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.result);
                        if (message.error != null && message.hasOwnProperty("error"))
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.error);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReadAllEventsCompleted message, length delimited. Does not implicitly {@link EventStore.Client.Messages.ReadAllEventsCompleted.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.ReadAllEventsCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IReadAllEventsCompleted} message ReadAllEventsCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReadAllEventsCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReadAllEventsCompleted message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.ReadAllEventsCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.ReadAllEventsCompleted} ReadAllEventsCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReadAllEventsCompleted.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.ReadAllEventsCompleted();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.commitPosition = reader.int64();
                                break;
                            case 2:
                                message.preparePosition = reader.int64();
                                break;
                            case 3:
                                if (!(message.events && message.events.length))
                                    message.events = [];
                                message.events.push($root.EventStore.Client.Messages.ResolvedEvent.decode(reader, reader.uint32()));
                                break;
                            case 4:
                                message.nextCommitPosition = reader.int64();
                                break;
                            case 5:
                                message.nextPreparePosition = reader.int64();
                                break;
                            case 6:
                                message.result = reader.int32();
                                break;
                            case 7:
                                message.error = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("commitPosition"))
                            throw $util.ProtocolError("missing required 'commitPosition'", { instance: message });
                        if (!message.hasOwnProperty("preparePosition"))
                            throw $util.ProtocolError("missing required 'preparePosition'", { instance: message });
                        if (!message.hasOwnProperty("nextCommitPosition"))
                            throw $util.ProtocolError("missing required 'nextCommitPosition'", { instance: message });
                        if (!message.hasOwnProperty("nextPreparePosition"))
                            throw $util.ProtocolError("missing required 'nextPreparePosition'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a ReadAllEventsCompleted message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.ReadAllEventsCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.ReadAllEventsCompleted} ReadAllEventsCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReadAllEventsCompleted.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReadAllEventsCompleted message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.ReadAllEventsCompleted
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReadAllEventsCompleted.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isInteger(message.commitPosition) && !(message.commitPosition && $util.isInteger(message.commitPosition.low) && $util.isInteger(message.commitPosition.high)))
                            return "commitPosition: integer|Long expected";
                        if (!$util.isInteger(message.preparePosition) && !(message.preparePosition && $util.isInteger(message.preparePosition.low) && $util.isInteger(message.preparePosition.high)))
                            return "preparePosition: integer|Long expected";
                        if (message.events != null && message.hasOwnProperty("events")) {
                            if (!Array.isArray(message.events))
                                return "events: array expected";
                            for (var i = 0; i < message.events.length; ++i) {
                                var error = $root.EventStore.Client.Messages.ResolvedEvent.verify(message.events[i]);
                                if (error)
                                    return "events." + error;
                            }
                        }
                        if (!$util.isInteger(message.nextCommitPosition) && !(message.nextCommitPosition && $util.isInteger(message.nextCommitPosition.low) && $util.isInteger(message.nextCommitPosition.high)))
                            return "nextCommitPosition: integer|Long expected";
                        if (!$util.isInteger(message.nextPreparePosition) && !(message.nextPreparePosition && $util.isInteger(message.nextPreparePosition.low) && $util.isInteger(message.nextPreparePosition.high)))
                            return "nextPreparePosition: integer|Long expected";
                        if (message.result != null && message.hasOwnProperty("result"))
                            switch (message.result) {
                            default:
                                return "result: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        if (message.error != null && message.hasOwnProperty("error"))
                            if (!$util.isString(message.error))
                                return "error: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReadAllEventsCompleted message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.ReadAllEventsCompleted
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.ReadAllEventsCompleted} ReadAllEventsCompleted
                     */
                    ReadAllEventsCompleted.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.ReadAllEventsCompleted)
                            return object;
                        var message = new $root.EventStore.Client.Messages.ReadAllEventsCompleted();
                        if (object.commitPosition != null)
                            if ($util.Long)
                                (message.commitPosition = $util.Long.fromValue(object.commitPosition)).unsigned = false;
                            else if (typeof object.commitPosition === "string")
                                message.commitPosition = parseInt(object.commitPosition, 10);
                            else if (typeof object.commitPosition === "number")
                                message.commitPosition = object.commitPosition;
                            else if (typeof object.commitPosition === "object")
                                message.commitPosition = new $util.LongBits(object.commitPosition.low >>> 0, object.commitPosition.high >>> 0).toNumber();
                        if (object.preparePosition != null)
                            if ($util.Long)
                                (message.preparePosition = $util.Long.fromValue(object.preparePosition)).unsigned = false;
                            else if (typeof object.preparePosition === "string")
                                message.preparePosition = parseInt(object.preparePosition, 10);
                            else if (typeof object.preparePosition === "number")
                                message.preparePosition = object.preparePosition;
                            else if (typeof object.preparePosition === "object")
                                message.preparePosition = new $util.LongBits(object.preparePosition.low >>> 0, object.preparePosition.high >>> 0).toNumber();
                        if (object.events) {
                            if (!Array.isArray(object.events))
                                throw TypeError(".EventStore.Client.Messages.ReadAllEventsCompleted.events: array expected");
                            message.events = [];
                            for (var i = 0; i < object.events.length; ++i) {
                                if (typeof object.events[i] !== "object")
                                    throw TypeError(".EventStore.Client.Messages.ReadAllEventsCompleted.events: object expected");
                                message.events[i] = $root.EventStore.Client.Messages.ResolvedEvent.fromObject(object.events[i]);
                            }
                        }
                        if (object.nextCommitPosition != null)
                            if ($util.Long)
                                (message.nextCommitPosition = $util.Long.fromValue(object.nextCommitPosition)).unsigned = false;
                            else if (typeof object.nextCommitPosition === "string")
                                message.nextCommitPosition = parseInt(object.nextCommitPosition, 10);
                            else if (typeof object.nextCommitPosition === "number")
                                message.nextCommitPosition = object.nextCommitPosition;
                            else if (typeof object.nextCommitPosition === "object")
                                message.nextCommitPosition = new $util.LongBits(object.nextCommitPosition.low >>> 0, object.nextCommitPosition.high >>> 0).toNumber();
                        if (object.nextPreparePosition != null)
                            if ($util.Long)
                                (message.nextPreparePosition = $util.Long.fromValue(object.nextPreparePosition)).unsigned = false;
                            else if (typeof object.nextPreparePosition === "string")
                                message.nextPreparePosition = parseInt(object.nextPreparePosition, 10);
                            else if (typeof object.nextPreparePosition === "number")
                                message.nextPreparePosition = object.nextPreparePosition;
                            else if (typeof object.nextPreparePosition === "object")
                                message.nextPreparePosition = new $util.LongBits(object.nextPreparePosition.low >>> 0, object.nextPreparePosition.high >>> 0).toNumber();
                        switch (object.result) {
                        case "Success":
                        case 0:
                            message.result = 0;
                            break;
                        case "NotModified":
                        case 1:
                            message.result = 1;
                            break;
                        case "Error":
                        case 2:
                            message.result = 2;
                            break;
                        case "AccessDenied":
                        case 3:
                            message.result = 3;
                            break;
                        }
                        if (object.error != null)
                            message.error = String(object.error);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReadAllEventsCompleted message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.ReadAllEventsCompleted
                     * @static
                     * @param {EventStore.Client.Messages.ReadAllEventsCompleted} message ReadAllEventsCompleted
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReadAllEventsCompleted.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.events = [];
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.commitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.commitPosition = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.preparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.preparePosition = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.nextCommitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.nextCommitPosition = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.nextPreparePosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.nextPreparePosition = options.longs === String ? "0" : 0;
                            object.result = options.enums === String ? "Success" : 0;
                            object.error = "";
                        }
                        if (message.commitPosition != null && message.hasOwnProperty("commitPosition"))
                            if (typeof message.commitPosition === "number")
                                object.commitPosition = options.longs === String ? String(message.commitPosition) : message.commitPosition;
                            else
                                object.commitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.commitPosition) : options.longs === Number ? new $util.LongBits(message.commitPosition.low >>> 0, message.commitPosition.high >>> 0).toNumber() : message.commitPosition;
                        if (message.preparePosition != null && message.hasOwnProperty("preparePosition"))
                            if (typeof message.preparePosition === "number")
                                object.preparePosition = options.longs === String ? String(message.preparePosition) : message.preparePosition;
                            else
                                object.preparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.preparePosition) : options.longs === Number ? new $util.LongBits(message.preparePosition.low >>> 0, message.preparePosition.high >>> 0).toNumber() : message.preparePosition;
                        if (message.events && message.events.length) {
                            object.events = [];
                            for (var j = 0; j < message.events.length; ++j)
                                object.events[j] = $root.EventStore.Client.Messages.ResolvedEvent.toObject(message.events[j], options);
                        }
                        if (message.nextCommitPosition != null && message.hasOwnProperty("nextCommitPosition"))
                            if (typeof message.nextCommitPosition === "number")
                                object.nextCommitPosition = options.longs === String ? String(message.nextCommitPosition) : message.nextCommitPosition;
                            else
                                object.nextCommitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.nextCommitPosition) : options.longs === Number ? new $util.LongBits(message.nextCommitPosition.low >>> 0, message.nextCommitPosition.high >>> 0).toNumber() : message.nextCommitPosition;
                        if (message.nextPreparePosition != null && message.hasOwnProperty("nextPreparePosition"))
                            if (typeof message.nextPreparePosition === "number")
                                object.nextPreparePosition = options.longs === String ? String(message.nextPreparePosition) : message.nextPreparePosition;
                            else
                                object.nextPreparePosition = options.longs === String ? $util.Long.prototype.toString.call(message.nextPreparePosition) : options.longs === Number ? new $util.LongBits(message.nextPreparePosition.low >>> 0, message.nextPreparePosition.high >>> 0).toNumber() : message.nextPreparePosition;
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = options.enums === String ? $root.EventStore.Client.Messages.ReadAllEventsCompleted.ReadAllResult[message.result] : message.result;
                        if (message.error != null && message.hasOwnProperty("error"))
                            object.error = message.error;
                        return object;
                    };
    
                    /**
                     * Converts this ReadAllEventsCompleted to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.ReadAllEventsCompleted
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReadAllEventsCompleted.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * ReadAllResult enum.
                     * @name EventStore.Client.Messages.ReadAllEventsCompleted.ReadAllResult
                     * @enum {string}
                     * @property {number} Success=0 Success value
                     * @property {number} NotModified=1 NotModified value
                     * @property {number} Error=2 Error value
                     * @property {number} AccessDenied=3 AccessDenied value
                     */
                    ReadAllEventsCompleted.ReadAllResult = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "Success"] = 0;
                        values[valuesById[1] = "NotModified"] = 1;
                        values[valuesById[2] = "Error"] = 2;
                        values[valuesById[3] = "AccessDenied"] = 3;
                        return values;
                    })();
    
                    return ReadAllEventsCompleted;
                })();
    
                Messages.CreatePersistentSubscription = (function() {
    
                    /**
                     * Properties of a CreatePersistentSubscription.
                     * @memberof EventStore.Client.Messages
                     * @interface ICreatePersistentSubscription
                     * @property {string} subscriptionGroupName CreatePersistentSubscription subscriptionGroupName
                     * @property {string} eventStreamId CreatePersistentSubscription eventStreamId
                     * @property {boolean} resolveLinkTos CreatePersistentSubscription resolveLinkTos
                     * @property {number|Long} startFrom CreatePersistentSubscription startFrom
                     * @property {number} messageTimeoutMilliseconds CreatePersistentSubscription messageTimeoutMilliseconds
                     * @property {boolean} recordStatistics CreatePersistentSubscription recordStatistics
                     * @property {number} liveBufferSize CreatePersistentSubscription liveBufferSize
                     * @property {number} readBatchSize CreatePersistentSubscription readBatchSize
                     * @property {number} bufferSize CreatePersistentSubscription bufferSize
                     * @property {number} maxRetryCount CreatePersistentSubscription maxRetryCount
                     * @property {boolean} preferRoundRobin CreatePersistentSubscription preferRoundRobin
                     * @property {number} checkpointAfterTime CreatePersistentSubscription checkpointAfterTime
                     * @property {number} checkpointMaxCount CreatePersistentSubscription checkpointMaxCount
                     * @property {number} checkpointMinCount CreatePersistentSubscription checkpointMinCount
                     * @property {number} subscriberMaxCount CreatePersistentSubscription subscriberMaxCount
                     * @property {string|null} [namedConsumerStrategy] CreatePersistentSubscription namedConsumerStrategy
                     */
    
                    /**
                     * Constructs a new CreatePersistentSubscription.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a CreatePersistentSubscription.
                     * @implements ICreatePersistentSubscription
                     * @constructor
                     * @param {EventStore.Client.Messages.ICreatePersistentSubscription=} [properties] Properties to set
                     */
                    function CreatePersistentSubscription(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * CreatePersistentSubscription subscriptionGroupName.
                     * @member {string} subscriptionGroupName
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @instance
                     */
                    CreatePersistentSubscription.prototype.subscriptionGroupName = "";
    
                    /**
                     * CreatePersistentSubscription eventStreamId.
                     * @member {string} eventStreamId
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @instance
                     */
                    CreatePersistentSubscription.prototype.eventStreamId = "";
    
                    /**
                     * CreatePersistentSubscription resolveLinkTos.
                     * @member {boolean} resolveLinkTos
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @instance
                     */
                    CreatePersistentSubscription.prototype.resolveLinkTos = false;
    
                    /**
                     * CreatePersistentSubscription startFrom.
                     * @member {number|Long} startFrom
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @instance
                     */
                    CreatePersistentSubscription.prototype.startFrom = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * CreatePersistentSubscription messageTimeoutMilliseconds.
                     * @member {number} messageTimeoutMilliseconds
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @instance
                     */
                    CreatePersistentSubscription.prototype.messageTimeoutMilliseconds = 0;
    
                    /**
                     * CreatePersistentSubscription recordStatistics.
                     * @member {boolean} recordStatistics
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @instance
                     */
                    CreatePersistentSubscription.prototype.recordStatistics = false;
    
                    /**
                     * CreatePersistentSubscription liveBufferSize.
                     * @member {number} liveBufferSize
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @instance
                     */
                    CreatePersistentSubscription.prototype.liveBufferSize = 0;
    
                    /**
                     * CreatePersistentSubscription readBatchSize.
                     * @member {number} readBatchSize
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @instance
                     */
                    CreatePersistentSubscription.prototype.readBatchSize = 0;
    
                    /**
                     * CreatePersistentSubscription bufferSize.
                     * @member {number} bufferSize
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @instance
                     */
                    CreatePersistentSubscription.prototype.bufferSize = 0;
    
                    /**
                     * CreatePersistentSubscription maxRetryCount.
                     * @member {number} maxRetryCount
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @instance
                     */
                    CreatePersistentSubscription.prototype.maxRetryCount = 0;
    
                    /**
                     * CreatePersistentSubscription preferRoundRobin.
                     * @member {boolean} preferRoundRobin
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @instance
                     */
                    CreatePersistentSubscription.prototype.preferRoundRobin = false;
    
                    /**
                     * CreatePersistentSubscription checkpointAfterTime.
                     * @member {number} checkpointAfterTime
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @instance
                     */
                    CreatePersistentSubscription.prototype.checkpointAfterTime = 0;
    
                    /**
                     * CreatePersistentSubscription checkpointMaxCount.
                     * @member {number} checkpointMaxCount
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @instance
                     */
                    CreatePersistentSubscription.prototype.checkpointMaxCount = 0;
    
                    /**
                     * CreatePersistentSubscription checkpointMinCount.
                     * @member {number} checkpointMinCount
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @instance
                     */
                    CreatePersistentSubscription.prototype.checkpointMinCount = 0;
    
                    /**
                     * CreatePersistentSubscription subscriberMaxCount.
                     * @member {number} subscriberMaxCount
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @instance
                     */
                    CreatePersistentSubscription.prototype.subscriberMaxCount = 0;
    
                    /**
                     * CreatePersistentSubscription namedConsumerStrategy.
                     * @member {string} namedConsumerStrategy
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @instance
                     */
                    CreatePersistentSubscription.prototype.namedConsumerStrategy = "";
    
                    /**
                     * Creates a new CreatePersistentSubscription instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @static
                     * @param {EventStore.Client.Messages.ICreatePersistentSubscription=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.CreatePersistentSubscription} CreatePersistentSubscription instance
                     */
                    CreatePersistentSubscription.create = function create(properties) {
                        return new CreatePersistentSubscription(properties);
                    };
    
                    /**
                     * Encodes the specified CreatePersistentSubscription message. Does not implicitly {@link EventStore.Client.Messages.CreatePersistentSubscription.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @static
                     * @param {EventStore.Client.Messages.ICreatePersistentSubscription} message CreatePersistentSubscription message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreatePersistentSubscription.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.subscriptionGroupName);
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.eventStreamId);
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.resolveLinkTos);
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.startFrom);
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.messageTimeoutMilliseconds);
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.recordStatistics);
                        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.liveBufferSize);
                        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.readBatchSize);
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.bufferSize);
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.maxRetryCount);
                        writer.uint32(/* id 11, wireType 0 =*/88).bool(message.preferRoundRobin);
                        writer.uint32(/* id 12, wireType 0 =*/96).int32(message.checkpointAfterTime);
                        writer.uint32(/* id 13, wireType 0 =*/104).int32(message.checkpointMaxCount);
                        writer.uint32(/* id 14, wireType 0 =*/112).int32(message.checkpointMinCount);
                        writer.uint32(/* id 15, wireType 0 =*/120).int32(message.subscriberMaxCount);
                        if (message.namedConsumerStrategy != null && message.hasOwnProperty("namedConsumerStrategy"))
                            writer.uint32(/* id 16, wireType 2 =*/130).string(message.namedConsumerStrategy);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified CreatePersistentSubscription message, length delimited. Does not implicitly {@link EventStore.Client.Messages.CreatePersistentSubscription.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @static
                     * @param {EventStore.Client.Messages.ICreatePersistentSubscription} message CreatePersistentSubscription message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreatePersistentSubscription.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a CreatePersistentSubscription message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.CreatePersistentSubscription} CreatePersistentSubscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreatePersistentSubscription.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.CreatePersistentSubscription();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.subscriptionGroupName = reader.string();
                                break;
                            case 2:
                                message.eventStreamId = reader.string();
                                break;
                            case 3:
                                message.resolveLinkTos = reader.bool();
                                break;
                            case 4:
                                message.startFrom = reader.int64();
                                break;
                            case 5:
                                message.messageTimeoutMilliseconds = reader.int32();
                                break;
                            case 6:
                                message.recordStatistics = reader.bool();
                                break;
                            case 7:
                                message.liveBufferSize = reader.int32();
                                break;
                            case 8:
                                message.readBatchSize = reader.int32();
                                break;
                            case 9:
                                message.bufferSize = reader.int32();
                                break;
                            case 10:
                                message.maxRetryCount = reader.int32();
                                break;
                            case 11:
                                message.preferRoundRobin = reader.bool();
                                break;
                            case 12:
                                message.checkpointAfterTime = reader.int32();
                                break;
                            case 13:
                                message.checkpointMaxCount = reader.int32();
                                break;
                            case 14:
                                message.checkpointMinCount = reader.int32();
                                break;
                            case 15:
                                message.subscriberMaxCount = reader.int32();
                                break;
                            case 16:
                                message.namedConsumerStrategy = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("subscriptionGroupName"))
                            throw $util.ProtocolError("missing required 'subscriptionGroupName'", { instance: message });
                        if (!message.hasOwnProperty("eventStreamId"))
                            throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                        if (!message.hasOwnProperty("resolveLinkTos"))
                            throw $util.ProtocolError("missing required 'resolveLinkTos'", { instance: message });
                        if (!message.hasOwnProperty("startFrom"))
                            throw $util.ProtocolError("missing required 'startFrom'", { instance: message });
                        if (!message.hasOwnProperty("messageTimeoutMilliseconds"))
                            throw $util.ProtocolError("missing required 'messageTimeoutMilliseconds'", { instance: message });
                        if (!message.hasOwnProperty("recordStatistics"))
                            throw $util.ProtocolError("missing required 'recordStatistics'", { instance: message });
                        if (!message.hasOwnProperty("liveBufferSize"))
                            throw $util.ProtocolError("missing required 'liveBufferSize'", { instance: message });
                        if (!message.hasOwnProperty("readBatchSize"))
                            throw $util.ProtocolError("missing required 'readBatchSize'", { instance: message });
                        if (!message.hasOwnProperty("bufferSize"))
                            throw $util.ProtocolError("missing required 'bufferSize'", { instance: message });
                        if (!message.hasOwnProperty("maxRetryCount"))
                            throw $util.ProtocolError("missing required 'maxRetryCount'", { instance: message });
                        if (!message.hasOwnProperty("preferRoundRobin"))
                            throw $util.ProtocolError("missing required 'preferRoundRobin'", { instance: message });
                        if (!message.hasOwnProperty("checkpointAfterTime"))
                            throw $util.ProtocolError("missing required 'checkpointAfterTime'", { instance: message });
                        if (!message.hasOwnProperty("checkpointMaxCount"))
                            throw $util.ProtocolError("missing required 'checkpointMaxCount'", { instance: message });
                        if (!message.hasOwnProperty("checkpointMinCount"))
                            throw $util.ProtocolError("missing required 'checkpointMinCount'", { instance: message });
                        if (!message.hasOwnProperty("subscriberMaxCount"))
                            throw $util.ProtocolError("missing required 'subscriberMaxCount'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a CreatePersistentSubscription message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.CreatePersistentSubscription} CreatePersistentSubscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreatePersistentSubscription.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a CreatePersistentSubscription message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CreatePersistentSubscription.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.subscriptionGroupName))
                            return "subscriptionGroupName: string expected";
                        if (!$util.isString(message.eventStreamId))
                            return "eventStreamId: string expected";
                        if (typeof message.resolveLinkTos !== "boolean")
                            return "resolveLinkTos: boolean expected";
                        if (!$util.isInteger(message.startFrom) && !(message.startFrom && $util.isInteger(message.startFrom.low) && $util.isInteger(message.startFrom.high)))
                            return "startFrom: integer|Long expected";
                        if (!$util.isInteger(message.messageTimeoutMilliseconds))
                            return "messageTimeoutMilliseconds: integer expected";
                        if (typeof message.recordStatistics !== "boolean")
                            return "recordStatistics: boolean expected";
                        if (!$util.isInteger(message.liveBufferSize))
                            return "liveBufferSize: integer expected";
                        if (!$util.isInteger(message.readBatchSize))
                            return "readBatchSize: integer expected";
                        if (!$util.isInteger(message.bufferSize))
                            return "bufferSize: integer expected";
                        if (!$util.isInteger(message.maxRetryCount))
                            return "maxRetryCount: integer expected";
                        if (typeof message.preferRoundRobin !== "boolean")
                            return "preferRoundRobin: boolean expected";
                        if (!$util.isInteger(message.checkpointAfterTime))
                            return "checkpointAfterTime: integer expected";
                        if (!$util.isInteger(message.checkpointMaxCount))
                            return "checkpointMaxCount: integer expected";
                        if (!$util.isInteger(message.checkpointMinCount))
                            return "checkpointMinCount: integer expected";
                        if (!$util.isInteger(message.subscriberMaxCount))
                            return "subscriberMaxCount: integer expected";
                        if (message.namedConsumerStrategy != null && message.hasOwnProperty("namedConsumerStrategy"))
                            if (!$util.isString(message.namedConsumerStrategy))
                                return "namedConsumerStrategy: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a CreatePersistentSubscription message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.CreatePersistentSubscription} CreatePersistentSubscription
                     */
                    CreatePersistentSubscription.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.CreatePersistentSubscription)
                            return object;
                        var message = new $root.EventStore.Client.Messages.CreatePersistentSubscription();
                        if (object.subscriptionGroupName != null)
                            message.subscriptionGroupName = String(object.subscriptionGroupName);
                        if (object.eventStreamId != null)
                            message.eventStreamId = String(object.eventStreamId);
                        if (object.resolveLinkTos != null)
                            message.resolveLinkTos = Boolean(object.resolveLinkTos);
                        if (object.startFrom != null)
                            if ($util.Long)
                                (message.startFrom = $util.Long.fromValue(object.startFrom)).unsigned = false;
                            else if (typeof object.startFrom === "string")
                                message.startFrom = parseInt(object.startFrom, 10);
                            else if (typeof object.startFrom === "number")
                                message.startFrom = object.startFrom;
                            else if (typeof object.startFrom === "object")
                                message.startFrom = new $util.LongBits(object.startFrom.low >>> 0, object.startFrom.high >>> 0).toNumber();
                        if (object.messageTimeoutMilliseconds != null)
                            message.messageTimeoutMilliseconds = object.messageTimeoutMilliseconds | 0;
                        if (object.recordStatistics != null)
                            message.recordStatistics = Boolean(object.recordStatistics);
                        if (object.liveBufferSize != null)
                            message.liveBufferSize = object.liveBufferSize | 0;
                        if (object.readBatchSize != null)
                            message.readBatchSize = object.readBatchSize | 0;
                        if (object.bufferSize != null)
                            message.bufferSize = object.bufferSize | 0;
                        if (object.maxRetryCount != null)
                            message.maxRetryCount = object.maxRetryCount | 0;
                        if (object.preferRoundRobin != null)
                            message.preferRoundRobin = Boolean(object.preferRoundRobin);
                        if (object.checkpointAfterTime != null)
                            message.checkpointAfterTime = object.checkpointAfterTime | 0;
                        if (object.checkpointMaxCount != null)
                            message.checkpointMaxCount = object.checkpointMaxCount | 0;
                        if (object.checkpointMinCount != null)
                            message.checkpointMinCount = object.checkpointMinCount | 0;
                        if (object.subscriberMaxCount != null)
                            message.subscriberMaxCount = object.subscriberMaxCount | 0;
                        if (object.namedConsumerStrategy != null)
                            message.namedConsumerStrategy = String(object.namedConsumerStrategy);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a CreatePersistentSubscription message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @static
                     * @param {EventStore.Client.Messages.CreatePersistentSubscription} message CreatePersistentSubscription
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CreatePersistentSubscription.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.subscriptionGroupName = "";
                            object.eventStreamId = "";
                            object.resolveLinkTos = false;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.startFrom = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.startFrom = options.longs === String ? "0" : 0;
                            object.messageTimeoutMilliseconds = 0;
                            object.recordStatistics = false;
                            object.liveBufferSize = 0;
                            object.readBatchSize = 0;
                            object.bufferSize = 0;
                            object.maxRetryCount = 0;
                            object.preferRoundRobin = false;
                            object.checkpointAfterTime = 0;
                            object.checkpointMaxCount = 0;
                            object.checkpointMinCount = 0;
                            object.subscriberMaxCount = 0;
                            object.namedConsumerStrategy = "";
                        }
                        if (message.subscriptionGroupName != null && message.hasOwnProperty("subscriptionGroupName"))
                            object.subscriptionGroupName = message.subscriptionGroupName;
                        if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                            object.eventStreamId = message.eventStreamId;
                        if (message.resolveLinkTos != null && message.hasOwnProperty("resolveLinkTos"))
                            object.resolveLinkTos = message.resolveLinkTos;
                        if (message.startFrom != null && message.hasOwnProperty("startFrom"))
                            if (typeof message.startFrom === "number")
                                object.startFrom = options.longs === String ? String(message.startFrom) : message.startFrom;
                            else
                                object.startFrom = options.longs === String ? $util.Long.prototype.toString.call(message.startFrom) : options.longs === Number ? new $util.LongBits(message.startFrom.low >>> 0, message.startFrom.high >>> 0).toNumber() : message.startFrom;
                        if (message.messageTimeoutMilliseconds != null && message.hasOwnProperty("messageTimeoutMilliseconds"))
                            object.messageTimeoutMilliseconds = message.messageTimeoutMilliseconds;
                        if (message.recordStatistics != null && message.hasOwnProperty("recordStatistics"))
                            object.recordStatistics = message.recordStatistics;
                        if (message.liveBufferSize != null && message.hasOwnProperty("liveBufferSize"))
                            object.liveBufferSize = message.liveBufferSize;
                        if (message.readBatchSize != null && message.hasOwnProperty("readBatchSize"))
                            object.readBatchSize = message.readBatchSize;
                        if (message.bufferSize != null && message.hasOwnProperty("bufferSize"))
                            object.bufferSize = message.bufferSize;
                        if (message.maxRetryCount != null && message.hasOwnProperty("maxRetryCount"))
                            object.maxRetryCount = message.maxRetryCount;
                        if (message.preferRoundRobin != null && message.hasOwnProperty("preferRoundRobin"))
                            object.preferRoundRobin = message.preferRoundRobin;
                        if (message.checkpointAfterTime != null && message.hasOwnProperty("checkpointAfterTime"))
                            object.checkpointAfterTime = message.checkpointAfterTime;
                        if (message.checkpointMaxCount != null && message.hasOwnProperty("checkpointMaxCount"))
                            object.checkpointMaxCount = message.checkpointMaxCount;
                        if (message.checkpointMinCount != null && message.hasOwnProperty("checkpointMinCount"))
                            object.checkpointMinCount = message.checkpointMinCount;
                        if (message.subscriberMaxCount != null && message.hasOwnProperty("subscriberMaxCount"))
                            object.subscriberMaxCount = message.subscriberMaxCount;
                        if (message.namedConsumerStrategy != null && message.hasOwnProperty("namedConsumerStrategy"))
                            object.namedConsumerStrategy = message.namedConsumerStrategy;
                        return object;
                    };
    
                    /**
                     * Converts this CreatePersistentSubscription to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscription
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CreatePersistentSubscription.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return CreatePersistentSubscription;
                })();
    
                Messages.DeletePersistentSubscription = (function() {
    
                    /**
                     * Properties of a DeletePersistentSubscription.
                     * @memberof EventStore.Client.Messages
                     * @interface IDeletePersistentSubscription
                     * @property {string} subscriptionGroupName DeletePersistentSubscription subscriptionGroupName
                     * @property {string} eventStreamId DeletePersistentSubscription eventStreamId
                     */
    
                    /**
                     * Constructs a new DeletePersistentSubscription.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a DeletePersistentSubscription.
                     * @implements IDeletePersistentSubscription
                     * @constructor
                     * @param {EventStore.Client.Messages.IDeletePersistentSubscription=} [properties] Properties to set
                     */
                    function DeletePersistentSubscription(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * DeletePersistentSubscription subscriptionGroupName.
                     * @member {string} subscriptionGroupName
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscription
                     * @instance
                     */
                    DeletePersistentSubscription.prototype.subscriptionGroupName = "";
    
                    /**
                     * DeletePersistentSubscription eventStreamId.
                     * @member {string} eventStreamId
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscription
                     * @instance
                     */
                    DeletePersistentSubscription.prototype.eventStreamId = "";
    
                    /**
                     * Creates a new DeletePersistentSubscription instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscription
                     * @static
                     * @param {EventStore.Client.Messages.IDeletePersistentSubscription=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.DeletePersistentSubscription} DeletePersistentSubscription instance
                     */
                    DeletePersistentSubscription.create = function create(properties) {
                        return new DeletePersistentSubscription(properties);
                    };
    
                    /**
                     * Encodes the specified DeletePersistentSubscription message. Does not implicitly {@link EventStore.Client.Messages.DeletePersistentSubscription.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscription
                     * @static
                     * @param {EventStore.Client.Messages.IDeletePersistentSubscription} message DeletePersistentSubscription message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeletePersistentSubscription.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.subscriptionGroupName);
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.eventStreamId);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified DeletePersistentSubscription message, length delimited. Does not implicitly {@link EventStore.Client.Messages.DeletePersistentSubscription.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscription
                     * @static
                     * @param {EventStore.Client.Messages.IDeletePersistentSubscription} message DeletePersistentSubscription message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeletePersistentSubscription.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a DeletePersistentSubscription message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscription
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.DeletePersistentSubscription} DeletePersistentSubscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeletePersistentSubscription.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.DeletePersistentSubscription();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.subscriptionGroupName = reader.string();
                                break;
                            case 2:
                                message.eventStreamId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("subscriptionGroupName"))
                            throw $util.ProtocolError("missing required 'subscriptionGroupName'", { instance: message });
                        if (!message.hasOwnProperty("eventStreamId"))
                            throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a DeletePersistentSubscription message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscription
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.DeletePersistentSubscription} DeletePersistentSubscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeletePersistentSubscription.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a DeletePersistentSubscription message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscription
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeletePersistentSubscription.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.subscriptionGroupName))
                            return "subscriptionGroupName: string expected";
                        if (!$util.isString(message.eventStreamId))
                            return "eventStreamId: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a DeletePersistentSubscription message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscription
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.DeletePersistentSubscription} DeletePersistentSubscription
                     */
                    DeletePersistentSubscription.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.DeletePersistentSubscription)
                            return object;
                        var message = new $root.EventStore.Client.Messages.DeletePersistentSubscription();
                        if (object.subscriptionGroupName != null)
                            message.subscriptionGroupName = String(object.subscriptionGroupName);
                        if (object.eventStreamId != null)
                            message.eventStreamId = String(object.eventStreamId);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a DeletePersistentSubscription message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscription
                     * @static
                     * @param {EventStore.Client.Messages.DeletePersistentSubscription} message DeletePersistentSubscription
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeletePersistentSubscription.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.subscriptionGroupName = "";
                            object.eventStreamId = "";
                        }
                        if (message.subscriptionGroupName != null && message.hasOwnProperty("subscriptionGroupName"))
                            object.subscriptionGroupName = message.subscriptionGroupName;
                        if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                            object.eventStreamId = message.eventStreamId;
                        return object;
                    };
    
                    /**
                     * Converts this DeletePersistentSubscription to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscription
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeletePersistentSubscription.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return DeletePersistentSubscription;
                })();
    
                Messages.UpdatePersistentSubscription = (function() {
    
                    /**
                     * Properties of an UpdatePersistentSubscription.
                     * @memberof EventStore.Client.Messages
                     * @interface IUpdatePersistentSubscription
                     * @property {string} subscriptionGroupName UpdatePersistentSubscription subscriptionGroupName
                     * @property {string} eventStreamId UpdatePersistentSubscription eventStreamId
                     * @property {boolean} resolveLinkTos UpdatePersistentSubscription resolveLinkTos
                     * @property {number|Long} startFrom UpdatePersistentSubscription startFrom
                     * @property {number} messageTimeoutMilliseconds UpdatePersistentSubscription messageTimeoutMilliseconds
                     * @property {boolean} recordStatistics UpdatePersistentSubscription recordStatistics
                     * @property {number} liveBufferSize UpdatePersistentSubscription liveBufferSize
                     * @property {number} readBatchSize UpdatePersistentSubscription readBatchSize
                     * @property {number} bufferSize UpdatePersistentSubscription bufferSize
                     * @property {number} maxRetryCount UpdatePersistentSubscription maxRetryCount
                     * @property {boolean} preferRoundRobin UpdatePersistentSubscription preferRoundRobin
                     * @property {number} checkpointAfterTime UpdatePersistentSubscription checkpointAfterTime
                     * @property {number} checkpointMaxCount UpdatePersistentSubscription checkpointMaxCount
                     * @property {number} checkpointMinCount UpdatePersistentSubscription checkpointMinCount
                     * @property {number} subscriberMaxCount UpdatePersistentSubscription subscriberMaxCount
                     * @property {string|null} [namedConsumerStrategy] UpdatePersistentSubscription namedConsumerStrategy
                     */
    
                    /**
                     * Constructs a new UpdatePersistentSubscription.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents an UpdatePersistentSubscription.
                     * @implements IUpdatePersistentSubscription
                     * @constructor
                     * @param {EventStore.Client.Messages.IUpdatePersistentSubscription=} [properties] Properties to set
                     */
                    function UpdatePersistentSubscription(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UpdatePersistentSubscription subscriptionGroupName.
                     * @member {string} subscriptionGroupName
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @instance
                     */
                    UpdatePersistentSubscription.prototype.subscriptionGroupName = "";
    
                    /**
                     * UpdatePersistentSubscription eventStreamId.
                     * @member {string} eventStreamId
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @instance
                     */
                    UpdatePersistentSubscription.prototype.eventStreamId = "";
    
                    /**
                     * UpdatePersistentSubscription resolveLinkTos.
                     * @member {boolean} resolveLinkTos
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @instance
                     */
                    UpdatePersistentSubscription.prototype.resolveLinkTos = false;
    
                    /**
                     * UpdatePersistentSubscription startFrom.
                     * @member {number|Long} startFrom
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @instance
                     */
                    UpdatePersistentSubscription.prototype.startFrom = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * UpdatePersistentSubscription messageTimeoutMilliseconds.
                     * @member {number} messageTimeoutMilliseconds
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @instance
                     */
                    UpdatePersistentSubscription.prototype.messageTimeoutMilliseconds = 0;
    
                    /**
                     * UpdatePersistentSubscription recordStatistics.
                     * @member {boolean} recordStatistics
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @instance
                     */
                    UpdatePersistentSubscription.prototype.recordStatistics = false;
    
                    /**
                     * UpdatePersistentSubscription liveBufferSize.
                     * @member {number} liveBufferSize
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @instance
                     */
                    UpdatePersistentSubscription.prototype.liveBufferSize = 0;
    
                    /**
                     * UpdatePersistentSubscription readBatchSize.
                     * @member {number} readBatchSize
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @instance
                     */
                    UpdatePersistentSubscription.prototype.readBatchSize = 0;
    
                    /**
                     * UpdatePersistentSubscription bufferSize.
                     * @member {number} bufferSize
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @instance
                     */
                    UpdatePersistentSubscription.prototype.bufferSize = 0;
    
                    /**
                     * UpdatePersistentSubscription maxRetryCount.
                     * @member {number} maxRetryCount
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @instance
                     */
                    UpdatePersistentSubscription.prototype.maxRetryCount = 0;
    
                    /**
                     * UpdatePersistentSubscription preferRoundRobin.
                     * @member {boolean} preferRoundRobin
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @instance
                     */
                    UpdatePersistentSubscription.prototype.preferRoundRobin = false;
    
                    /**
                     * UpdatePersistentSubscription checkpointAfterTime.
                     * @member {number} checkpointAfterTime
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @instance
                     */
                    UpdatePersistentSubscription.prototype.checkpointAfterTime = 0;
    
                    /**
                     * UpdatePersistentSubscription checkpointMaxCount.
                     * @member {number} checkpointMaxCount
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @instance
                     */
                    UpdatePersistentSubscription.prototype.checkpointMaxCount = 0;
    
                    /**
                     * UpdatePersistentSubscription checkpointMinCount.
                     * @member {number} checkpointMinCount
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @instance
                     */
                    UpdatePersistentSubscription.prototype.checkpointMinCount = 0;
    
                    /**
                     * UpdatePersistentSubscription subscriberMaxCount.
                     * @member {number} subscriberMaxCount
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @instance
                     */
                    UpdatePersistentSubscription.prototype.subscriberMaxCount = 0;
    
                    /**
                     * UpdatePersistentSubscription namedConsumerStrategy.
                     * @member {string} namedConsumerStrategy
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @instance
                     */
                    UpdatePersistentSubscription.prototype.namedConsumerStrategy = "";
    
                    /**
                     * Creates a new UpdatePersistentSubscription instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @static
                     * @param {EventStore.Client.Messages.IUpdatePersistentSubscription=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.UpdatePersistentSubscription} UpdatePersistentSubscription instance
                     */
                    UpdatePersistentSubscription.create = function create(properties) {
                        return new UpdatePersistentSubscription(properties);
                    };
    
                    /**
                     * Encodes the specified UpdatePersistentSubscription message. Does not implicitly {@link EventStore.Client.Messages.UpdatePersistentSubscription.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @static
                     * @param {EventStore.Client.Messages.IUpdatePersistentSubscription} message UpdatePersistentSubscription message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdatePersistentSubscription.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.subscriptionGroupName);
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.eventStreamId);
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.resolveLinkTos);
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.startFrom);
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.messageTimeoutMilliseconds);
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.recordStatistics);
                        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.liveBufferSize);
                        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.readBatchSize);
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.bufferSize);
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.maxRetryCount);
                        writer.uint32(/* id 11, wireType 0 =*/88).bool(message.preferRoundRobin);
                        writer.uint32(/* id 12, wireType 0 =*/96).int32(message.checkpointAfterTime);
                        writer.uint32(/* id 13, wireType 0 =*/104).int32(message.checkpointMaxCount);
                        writer.uint32(/* id 14, wireType 0 =*/112).int32(message.checkpointMinCount);
                        writer.uint32(/* id 15, wireType 0 =*/120).int32(message.subscriberMaxCount);
                        if (message.namedConsumerStrategy != null && message.hasOwnProperty("namedConsumerStrategy"))
                            writer.uint32(/* id 16, wireType 2 =*/130).string(message.namedConsumerStrategy);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UpdatePersistentSubscription message, length delimited. Does not implicitly {@link EventStore.Client.Messages.UpdatePersistentSubscription.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @static
                     * @param {EventStore.Client.Messages.IUpdatePersistentSubscription} message UpdatePersistentSubscription message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdatePersistentSubscription.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an UpdatePersistentSubscription message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.UpdatePersistentSubscription} UpdatePersistentSubscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdatePersistentSubscription.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.UpdatePersistentSubscription();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.subscriptionGroupName = reader.string();
                                break;
                            case 2:
                                message.eventStreamId = reader.string();
                                break;
                            case 3:
                                message.resolveLinkTos = reader.bool();
                                break;
                            case 4:
                                message.startFrom = reader.int64();
                                break;
                            case 5:
                                message.messageTimeoutMilliseconds = reader.int32();
                                break;
                            case 6:
                                message.recordStatistics = reader.bool();
                                break;
                            case 7:
                                message.liveBufferSize = reader.int32();
                                break;
                            case 8:
                                message.readBatchSize = reader.int32();
                                break;
                            case 9:
                                message.bufferSize = reader.int32();
                                break;
                            case 10:
                                message.maxRetryCount = reader.int32();
                                break;
                            case 11:
                                message.preferRoundRobin = reader.bool();
                                break;
                            case 12:
                                message.checkpointAfterTime = reader.int32();
                                break;
                            case 13:
                                message.checkpointMaxCount = reader.int32();
                                break;
                            case 14:
                                message.checkpointMinCount = reader.int32();
                                break;
                            case 15:
                                message.subscriberMaxCount = reader.int32();
                                break;
                            case 16:
                                message.namedConsumerStrategy = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("subscriptionGroupName"))
                            throw $util.ProtocolError("missing required 'subscriptionGroupName'", { instance: message });
                        if (!message.hasOwnProperty("eventStreamId"))
                            throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                        if (!message.hasOwnProperty("resolveLinkTos"))
                            throw $util.ProtocolError("missing required 'resolveLinkTos'", { instance: message });
                        if (!message.hasOwnProperty("startFrom"))
                            throw $util.ProtocolError("missing required 'startFrom'", { instance: message });
                        if (!message.hasOwnProperty("messageTimeoutMilliseconds"))
                            throw $util.ProtocolError("missing required 'messageTimeoutMilliseconds'", { instance: message });
                        if (!message.hasOwnProperty("recordStatistics"))
                            throw $util.ProtocolError("missing required 'recordStatistics'", { instance: message });
                        if (!message.hasOwnProperty("liveBufferSize"))
                            throw $util.ProtocolError("missing required 'liveBufferSize'", { instance: message });
                        if (!message.hasOwnProperty("readBatchSize"))
                            throw $util.ProtocolError("missing required 'readBatchSize'", { instance: message });
                        if (!message.hasOwnProperty("bufferSize"))
                            throw $util.ProtocolError("missing required 'bufferSize'", { instance: message });
                        if (!message.hasOwnProperty("maxRetryCount"))
                            throw $util.ProtocolError("missing required 'maxRetryCount'", { instance: message });
                        if (!message.hasOwnProperty("preferRoundRobin"))
                            throw $util.ProtocolError("missing required 'preferRoundRobin'", { instance: message });
                        if (!message.hasOwnProperty("checkpointAfterTime"))
                            throw $util.ProtocolError("missing required 'checkpointAfterTime'", { instance: message });
                        if (!message.hasOwnProperty("checkpointMaxCount"))
                            throw $util.ProtocolError("missing required 'checkpointMaxCount'", { instance: message });
                        if (!message.hasOwnProperty("checkpointMinCount"))
                            throw $util.ProtocolError("missing required 'checkpointMinCount'", { instance: message });
                        if (!message.hasOwnProperty("subscriberMaxCount"))
                            throw $util.ProtocolError("missing required 'subscriberMaxCount'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes an UpdatePersistentSubscription message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.UpdatePersistentSubscription} UpdatePersistentSubscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdatePersistentSubscription.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an UpdatePersistentSubscription message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdatePersistentSubscription.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.subscriptionGroupName))
                            return "subscriptionGroupName: string expected";
                        if (!$util.isString(message.eventStreamId))
                            return "eventStreamId: string expected";
                        if (typeof message.resolveLinkTos !== "boolean")
                            return "resolveLinkTos: boolean expected";
                        if (!$util.isInteger(message.startFrom) && !(message.startFrom && $util.isInteger(message.startFrom.low) && $util.isInteger(message.startFrom.high)))
                            return "startFrom: integer|Long expected";
                        if (!$util.isInteger(message.messageTimeoutMilliseconds))
                            return "messageTimeoutMilliseconds: integer expected";
                        if (typeof message.recordStatistics !== "boolean")
                            return "recordStatistics: boolean expected";
                        if (!$util.isInteger(message.liveBufferSize))
                            return "liveBufferSize: integer expected";
                        if (!$util.isInteger(message.readBatchSize))
                            return "readBatchSize: integer expected";
                        if (!$util.isInteger(message.bufferSize))
                            return "bufferSize: integer expected";
                        if (!$util.isInteger(message.maxRetryCount))
                            return "maxRetryCount: integer expected";
                        if (typeof message.preferRoundRobin !== "boolean")
                            return "preferRoundRobin: boolean expected";
                        if (!$util.isInteger(message.checkpointAfterTime))
                            return "checkpointAfterTime: integer expected";
                        if (!$util.isInteger(message.checkpointMaxCount))
                            return "checkpointMaxCount: integer expected";
                        if (!$util.isInteger(message.checkpointMinCount))
                            return "checkpointMinCount: integer expected";
                        if (!$util.isInteger(message.subscriberMaxCount))
                            return "subscriberMaxCount: integer expected";
                        if (message.namedConsumerStrategy != null && message.hasOwnProperty("namedConsumerStrategy"))
                            if (!$util.isString(message.namedConsumerStrategy))
                                return "namedConsumerStrategy: string expected";
                        return null;
                    };
    
                    /**
                     * Creates an UpdatePersistentSubscription message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.UpdatePersistentSubscription} UpdatePersistentSubscription
                     */
                    UpdatePersistentSubscription.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.UpdatePersistentSubscription)
                            return object;
                        var message = new $root.EventStore.Client.Messages.UpdatePersistentSubscription();
                        if (object.subscriptionGroupName != null)
                            message.subscriptionGroupName = String(object.subscriptionGroupName);
                        if (object.eventStreamId != null)
                            message.eventStreamId = String(object.eventStreamId);
                        if (object.resolveLinkTos != null)
                            message.resolveLinkTos = Boolean(object.resolveLinkTos);
                        if (object.startFrom != null)
                            if ($util.Long)
                                (message.startFrom = $util.Long.fromValue(object.startFrom)).unsigned = false;
                            else if (typeof object.startFrom === "string")
                                message.startFrom = parseInt(object.startFrom, 10);
                            else if (typeof object.startFrom === "number")
                                message.startFrom = object.startFrom;
                            else if (typeof object.startFrom === "object")
                                message.startFrom = new $util.LongBits(object.startFrom.low >>> 0, object.startFrom.high >>> 0).toNumber();
                        if (object.messageTimeoutMilliseconds != null)
                            message.messageTimeoutMilliseconds = object.messageTimeoutMilliseconds | 0;
                        if (object.recordStatistics != null)
                            message.recordStatistics = Boolean(object.recordStatistics);
                        if (object.liveBufferSize != null)
                            message.liveBufferSize = object.liveBufferSize | 0;
                        if (object.readBatchSize != null)
                            message.readBatchSize = object.readBatchSize | 0;
                        if (object.bufferSize != null)
                            message.bufferSize = object.bufferSize | 0;
                        if (object.maxRetryCount != null)
                            message.maxRetryCount = object.maxRetryCount | 0;
                        if (object.preferRoundRobin != null)
                            message.preferRoundRobin = Boolean(object.preferRoundRobin);
                        if (object.checkpointAfterTime != null)
                            message.checkpointAfterTime = object.checkpointAfterTime | 0;
                        if (object.checkpointMaxCount != null)
                            message.checkpointMaxCount = object.checkpointMaxCount | 0;
                        if (object.checkpointMinCount != null)
                            message.checkpointMinCount = object.checkpointMinCount | 0;
                        if (object.subscriberMaxCount != null)
                            message.subscriberMaxCount = object.subscriberMaxCount | 0;
                        if (object.namedConsumerStrategy != null)
                            message.namedConsumerStrategy = String(object.namedConsumerStrategy);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an UpdatePersistentSubscription message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @static
                     * @param {EventStore.Client.Messages.UpdatePersistentSubscription} message UpdatePersistentSubscription
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdatePersistentSubscription.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.subscriptionGroupName = "";
                            object.eventStreamId = "";
                            object.resolveLinkTos = false;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.startFrom = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.startFrom = options.longs === String ? "0" : 0;
                            object.messageTimeoutMilliseconds = 0;
                            object.recordStatistics = false;
                            object.liveBufferSize = 0;
                            object.readBatchSize = 0;
                            object.bufferSize = 0;
                            object.maxRetryCount = 0;
                            object.preferRoundRobin = false;
                            object.checkpointAfterTime = 0;
                            object.checkpointMaxCount = 0;
                            object.checkpointMinCount = 0;
                            object.subscriberMaxCount = 0;
                            object.namedConsumerStrategy = "";
                        }
                        if (message.subscriptionGroupName != null && message.hasOwnProperty("subscriptionGroupName"))
                            object.subscriptionGroupName = message.subscriptionGroupName;
                        if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                            object.eventStreamId = message.eventStreamId;
                        if (message.resolveLinkTos != null && message.hasOwnProperty("resolveLinkTos"))
                            object.resolveLinkTos = message.resolveLinkTos;
                        if (message.startFrom != null && message.hasOwnProperty("startFrom"))
                            if (typeof message.startFrom === "number")
                                object.startFrom = options.longs === String ? String(message.startFrom) : message.startFrom;
                            else
                                object.startFrom = options.longs === String ? $util.Long.prototype.toString.call(message.startFrom) : options.longs === Number ? new $util.LongBits(message.startFrom.low >>> 0, message.startFrom.high >>> 0).toNumber() : message.startFrom;
                        if (message.messageTimeoutMilliseconds != null && message.hasOwnProperty("messageTimeoutMilliseconds"))
                            object.messageTimeoutMilliseconds = message.messageTimeoutMilliseconds;
                        if (message.recordStatistics != null && message.hasOwnProperty("recordStatistics"))
                            object.recordStatistics = message.recordStatistics;
                        if (message.liveBufferSize != null && message.hasOwnProperty("liveBufferSize"))
                            object.liveBufferSize = message.liveBufferSize;
                        if (message.readBatchSize != null && message.hasOwnProperty("readBatchSize"))
                            object.readBatchSize = message.readBatchSize;
                        if (message.bufferSize != null && message.hasOwnProperty("bufferSize"))
                            object.bufferSize = message.bufferSize;
                        if (message.maxRetryCount != null && message.hasOwnProperty("maxRetryCount"))
                            object.maxRetryCount = message.maxRetryCount;
                        if (message.preferRoundRobin != null && message.hasOwnProperty("preferRoundRobin"))
                            object.preferRoundRobin = message.preferRoundRobin;
                        if (message.checkpointAfterTime != null && message.hasOwnProperty("checkpointAfterTime"))
                            object.checkpointAfterTime = message.checkpointAfterTime;
                        if (message.checkpointMaxCount != null && message.hasOwnProperty("checkpointMaxCount"))
                            object.checkpointMaxCount = message.checkpointMaxCount;
                        if (message.checkpointMinCount != null && message.hasOwnProperty("checkpointMinCount"))
                            object.checkpointMinCount = message.checkpointMinCount;
                        if (message.subscriberMaxCount != null && message.hasOwnProperty("subscriberMaxCount"))
                            object.subscriberMaxCount = message.subscriberMaxCount;
                        if (message.namedConsumerStrategy != null && message.hasOwnProperty("namedConsumerStrategy"))
                            object.namedConsumerStrategy = message.namedConsumerStrategy;
                        return object;
                    };
    
                    /**
                     * Converts this UpdatePersistentSubscription to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscription
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdatePersistentSubscription.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UpdatePersistentSubscription;
                })();
    
                Messages.UpdatePersistentSubscriptionCompleted = (function() {
    
                    /**
                     * Properties of an UpdatePersistentSubscriptionCompleted.
                     * @memberof EventStore.Client.Messages
                     * @interface IUpdatePersistentSubscriptionCompleted
                     * @property {EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted.UpdatePersistentSubscriptionResult} result UpdatePersistentSubscriptionCompleted result
                     * @property {string|null} [reason] UpdatePersistentSubscriptionCompleted reason
                     */
    
                    /**
                     * Constructs a new UpdatePersistentSubscriptionCompleted.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents an UpdatePersistentSubscriptionCompleted.
                     * @implements IUpdatePersistentSubscriptionCompleted
                     * @constructor
                     * @param {EventStore.Client.Messages.IUpdatePersistentSubscriptionCompleted=} [properties] Properties to set
                     */
                    function UpdatePersistentSubscriptionCompleted(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * UpdatePersistentSubscriptionCompleted result.
                     * @member {EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted.UpdatePersistentSubscriptionResult} result
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted
                     * @instance
                     */
                    UpdatePersistentSubscriptionCompleted.prototype.result = 0;
    
                    /**
                     * UpdatePersistentSubscriptionCompleted reason.
                     * @member {string} reason
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted
                     * @instance
                     */
                    UpdatePersistentSubscriptionCompleted.prototype.reason = "";
    
                    /**
                     * Creates a new UpdatePersistentSubscriptionCompleted instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IUpdatePersistentSubscriptionCompleted=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted} UpdatePersistentSubscriptionCompleted instance
                     */
                    UpdatePersistentSubscriptionCompleted.create = function create(properties) {
                        return new UpdatePersistentSubscriptionCompleted(properties);
                    };
    
                    /**
                     * Encodes the specified UpdatePersistentSubscriptionCompleted message. Does not implicitly {@link EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IUpdatePersistentSubscriptionCompleted} message UpdatePersistentSubscriptionCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdatePersistentSubscriptionCompleted.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UpdatePersistentSubscriptionCompleted message, length delimited. Does not implicitly {@link EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IUpdatePersistentSubscriptionCompleted} message UpdatePersistentSubscriptionCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdatePersistentSubscriptionCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an UpdatePersistentSubscriptionCompleted message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted} UpdatePersistentSubscriptionCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdatePersistentSubscriptionCompleted.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.result = reader.int32();
                                break;
                            case 2:
                                message.reason = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("result"))
                            throw $util.ProtocolError("missing required 'result'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes an UpdatePersistentSubscriptionCompleted message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted} UpdatePersistentSubscriptionCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdatePersistentSubscriptionCompleted.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an UpdatePersistentSubscriptionCompleted message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdatePersistentSubscriptionCompleted.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        switch (message.result) {
                        default:
                            return "result: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            if (!$util.isString(message.reason))
                                return "reason: string expected";
                        return null;
                    };
    
                    /**
                     * Creates an UpdatePersistentSubscriptionCompleted message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted} UpdatePersistentSubscriptionCompleted
                     */
                    UpdatePersistentSubscriptionCompleted.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted)
                            return object;
                        var message = new $root.EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted();
                        switch (object.result) {
                        case "Success":
                        case 0:
                            message.result = 0;
                            break;
                        case "DoesNotExist":
                        case 1:
                            message.result = 1;
                            break;
                        case "Fail":
                        case 2:
                            message.result = 2;
                            break;
                        case "AccessDenied":
                        case 3:
                            message.result = 3;
                            break;
                        }
                        if (object.reason != null)
                            message.reason = String(object.reason);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an UpdatePersistentSubscriptionCompleted message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted
                     * @static
                     * @param {EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted} message UpdatePersistentSubscriptionCompleted
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdatePersistentSubscriptionCompleted.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.result = options.enums === String ? "Success" : 0;
                            object.reason = "";
                        }
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = options.enums === String ? $root.EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted.UpdatePersistentSubscriptionResult[message.result] : message.result;
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            object.reason = message.reason;
                        return object;
                    };
    
                    /**
                     * Converts this UpdatePersistentSubscriptionCompleted to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdatePersistentSubscriptionCompleted.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * UpdatePersistentSubscriptionResult enum.
                     * @name EventStore.Client.Messages.UpdatePersistentSubscriptionCompleted.UpdatePersistentSubscriptionResult
                     * @enum {string}
                     * @property {number} Success=0 Success value
                     * @property {number} DoesNotExist=1 DoesNotExist value
                     * @property {number} Fail=2 Fail value
                     * @property {number} AccessDenied=3 AccessDenied value
                     */
                    UpdatePersistentSubscriptionCompleted.UpdatePersistentSubscriptionResult = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "Success"] = 0;
                        values[valuesById[1] = "DoesNotExist"] = 1;
                        values[valuesById[2] = "Fail"] = 2;
                        values[valuesById[3] = "AccessDenied"] = 3;
                        return values;
                    })();
    
                    return UpdatePersistentSubscriptionCompleted;
                })();
    
                Messages.CreatePersistentSubscriptionCompleted = (function() {
    
                    /**
                     * Properties of a CreatePersistentSubscriptionCompleted.
                     * @memberof EventStore.Client.Messages
                     * @interface ICreatePersistentSubscriptionCompleted
                     * @property {EventStore.Client.Messages.CreatePersistentSubscriptionCompleted.CreatePersistentSubscriptionResult} result CreatePersistentSubscriptionCompleted result
                     * @property {string|null} [reason] CreatePersistentSubscriptionCompleted reason
                     */
    
                    /**
                     * Constructs a new CreatePersistentSubscriptionCompleted.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a CreatePersistentSubscriptionCompleted.
                     * @implements ICreatePersistentSubscriptionCompleted
                     * @constructor
                     * @param {EventStore.Client.Messages.ICreatePersistentSubscriptionCompleted=} [properties] Properties to set
                     */
                    function CreatePersistentSubscriptionCompleted(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * CreatePersistentSubscriptionCompleted result.
                     * @member {EventStore.Client.Messages.CreatePersistentSubscriptionCompleted.CreatePersistentSubscriptionResult} result
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscriptionCompleted
                     * @instance
                     */
                    CreatePersistentSubscriptionCompleted.prototype.result = 0;
    
                    /**
                     * CreatePersistentSubscriptionCompleted reason.
                     * @member {string} reason
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscriptionCompleted
                     * @instance
                     */
                    CreatePersistentSubscriptionCompleted.prototype.reason = "";
    
                    /**
                     * Creates a new CreatePersistentSubscriptionCompleted instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscriptionCompleted
                     * @static
                     * @param {EventStore.Client.Messages.ICreatePersistentSubscriptionCompleted=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.CreatePersistentSubscriptionCompleted} CreatePersistentSubscriptionCompleted instance
                     */
                    CreatePersistentSubscriptionCompleted.create = function create(properties) {
                        return new CreatePersistentSubscriptionCompleted(properties);
                    };
    
                    /**
                     * Encodes the specified CreatePersistentSubscriptionCompleted message. Does not implicitly {@link EventStore.Client.Messages.CreatePersistentSubscriptionCompleted.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscriptionCompleted
                     * @static
                     * @param {EventStore.Client.Messages.ICreatePersistentSubscriptionCompleted} message CreatePersistentSubscriptionCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreatePersistentSubscriptionCompleted.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified CreatePersistentSubscriptionCompleted message, length delimited. Does not implicitly {@link EventStore.Client.Messages.CreatePersistentSubscriptionCompleted.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscriptionCompleted
                     * @static
                     * @param {EventStore.Client.Messages.ICreatePersistentSubscriptionCompleted} message CreatePersistentSubscriptionCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreatePersistentSubscriptionCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a CreatePersistentSubscriptionCompleted message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscriptionCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.CreatePersistentSubscriptionCompleted} CreatePersistentSubscriptionCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreatePersistentSubscriptionCompleted.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.CreatePersistentSubscriptionCompleted();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.result = reader.int32();
                                break;
                            case 2:
                                message.reason = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("result"))
                            throw $util.ProtocolError("missing required 'result'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a CreatePersistentSubscriptionCompleted message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscriptionCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.CreatePersistentSubscriptionCompleted} CreatePersistentSubscriptionCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreatePersistentSubscriptionCompleted.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a CreatePersistentSubscriptionCompleted message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscriptionCompleted
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CreatePersistentSubscriptionCompleted.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        switch (message.result) {
                        default:
                            return "result: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            if (!$util.isString(message.reason))
                                return "reason: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a CreatePersistentSubscriptionCompleted message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscriptionCompleted
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.CreatePersistentSubscriptionCompleted} CreatePersistentSubscriptionCompleted
                     */
                    CreatePersistentSubscriptionCompleted.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.CreatePersistentSubscriptionCompleted)
                            return object;
                        var message = new $root.EventStore.Client.Messages.CreatePersistentSubscriptionCompleted();
                        switch (object.result) {
                        case "Success":
                        case 0:
                            message.result = 0;
                            break;
                        case "AlreadyExists":
                        case 1:
                            message.result = 1;
                            break;
                        case "Fail":
                        case 2:
                            message.result = 2;
                            break;
                        case "AccessDenied":
                        case 3:
                            message.result = 3;
                            break;
                        }
                        if (object.reason != null)
                            message.reason = String(object.reason);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a CreatePersistentSubscriptionCompleted message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscriptionCompleted
                     * @static
                     * @param {EventStore.Client.Messages.CreatePersistentSubscriptionCompleted} message CreatePersistentSubscriptionCompleted
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CreatePersistentSubscriptionCompleted.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.result = options.enums === String ? "Success" : 0;
                            object.reason = "";
                        }
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = options.enums === String ? $root.EventStore.Client.Messages.CreatePersistentSubscriptionCompleted.CreatePersistentSubscriptionResult[message.result] : message.result;
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            object.reason = message.reason;
                        return object;
                    };
    
                    /**
                     * Converts this CreatePersistentSubscriptionCompleted to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.CreatePersistentSubscriptionCompleted
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CreatePersistentSubscriptionCompleted.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * CreatePersistentSubscriptionResult enum.
                     * @name EventStore.Client.Messages.CreatePersistentSubscriptionCompleted.CreatePersistentSubscriptionResult
                     * @enum {string}
                     * @property {number} Success=0 Success value
                     * @property {number} AlreadyExists=1 AlreadyExists value
                     * @property {number} Fail=2 Fail value
                     * @property {number} AccessDenied=3 AccessDenied value
                     */
                    CreatePersistentSubscriptionCompleted.CreatePersistentSubscriptionResult = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "Success"] = 0;
                        values[valuesById[1] = "AlreadyExists"] = 1;
                        values[valuesById[2] = "Fail"] = 2;
                        values[valuesById[3] = "AccessDenied"] = 3;
                        return values;
                    })();
    
                    return CreatePersistentSubscriptionCompleted;
                })();
    
                Messages.DeletePersistentSubscriptionCompleted = (function() {
    
                    /**
                     * Properties of a DeletePersistentSubscriptionCompleted.
                     * @memberof EventStore.Client.Messages
                     * @interface IDeletePersistentSubscriptionCompleted
                     * @property {EventStore.Client.Messages.DeletePersistentSubscriptionCompleted.DeletePersistentSubscriptionResult} result DeletePersistentSubscriptionCompleted result
                     * @property {string|null} [reason] DeletePersistentSubscriptionCompleted reason
                     */
    
                    /**
                     * Constructs a new DeletePersistentSubscriptionCompleted.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a DeletePersistentSubscriptionCompleted.
                     * @implements IDeletePersistentSubscriptionCompleted
                     * @constructor
                     * @param {EventStore.Client.Messages.IDeletePersistentSubscriptionCompleted=} [properties] Properties to set
                     */
                    function DeletePersistentSubscriptionCompleted(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * DeletePersistentSubscriptionCompleted result.
                     * @member {EventStore.Client.Messages.DeletePersistentSubscriptionCompleted.DeletePersistentSubscriptionResult} result
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscriptionCompleted
                     * @instance
                     */
                    DeletePersistentSubscriptionCompleted.prototype.result = 0;
    
                    /**
                     * DeletePersistentSubscriptionCompleted reason.
                     * @member {string} reason
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscriptionCompleted
                     * @instance
                     */
                    DeletePersistentSubscriptionCompleted.prototype.reason = "";
    
                    /**
                     * Creates a new DeletePersistentSubscriptionCompleted instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscriptionCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IDeletePersistentSubscriptionCompleted=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.DeletePersistentSubscriptionCompleted} DeletePersistentSubscriptionCompleted instance
                     */
                    DeletePersistentSubscriptionCompleted.create = function create(properties) {
                        return new DeletePersistentSubscriptionCompleted(properties);
                    };
    
                    /**
                     * Encodes the specified DeletePersistentSubscriptionCompleted message. Does not implicitly {@link EventStore.Client.Messages.DeletePersistentSubscriptionCompleted.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscriptionCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IDeletePersistentSubscriptionCompleted} message DeletePersistentSubscriptionCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeletePersistentSubscriptionCompleted.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified DeletePersistentSubscriptionCompleted message, length delimited. Does not implicitly {@link EventStore.Client.Messages.DeletePersistentSubscriptionCompleted.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscriptionCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IDeletePersistentSubscriptionCompleted} message DeletePersistentSubscriptionCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeletePersistentSubscriptionCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a DeletePersistentSubscriptionCompleted message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscriptionCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.DeletePersistentSubscriptionCompleted} DeletePersistentSubscriptionCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeletePersistentSubscriptionCompleted.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.DeletePersistentSubscriptionCompleted();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.result = reader.int32();
                                break;
                            case 2:
                                message.reason = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("result"))
                            throw $util.ProtocolError("missing required 'result'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a DeletePersistentSubscriptionCompleted message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscriptionCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.DeletePersistentSubscriptionCompleted} DeletePersistentSubscriptionCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeletePersistentSubscriptionCompleted.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a DeletePersistentSubscriptionCompleted message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscriptionCompleted
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeletePersistentSubscriptionCompleted.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        switch (message.result) {
                        default:
                            return "result: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            if (!$util.isString(message.reason))
                                return "reason: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a DeletePersistentSubscriptionCompleted message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscriptionCompleted
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.DeletePersistentSubscriptionCompleted} DeletePersistentSubscriptionCompleted
                     */
                    DeletePersistentSubscriptionCompleted.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.DeletePersistentSubscriptionCompleted)
                            return object;
                        var message = new $root.EventStore.Client.Messages.DeletePersistentSubscriptionCompleted();
                        switch (object.result) {
                        case "Success":
                        case 0:
                            message.result = 0;
                            break;
                        case "DoesNotExist":
                        case 1:
                            message.result = 1;
                            break;
                        case "Fail":
                        case 2:
                            message.result = 2;
                            break;
                        case "AccessDenied":
                        case 3:
                            message.result = 3;
                            break;
                        }
                        if (object.reason != null)
                            message.reason = String(object.reason);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a DeletePersistentSubscriptionCompleted message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscriptionCompleted
                     * @static
                     * @param {EventStore.Client.Messages.DeletePersistentSubscriptionCompleted} message DeletePersistentSubscriptionCompleted
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeletePersistentSubscriptionCompleted.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.result = options.enums === String ? "Success" : 0;
                            object.reason = "";
                        }
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = options.enums === String ? $root.EventStore.Client.Messages.DeletePersistentSubscriptionCompleted.DeletePersistentSubscriptionResult[message.result] : message.result;
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            object.reason = message.reason;
                        return object;
                    };
    
                    /**
                     * Converts this DeletePersistentSubscriptionCompleted to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.DeletePersistentSubscriptionCompleted
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeletePersistentSubscriptionCompleted.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * DeletePersistentSubscriptionResult enum.
                     * @name EventStore.Client.Messages.DeletePersistentSubscriptionCompleted.DeletePersistentSubscriptionResult
                     * @enum {string}
                     * @property {number} Success=0 Success value
                     * @property {number} DoesNotExist=1 DoesNotExist value
                     * @property {number} Fail=2 Fail value
                     * @property {number} AccessDenied=3 AccessDenied value
                     */
                    DeletePersistentSubscriptionCompleted.DeletePersistentSubscriptionResult = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "Success"] = 0;
                        values[valuesById[1] = "DoesNotExist"] = 1;
                        values[valuesById[2] = "Fail"] = 2;
                        values[valuesById[3] = "AccessDenied"] = 3;
                        return values;
                    })();
    
                    return DeletePersistentSubscriptionCompleted;
                })();
    
                Messages.ConnectToPersistentSubscription = (function() {
    
                    /**
                     * Properties of a ConnectToPersistentSubscription.
                     * @memberof EventStore.Client.Messages
                     * @interface IConnectToPersistentSubscription
                     * @property {string} subscriptionId ConnectToPersistentSubscription subscriptionId
                     * @property {string} eventStreamId ConnectToPersistentSubscription eventStreamId
                     * @property {number} allowedInFlightMessages ConnectToPersistentSubscription allowedInFlightMessages
                     */
    
                    /**
                     * Constructs a new ConnectToPersistentSubscription.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a ConnectToPersistentSubscription.
                     * @implements IConnectToPersistentSubscription
                     * @constructor
                     * @param {EventStore.Client.Messages.IConnectToPersistentSubscription=} [properties] Properties to set
                     */
                    function ConnectToPersistentSubscription(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ConnectToPersistentSubscription subscriptionId.
                     * @member {string} subscriptionId
                     * @memberof EventStore.Client.Messages.ConnectToPersistentSubscription
                     * @instance
                     */
                    ConnectToPersistentSubscription.prototype.subscriptionId = "";
    
                    /**
                     * ConnectToPersistentSubscription eventStreamId.
                     * @member {string} eventStreamId
                     * @memberof EventStore.Client.Messages.ConnectToPersistentSubscription
                     * @instance
                     */
                    ConnectToPersistentSubscription.prototype.eventStreamId = "";
    
                    /**
                     * ConnectToPersistentSubscription allowedInFlightMessages.
                     * @member {number} allowedInFlightMessages
                     * @memberof EventStore.Client.Messages.ConnectToPersistentSubscription
                     * @instance
                     */
                    ConnectToPersistentSubscription.prototype.allowedInFlightMessages = 0;
    
                    /**
                     * Creates a new ConnectToPersistentSubscription instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.ConnectToPersistentSubscription
                     * @static
                     * @param {EventStore.Client.Messages.IConnectToPersistentSubscription=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.ConnectToPersistentSubscription} ConnectToPersistentSubscription instance
                     */
                    ConnectToPersistentSubscription.create = function create(properties) {
                        return new ConnectToPersistentSubscription(properties);
                    };
    
                    /**
                     * Encodes the specified ConnectToPersistentSubscription message. Does not implicitly {@link EventStore.Client.Messages.ConnectToPersistentSubscription.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.ConnectToPersistentSubscription
                     * @static
                     * @param {EventStore.Client.Messages.IConnectToPersistentSubscription} message ConnectToPersistentSubscription message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ConnectToPersistentSubscription.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.subscriptionId);
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.eventStreamId);
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.allowedInFlightMessages);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ConnectToPersistentSubscription message, length delimited. Does not implicitly {@link EventStore.Client.Messages.ConnectToPersistentSubscription.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.ConnectToPersistentSubscription
                     * @static
                     * @param {EventStore.Client.Messages.IConnectToPersistentSubscription} message ConnectToPersistentSubscription message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ConnectToPersistentSubscription.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ConnectToPersistentSubscription message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.ConnectToPersistentSubscription
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.ConnectToPersistentSubscription} ConnectToPersistentSubscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ConnectToPersistentSubscription.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.ConnectToPersistentSubscription();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.subscriptionId = reader.string();
                                break;
                            case 2:
                                message.eventStreamId = reader.string();
                                break;
                            case 3:
                                message.allowedInFlightMessages = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("subscriptionId"))
                            throw $util.ProtocolError("missing required 'subscriptionId'", { instance: message });
                        if (!message.hasOwnProperty("eventStreamId"))
                            throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                        if (!message.hasOwnProperty("allowedInFlightMessages"))
                            throw $util.ProtocolError("missing required 'allowedInFlightMessages'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a ConnectToPersistentSubscription message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.ConnectToPersistentSubscription
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.ConnectToPersistentSubscription} ConnectToPersistentSubscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ConnectToPersistentSubscription.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ConnectToPersistentSubscription message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.ConnectToPersistentSubscription
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ConnectToPersistentSubscription.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.subscriptionId))
                            return "subscriptionId: string expected";
                        if (!$util.isString(message.eventStreamId))
                            return "eventStreamId: string expected";
                        if (!$util.isInteger(message.allowedInFlightMessages))
                            return "allowedInFlightMessages: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a ConnectToPersistentSubscription message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.ConnectToPersistentSubscription
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.ConnectToPersistentSubscription} ConnectToPersistentSubscription
                     */
                    ConnectToPersistentSubscription.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.ConnectToPersistentSubscription)
                            return object;
                        var message = new $root.EventStore.Client.Messages.ConnectToPersistentSubscription();
                        if (object.subscriptionId != null)
                            message.subscriptionId = String(object.subscriptionId);
                        if (object.eventStreamId != null)
                            message.eventStreamId = String(object.eventStreamId);
                        if (object.allowedInFlightMessages != null)
                            message.allowedInFlightMessages = object.allowedInFlightMessages | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ConnectToPersistentSubscription message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.ConnectToPersistentSubscription
                     * @static
                     * @param {EventStore.Client.Messages.ConnectToPersistentSubscription} message ConnectToPersistentSubscription
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ConnectToPersistentSubscription.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.subscriptionId = "";
                            object.eventStreamId = "";
                            object.allowedInFlightMessages = 0;
                        }
                        if (message.subscriptionId != null && message.hasOwnProperty("subscriptionId"))
                            object.subscriptionId = message.subscriptionId;
                        if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                            object.eventStreamId = message.eventStreamId;
                        if (message.allowedInFlightMessages != null && message.hasOwnProperty("allowedInFlightMessages"))
                            object.allowedInFlightMessages = message.allowedInFlightMessages;
                        return object;
                    };
    
                    /**
                     * Converts this ConnectToPersistentSubscription to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.ConnectToPersistentSubscription
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ConnectToPersistentSubscription.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ConnectToPersistentSubscription;
                })();
    
                Messages.PersistentSubscriptionAckEvents = (function() {
    
                    /**
                     * Properties of a PersistentSubscriptionAckEvents.
                     * @memberof EventStore.Client.Messages
                     * @interface IPersistentSubscriptionAckEvents
                     * @property {string} subscriptionId PersistentSubscriptionAckEvents subscriptionId
                     * @property {Array.<Uint8Array>|null} [processedEventIds] PersistentSubscriptionAckEvents processedEventIds
                     */
    
                    /**
                     * Constructs a new PersistentSubscriptionAckEvents.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a PersistentSubscriptionAckEvents.
                     * @implements IPersistentSubscriptionAckEvents
                     * @constructor
                     * @param {EventStore.Client.Messages.IPersistentSubscriptionAckEvents=} [properties] Properties to set
                     */
                    function PersistentSubscriptionAckEvents(properties) {
                        this.processedEventIds = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * PersistentSubscriptionAckEvents subscriptionId.
                     * @member {string} subscriptionId
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionAckEvents
                     * @instance
                     */
                    PersistentSubscriptionAckEvents.prototype.subscriptionId = "";
    
                    /**
                     * PersistentSubscriptionAckEvents processedEventIds.
                     * @member {Array.<Uint8Array>} processedEventIds
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionAckEvents
                     * @instance
                     */
                    PersistentSubscriptionAckEvents.prototype.processedEventIds = $util.emptyArray;
    
                    /**
                     * Creates a new PersistentSubscriptionAckEvents instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionAckEvents
                     * @static
                     * @param {EventStore.Client.Messages.IPersistentSubscriptionAckEvents=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.PersistentSubscriptionAckEvents} PersistentSubscriptionAckEvents instance
                     */
                    PersistentSubscriptionAckEvents.create = function create(properties) {
                        return new PersistentSubscriptionAckEvents(properties);
                    };
    
                    /**
                     * Encodes the specified PersistentSubscriptionAckEvents message. Does not implicitly {@link EventStore.Client.Messages.PersistentSubscriptionAckEvents.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionAckEvents
                     * @static
                     * @param {EventStore.Client.Messages.IPersistentSubscriptionAckEvents} message PersistentSubscriptionAckEvents message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PersistentSubscriptionAckEvents.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.subscriptionId);
                        if (message.processedEventIds != null && message.processedEventIds.length)
                            for (var i = 0; i < message.processedEventIds.length; ++i)
                                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.processedEventIds[i]);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified PersistentSubscriptionAckEvents message, length delimited. Does not implicitly {@link EventStore.Client.Messages.PersistentSubscriptionAckEvents.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionAckEvents
                     * @static
                     * @param {EventStore.Client.Messages.IPersistentSubscriptionAckEvents} message PersistentSubscriptionAckEvents message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PersistentSubscriptionAckEvents.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a PersistentSubscriptionAckEvents message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionAckEvents
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.PersistentSubscriptionAckEvents} PersistentSubscriptionAckEvents
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PersistentSubscriptionAckEvents.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.PersistentSubscriptionAckEvents();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.subscriptionId = reader.string();
                                break;
                            case 2:
                                if (!(message.processedEventIds && message.processedEventIds.length))
                                    message.processedEventIds = [];
                                message.processedEventIds.push(reader.bytes());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("subscriptionId"))
                            throw $util.ProtocolError("missing required 'subscriptionId'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a PersistentSubscriptionAckEvents message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionAckEvents
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.PersistentSubscriptionAckEvents} PersistentSubscriptionAckEvents
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PersistentSubscriptionAckEvents.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a PersistentSubscriptionAckEvents message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionAckEvents
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PersistentSubscriptionAckEvents.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.subscriptionId))
                            return "subscriptionId: string expected";
                        if (message.processedEventIds != null && message.hasOwnProperty("processedEventIds")) {
                            if (!Array.isArray(message.processedEventIds))
                                return "processedEventIds: array expected";
                            for (var i = 0; i < message.processedEventIds.length; ++i)
                                if (!(message.processedEventIds[i] && typeof message.processedEventIds[i].length === "number" || $util.isString(message.processedEventIds[i])))
                                    return "processedEventIds: buffer[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a PersistentSubscriptionAckEvents message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionAckEvents
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.PersistentSubscriptionAckEvents} PersistentSubscriptionAckEvents
                     */
                    PersistentSubscriptionAckEvents.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.PersistentSubscriptionAckEvents)
                            return object;
                        var message = new $root.EventStore.Client.Messages.PersistentSubscriptionAckEvents();
                        if (object.subscriptionId != null)
                            message.subscriptionId = String(object.subscriptionId);
                        if (object.processedEventIds) {
                            if (!Array.isArray(object.processedEventIds))
                                throw TypeError(".EventStore.Client.Messages.PersistentSubscriptionAckEvents.processedEventIds: array expected");
                            message.processedEventIds = [];
                            for (var i = 0; i < object.processedEventIds.length; ++i)
                                if (typeof object.processedEventIds[i] === "string")
                                    $util.base64.decode(object.processedEventIds[i], message.processedEventIds[i] = $util.newBuffer($util.base64.length(object.processedEventIds[i])), 0);
                                else if (object.processedEventIds[i].length)
                                    message.processedEventIds[i] = object.processedEventIds[i];
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a PersistentSubscriptionAckEvents message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionAckEvents
                     * @static
                     * @param {EventStore.Client.Messages.PersistentSubscriptionAckEvents} message PersistentSubscriptionAckEvents
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PersistentSubscriptionAckEvents.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.processedEventIds = [];
                        if (options.defaults)
                            object.subscriptionId = "";
                        if (message.subscriptionId != null && message.hasOwnProperty("subscriptionId"))
                            object.subscriptionId = message.subscriptionId;
                        if (message.processedEventIds && message.processedEventIds.length) {
                            object.processedEventIds = [];
                            for (var j = 0; j < message.processedEventIds.length; ++j)
                                object.processedEventIds[j] = options.bytes === String ? $util.base64.encode(message.processedEventIds[j], 0, message.processedEventIds[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.processedEventIds[j]) : message.processedEventIds[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this PersistentSubscriptionAckEvents to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionAckEvents
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PersistentSubscriptionAckEvents.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return PersistentSubscriptionAckEvents;
                })();
    
                Messages.PersistentSubscriptionNakEvents = (function() {
    
                    /**
                     * Properties of a PersistentSubscriptionNakEvents.
                     * @memberof EventStore.Client.Messages
                     * @interface IPersistentSubscriptionNakEvents
                     * @property {string} subscriptionId PersistentSubscriptionNakEvents subscriptionId
                     * @property {Array.<Uint8Array>|null} [processedEventIds] PersistentSubscriptionNakEvents processedEventIds
                     * @property {string|null} [message] PersistentSubscriptionNakEvents message
                     * @property {EventStore.Client.Messages.PersistentSubscriptionNakEvents.NakAction} action PersistentSubscriptionNakEvents action
                     */
    
                    /**
                     * Constructs a new PersistentSubscriptionNakEvents.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a PersistentSubscriptionNakEvents.
                     * @implements IPersistentSubscriptionNakEvents
                     * @constructor
                     * @param {EventStore.Client.Messages.IPersistentSubscriptionNakEvents=} [properties] Properties to set
                     */
                    function PersistentSubscriptionNakEvents(properties) {
                        this.processedEventIds = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * PersistentSubscriptionNakEvents subscriptionId.
                     * @member {string} subscriptionId
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionNakEvents
                     * @instance
                     */
                    PersistentSubscriptionNakEvents.prototype.subscriptionId = "";
    
                    /**
                     * PersistentSubscriptionNakEvents processedEventIds.
                     * @member {Array.<Uint8Array>} processedEventIds
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionNakEvents
                     * @instance
                     */
                    PersistentSubscriptionNakEvents.prototype.processedEventIds = $util.emptyArray;
    
                    /**
                     * PersistentSubscriptionNakEvents message.
                     * @member {string} message
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionNakEvents
                     * @instance
                     */
                    PersistentSubscriptionNakEvents.prototype.message = "";
    
                    /**
                     * PersistentSubscriptionNakEvents action.
                     * @member {EventStore.Client.Messages.PersistentSubscriptionNakEvents.NakAction} action
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionNakEvents
                     * @instance
                     */
                    PersistentSubscriptionNakEvents.prototype.action = 0;
    
                    /**
                     * Creates a new PersistentSubscriptionNakEvents instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionNakEvents
                     * @static
                     * @param {EventStore.Client.Messages.IPersistentSubscriptionNakEvents=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.PersistentSubscriptionNakEvents} PersistentSubscriptionNakEvents instance
                     */
                    PersistentSubscriptionNakEvents.create = function create(properties) {
                        return new PersistentSubscriptionNakEvents(properties);
                    };
    
                    /**
                     * Encodes the specified PersistentSubscriptionNakEvents message. Does not implicitly {@link EventStore.Client.Messages.PersistentSubscriptionNakEvents.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionNakEvents
                     * @static
                     * @param {EventStore.Client.Messages.IPersistentSubscriptionNakEvents} message PersistentSubscriptionNakEvents message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PersistentSubscriptionNakEvents.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.subscriptionId);
                        if (message.processedEventIds != null && message.processedEventIds.length)
                            for (var i = 0; i < message.processedEventIds.length; ++i)
                                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.processedEventIds[i]);
                        if (message.message != null && message.hasOwnProperty("message"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.action);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified PersistentSubscriptionNakEvents message, length delimited. Does not implicitly {@link EventStore.Client.Messages.PersistentSubscriptionNakEvents.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionNakEvents
                     * @static
                     * @param {EventStore.Client.Messages.IPersistentSubscriptionNakEvents} message PersistentSubscriptionNakEvents message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PersistentSubscriptionNakEvents.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a PersistentSubscriptionNakEvents message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionNakEvents
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.PersistentSubscriptionNakEvents} PersistentSubscriptionNakEvents
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PersistentSubscriptionNakEvents.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.PersistentSubscriptionNakEvents();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.subscriptionId = reader.string();
                                break;
                            case 2:
                                if (!(message.processedEventIds && message.processedEventIds.length))
                                    message.processedEventIds = [];
                                message.processedEventIds.push(reader.bytes());
                                break;
                            case 3:
                                message.message = reader.string();
                                break;
                            case 4:
                                message.action = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("subscriptionId"))
                            throw $util.ProtocolError("missing required 'subscriptionId'", { instance: message });
                        if (!message.hasOwnProperty("action"))
                            throw $util.ProtocolError("missing required 'action'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a PersistentSubscriptionNakEvents message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionNakEvents
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.PersistentSubscriptionNakEvents} PersistentSubscriptionNakEvents
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PersistentSubscriptionNakEvents.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a PersistentSubscriptionNakEvents message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionNakEvents
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PersistentSubscriptionNakEvents.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.subscriptionId))
                            return "subscriptionId: string expected";
                        if (message.processedEventIds != null && message.hasOwnProperty("processedEventIds")) {
                            if (!Array.isArray(message.processedEventIds))
                                return "processedEventIds: array expected";
                            for (var i = 0; i < message.processedEventIds.length; ++i)
                                if (!(message.processedEventIds[i] && typeof message.processedEventIds[i].length === "number" || $util.isString(message.processedEventIds[i])))
                                    return "processedEventIds: buffer[] expected";
                        }
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        switch (message.action) {
                        default:
                            return "action: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            break;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a PersistentSubscriptionNakEvents message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionNakEvents
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.PersistentSubscriptionNakEvents} PersistentSubscriptionNakEvents
                     */
                    PersistentSubscriptionNakEvents.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.PersistentSubscriptionNakEvents)
                            return object;
                        var message = new $root.EventStore.Client.Messages.PersistentSubscriptionNakEvents();
                        if (object.subscriptionId != null)
                            message.subscriptionId = String(object.subscriptionId);
                        if (object.processedEventIds) {
                            if (!Array.isArray(object.processedEventIds))
                                throw TypeError(".EventStore.Client.Messages.PersistentSubscriptionNakEvents.processedEventIds: array expected");
                            message.processedEventIds = [];
                            for (var i = 0; i < object.processedEventIds.length; ++i)
                                if (typeof object.processedEventIds[i] === "string")
                                    $util.base64.decode(object.processedEventIds[i], message.processedEventIds[i] = $util.newBuffer($util.base64.length(object.processedEventIds[i])), 0);
                                else if (object.processedEventIds[i].length)
                                    message.processedEventIds[i] = object.processedEventIds[i];
                        }
                        if (object.message != null)
                            message.message = String(object.message);
                        switch (object.action) {
                        case "Unknown":
                        case 0:
                            message.action = 0;
                            break;
                        case "Park":
                        case 1:
                            message.action = 1;
                            break;
                        case "Retry":
                        case 2:
                            message.action = 2;
                            break;
                        case "Skip":
                        case 3:
                            message.action = 3;
                            break;
                        case "Stop":
                        case 4:
                            message.action = 4;
                            break;
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a PersistentSubscriptionNakEvents message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionNakEvents
                     * @static
                     * @param {EventStore.Client.Messages.PersistentSubscriptionNakEvents} message PersistentSubscriptionNakEvents
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PersistentSubscriptionNakEvents.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.processedEventIds = [];
                        if (options.defaults) {
                            object.subscriptionId = "";
                            object.message = "";
                            object.action = options.enums === String ? "Unknown" : 0;
                        }
                        if (message.subscriptionId != null && message.hasOwnProperty("subscriptionId"))
                            object.subscriptionId = message.subscriptionId;
                        if (message.processedEventIds && message.processedEventIds.length) {
                            object.processedEventIds = [];
                            for (var j = 0; j < message.processedEventIds.length; ++j)
                                object.processedEventIds[j] = options.bytes === String ? $util.base64.encode(message.processedEventIds[j], 0, message.processedEventIds[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.processedEventIds[j]) : message.processedEventIds[j];
                        }
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        if (message.action != null && message.hasOwnProperty("action"))
                            object.action = options.enums === String ? $root.EventStore.Client.Messages.PersistentSubscriptionNakEvents.NakAction[message.action] : message.action;
                        return object;
                    };
    
                    /**
                     * Converts this PersistentSubscriptionNakEvents to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionNakEvents
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PersistentSubscriptionNakEvents.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * NakAction enum.
                     * @name EventStore.Client.Messages.PersistentSubscriptionNakEvents.NakAction
                     * @enum {string}
                     * @property {number} Unknown=0 Unknown value
                     * @property {number} Park=1 Park value
                     * @property {number} Retry=2 Retry value
                     * @property {number} Skip=3 Skip value
                     * @property {number} Stop=4 Stop value
                     */
                    PersistentSubscriptionNakEvents.NakAction = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "Unknown"] = 0;
                        values[valuesById[1] = "Park"] = 1;
                        values[valuesById[2] = "Retry"] = 2;
                        values[valuesById[3] = "Skip"] = 3;
                        values[valuesById[4] = "Stop"] = 4;
                        return values;
                    })();
    
                    return PersistentSubscriptionNakEvents;
                })();
    
                Messages.PersistentSubscriptionConfirmation = (function() {
    
                    /**
                     * Properties of a PersistentSubscriptionConfirmation.
                     * @memberof EventStore.Client.Messages
                     * @interface IPersistentSubscriptionConfirmation
                     * @property {number|Long} lastCommitPosition PersistentSubscriptionConfirmation lastCommitPosition
                     * @property {string} subscriptionId PersistentSubscriptionConfirmation subscriptionId
                     * @property {number|Long|null} [lastEventNumber] PersistentSubscriptionConfirmation lastEventNumber
                     */
    
                    /**
                     * Constructs a new PersistentSubscriptionConfirmation.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a PersistentSubscriptionConfirmation.
                     * @implements IPersistentSubscriptionConfirmation
                     * @constructor
                     * @param {EventStore.Client.Messages.IPersistentSubscriptionConfirmation=} [properties] Properties to set
                     */
                    function PersistentSubscriptionConfirmation(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * PersistentSubscriptionConfirmation lastCommitPosition.
                     * @member {number|Long} lastCommitPosition
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionConfirmation
                     * @instance
                     */
                    PersistentSubscriptionConfirmation.prototype.lastCommitPosition = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * PersistentSubscriptionConfirmation subscriptionId.
                     * @member {string} subscriptionId
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionConfirmation
                     * @instance
                     */
                    PersistentSubscriptionConfirmation.prototype.subscriptionId = "";
    
                    /**
                     * PersistentSubscriptionConfirmation lastEventNumber.
                     * @member {number|Long} lastEventNumber
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionConfirmation
                     * @instance
                     */
                    PersistentSubscriptionConfirmation.prototype.lastEventNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * Creates a new PersistentSubscriptionConfirmation instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionConfirmation
                     * @static
                     * @param {EventStore.Client.Messages.IPersistentSubscriptionConfirmation=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.PersistentSubscriptionConfirmation} PersistentSubscriptionConfirmation instance
                     */
                    PersistentSubscriptionConfirmation.create = function create(properties) {
                        return new PersistentSubscriptionConfirmation(properties);
                    };
    
                    /**
                     * Encodes the specified PersistentSubscriptionConfirmation message. Does not implicitly {@link EventStore.Client.Messages.PersistentSubscriptionConfirmation.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionConfirmation
                     * @static
                     * @param {EventStore.Client.Messages.IPersistentSubscriptionConfirmation} message PersistentSubscriptionConfirmation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PersistentSubscriptionConfirmation.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.lastCommitPosition);
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.subscriptionId);
                        if (message.lastEventNumber != null && message.hasOwnProperty("lastEventNumber"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.lastEventNumber);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified PersistentSubscriptionConfirmation message, length delimited. Does not implicitly {@link EventStore.Client.Messages.PersistentSubscriptionConfirmation.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionConfirmation
                     * @static
                     * @param {EventStore.Client.Messages.IPersistentSubscriptionConfirmation} message PersistentSubscriptionConfirmation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PersistentSubscriptionConfirmation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a PersistentSubscriptionConfirmation message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionConfirmation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.PersistentSubscriptionConfirmation} PersistentSubscriptionConfirmation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PersistentSubscriptionConfirmation.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.PersistentSubscriptionConfirmation();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.lastCommitPosition = reader.int64();
                                break;
                            case 2:
                                message.subscriptionId = reader.string();
                                break;
                            case 3:
                                message.lastEventNumber = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("lastCommitPosition"))
                            throw $util.ProtocolError("missing required 'lastCommitPosition'", { instance: message });
                        if (!message.hasOwnProperty("subscriptionId"))
                            throw $util.ProtocolError("missing required 'subscriptionId'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a PersistentSubscriptionConfirmation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionConfirmation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.PersistentSubscriptionConfirmation} PersistentSubscriptionConfirmation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PersistentSubscriptionConfirmation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a PersistentSubscriptionConfirmation message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionConfirmation
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PersistentSubscriptionConfirmation.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isInteger(message.lastCommitPosition) && !(message.lastCommitPosition && $util.isInteger(message.lastCommitPosition.low) && $util.isInteger(message.lastCommitPosition.high)))
                            return "lastCommitPosition: integer|Long expected";
                        if (!$util.isString(message.subscriptionId))
                            return "subscriptionId: string expected";
                        if (message.lastEventNumber != null && message.hasOwnProperty("lastEventNumber"))
                            if (!$util.isInteger(message.lastEventNumber) && !(message.lastEventNumber && $util.isInteger(message.lastEventNumber.low) && $util.isInteger(message.lastEventNumber.high)))
                                return "lastEventNumber: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates a PersistentSubscriptionConfirmation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionConfirmation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.PersistentSubscriptionConfirmation} PersistentSubscriptionConfirmation
                     */
                    PersistentSubscriptionConfirmation.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.PersistentSubscriptionConfirmation)
                            return object;
                        var message = new $root.EventStore.Client.Messages.PersistentSubscriptionConfirmation();
                        if (object.lastCommitPosition != null)
                            if ($util.Long)
                                (message.lastCommitPosition = $util.Long.fromValue(object.lastCommitPosition)).unsigned = false;
                            else if (typeof object.lastCommitPosition === "string")
                                message.lastCommitPosition = parseInt(object.lastCommitPosition, 10);
                            else if (typeof object.lastCommitPosition === "number")
                                message.lastCommitPosition = object.lastCommitPosition;
                            else if (typeof object.lastCommitPosition === "object")
                                message.lastCommitPosition = new $util.LongBits(object.lastCommitPosition.low >>> 0, object.lastCommitPosition.high >>> 0).toNumber();
                        if (object.subscriptionId != null)
                            message.subscriptionId = String(object.subscriptionId);
                        if (object.lastEventNumber != null)
                            if ($util.Long)
                                (message.lastEventNumber = $util.Long.fromValue(object.lastEventNumber)).unsigned = false;
                            else if (typeof object.lastEventNumber === "string")
                                message.lastEventNumber = parseInt(object.lastEventNumber, 10);
                            else if (typeof object.lastEventNumber === "number")
                                message.lastEventNumber = object.lastEventNumber;
                            else if (typeof object.lastEventNumber === "object")
                                message.lastEventNumber = new $util.LongBits(object.lastEventNumber.low >>> 0, object.lastEventNumber.high >>> 0).toNumber();
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a PersistentSubscriptionConfirmation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionConfirmation
                     * @static
                     * @param {EventStore.Client.Messages.PersistentSubscriptionConfirmation} message PersistentSubscriptionConfirmation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PersistentSubscriptionConfirmation.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.lastCommitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.lastCommitPosition = options.longs === String ? "0" : 0;
                            object.subscriptionId = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.lastEventNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.lastEventNumber = options.longs === String ? "0" : 0;
                        }
                        if (message.lastCommitPosition != null && message.hasOwnProperty("lastCommitPosition"))
                            if (typeof message.lastCommitPosition === "number")
                                object.lastCommitPosition = options.longs === String ? String(message.lastCommitPosition) : message.lastCommitPosition;
                            else
                                object.lastCommitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.lastCommitPosition) : options.longs === Number ? new $util.LongBits(message.lastCommitPosition.low >>> 0, message.lastCommitPosition.high >>> 0).toNumber() : message.lastCommitPosition;
                        if (message.subscriptionId != null && message.hasOwnProperty("subscriptionId"))
                            object.subscriptionId = message.subscriptionId;
                        if (message.lastEventNumber != null && message.hasOwnProperty("lastEventNumber"))
                            if (typeof message.lastEventNumber === "number")
                                object.lastEventNumber = options.longs === String ? String(message.lastEventNumber) : message.lastEventNumber;
                            else
                                object.lastEventNumber = options.longs === String ? $util.Long.prototype.toString.call(message.lastEventNumber) : options.longs === Number ? new $util.LongBits(message.lastEventNumber.low >>> 0, message.lastEventNumber.high >>> 0).toNumber() : message.lastEventNumber;
                        return object;
                    };
    
                    /**
                     * Converts this PersistentSubscriptionConfirmation to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionConfirmation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PersistentSubscriptionConfirmation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return PersistentSubscriptionConfirmation;
                })();
    
                Messages.PersistentSubscriptionStreamEventAppeared = (function() {
    
                    /**
                     * Properties of a PersistentSubscriptionStreamEventAppeared.
                     * @memberof EventStore.Client.Messages
                     * @interface IPersistentSubscriptionStreamEventAppeared
                     * @property {EventStore.Client.Messages.IResolvedIndexedEvent} event PersistentSubscriptionStreamEventAppeared event
                     */
    
                    /**
                     * Constructs a new PersistentSubscriptionStreamEventAppeared.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a PersistentSubscriptionStreamEventAppeared.
                     * @implements IPersistentSubscriptionStreamEventAppeared
                     * @constructor
                     * @param {EventStore.Client.Messages.IPersistentSubscriptionStreamEventAppeared=} [properties] Properties to set
                     */
                    function PersistentSubscriptionStreamEventAppeared(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * PersistentSubscriptionStreamEventAppeared event.
                     * @member {EventStore.Client.Messages.IResolvedIndexedEvent} event
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared
                     * @instance
                     */
                    PersistentSubscriptionStreamEventAppeared.prototype.event = null;
    
                    /**
                     * Creates a new PersistentSubscriptionStreamEventAppeared instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared
                     * @static
                     * @param {EventStore.Client.Messages.IPersistentSubscriptionStreamEventAppeared=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared} PersistentSubscriptionStreamEventAppeared instance
                     */
                    PersistentSubscriptionStreamEventAppeared.create = function create(properties) {
                        return new PersistentSubscriptionStreamEventAppeared(properties);
                    };
    
                    /**
                     * Encodes the specified PersistentSubscriptionStreamEventAppeared message. Does not implicitly {@link EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared
                     * @static
                     * @param {EventStore.Client.Messages.IPersistentSubscriptionStreamEventAppeared} message PersistentSubscriptionStreamEventAppeared message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PersistentSubscriptionStreamEventAppeared.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        $root.EventStore.Client.Messages.ResolvedIndexedEvent.encode(message.event, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified PersistentSubscriptionStreamEventAppeared message, length delimited. Does not implicitly {@link EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared
                     * @static
                     * @param {EventStore.Client.Messages.IPersistentSubscriptionStreamEventAppeared} message PersistentSubscriptionStreamEventAppeared message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PersistentSubscriptionStreamEventAppeared.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a PersistentSubscriptionStreamEventAppeared message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared} PersistentSubscriptionStreamEventAppeared
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PersistentSubscriptionStreamEventAppeared.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.event = $root.EventStore.Client.Messages.ResolvedIndexedEvent.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("event"))
                            throw $util.ProtocolError("missing required 'event'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a PersistentSubscriptionStreamEventAppeared message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared} PersistentSubscriptionStreamEventAppeared
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PersistentSubscriptionStreamEventAppeared.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a PersistentSubscriptionStreamEventAppeared message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PersistentSubscriptionStreamEventAppeared.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        {
                            var error = $root.EventStore.Client.Messages.ResolvedIndexedEvent.verify(message.event);
                            if (error)
                                return "event." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a PersistentSubscriptionStreamEventAppeared message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared} PersistentSubscriptionStreamEventAppeared
                     */
                    PersistentSubscriptionStreamEventAppeared.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared)
                            return object;
                        var message = new $root.EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared();
                        if (object.event != null) {
                            if (typeof object.event !== "object")
                                throw TypeError(".EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared.event: object expected");
                            message.event = $root.EventStore.Client.Messages.ResolvedIndexedEvent.fromObject(object.event);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a PersistentSubscriptionStreamEventAppeared message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared
                     * @static
                     * @param {EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared} message PersistentSubscriptionStreamEventAppeared
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PersistentSubscriptionStreamEventAppeared.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.event = null;
                        if (message.event != null && message.hasOwnProperty("event"))
                            object.event = $root.EventStore.Client.Messages.ResolvedIndexedEvent.toObject(message.event, options);
                        return object;
                    };
    
                    /**
                     * Converts this PersistentSubscriptionStreamEventAppeared to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.PersistentSubscriptionStreamEventAppeared
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PersistentSubscriptionStreamEventAppeared.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return PersistentSubscriptionStreamEventAppeared;
                })();
    
                Messages.SubscribeToStream = (function() {
    
                    /**
                     * Properties of a SubscribeToStream.
                     * @memberof EventStore.Client.Messages
                     * @interface ISubscribeToStream
                     * @property {string} eventStreamId SubscribeToStream eventStreamId
                     * @property {boolean} resolveLinkTos SubscribeToStream resolveLinkTos
                     */
    
                    /**
                     * Constructs a new SubscribeToStream.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a SubscribeToStream.
                     * @implements ISubscribeToStream
                     * @constructor
                     * @param {EventStore.Client.Messages.ISubscribeToStream=} [properties] Properties to set
                     */
                    function SubscribeToStream(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * SubscribeToStream eventStreamId.
                     * @member {string} eventStreamId
                     * @memberof EventStore.Client.Messages.SubscribeToStream
                     * @instance
                     */
                    SubscribeToStream.prototype.eventStreamId = "";
    
                    /**
                     * SubscribeToStream resolveLinkTos.
                     * @member {boolean} resolveLinkTos
                     * @memberof EventStore.Client.Messages.SubscribeToStream
                     * @instance
                     */
                    SubscribeToStream.prototype.resolveLinkTos = false;
    
                    /**
                     * Creates a new SubscribeToStream instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.SubscribeToStream
                     * @static
                     * @param {EventStore.Client.Messages.ISubscribeToStream=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.SubscribeToStream} SubscribeToStream instance
                     */
                    SubscribeToStream.create = function create(properties) {
                        return new SubscribeToStream(properties);
                    };
    
                    /**
                     * Encodes the specified SubscribeToStream message. Does not implicitly {@link EventStore.Client.Messages.SubscribeToStream.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.SubscribeToStream
                     * @static
                     * @param {EventStore.Client.Messages.ISubscribeToStream} message SubscribeToStream message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubscribeToStream.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventStreamId);
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.resolveLinkTos);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified SubscribeToStream message, length delimited. Does not implicitly {@link EventStore.Client.Messages.SubscribeToStream.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.SubscribeToStream
                     * @static
                     * @param {EventStore.Client.Messages.ISubscribeToStream} message SubscribeToStream message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubscribeToStream.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a SubscribeToStream message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.SubscribeToStream
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.SubscribeToStream} SubscribeToStream
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubscribeToStream.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.SubscribeToStream();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.eventStreamId = reader.string();
                                break;
                            case 2:
                                message.resolveLinkTos = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("eventStreamId"))
                            throw $util.ProtocolError("missing required 'eventStreamId'", { instance: message });
                        if (!message.hasOwnProperty("resolveLinkTos"))
                            throw $util.ProtocolError("missing required 'resolveLinkTos'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a SubscribeToStream message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.SubscribeToStream
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.SubscribeToStream} SubscribeToStream
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubscribeToStream.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a SubscribeToStream message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.SubscribeToStream
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SubscribeToStream.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.eventStreamId))
                            return "eventStreamId: string expected";
                        if (typeof message.resolveLinkTos !== "boolean")
                            return "resolveLinkTos: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a SubscribeToStream message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.SubscribeToStream
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.SubscribeToStream} SubscribeToStream
                     */
                    SubscribeToStream.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.SubscribeToStream)
                            return object;
                        var message = new $root.EventStore.Client.Messages.SubscribeToStream();
                        if (object.eventStreamId != null)
                            message.eventStreamId = String(object.eventStreamId);
                        if (object.resolveLinkTos != null)
                            message.resolveLinkTos = Boolean(object.resolveLinkTos);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a SubscribeToStream message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.SubscribeToStream
                     * @static
                     * @param {EventStore.Client.Messages.SubscribeToStream} message SubscribeToStream
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SubscribeToStream.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.eventStreamId = "";
                            object.resolveLinkTos = false;
                        }
                        if (message.eventStreamId != null && message.hasOwnProperty("eventStreamId"))
                            object.eventStreamId = message.eventStreamId;
                        if (message.resolveLinkTos != null && message.hasOwnProperty("resolveLinkTos"))
                            object.resolveLinkTos = message.resolveLinkTos;
                        return object;
                    };
    
                    /**
                     * Converts this SubscribeToStream to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.SubscribeToStream
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SubscribeToStream.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return SubscribeToStream;
                })();
    
                Messages.SubscriptionConfirmation = (function() {
    
                    /**
                     * Properties of a SubscriptionConfirmation.
                     * @memberof EventStore.Client.Messages
                     * @interface ISubscriptionConfirmation
                     * @property {number|Long} lastCommitPosition SubscriptionConfirmation lastCommitPosition
                     * @property {number|Long|null} [lastEventNumber] SubscriptionConfirmation lastEventNumber
                     */
    
                    /**
                     * Constructs a new SubscriptionConfirmation.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a SubscriptionConfirmation.
                     * @implements ISubscriptionConfirmation
                     * @constructor
                     * @param {EventStore.Client.Messages.ISubscriptionConfirmation=} [properties] Properties to set
                     */
                    function SubscriptionConfirmation(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * SubscriptionConfirmation lastCommitPosition.
                     * @member {number|Long} lastCommitPosition
                     * @memberof EventStore.Client.Messages.SubscriptionConfirmation
                     * @instance
                     */
                    SubscriptionConfirmation.prototype.lastCommitPosition = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * SubscriptionConfirmation lastEventNumber.
                     * @member {number|Long} lastEventNumber
                     * @memberof EventStore.Client.Messages.SubscriptionConfirmation
                     * @instance
                     */
                    SubscriptionConfirmation.prototype.lastEventNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * Creates a new SubscriptionConfirmation instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.SubscriptionConfirmation
                     * @static
                     * @param {EventStore.Client.Messages.ISubscriptionConfirmation=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.SubscriptionConfirmation} SubscriptionConfirmation instance
                     */
                    SubscriptionConfirmation.create = function create(properties) {
                        return new SubscriptionConfirmation(properties);
                    };
    
                    /**
                     * Encodes the specified SubscriptionConfirmation message. Does not implicitly {@link EventStore.Client.Messages.SubscriptionConfirmation.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.SubscriptionConfirmation
                     * @static
                     * @param {EventStore.Client.Messages.ISubscriptionConfirmation} message SubscriptionConfirmation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubscriptionConfirmation.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.lastCommitPosition);
                        if (message.lastEventNumber != null && message.hasOwnProperty("lastEventNumber"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.lastEventNumber);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified SubscriptionConfirmation message, length delimited. Does not implicitly {@link EventStore.Client.Messages.SubscriptionConfirmation.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.SubscriptionConfirmation
                     * @static
                     * @param {EventStore.Client.Messages.ISubscriptionConfirmation} message SubscriptionConfirmation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubscriptionConfirmation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a SubscriptionConfirmation message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.SubscriptionConfirmation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.SubscriptionConfirmation} SubscriptionConfirmation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubscriptionConfirmation.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.SubscriptionConfirmation();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.lastCommitPosition = reader.int64();
                                break;
                            case 2:
                                message.lastEventNumber = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("lastCommitPosition"))
                            throw $util.ProtocolError("missing required 'lastCommitPosition'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a SubscriptionConfirmation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.SubscriptionConfirmation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.SubscriptionConfirmation} SubscriptionConfirmation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubscriptionConfirmation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a SubscriptionConfirmation message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.SubscriptionConfirmation
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SubscriptionConfirmation.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isInteger(message.lastCommitPosition) && !(message.lastCommitPosition && $util.isInteger(message.lastCommitPosition.low) && $util.isInteger(message.lastCommitPosition.high)))
                            return "lastCommitPosition: integer|Long expected";
                        if (message.lastEventNumber != null && message.hasOwnProperty("lastEventNumber"))
                            if (!$util.isInteger(message.lastEventNumber) && !(message.lastEventNumber && $util.isInteger(message.lastEventNumber.low) && $util.isInteger(message.lastEventNumber.high)))
                                return "lastEventNumber: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates a SubscriptionConfirmation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.SubscriptionConfirmation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.SubscriptionConfirmation} SubscriptionConfirmation
                     */
                    SubscriptionConfirmation.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.SubscriptionConfirmation)
                            return object;
                        var message = new $root.EventStore.Client.Messages.SubscriptionConfirmation();
                        if (object.lastCommitPosition != null)
                            if ($util.Long)
                                (message.lastCommitPosition = $util.Long.fromValue(object.lastCommitPosition)).unsigned = false;
                            else if (typeof object.lastCommitPosition === "string")
                                message.lastCommitPosition = parseInt(object.lastCommitPosition, 10);
                            else if (typeof object.lastCommitPosition === "number")
                                message.lastCommitPosition = object.lastCommitPosition;
                            else if (typeof object.lastCommitPosition === "object")
                                message.lastCommitPosition = new $util.LongBits(object.lastCommitPosition.low >>> 0, object.lastCommitPosition.high >>> 0).toNumber();
                        if (object.lastEventNumber != null)
                            if ($util.Long)
                                (message.lastEventNumber = $util.Long.fromValue(object.lastEventNumber)).unsigned = false;
                            else if (typeof object.lastEventNumber === "string")
                                message.lastEventNumber = parseInt(object.lastEventNumber, 10);
                            else if (typeof object.lastEventNumber === "number")
                                message.lastEventNumber = object.lastEventNumber;
                            else if (typeof object.lastEventNumber === "object")
                                message.lastEventNumber = new $util.LongBits(object.lastEventNumber.low >>> 0, object.lastEventNumber.high >>> 0).toNumber();
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a SubscriptionConfirmation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.SubscriptionConfirmation
                     * @static
                     * @param {EventStore.Client.Messages.SubscriptionConfirmation} message SubscriptionConfirmation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SubscriptionConfirmation.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.lastCommitPosition = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.lastCommitPosition = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.lastEventNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.lastEventNumber = options.longs === String ? "0" : 0;
                        }
                        if (message.lastCommitPosition != null && message.hasOwnProperty("lastCommitPosition"))
                            if (typeof message.lastCommitPosition === "number")
                                object.lastCommitPosition = options.longs === String ? String(message.lastCommitPosition) : message.lastCommitPosition;
                            else
                                object.lastCommitPosition = options.longs === String ? $util.Long.prototype.toString.call(message.lastCommitPosition) : options.longs === Number ? new $util.LongBits(message.lastCommitPosition.low >>> 0, message.lastCommitPosition.high >>> 0).toNumber() : message.lastCommitPosition;
                        if (message.lastEventNumber != null && message.hasOwnProperty("lastEventNumber"))
                            if (typeof message.lastEventNumber === "number")
                                object.lastEventNumber = options.longs === String ? String(message.lastEventNumber) : message.lastEventNumber;
                            else
                                object.lastEventNumber = options.longs === String ? $util.Long.prototype.toString.call(message.lastEventNumber) : options.longs === Number ? new $util.LongBits(message.lastEventNumber.low >>> 0, message.lastEventNumber.high >>> 0).toNumber() : message.lastEventNumber;
                        return object;
                    };
    
                    /**
                     * Converts this SubscriptionConfirmation to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.SubscriptionConfirmation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SubscriptionConfirmation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return SubscriptionConfirmation;
                })();
    
                Messages.StreamEventAppeared = (function() {
    
                    /**
                     * Properties of a StreamEventAppeared.
                     * @memberof EventStore.Client.Messages
                     * @interface IStreamEventAppeared
                     * @property {EventStore.Client.Messages.IResolvedEvent} event StreamEventAppeared event
                     */
    
                    /**
                     * Constructs a new StreamEventAppeared.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a StreamEventAppeared.
                     * @implements IStreamEventAppeared
                     * @constructor
                     * @param {EventStore.Client.Messages.IStreamEventAppeared=} [properties] Properties to set
                     */
                    function StreamEventAppeared(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * StreamEventAppeared event.
                     * @member {EventStore.Client.Messages.IResolvedEvent} event
                     * @memberof EventStore.Client.Messages.StreamEventAppeared
                     * @instance
                     */
                    StreamEventAppeared.prototype.event = null;
    
                    /**
                     * Creates a new StreamEventAppeared instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.StreamEventAppeared
                     * @static
                     * @param {EventStore.Client.Messages.IStreamEventAppeared=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.StreamEventAppeared} StreamEventAppeared instance
                     */
                    StreamEventAppeared.create = function create(properties) {
                        return new StreamEventAppeared(properties);
                    };
    
                    /**
                     * Encodes the specified StreamEventAppeared message. Does not implicitly {@link EventStore.Client.Messages.StreamEventAppeared.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.StreamEventAppeared
                     * @static
                     * @param {EventStore.Client.Messages.IStreamEventAppeared} message StreamEventAppeared message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StreamEventAppeared.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        $root.EventStore.Client.Messages.ResolvedEvent.encode(message.event, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified StreamEventAppeared message, length delimited. Does not implicitly {@link EventStore.Client.Messages.StreamEventAppeared.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.StreamEventAppeared
                     * @static
                     * @param {EventStore.Client.Messages.IStreamEventAppeared} message StreamEventAppeared message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StreamEventAppeared.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a StreamEventAppeared message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.StreamEventAppeared
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.StreamEventAppeared} StreamEventAppeared
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StreamEventAppeared.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.StreamEventAppeared();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.event = $root.EventStore.Client.Messages.ResolvedEvent.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("event"))
                            throw $util.ProtocolError("missing required 'event'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a StreamEventAppeared message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.StreamEventAppeared
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.StreamEventAppeared} StreamEventAppeared
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StreamEventAppeared.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a StreamEventAppeared message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.StreamEventAppeared
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    StreamEventAppeared.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        {
                            var error = $root.EventStore.Client.Messages.ResolvedEvent.verify(message.event);
                            if (error)
                                return "event." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a StreamEventAppeared message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.StreamEventAppeared
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.StreamEventAppeared} StreamEventAppeared
                     */
                    StreamEventAppeared.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.StreamEventAppeared)
                            return object;
                        var message = new $root.EventStore.Client.Messages.StreamEventAppeared();
                        if (object.event != null) {
                            if (typeof object.event !== "object")
                                throw TypeError(".EventStore.Client.Messages.StreamEventAppeared.event: object expected");
                            message.event = $root.EventStore.Client.Messages.ResolvedEvent.fromObject(object.event);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a StreamEventAppeared message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.StreamEventAppeared
                     * @static
                     * @param {EventStore.Client.Messages.StreamEventAppeared} message StreamEventAppeared
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    StreamEventAppeared.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.event = null;
                        if (message.event != null && message.hasOwnProperty("event"))
                            object.event = $root.EventStore.Client.Messages.ResolvedEvent.toObject(message.event, options);
                        return object;
                    };
    
                    /**
                     * Converts this StreamEventAppeared to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.StreamEventAppeared
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    StreamEventAppeared.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return StreamEventAppeared;
                })();
    
                Messages.UnsubscribeFromStream = (function() {
    
                    /**
                     * Properties of an UnsubscribeFromStream.
                     * @memberof EventStore.Client.Messages
                     * @interface IUnsubscribeFromStream
                     */
    
                    /**
                     * Constructs a new UnsubscribeFromStream.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents an UnsubscribeFromStream.
                     * @implements IUnsubscribeFromStream
                     * @constructor
                     * @param {EventStore.Client.Messages.IUnsubscribeFromStream=} [properties] Properties to set
                     */
                    function UnsubscribeFromStream(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Creates a new UnsubscribeFromStream instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.UnsubscribeFromStream
                     * @static
                     * @param {EventStore.Client.Messages.IUnsubscribeFromStream=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.UnsubscribeFromStream} UnsubscribeFromStream instance
                     */
                    UnsubscribeFromStream.create = function create(properties) {
                        return new UnsubscribeFromStream(properties);
                    };
    
                    /**
                     * Encodes the specified UnsubscribeFromStream message. Does not implicitly {@link EventStore.Client.Messages.UnsubscribeFromStream.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.UnsubscribeFromStream
                     * @static
                     * @param {EventStore.Client.Messages.IUnsubscribeFromStream} message UnsubscribeFromStream message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UnsubscribeFromStream.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified UnsubscribeFromStream message, length delimited. Does not implicitly {@link EventStore.Client.Messages.UnsubscribeFromStream.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.UnsubscribeFromStream
                     * @static
                     * @param {EventStore.Client.Messages.IUnsubscribeFromStream} message UnsubscribeFromStream message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UnsubscribeFromStream.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an UnsubscribeFromStream message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.UnsubscribeFromStream
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.UnsubscribeFromStream} UnsubscribeFromStream
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UnsubscribeFromStream.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.UnsubscribeFromStream();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an UnsubscribeFromStream message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.UnsubscribeFromStream
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.UnsubscribeFromStream} UnsubscribeFromStream
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UnsubscribeFromStream.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an UnsubscribeFromStream message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.UnsubscribeFromStream
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UnsubscribeFromStream.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };
    
                    /**
                     * Creates an UnsubscribeFromStream message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.UnsubscribeFromStream
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.UnsubscribeFromStream} UnsubscribeFromStream
                     */
                    UnsubscribeFromStream.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.UnsubscribeFromStream)
                            return object;
                        return new $root.EventStore.Client.Messages.UnsubscribeFromStream();
                    };
    
                    /**
                     * Creates a plain object from an UnsubscribeFromStream message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.UnsubscribeFromStream
                     * @static
                     * @param {EventStore.Client.Messages.UnsubscribeFromStream} message UnsubscribeFromStream
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UnsubscribeFromStream.toObject = function toObject() {
                        return {};
                    };
    
                    /**
                     * Converts this UnsubscribeFromStream to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.UnsubscribeFromStream
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UnsubscribeFromStream.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return UnsubscribeFromStream;
                })();
    
                Messages.SubscriptionDropped = (function() {
    
                    /**
                     * Properties of a SubscriptionDropped.
                     * @memberof EventStore.Client.Messages
                     * @interface ISubscriptionDropped
                     * @property {EventStore.Client.Messages.SubscriptionDropped.SubscriptionDropReason|null} [reason] SubscriptionDropped reason
                     */
    
                    /**
                     * Constructs a new SubscriptionDropped.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a SubscriptionDropped.
                     * @implements ISubscriptionDropped
                     * @constructor
                     * @param {EventStore.Client.Messages.ISubscriptionDropped=} [properties] Properties to set
                     */
                    function SubscriptionDropped(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * SubscriptionDropped reason.
                     * @member {EventStore.Client.Messages.SubscriptionDropped.SubscriptionDropReason} reason
                     * @memberof EventStore.Client.Messages.SubscriptionDropped
                     * @instance
                     */
                    SubscriptionDropped.prototype.reason = 0;
    
                    /**
                     * Creates a new SubscriptionDropped instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.SubscriptionDropped
                     * @static
                     * @param {EventStore.Client.Messages.ISubscriptionDropped=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.SubscriptionDropped} SubscriptionDropped instance
                     */
                    SubscriptionDropped.create = function create(properties) {
                        return new SubscriptionDropped(properties);
                    };
    
                    /**
                     * Encodes the specified SubscriptionDropped message. Does not implicitly {@link EventStore.Client.Messages.SubscriptionDropped.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.SubscriptionDropped
                     * @static
                     * @param {EventStore.Client.Messages.ISubscriptionDropped} message SubscriptionDropped message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubscriptionDropped.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.reason);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified SubscriptionDropped message, length delimited. Does not implicitly {@link EventStore.Client.Messages.SubscriptionDropped.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.SubscriptionDropped
                     * @static
                     * @param {EventStore.Client.Messages.ISubscriptionDropped} message SubscriptionDropped message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubscriptionDropped.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a SubscriptionDropped message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.SubscriptionDropped
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.SubscriptionDropped} SubscriptionDropped
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubscriptionDropped.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.SubscriptionDropped();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.reason = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a SubscriptionDropped message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.SubscriptionDropped
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.SubscriptionDropped} SubscriptionDropped
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubscriptionDropped.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a SubscriptionDropped message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.SubscriptionDropped
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SubscriptionDropped.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            switch (message.reason) {
                            default:
                                return "reason: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                                break;
                            }
                        return null;
                    };
    
                    /**
                     * Creates a SubscriptionDropped message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.SubscriptionDropped
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.SubscriptionDropped} SubscriptionDropped
                     */
                    SubscriptionDropped.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.SubscriptionDropped)
                            return object;
                        var message = new $root.EventStore.Client.Messages.SubscriptionDropped();
                        switch (object.reason) {
                        case "Unsubscribed":
                        case 0:
                            message.reason = 0;
                            break;
                        case "AccessDenied":
                        case 1:
                            message.reason = 1;
                            break;
                        case "NotFound":
                        case 2:
                            message.reason = 2;
                            break;
                        case "PersistentSubscriptionDeleted":
                        case 3:
                            message.reason = 3;
                            break;
                        case "SubscriberMaxCountReached":
                        case 4:
                            message.reason = 4;
                            break;
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a SubscriptionDropped message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.SubscriptionDropped
                     * @static
                     * @param {EventStore.Client.Messages.SubscriptionDropped} message SubscriptionDropped
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SubscriptionDropped.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.reason = options.enums === String ? "Unsubscribed" : 0;
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            object.reason = options.enums === String ? $root.EventStore.Client.Messages.SubscriptionDropped.SubscriptionDropReason[message.reason] : message.reason;
                        return object;
                    };
    
                    /**
                     * Converts this SubscriptionDropped to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.SubscriptionDropped
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SubscriptionDropped.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * SubscriptionDropReason enum.
                     * @name EventStore.Client.Messages.SubscriptionDropped.SubscriptionDropReason
                     * @enum {string}
                     * @property {number} Unsubscribed=0 Unsubscribed value
                     * @property {number} AccessDenied=1 AccessDenied value
                     * @property {number} NotFound=2 NotFound value
                     * @property {number} PersistentSubscriptionDeleted=3 PersistentSubscriptionDeleted value
                     * @property {number} SubscriberMaxCountReached=4 SubscriberMaxCountReached value
                     */
                    SubscriptionDropped.SubscriptionDropReason = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "Unsubscribed"] = 0;
                        values[valuesById[1] = "AccessDenied"] = 1;
                        values[valuesById[2] = "NotFound"] = 2;
                        values[valuesById[3] = "PersistentSubscriptionDeleted"] = 3;
                        values[valuesById[4] = "SubscriberMaxCountReached"] = 4;
                        return values;
                    })();
    
                    return SubscriptionDropped;
                })();
    
                Messages.NotHandled = (function() {
    
                    /**
                     * Properties of a NotHandled.
                     * @memberof EventStore.Client.Messages
                     * @interface INotHandled
                     * @property {EventStore.Client.Messages.NotHandled.NotHandledReason} reason NotHandled reason
                     * @property {Uint8Array|null} [additionalInfo] NotHandled additionalInfo
                     */
    
                    /**
                     * Constructs a new NotHandled.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a NotHandled.
                     * @implements INotHandled
                     * @constructor
                     * @param {EventStore.Client.Messages.INotHandled=} [properties] Properties to set
                     */
                    function NotHandled(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * NotHandled reason.
                     * @member {EventStore.Client.Messages.NotHandled.NotHandledReason} reason
                     * @memberof EventStore.Client.Messages.NotHandled
                     * @instance
                     */
                    NotHandled.prototype.reason = 0;
    
                    /**
                     * NotHandled additionalInfo.
                     * @member {Uint8Array} additionalInfo
                     * @memberof EventStore.Client.Messages.NotHandled
                     * @instance
                     */
                    NotHandled.prototype.additionalInfo = $util.newBuffer([]);
    
                    /**
                     * Creates a new NotHandled instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.NotHandled
                     * @static
                     * @param {EventStore.Client.Messages.INotHandled=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.NotHandled} NotHandled instance
                     */
                    NotHandled.create = function create(properties) {
                        return new NotHandled(properties);
                    };
    
                    /**
                     * Encodes the specified NotHandled message. Does not implicitly {@link EventStore.Client.Messages.NotHandled.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.NotHandled
                     * @static
                     * @param {EventStore.Client.Messages.INotHandled} message NotHandled message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NotHandled.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.reason);
                        if (message.additionalInfo != null && message.hasOwnProperty("additionalInfo"))
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.additionalInfo);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NotHandled message, length delimited. Does not implicitly {@link EventStore.Client.Messages.NotHandled.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.NotHandled
                     * @static
                     * @param {EventStore.Client.Messages.INotHandled} message NotHandled message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NotHandled.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a NotHandled message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.NotHandled
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.NotHandled} NotHandled
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NotHandled.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.NotHandled();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.reason = reader.int32();
                                break;
                            case 2:
                                message.additionalInfo = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("reason"))
                            throw $util.ProtocolError("missing required 'reason'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a NotHandled message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.NotHandled
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.NotHandled} NotHandled
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NotHandled.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a NotHandled message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.NotHandled
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NotHandled.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        switch (message.reason) {
                        default:
                            return "reason: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                        if (message.additionalInfo != null && message.hasOwnProperty("additionalInfo"))
                            if (!(message.additionalInfo && typeof message.additionalInfo.length === "number" || $util.isString(message.additionalInfo)))
                                return "additionalInfo: buffer expected";
                        return null;
                    };
    
                    /**
                     * Creates a NotHandled message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.NotHandled
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.NotHandled} NotHandled
                     */
                    NotHandled.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.NotHandled)
                            return object;
                        var message = new $root.EventStore.Client.Messages.NotHandled();
                        switch (object.reason) {
                        case "NotReady":
                        case 0:
                            message.reason = 0;
                            break;
                        case "TooBusy":
                        case 1:
                            message.reason = 1;
                            break;
                        case "NotMaster":
                        case 2:
                            message.reason = 2;
                            break;
                        }
                        if (object.additionalInfo != null)
                            if (typeof object.additionalInfo === "string")
                                $util.base64.decode(object.additionalInfo, message.additionalInfo = $util.newBuffer($util.base64.length(object.additionalInfo)), 0);
                            else if (object.additionalInfo.length)
                                message.additionalInfo = object.additionalInfo;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a NotHandled message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.NotHandled
                     * @static
                     * @param {EventStore.Client.Messages.NotHandled} message NotHandled
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NotHandled.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.reason = options.enums === String ? "NotReady" : 0;
                            if (options.bytes === String)
                                object.additionalInfo = "";
                            else {
                                object.additionalInfo = [];
                                if (options.bytes !== Array)
                                    object.additionalInfo = $util.newBuffer(object.additionalInfo);
                            }
                        }
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            object.reason = options.enums === String ? $root.EventStore.Client.Messages.NotHandled.NotHandledReason[message.reason] : message.reason;
                        if (message.additionalInfo != null && message.hasOwnProperty("additionalInfo"))
                            object.additionalInfo = options.bytes === String ? $util.base64.encode(message.additionalInfo, 0, message.additionalInfo.length) : options.bytes === Array ? Array.prototype.slice.call(message.additionalInfo) : message.additionalInfo;
                        return object;
                    };
    
                    /**
                     * Converts this NotHandled to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.NotHandled
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NotHandled.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * NotHandledReason enum.
                     * @name EventStore.Client.Messages.NotHandled.NotHandledReason
                     * @enum {string}
                     * @property {number} NotReady=0 NotReady value
                     * @property {number} TooBusy=1 TooBusy value
                     * @property {number} NotMaster=2 NotMaster value
                     */
                    NotHandled.NotHandledReason = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "NotReady"] = 0;
                        values[valuesById[1] = "TooBusy"] = 1;
                        values[valuesById[2] = "NotMaster"] = 2;
                        return values;
                    })();
    
                    NotHandled.MasterInfo = (function() {
    
                        /**
                         * Properties of a MasterInfo.
                         * @memberof EventStore.Client.Messages.NotHandled
                         * @interface IMasterInfo
                         * @property {string} externalTcpAddress MasterInfo externalTcpAddress
                         * @property {number} externalTcpPort MasterInfo externalTcpPort
                         * @property {string} externalHttpAddress MasterInfo externalHttpAddress
                         * @property {number} externalHttpPort MasterInfo externalHttpPort
                         * @property {string|null} [externalSecureTcpAddress] MasterInfo externalSecureTcpAddress
                         * @property {number|null} [externalSecureTcpPort] MasterInfo externalSecureTcpPort
                         */
    
                        /**
                         * Constructs a new MasterInfo.
                         * @memberof EventStore.Client.Messages.NotHandled
                         * @classdesc Represents a MasterInfo.
                         * @implements IMasterInfo
                         * @constructor
                         * @param {EventStore.Client.Messages.NotHandled.IMasterInfo=} [properties] Properties to set
                         */
                        function MasterInfo(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * MasterInfo externalTcpAddress.
                         * @member {string} externalTcpAddress
                         * @memberof EventStore.Client.Messages.NotHandled.MasterInfo
                         * @instance
                         */
                        MasterInfo.prototype.externalTcpAddress = "";
    
                        /**
                         * MasterInfo externalTcpPort.
                         * @member {number} externalTcpPort
                         * @memberof EventStore.Client.Messages.NotHandled.MasterInfo
                         * @instance
                         */
                        MasterInfo.prototype.externalTcpPort = 0;
    
                        /**
                         * MasterInfo externalHttpAddress.
                         * @member {string} externalHttpAddress
                         * @memberof EventStore.Client.Messages.NotHandled.MasterInfo
                         * @instance
                         */
                        MasterInfo.prototype.externalHttpAddress = "";
    
                        /**
                         * MasterInfo externalHttpPort.
                         * @member {number} externalHttpPort
                         * @memberof EventStore.Client.Messages.NotHandled.MasterInfo
                         * @instance
                         */
                        MasterInfo.prototype.externalHttpPort = 0;
    
                        /**
                         * MasterInfo externalSecureTcpAddress.
                         * @member {string} externalSecureTcpAddress
                         * @memberof EventStore.Client.Messages.NotHandled.MasterInfo
                         * @instance
                         */
                        MasterInfo.prototype.externalSecureTcpAddress = "";
    
                        /**
                         * MasterInfo externalSecureTcpPort.
                         * @member {number} externalSecureTcpPort
                         * @memberof EventStore.Client.Messages.NotHandled.MasterInfo
                         * @instance
                         */
                        MasterInfo.prototype.externalSecureTcpPort = 0;
    
                        /**
                         * Creates a new MasterInfo instance using the specified properties.
                         * @function create
                         * @memberof EventStore.Client.Messages.NotHandled.MasterInfo
                         * @static
                         * @param {EventStore.Client.Messages.NotHandled.IMasterInfo=} [properties] Properties to set
                         * @returns {EventStore.Client.Messages.NotHandled.MasterInfo} MasterInfo instance
                         */
                        MasterInfo.create = function create(properties) {
                            return new MasterInfo(properties);
                        };
    
                        /**
                         * Encodes the specified MasterInfo message. Does not implicitly {@link EventStore.Client.Messages.NotHandled.MasterInfo.verify|verify} messages.
                         * @function encode
                         * @memberof EventStore.Client.Messages.NotHandled.MasterInfo
                         * @static
                         * @param {EventStore.Client.Messages.NotHandled.IMasterInfo} message MasterInfo message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        MasterInfo.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.externalTcpAddress);
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.externalTcpPort);
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.externalHttpAddress);
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.externalHttpPort);
                            if (message.externalSecureTcpAddress != null && message.hasOwnProperty("externalSecureTcpAddress"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.externalSecureTcpAddress);
                            if (message.externalSecureTcpPort != null && message.hasOwnProperty("externalSecureTcpPort"))
                                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.externalSecureTcpPort);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified MasterInfo message, length delimited. Does not implicitly {@link EventStore.Client.Messages.NotHandled.MasterInfo.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof EventStore.Client.Messages.NotHandled.MasterInfo
                         * @static
                         * @param {EventStore.Client.Messages.NotHandled.IMasterInfo} message MasterInfo message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        MasterInfo.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a MasterInfo message from the specified reader or buffer.
                         * @function decode
                         * @memberof EventStore.Client.Messages.NotHandled.MasterInfo
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {EventStore.Client.Messages.NotHandled.MasterInfo} MasterInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        MasterInfo.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.NotHandled.MasterInfo();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.externalTcpAddress = reader.string();
                                    break;
                                case 2:
                                    message.externalTcpPort = reader.int32();
                                    break;
                                case 3:
                                    message.externalHttpAddress = reader.string();
                                    break;
                                case 4:
                                    message.externalHttpPort = reader.int32();
                                    break;
                                case 5:
                                    message.externalSecureTcpAddress = reader.string();
                                    break;
                                case 6:
                                    message.externalSecureTcpPort = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            if (!message.hasOwnProperty("externalTcpAddress"))
                                throw $util.ProtocolError("missing required 'externalTcpAddress'", { instance: message });
                            if (!message.hasOwnProperty("externalTcpPort"))
                                throw $util.ProtocolError("missing required 'externalTcpPort'", { instance: message });
                            if (!message.hasOwnProperty("externalHttpAddress"))
                                throw $util.ProtocolError("missing required 'externalHttpAddress'", { instance: message });
                            if (!message.hasOwnProperty("externalHttpPort"))
                                throw $util.ProtocolError("missing required 'externalHttpPort'", { instance: message });
                            return message;
                        };
    
                        /**
                         * Decodes a MasterInfo message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof EventStore.Client.Messages.NotHandled.MasterInfo
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {EventStore.Client.Messages.NotHandled.MasterInfo} MasterInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        MasterInfo.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a MasterInfo message.
                         * @function verify
                         * @memberof EventStore.Client.Messages.NotHandled.MasterInfo
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        MasterInfo.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (!$util.isString(message.externalTcpAddress))
                                return "externalTcpAddress: string expected";
                            if (!$util.isInteger(message.externalTcpPort))
                                return "externalTcpPort: integer expected";
                            if (!$util.isString(message.externalHttpAddress))
                                return "externalHttpAddress: string expected";
                            if (!$util.isInteger(message.externalHttpPort))
                                return "externalHttpPort: integer expected";
                            if (message.externalSecureTcpAddress != null && message.hasOwnProperty("externalSecureTcpAddress"))
                                if (!$util.isString(message.externalSecureTcpAddress))
                                    return "externalSecureTcpAddress: string expected";
                            if (message.externalSecureTcpPort != null && message.hasOwnProperty("externalSecureTcpPort"))
                                if (!$util.isInteger(message.externalSecureTcpPort))
                                    return "externalSecureTcpPort: integer expected";
                            return null;
                        };
    
                        /**
                         * Creates a MasterInfo message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof EventStore.Client.Messages.NotHandled.MasterInfo
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {EventStore.Client.Messages.NotHandled.MasterInfo} MasterInfo
                         */
                        MasterInfo.fromObject = function fromObject(object) {
                            if (object instanceof $root.EventStore.Client.Messages.NotHandled.MasterInfo)
                                return object;
                            var message = new $root.EventStore.Client.Messages.NotHandled.MasterInfo();
                            if (object.externalTcpAddress != null)
                                message.externalTcpAddress = String(object.externalTcpAddress);
                            if (object.externalTcpPort != null)
                                message.externalTcpPort = object.externalTcpPort | 0;
                            if (object.externalHttpAddress != null)
                                message.externalHttpAddress = String(object.externalHttpAddress);
                            if (object.externalHttpPort != null)
                                message.externalHttpPort = object.externalHttpPort | 0;
                            if (object.externalSecureTcpAddress != null)
                                message.externalSecureTcpAddress = String(object.externalSecureTcpAddress);
                            if (object.externalSecureTcpPort != null)
                                message.externalSecureTcpPort = object.externalSecureTcpPort | 0;
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a MasterInfo message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof EventStore.Client.Messages.NotHandled.MasterInfo
                         * @static
                         * @param {EventStore.Client.Messages.NotHandled.MasterInfo} message MasterInfo
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        MasterInfo.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.externalTcpAddress = "";
                                object.externalTcpPort = 0;
                                object.externalHttpAddress = "";
                                object.externalHttpPort = 0;
                                object.externalSecureTcpAddress = "";
                                object.externalSecureTcpPort = 0;
                            }
                            if (message.externalTcpAddress != null && message.hasOwnProperty("externalTcpAddress"))
                                object.externalTcpAddress = message.externalTcpAddress;
                            if (message.externalTcpPort != null && message.hasOwnProperty("externalTcpPort"))
                                object.externalTcpPort = message.externalTcpPort;
                            if (message.externalHttpAddress != null && message.hasOwnProperty("externalHttpAddress"))
                                object.externalHttpAddress = message.externalHttpAddress;
                            if (message.externalHttpPort != null && message.hasOwnProperty("externalHttpPort"))
                                object.externalHttpPort = message.externalHttpPort;
                            if (message.externalSecureTcpAddress != null && message.hasOwnProperty("externalSecureTcpAddress"))
                                object.externalSecureTcpAddress = message.externalSecureTcpAddress;
                            if (message.externalSecureTcpPort != null && message.hasOwnProperty("externalSecureTcpPort"))
                                object.externalSecureTcpPort = message.externalSecureTcpPort;
                            return object;
                        };
    
                        /**
                         * Converts this MasterInfo to JSON.
                         * @function toJSON
                         * @memberof EventStore.Client.Messages.NotHandled.MasterInfo
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        MasterInfo.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return MasterInfo;
                    })();
    
                    return NotHandled;
                })();
    
                Messages.ScavengeDatabase = (function() {
    
                    /**
                     * Properties of a ScavengeDatabase.
                     * @memberof EventStore.Client.Messages
                     * @interface IScavengeDatabase
                     */
    
                    /**
                     * Constructs a new ScavengeDatabase.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a ScavengeDatabase.
                     * @implements IScavengeDatabase
                     * @constructor
                     * @param {EventStore.Client.Messages.IScavengeDatabase=} [properties] Properties to set
                     */
                    function ScavengeDatabase(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Creates a new ScavengeDatabase instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.ScavengeDatabase
                     * @static
                     * @param {EventStore.Client.Messages.IScavengeDatabase=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.ScavengeDatabase} ScavengeDatabase instance
                     */
                    ScavengeDatabase.create = function create(properties) {
                        return new ScavengeDatabase(properties);
                    };
    
                    /**
                     * Encodes the specified ScavengeDatabase message. Does not implicitly {@link EventStore.Client.Messages.ScavengeDatabase.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.ScavengeDatabase
                     * @static
                     * @param {EventStore.Client.Messages.IScavengeDatabase} message ScavengeDatabase message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScavengeDatabase.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ScavengeDatabase message, length delimited. Does not implicitly {@link EventStore.Client.Messages.ScavengeDatabase.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.ScavengeDatabase
                     * @static
                     * @param {EventStore.Client.Messages.IScavengeDatabase} message ScavengeDatabase message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScavengeDatabase.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ScavengeDatabase message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.ScavengeDatabase
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.ScavengeDatabase} ScavengeDatabase
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScavengeDatabase.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.ScavengeDatabase();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ScavengeDatabase message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.ScavengeDatabase
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.ScavengeDatabase} ScavengeDatabase
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScavengeDatabase.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ScavengeDatabase message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.ScavengeDatabase
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ScavengeDatabase.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };
    
                    /**
                     * Creates a ScavengeDatabase message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.ScavengeDatabase
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.ScavengeDatabase} ScavengeDatabase
                     */
                    ScavengeDatabase.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.ScavengeDatabase)
                            return object;
                        return new $root.EventStore.Client.Messages.ScavengeDatabase();
                    };
    
                    /**
                     * Creates a plain object from a ScavengeDatabase message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.ScavengeDatabase
                     * @static
                     * @param {EventStore.Client.Messages.ScavengeDatabase} message ScavengeDatabase
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ScavengeDatabase.toObject = function toObject() {
                        return {};
                    };
    
                    /**
                     * Converts this ScavengeDatabase to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.ScavengeDatabase
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ScavengeDatabase.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ScavengeDatabase;
                })();
    
                Messages.ScavengeDatabaseCompleted = (function() {
    
                    /**
                     * Properties of a ScavengeDatabaseCompleted.
                     * @memberof EventStore.Client.Messages
                     * @interface IScavengeDatabaseCompleted
                     * @property {EventStore.Client.Messages.ScavengeDatabaseCompleted.ScavengeResult} result ScavengeDatabaseCompleted result
                     * @property {string|null} [error] ScavengeDatabaseCompleted error
                     * @property {number} totalTimeMs ScavengeDatabaseCompleted totalTimeMs
                     * @property {number|Long} totalSpaceSaved ScavengeDatabaseCompleted totalSpaceSaved
                     */
    
                    /**
                     * Constructs a new ScavengeDatabaseCompleted.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a ScavengeDatabaseCompleted.
                     * @implements IScavengeDatabaseCompleted
                     * @constructor
                     * @param {EventStore.Client.Messages.IScavengeDatabaseCompleted=} [properties] Properties to set
                     */
                    function ScavengeDatabaseCompleted(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ScavengeDatabaseCompleted result.
                     * @member {EventStore.Client.Messages.ScavengeDatabaseCompleted.ScavengeResult} result
                     * @memberof EventStore.Client.Messages.ScavengeDatabaseCompleted
                     * @instance
                     */
                    ScavengeDatabaseCompleted.prototype.result = 0;
    
                    /**
                     * ScavengeDatabaseCompleted error.
                     * @member {string} error
                     * @memberof EventStore.Client.Messages.ScavengeDatabaseCompleted
                     * @instance
                     */
                    ScavengeDatabaseCompleted.prototype.error = "";
    
                    /**
                     * ScavengeDatabaseCompleted totalTimeMs.
                     * @member {number} totalTimeMs
                     * @memberof EventStore.Client.Messages.ScavengeDatabaseCompleted
                     * @instance
                     */
                    ScavengeDatabaseCompleted.prototype.totalTimeMs = 0;
    
                    /**
                     * ScavengeDatabaseCompleted totalSpaceSaved.
                     * @member {number|Long} totalSpaceSaved
                     * @memberof EventStore.Client.Messages.ScavengeDatabaseCompleted
                     * @instance
                     */
                    ScavengeDatabaseCompleted.prototype.totalSpaceSaved = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * Creates a new ScavengeDatabaseCompleted instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.ScavengeDatabaseCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IScavengeDatabaseCompleted=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.ScavengeDatabaseCompleted} ScavengeDatabaseCompleted instance
                     */
                    ScavengeDatabaseCompleted.create = function create(properties) {
                        return new ScavengeDatabaseCompleted(properties);
                    };
    
                    /**
                     * Encodes the specified ScavengeDatabaseCompleted message. Does not implicitly {@link EventStore.Client.Messages.ScavengeDatabaseCompleted.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.ScavengeDatabaseCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IScavengeDatabaseCompleted} message ScavengeDatabaseCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScavengeDatabaseCompleted.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
                        if (message.error != null && message.hasOwnProperty("error"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.totalTimeMs);
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.totalSpaceSaved);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ScavengeDatabaseCompleted message, length delimited. Does not implicitly {@link EventStore.Client.Messages.ScavengeDatabaseCompleted.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.ScavengeDatabaseCompleted
                     * @static
                     * @param {EventStore.Client.Messages.IScavengeDatabaseCompleted} message ScavengeDatabaseCompleted message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScavengeDatabaseCompleted.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ScavengeDatabaseCompleted message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.ScavengeDatabaseCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.ScavengeDatabaseCompleted} ScavengeDatabaseCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScavengeDatabaseCompleted.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.ScavengeDatabaseCompleted();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.result = reader.int32();
                                break;
                            case 2:
                                message.error = reader.string();
                                break;
                            case 3:
                                message.totalTimeMs = reader.int32();
                                break;
                            case 4:
                                message.totalSpaceSaved = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("result"))
                            throw $util.ProtocolError("missing required 'result'", { instance: message });
                        if (!message.hasOwnProperty("totalTimeMs"))
                            throw $util.ProtocolError("missing required 'totalTimeMs'", { instance: message });
                        if (!message.hasOwnProperty("totalSpaceSaved"))
                            throw $util.ProtocolError("missing required 'totalSpaceSaved'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a ScavengeDatabaseCompleted message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.ScavengeDatabaseCompleted
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.ScavengeDatabaseCompleted} ScavengeDatabaseCompleted
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScavengeDatabaseCompleted.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ScavengeDatabaseCompleted message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.ScavengeDatabaseCompleted
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ScavengeDatabaseCompleted.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        switch (message.result) {
                        default:
                            return "result: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                        if (message.error != null && message.hasOwnProperty("error"))
                            if (!$util.isString(message.error))
                                return "error: string expected";
                        if (!$util.isInteger(message.totalTimeMs))
                            return "totalTimeMs: integer expected";
                        if (!$util.isInteger(message.totalSpaceSaved) && !(message.totalSpaceSaved && $util.isInteger(message.totalSpaceSaved.low) && $util.isInteger(message.totalSpaceSaved.high)))
                            return "totalSpaceSaved: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates a ScavengeDatabaseCompleted message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.ScavengeDatabaseCompleted
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.ScavengeDatabaseCompleted} ScavengeDatabaseCompleted
                     */
                    ScavengeDatabaseCompleted.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.ScavengeDatabaseCompleted)
                            return object;
                        var message = new $root.EventStore.Client.Messages.ScavengeDatabaseCompleted();
                        switch (object.result) {
                        case "Success":
                        case 0:
                            message.result = 0;
                            break;
                        case "InProgress":
                        case 1:
                            message.result = 1;
                            break;
                        case "Failed":
                        case 2:
                            message.result = 2;
                            break;
                        }
                        if (object.error != null)
                            message.error = String(object.error);
                        if (object.totalTimeMs != null)
                            message.totalTimeMs = object.totalTimeMs | 0;
                        if (object.totalSpaceSaved != null)
                            if ($util.Long)
                                (message.totalSpaceSaved = $util.Long.fromValue(object.totalSpaceSaved)).unsigned = false;
                            else if (typeof object.totalSpaceSaved === "string")
                                message.totalSpaceSaved = parseInt(object.totalSpaceSaved, 10);
                            else if (typeof object.totalSpaceSaved === "number")
                                message.totalSpaceSaved = object.totalSpaceSaved;
                            else if (typeof object.totalSpaceSaved === "object")
                                message.totalSpaceSaved = new $util.LongBits(object.totalSpaceSaved.low >>> 0, object.totalSpaceSaved.high >>> 0).toNumber();
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ScavengeDatabaseCompleted message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.ScavengeDatabaseCompleted
                     * @static
                     * @param {EventStore.Client.Messages.ScavengeDatabaseCompleted} message ScavengeDatabaseCompleted
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ScavengeDatabaseCompleted.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.result = options.enums === String ? "Success" : 0;
                            object.error = "";
                            object.totalTimeMs = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.totalSpaceSaved = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.totalSpaceSaved = options.longs === String ? "0" : 0;
                        }
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = options.enums === String ? $root.EventStore.Client.Messages.ScavengeDatabaseCompleted.ScavengeResult[message.result] : message.result;
                        if (message.error != null && message.hasOwnProperty("error"))
                            object.error = message.error;
                        if (message.totalTimeMs != null && message.hasOwnProperty("totalTimeMs"))
                            object.totalTimeMs = message.totalTimeMs;
                        if (message.totalSpaceSaved != null && message.hasOwnProperty("totalSpaceSaved"))
                            if (typeof message.totalSpaceSaved === "number")
                                object.totalSpaceSaved = options.longs === String ? String(message.totalSpaceSaved) : message.totalSpaceSaved;
                            else
                                object.totalSpaceSaved = options.longs === String ? $util.Long.prototype.toString.call(message.totalSpaceSaved) : options.longs === Number ? new $util.LongBits(message.totalSpaceSaved.low >>> 0, message.totalSpaceSaved.high >>> 0).toNumber() : message.totalSpaceSaved;
                        return object;
                    };
    
                    /**
                     * Converts this ScavengeDatabaseCompleted to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.ScavengeDatabaseCompleted
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ScavengeDatabaseCompleted.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * ScavengeResult enum.
                     * @name EventStore.Client.Messages.ScavengeDatabaseCompleted.ScavengeResult
                     * @enum {string}
                     * @property {number} Success=0 Success value
                     * @property {number} InProgress=1 InProgress value
                     * @property {number} Failed=2 Failed value
                     */
                    ScavengeDatabaseCompleted.ScavengeResult = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "Success"] = 0;
                        values[valuesById[1] = "InProgress"] = 1;
                        values[valuesById[2] = "Failed"] = 2;
                        return values;
                    })();
    
                    return ScavengeDatabaseCompleted;
                })();
    
                Messages.IdentifyClient = (function() {
    
                    /**
                     * Properties of an IdentifyClient.
                     * @memberof EventStore.Client.Messages
                     * @interface IIdentifyClient
                     * @property {number} version IdentifyClient version
                     * @property {string|null} [connectionName] IdentifyClient connectionName
                     */
    
                    /**
                     * Constructs a new IdentifyClient.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents an IdentifyClient.
                     * @implements IIdentifyClient
                     * @constructor
                     * @param {EventStore.Client.Messages.IIdentifyClient=} [properties] Properties to set
                     */
                    function IdentifyClient(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * IdentifyClient version.
                     * @member {number} version
                     * @memberof EventStore.Client.Messages.IdentifyClient
                     * @instance
                     */
                    IdentifyClient.prototype.version = 0;
    
                    /**
                     * IdentifyClient connectionName.
                     * @member {string} connectionName
                     * @memberof EventStore.Client.Messages.IdentifyClient
                     * @instance
                     */
                    IdentifyClient.prototype.connectionName = "";
    
                    /**
                     * Creates a new IdentifyClient instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.IdentifyClient
                     * @static
                     * @param {EventStore.Client.Messages.IIdentifyClient=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.IdentifyClient} IdentifyClient instance
                     */
                    IdentifyClient.create = function create(properties) {
                        return new IdentifyClient(properties);
                    };
    
                    /**
                     * Encodes the specified IdentifyClient message. Does not implicitly {@link EventStore.Client.Messages.IdentifyClient.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.IdentifyClient
                     * @static
                     * @param {EventStore.Client.Messages.IIdentifyClient} message IdentifyClient message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    IdentifyClient.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
                        if (message.connectionName != null && message.hasOwnProperty("connectionName"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.connectionName);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified IdentifyClient message, length delimited. Does not implicitly {@link EventStore.Client.Messages.IdentifyClient.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.IdentifyClient
                     * @static
                     * @param {EventStore.Client.Messages.IIdentifyClient} message IdentifyClient message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    IdentifyClient.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an IdentifyClient message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.IdentifyClient
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.IdentifyClient} IdentifyClient
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    IdentifyClient.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.IdentifyClient();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.version = reader.int32();
                                break;
                            case 2:
                                message.connectionName = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("version"))
                            throw $util.ProtocolError("missing required 'version'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes an IdentifyClient message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.IdentifyClient
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.IdentifyClient} IdentifyClient
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    IdentifyClient.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an IdentifyClient message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.IdentifyClient
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    IdentifyClient.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isInteger(message.version))
                            return "version: integer expected";
                        if (message.connectionName != null && message.hasOwnProperty("connectionName"))
                            if (!$util.isString(message.connectionName))
                                return "connectionName: string expected";
                        return null;
                    };
    
                    /**
                     * Creates an IdentifyClient message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.IdentifyClient
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.IdentifyClient} IdentifyClient
                     */
                    IdentifyClient.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.IdentifyClient)
                            return object;
                        var message = new $root.EventStore.Client.Messages.IdentifyClient();
                        if (object.version != null)
                            message.version = object.version | 0;
                        if (object.connectionName != null)
                            message.connectionName = String(object.connectionName);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an IdentifyClient message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.IdentifyClient
                     * @static
                     * @param {EventStore.Client.Messages.IdentifyClient} message IdentifyClient
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    IdentifyClient.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.version = 0;
                            object.connectionName = "";
                        }
                        if (message.version != null && message.hasOwnProperty("version"))
                            object.version = message.version;
                        if (message.connectionName != null && message.hasOwnProperty("connectionName"))
                            object.connectionName = message.connectionName;
                        return object;
                    };
    
                    /**
                     * Converts this IdentifyClient to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.IdentifyClient
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    IdentifyClient.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return IdentifyClient;
                })();
    
                Messages.ClientIdentified = (function() {
    
                    /**
                     * Properties of a ClientIdentified.
                     * @memberof EventStore.Client.Messages
                     * @interface IClientIdentified
                     */
    
                    /**
                     * Constructs a new ClientIdentified.
                     * @memberof EventStore.Client.Messages
                     * @classdesc Represents a ClientIdentified.
                     * @implements IClientIdentified
                     * @constructor
                     * @param {EventStore.Client.Messages.IClientIdentified=} [properties] Properties to set
                     */
                    function ClientIdentified(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Creates a new ClientIdentified instance using the specified properties.
                     * @function create
                     * @memberof EventStore.Client.Messages.ClientIdentified
                     * @static
                     * @param {EventStore.Client.Messages.IClientIdentified=} [properties] Properties to set
                     * @returns {EventStore.Client.Messages.ClientIdentified} ClientIdentified instance
                     */
                    ClientIdentified.create = function create(properties) {
                        return new ClientIdentified(properties);
                    };
    
                    /**
                     * Encodes the specified ClientIdentified message. Does not implicitly {@link EventStore.Client.Messages.ClientIdentified.verify|verify} messages.
                     * @function encode
                     * @memberof EventStore.Client.Messages.ClientIdentified
                     * @static
                     * @param {EventStore.Client.Messages.IClientIdentified} message ClientIdentified message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ClientIdentified.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ClientIdentified message, length delimited. Does not implicitly {@link EventStore.Client.Messages.ClientIdentified.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof EventStore.Client.Messages.ClientIdentified
                     * @static
                     * @param {EventStore.Client.Messages.IClientIdentified} message ClientIdentified message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ClientIdentified.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ClientIdentified message from the specified reader or buffer.
                     * @function decode
                     * @memberof EventStore.Client.Messages.ClientIdentified
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {EventStore.Client.Messages.ClientIdentified} ClientIdentified
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ClientIdentified.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventStore.Client.Messages.ClientIdentified();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ClientIdentified message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof EventStore.Client.Messages.ClientIdentified
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {EventStore.Client.Messages.ClientIdentified} ClientIdentified
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ClientIdentified.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ClientIdentified message.
                     * @function verify
                     * @memberof EventStore.Client.Messages.ClientIdentified
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ClientIdentified.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };
    
                    /**
                     * Creates a ClientIdentified message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof EventStore.Client.Messages.ClientIdentified
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {EventStore.Client.Messages.ClientIdentified} ClientIdentified
                     */
                    ClientIdentified.fromObject = function fromObject(object) {
                        if (object instanceof $root.EventStore.Client.Messages.ClientIdentified)
                            return object;
                        return new $root.EventStore.Client.Messages.ClientIdentified();
                    };
    
                    /**
                     * Creates a plain object from a ClientIdentified message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof EventStore.Client.Messages.ClientIdentified
                     * @static
                     * @param {EventStore.Client.Messages.ClientIdentified} message ClientIdentified
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ClientIdentified.toObject = function toObject() {
                        return {};
                    };
    
                    /**
                     * Converts this ClientIdentified to JSON.
                     * @function toJSON
                     * @memberof EventStore.Client.Messages.ClientIdentified
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ClientIdentified.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ClientIdentified;
                })();
    
                return Messages;
            })();
    
            return Client;
        })();
    
        return EventStore;
    })();

    return $root;
});
