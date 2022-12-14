/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.history.Empty', null, global);
goog.exportSymbol('proto.history.HistoryEvent', null, global);
goog.exportSymbol('proto.history.HistoryWinEventResponseStream', null, global);

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
proto.history.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.history.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.history.Empty.displayName = 'proto.history.Empty';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.history.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.history.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.history.Empty} msg The msg instance to transform.
 * @return {!Object}
 */
proto.history.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.history.Empty}
 */
proto.history.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.history.Empty;
  return proto.history.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.history.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.history.Empty}
 */
proto.history.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.history.Empty} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.history.Empty.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.history.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.history.Empty.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.history.Empty} The clone.
 */
proto.history.Empty.prototype.cloneMessage = function() {
  return /** @type {!proto.history.Empty} */ (jspb.Message.cloneMessage(this));
};



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
proto.history.HistoryEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.history.HistoryEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.history.HistoryEvent.displayName = 'proto.history.HistoryEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.history.HistoryEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.history.HistoryEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.history.HistoryEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.history.HistoryEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    winnernickname: msg.getWinnernickname(),
    itemprice: msg.getItemprice(),
    winat: msg.getWinat(),
    itemurl: msg.getItemurl()
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
 * @return {!proto.history.HistoryEvent}
 */
proto.history.HistoryEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.history.HistoryEvent;
  return proto.history.HistoryEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.history.HistoryEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.history.HistoryEvent}
 */
proto.history.HistoryEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWinnernickname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setItemprice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWinat(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setItemurl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.history.HistoryEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.history.HistoryEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.history.HistoryEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.history.HistoryEvent.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getWinnernickname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getItemprice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getWinat();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getItemurl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.history.HistoryEvent} The clone.
 */
proto.history.HistoryEvent.prototype.cloneMessage = function() {
  return /** @type {!proto.history.HistoryEvent} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string winnerNickname = 1;
 * @return {string}
 */
proto.history.HistoryEvent.prototype.getWinnernickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.history.HistoryEvent.prototype.setWinnernickname = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string itemPrice = 2;
 * @return {string}
 */
proto.history.HistoryEvent.prototype.getItemprice = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.history.HistoryEvent.prototype.setItemprice = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 winAt = 3;
 * @return {number}
 */
proto.history.HistoryEvent.prototype.getWinat = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.history.HistoryEvent.prototype.setWinat = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string itemUrl = 4;
 * @return {string}
 */
proto.history.HistoryEvent.prototype.getItemurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.history.HistoryEvent.prototype.setItemurl = function(value) {
  jspb.Message.setField(this, 4, value);
};



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
proto.history.HistoryWinEventResponseStream = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.history.HistoryWinEventResponseStream.repeatedFields_, null);
};
goog.inherits(proto.history.HistoryWinEventResponseStream, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.history.HistoryWinEventResponseStream.displayName = 'proto.history.HistoryWinEventResponseStream';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.history.HistoryWinEventResponseStream.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.history.HistoryWinEventResponseStream.prototype.toObject = function(opt_includeInstance) {
  return proto.history.HistoryWinEventResponseStream.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.history.HistoryWinEventResponseStream} msg The msg instance to transform.
 * @return {!Object}
 */
proto.history.HistoryWinEventResponseStream.toObject = function(includeInstance, msg) {
  var f, obj = {
    historyeventlistList: jspb.Message.toObjectList(msg.getHistoryeventlistList(),
    proto.history.HistoryEvent.toObject, includeInstance)
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
 * @return {!proto.history.HistoryWinEventResponseStream}
 */
proto.history.HistoryWinEventResponseStream.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.history.HistoryWinEventResponseStream;
  return proto.history.HistoryWinEventResponseStream.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.history.HistoryWinEventResponseStream} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.history.HistoryWinEventResponseStream}
 */
proto.history.HistoryWinEventResponseStream.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.history.HistoryEvent;
      reader.readMessage(value,proto.history.HistoryEvent.deserializeBinaryFromReader);
      msg.getHistoryeventlistList().push(value);
      msg.setHistoryeventlistList(msg.getHistoryeventlistList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.history.HistoryWinEventResponseStream} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.history.HistoryWinEventResponseStream.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.history.HistoryWinEventResponseStream.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.history.HistoryWinEventResponseStream.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHistoryeventlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.history.HistoryEvent.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.history.HistoryWinEventResponseStream} The clone.
 */
proto.history.HistoryWinEventResponseStream.prototype.cloneMessage = function() {
  return /** @type {!proto.history.HistoryWinEventResponseStream} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated HistoryEvent historyEventList = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.history.HistoryEvent>}
 */
proto.history.HistoryWinEventResponseStream.prototype.getHistoryeventlistList = function() {
  return /** @type{!Array.<!proto.history.HistoryEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.history.HistoryEvent, 1));
};


/** @param {Array.<!proto.history.HistoryEvent>} value  */
proto.history.HistoryWinEventResponseStream.prototype.setHistoryeventlistList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.history.HistoryWinEventResponseStream.prototype.clearHistoryeventlistList = function() {
  this.setHistoryeventlistList([]);
};


goog.object.extend(exports, proto.history);
