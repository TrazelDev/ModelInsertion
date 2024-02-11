// source: transfer.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.modelInsertMsg', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.modelInsertMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.modelInsertMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.modelInsertMsg.displayName = 'proto.modelInsertMsg';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.modelInsertMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.modelInsertMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.modelInsertMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.modelInsertMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modelfamilyname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    maxrange: jspb.Message.getFieldWithDefault(msg, 3, 0),
    spinspeed: jspb.Message.getFieldWithDefault(msg, 4, 0),
    frequency: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.modelInsertMsg}
 */
proto.modelInsertMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.modelInsertMsg;
  return proto.modelInsertMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.modelInsertMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.modelInsertMsg}
 */
proto.modelInsertMsg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelfamilyname(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxrange(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpinspeed(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFrequency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.modelInsertMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.modelInsertMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.modelInsertMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.modelInsertMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModelfamilyname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMaxrange();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getSpinspeed();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getFrequency();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string modelName = 1;
 * @return {string}
 */
proto.modelInsertMsg.prototype.getModelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.modelInsertMsg} returns this
 */
proto.modelInsertMsg.prototype.setModelname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string modelFamilyName = 2;
 * @return {string}
 */
proto.modelInsertMsg.prototype.getModelfamilyname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.modelInsertMsg} returns this
 */
proto.modelInsertMsg.prototype.setModelfamilyname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 maxRange = 3;
 * @return {number}
 */
proto.modelInsertMsg.prototype.getMaxrange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.modelInsertMsg} returns this
 */
proto.modelInsertMsg.prototype.setMaxrange = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 spinSpeed = 4;
 * @return {number}
 */
proto.modelInsertMsg.prototype.getSpinspeed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.modelInsertMsg} returns this
 */
proto.modelInsertMsg.prototype.setSpinspeed = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 frequency = 5;
 * @return {number}
 */
proto.modelInsertMsg.prototype.getFrequency = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.modelInsertMsg} returns this
 */
proto.modelInsertMsg.prototype.setFrequency = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


goog.object.extend(exports, proto);