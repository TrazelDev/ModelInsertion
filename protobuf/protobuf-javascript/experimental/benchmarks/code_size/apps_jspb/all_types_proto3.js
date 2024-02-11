/**
 * @fileoverview The code size benchmark of apps JSPB for proto3 all types
 */
goog.module('protobuf.benchmark.code_size.apps_jspb.AllTypesProto3');

// const ForeignEnum = goog.require('proto.proto3_unittest.ForeignEnum');
const ForeignMessage = goog.require('proto.proto3_unittest.ForeignMessage');
const TestAllTypes = goog.require('proto.proto3_unittest.TestAllTypes');
const TestPackedTypes = goog.require('proto.proto3_unittest.TestPackedTypes');
const {ensureCommonBaseLine} = goog.require('protobuf.benchmark.codeSize.codeSizeBase');

ensureCommonBaseLine();

/**
 * The testing scenario is the same as kernel one.
 * We have
 *  1) add element to repeated fields
 *  2) add element list to repeated fields
 *  3) set fields
 *  4) set repeated fields element
 *  5) get fields
 *  6) get repeated fields element
 *  7) get repeated fields length
 * @return {string}
 */
function accessAllTypes() {
  const msgAllTypes = TestAllTypes.deserialize('');
  const msgPackedTypes = TestPackedTypes.deserialize('');

  msgPackedTypes.addPackedBool(true);
  [true].forEach((e) => msgPackedTypes.addPackedBool(e));
  msgAllTypes.addRepeatedBool(true, 1);
  [true].forEach((e) => msgAllTypes.addRepeatedBool(e));
  msgAllTypes.addRepeatedBytes('1', 1);
  ['1'].forEach((e) => msgAllTypes.addRepeatedBytes(e));
  msgPackedTypes.addPackedDouble(1.0);
  [1.0].forEach((e) => msgPackedTypes.addPackedDouble(e));
  msgAllTypes.addRepeatedDouble(1.0, 1);
  [1.0].forEach((e) => msgAllTypes.addRepeatedDouble(e));
  msgPackedTypes.addPackedFixed32(1, 1);
  [1].forEach((e) => msgPackedTypes.addPackedFixed32(e));
  msgAllTypes.addRepeatedFixed32(1, 1);
  [1].forEach((e) => msgAllTypes.addRepeatedFixed32(e));
  msgPackedTypes.addPackedFixed64(1, 1);
  [1].forEach((e) => msgPackedTypes.addPackedFixed64(e));
  msgAllTypes.addRepeatedFixed64(1, 1);
  [1].forEach((e) => msgAllTypes.addRepeatedFixed64(e));
  msgPackedTypes.addPackedFloat(1.0, 1);
  [1.0].forEach((e) => msgPackedTypes.addPackedFloat(e));
  msgAllTypes.addRepeatedFloat(1.0, 1);
  [1.0].forEach((e) => msgAllTypes.addRepeatedFloat(e));
  msgPackedTypes.addPackedInt32(1, 1);
  [1].forEach((e) => msgPackedTypes.addPackedInt32(e));
  msgAllTypes.addRepeatedInt32(1, 1);
  [1].forEach((e) => msgAllTypes.addRepeatedInt32(e));
  msgPackedTypes.addPackedInt64(1, 1);
  [1].forEach((e) => msgPackedTypes.addPackedInt64(e));
  msgAllTypes.addRepeatedInt64(1, 1);
  [1].forEach((e) => msgAllTypes.addRepeatedInt64(e));
  // msgPackedTypes.addPackedEnum(ForeignEnum.FOREIGN_BAR);
  // [ForeignEnum.FOREIGN_BAR].forEach((e) => msgPackedTypes.addPackedEnum(e));
  // msgAllTypes.addRepeatedForeignEnum(ForeignEnum.FOREIGN_BAR);
  // [ForeignEnum.FOREIGN_BAR].forEach(
  //     (e) => msgAllTypes.addRepeatedForeignEnum(e));
  msgAllTypes.addRepeatedForeignMessage(ForeignMessage.deserialize(''), 1);
  [ForeignMessage.deserialize('')].forEach(
      (e) => msgAllTypes.addRepeatedForeignMessage(e));
  msgPackedTypes.addPackedSfixed32(1, 1);
  [1].forEach((e) => msgPackedTypes.addPackedSfixed32(e));
  msgAllTypes.addRepeatedSfixed32(1, 1);
  [1].forEach((e) => msgAllTypes.addRepeatedSfixed32(e));
  msgPackedTypes.addPackedSfixed64(1, 1);
  [1].forEach((e) => msgPackedTypes.addPackedSfixed64(e));
  msgAllTypes.addRepeatedSfixed64(1, 1);
  [1].forEach((e) => msgAllTypes.addRepeatedSfixed64(e));
  msgPackedTypes.addPackedSint32(1, 1);
  [1].forEach((e) => msgPackedTypes.addPackedSint32(e));
  msgAllTypes.addRepeatedSint32(1, 1);
  [1].forEach((e) => msgAllTypes.addRepeatedSint32(e));
  msgPackedTypes.addPackedSint64(1, 1);
  [1].forEach((e) => msgPackedTypes.addPackedSint64(e));
  msgAllTypes.addRepeatedSint64(1, 1);
  [1].forEach((e) => msgAllTypes.addRepeatedSint64(e));
  msgAllTypes.addRepeatedString('', 1);
  [''].forEach((e) => msgAllTypes.addRepeatedString(e));
  msgPackedTypes.addPackedUint32(1, 1);
  [1].forEach((e) => msgPackedTypes.addPackedUint32(e));
  msgAllTypes.addRepeatedUint32(1, 1);
  [1].forEach((e) => msgAllTypes.addRepeatedUint32(e));
  msgPackedTypes.addPackedUint64(1, 1);
  [1].forEach((e) => msgPackedTypes.addPackedUint64(e));
  msgAllTypes.addRepeatedUint64(1, 1);
  [1].forEach((e) => msgAllTypes.addRepeatedUint64(e));

  msgAllTypes.setOptionalBool(true);
  msgAllTypes.setOptionalBytes('');
  msgAllTypes.setOptionalDouble(1.0);
  msgAllTypes.setOptionalFixed32(1);
  msgAllTypes.setOptionalFixed64(1);
  msgAllTypes.setOptionalFloat(1.0);
  msgAllTypes.setOptionalInt32(1);
  msgAllTypes.setOptionalInt64(1);
  // msgAllTypes.setOptionalForeignEnum(ForeignEnum.FOREIGN_BAR);
  msgAllTypes.setOptionalForeignMessage(ForeignMessage.deserialize(''));
  msgAllTypes.setOptionalSfixed32(1);
  msgAllTypes.setOptionalSfixed64(1);
  msgAllTypes.setOptionalSint32(1);
  msgAllTypes.setOptionalSint64(1);
  msgAllTypes.setOptionalString('');
  msgAllTypes.setOptionalUint32(1);
  msgAllTypes.setOptionalUint64(1);
  msgPackedTypes.setPackedBoolList([true]);
  let arrayVal;
  arrayVal = msgPackedTypes.getPackedBoolList();
  arrayVal[0] = true;
  msgPackedTypes.setPackedBoolList(arrayVal);
  msgAllTypes.setRepeatedBoolList([true]);
  arrayVal = msgAllTypes.getRepeatedBoolList();
  arrayVal[0] = true;
  msgAllTypes.setRepeatedBoolList(arrayVal);
  msgAllTypes.setRepeatedBytesList(['']);
  arrayVal = msgAllTypes.getRepeatedBytesList_asB64();
  arrayVal[0] = '';
  msgAllTypes.setRepeatedBytesList(arrayVal);
  msgPackedTypes.setPackedDoubleList([1.0]);
  arrayVal = msgPackedTypes.getPackedDoubleList();
  arrayVal[0] = 1.0;
  msgPackedTypes.setPackedDoubleList(arrayVal);
  msgAllTypes.setRepeatedDoubleList([1.0]);
  arrayVal = msgAllTypes.getRepeatedDoubleList();
  arrayVal[0] = 1.0;
  msgAllTypes.setRepeatedDoubleList(arrayVal);
  msgPackedTypes.setPackedFixed32List([1]);
  arrayVal = msgPackedTypes.getPackedFixed32List();
  arrayVal[0] = 1;
  msgPackedTypes.setPackedFixed32List(arrayVal);
  msgAllTypes.setRepeatedFixed32List([1]);
  arrayVal = msgAllTypes.getRepeatedFixed32List();
  arrayVal[0] = 1;
  msgAllTypes.setRepeatedFixed32List(arrayVal);
  msgPackedTypes.setPackedFixed64List([1]);
  arrayVal = msgPackedTypes.getPackedFixed64List();
  arrayVal[0] = 1;
  msgPackedTypes.setPackedFixed64List(arrayVal);
  msgAllTypes.setRepeatedFixed64List([1]);
  arrayVal = msgAllTypes.getRepeatedFixed64List();
  arrayVal[0] = 1;
  msgAllTypes.setRepeatedFixed64List(arrayVal);
  msgPackedTypes.setPackedFloatList([1.0]);
  arrayVal = msgPackedTypes.getPackedFloatList();
  arrayVal[0] = 1.0;
  msgPackedTypes.setPackedFloatList(arrayVal);
  msgAllTypes.setRepeatedFloatList([1.0]);
  arrayVal = msgAllTypes.getRepeatedFloatList();
  arrayVal[0] = 1.0;
  msgAllTypes.setRepeatedFloatList(arrayVal);
  msgPackedTypes.setPackedInt32List([1]);
  arrayVal = msgPackedTypes.getPackedInt32List();
  arrayVal[0] = 1;
  msgPackedTypes.setPackedInt32List(arrayVal);
  msgAllTypes.setRepeatedInt32List([1]);
  arrayVal = msgAllTypes.getRepeatedInt32List();
  arrayVal[0] = 1;
  msgAllTypes.setRepeatedInt32List(arrayVal);
  msgPackedTypes.setPackedInt64List([1]);
  arrayVal = msgPackedTypes.getPackedInt64List();
  arrayVal[0] = 1;
  msgPackedTypes.setPackedInt64List(arrayVal);
  msgAllTypes.setRepeatedInt64List([1]);
  arrayVal = msgAllTypes.getRepeatedInt64List();
  arrayVal[0] = 1;
  msgAllTypes.setRepeatedInt64List(arrayVal);
  // msgPackedTypes.setPackedEnumList([ForeignEnum.FOREIGN_BAR]);
  // arrayVal = msgPackedTypes.getPackedEnumList();
  // arrayVal[0] = ForeignEnum.FOREIGN_BAR;
  // msgPackedTypes.setPackedEnumList(arrayVal);
  // msgAllTypes.setRepeatedForeignEnumList([ForeignEnum.FOREIGN_BAR]);
  // arrayVal = msgAllTypes.getRepeatedForeignEnumList();
  // arrayVal[0] = ForeignEnum.FOREIGN_BAR;
  // msgAllTypes.setRepeatedForeignEnumList(arrayVal);
  msgAllTypes.setRepeatedForeignMessageList([ForeignMessage.deserialize('')]);
  arrayVal = msgAllTypes.getRepeatedForeignMessageList();
  arrayVal[0] = ForeignMessage.deserialize('');
  msgAllTypes.setRepeatedForeignMessageList(arrayVal);
  msgPackedTypes.setPackedSfixed32List([1]);
  arrayVal = msgPackedTypes.getPackedSfixed32List();
  arrayVal[0] = 1;
  msgPackedTypes.setPackedSfixed32List(arrayVal);
  msgAllTypes.setRepeatedSfixed32List([1]);
  arrayVal = msgAllTypes.getRepeatedSfixed32List();
  arrayVal[0] = 1;
  msgAllTypes.setRepeatedSfixed32List(arrayVal);
  msgPackedTypes.setPackedSfixed64List([1]);
  arrayVal = msgPackedTypes.getPackedSfixed64List();
  arrayVal[0] = 1;
  msgPackedTypes.setPackedSfixed64List(arrayVal);
  msgAllTypes.setRepeatedSfixed64List([1]);
  arrayVal = msgAllTypes.getRepeatedSfixed64List();
  arrayVal[0] = 1;
  msgAllTypes.setRepeatedSfixed64List(arrayVal);
  msgPackedTypes.setPackedSint32List([1]);
  arrayVal = msgPackedTypes.getPackedSint32List();
  arrayVal[0] = 1;
  msgPackedTypes.setPackedSint32List(arrayVal);
  msgAllTypes.setRepeatedSint32List([1]);
  arrayVal = msgAllTypes.getRepeatedSint32List();
  arrayVal[0] = 1;
  msgAllTypes.setRepeatedSint32List(arrayVal);
  msgPackedTypes.setPackedSint64List([1]);
  arrayVal = msgPackedTypes.getPackedSint64List();
  arrayVal[0] = 1;
  msgPackedTypes.setPackedSint64List(arrayVal);
  msgAllTypes.setRepeatedSint64List([1]);
  arrayVal = msgAllTypes.getRepeatedSint64List();
  arrayVal[0] = 1;
  msgAllTypes.setRepeatedSint64List(arrayVal);
  msgPackedTypes.setPackedUint32List([1]);
  arrayVal = msgPackedTypes.getPackedUint32List();
  arrayVal[0] = 1;
  msgPackedTypes.setPackedUint32List(arrayVal);
  msgAllTypes.setRepeatedUint32List([1]);
  arrayVal = msgAllTypes.getRepeatedUint32List();
  arrayVal[0] = 1;
  msgAllTypes.setRepeatedUint32List(arrayVal);
  msgPackedTypes.setPackedUint64List([1]);
  arrayVal = msgPackedTypes.getPackedUint64List();
  arrayVal[0] = 1;
  msgPackedTypes.setPackedUint64List(arrayVal);
  msgAllTypes.setRepeatedUint64List([1]);
  arrayVal = msgAllTypes.getRepeatedUint64List();
  arrayVal[0] = 1;
  msgAllTypes.setRepeatedUint64List(arrayVal);

  let s = '';
  s += msgAllTypes.getOptionalBool() || false;
  s += msgAllTypes.getOptionalBytes_asB64() || '';
  // s += msgAllTypes.getOptionalBytes_asU8() || new Uint8Array([]);
  s += msgAllTypes.getOptionalDouble() || 0.0;
  s += msgAllTypes.getOptionalFixed32() || 0;
  s += msgAllTypes.getOptionalFixed64() || 0;
  s += msgAllTypes.getOptionalFloat() || 0.0;
  s += msgAllTypes.getOptionalInt32() || 0;
  s += msgAllTypes.getOptionalInt64() || 0;
  // s += msgAllTypes.getOptionalForeignEnum() || ForeignEnum.FOREIGN_BAR;
  s += msgAllTypes.getOptionalForeignMessage();
  s += msgAllTypes.getOptionalSfixed32() || 0;
  s += msgAllTypes.getOptionalSfixed64() || 0;
  s += msgAllTypes.getOptionalSint32() || 0;
  s += msgAllTypes.getOptionalSint64() || 0;
  s += msgAllTypes.getOptionalString() || '';
  s += msgAllTypes.getOptionalUint32() || 0;
  s += msgAllTypes.getOptionalUint64() || 0;
  s += msgAllTypes.getRepeatedBoolList();
  s += msgAllTypes.getRepeatedBoolList()[0];
  s += msgAllTypes.getRepeatedBoolList().length;
  s += msgAllTypes.getRepeatedBytesList_asB64();
  s += msgAllTypes.getRepeatedBytesList_asB64()[0];
  s += msgAllTypes.getRepeatedBytesList_asB64().length;
  s += msgAllTypes.getRepeatedBytesList_asU8();
  s += msgAllTypes.getRepeatedDoubleList();
  s += msgAllTypes.getRepeatedDoubleList()[0];
  s += msgAllTypes.getRepeatedDoubleList().length;
  s += msgAllTypes.getRepeatedFixed32List();
  s += msgAllTypes.getRepeatedFixed32List()[0];
  s += msgAllTypes.getRepeatedFixed32List().length;
  s += msgAllTypes.getRepeatedFixed64List();
  s += msgAllTypes.getRepeatedFixed64List()[0];
  s += msgAllTypes.getRepeatedFixed64List().length;
  s += msgAllTypes.getRepeatedFloatList();
  s += msgAllTypes.getRepeatedFloatList()[0];
  s += msgAllTypes.getRepeatedFloatList().length;
  s += msgAllTypes.getRepeatedInt32List();
  s += msgAllTypes.getRepeatedInt32List()[0];
  s += msgAllTypes.getRepeatedInt32List().length;
  s += msgAllTypes.getRepeatedInt64List();
  s += msgAllTypes.getRepeatedInt64List()[0];
  s += msgAllTypes.getRepeatedInt64List().length;
  // s += msgAllTypes.getRepeatedForeignEnumList();
  // s += msgAllTypes.getRepeatedForeignEnumList()[0];
  // s += msgAllTypes.getRepeatedForeignEnumList().length;
  s += msgAllTypes.getRepeatedForeignMessageList();
  s += msgAllTypes.getRepeatedForeignMessageList()[0];
  s += msgAllTypes.getRepeatedForeignMessageList().length;
  s += msgAllTypes.getRepeatedSfixed32List();
  s += msgAllTypes.getRepeatedSfixed32List()[0];
  s += msgAllTypes.getRepeatedSfixed32List().length;
  s += msgAllTypes.getRepeatedSfixed64List();
  s += msgAllTypes.getRepeatedSfixed64List()[0];
  s += msgAllTypes.getRepeatedSfixed64List().length;
  s += msgAllTypes.getRepeatedSint32List();
  s += msgAllTypes.getRepeatedSint32List()[0];
  s += msgAllTypes.getRepeatedSint32List().length;
  s += msgAllTypes.getRepeatedSint64List();
  s += msgAllTypes.getRepeatedSint64List()[0];
  s += msgAllTypes.getRepeatedSint64List().length;
  s += msgAllTypes.getRepeatedStringList();
  s += msgAllTypes.getRepeatedStringList()[0];
  s += msgAllTypes.getRepeatedStringList().length;
  s += msgAllTypes.getRepeatedUint32List();
  s += msgAllTypes.getRepeatedUint32List()[0];
  s += msgAllTypes.getRepeatedUint32List().length;
  s += msgAllTypes.getRepeatedUint64List();
  s += msgAllTypes.getRepeatedUint64List()[0];
  s += msgAllTypes.getRepeatedUint64List().length;

  s += msgAllTypes.serialize();
  s += msgPackedTypes.serialize();

  return s;
}

goog.global['__hiddenTest'] += accessAllTypes();
