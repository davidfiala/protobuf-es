// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es-next v1.8.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/unittest_proto3_lite.proto (package proto3_lite_unittest, syntax proto3)
/* eslint-disable */

import type { DescFile } from "@bufbuild/protobuf";
import type { Message } from "@bufbuild/protobuf/next";
import type { ImportMessage } from "./unittest_import_pbv2.js";
import type { PublicImportMessage } from "./unittest_import_public_pbv2.js";
import type { GenDescEnum, GenDescMessage } from "@bufbuild/protobuf/next/codegenv1";

export declare const fileDesc_google_protobuf_unittest_proto3_lite: DescFile;

/**
 * This proto includes every type of field in both singular and repeated
 * forms.
 *
 * @generated from message proto3_lite_unittest.TestAllTypes
 */
export declare type TestAllTypes = Message<"proto3_lite_unittest.TestAllTypes"> & {
  /**
   * Singular
   *
   * @generated from field: int32 optional_int32 = 1;
   */
  optionalInt32: number;

  /**
   * @generated from field: int64 optional_int64 = 2;
   */
  optionalInt64: bigint;

  /**
   * @generated from field: uint32 optional_uint32 = 3;
   */
  optionalUint32: number;

  /**
   * @generated from field: uint64 optional_uint64 = 4;
   */
  optionalUint64: bigint;

  /**
   * @generated from field: sint32 optional_sint32 = 5;
   */
  optionalSint32: number;

  /**
   * @generated from field: sint64 optional_sint64 = 6;
   */
  optionalSint64: bigint;

  /**
   * @generated from field: fixed32 optional_fixed32 = 7;
   */
  optionalFixed32: number;

  /**
   * @generated from field: fixed64 optional_fixed64 = 8;
   */
  optionalFixed64: bigint;

  /**
   * @generated from field: sfixed32 optional_sfixed32 = 9;
   */
  optionalSfixed32: number;

  /**
   * @generated from field: sfixed64 optional_sfixed64 = 10;
   */
  optionalSfixed64: bigint;

  /**
   * @generated from field: float optional_float = 11;
   */
  optionalFloat: number;

  /**
   * @generated from field: double optional_double = 12;
   */
  optionalDouble: number;

  /**
   * @generated from field: bool optional_bool = 13;
   */
  optionalBool: boolean;

  /**
   * @generated from field: string optional_string = 14;
   */
  optionalString: string;

  /**
   * @generated from field: bytes optional_bytes = 15;
   */
  optionalBytes: Uint8Array;

  /**
   * @generated from field: proto3_lite_unittest.TestAllTypes.NestedMessage optional_nested_message = 18;
   */
  optionalNestedMessage?: TestAllTypes_NestedMessage;

  /**
   * @generated from field: proto3_lite_unittest.ForeignMessage optional_foreign_message = 19;
   */
  optionalForeignMessage?: ForeignMessage;

  /**
   * @generated from field: protobuf_unittest_import.ImportMessage optional_import_message = 20;
   */
  optionalImportMessage?: ImportMessage;

  /**
   * @generated from field: proto3_lite_unittest.TestAllTypes.NestedEnum optional_nested_enum = 21;
   */
  optionalNestedEnum: TestAllTypes_NestedEnum;

  /**
   * @generated from field: proto3_lite_unittest.ForeignEnum optional_foreign_enum = 22;
   */
  optionalForeignEnum: ForeignEnum;

  /**
   * @generated from field: string optional_string_piece = 24;
   */
  optionalStringPiece: string;

  /**
   * @generated from field: string optional_cord = 25;
   */
  optionalCord: string;

  /**
   * Defined in unittest_import_public.proto
   *
   * @generated from field: protobuf_unittest_import.PublicImportMessage optional_public_import_message = 26;
   */
  optionalPublicImportMessage?: PublicImportMessage;

  /**
   * @generated from field: proto3_lite_unittest.TestAllTypes.NestedMessage optional_lazy_message = 27;
   */
  optionalLazyMessage?: TestAllTypes_NestedMessage;

  /**
   * Repeated
   *
   * @generated from field: repeated int32 repeated_int32 = 31;
   */
  repeatedInt32: number[];

  /**
   * @generated from field: repeated int64 repeated_int64 = 32;
   */
  repeatedInt64: bigint[];

  /**
   * @generated from field: repeated uint32 repeated_uint32 = 33;
   */
  repeatedUint32: number[];

  /**
   * @generated from field: repeated uint64 repeated_uint64 = 34;
   */
  repeatedUint64: bigint[];

  /**
   * @generated from field: repeated sint32 repeated_sint32 = 35;
   */
  repeatedSint32: number[];

  /**
   * @generated from field: repeated sint64 repeated_sint64 = 36;
   */
  repeatedSint64: bigint[];

  /**
   * @generated from field: repeated fixed32 repeated_fixed32 = 37;
   */
  repeatedFixed32: number[];

  /**
   * @generated from field: repeated fixed64 repeated_fixed64 = 38;
   */
  repeatedFixed64: bigint[];

  /**
   * @generated from field: repeated sfixed32 repeated_sfixed32 = 39;
   */
  repeatedSfixed32: number[];

  /**
   * @generated from field: repeated sfixed64 repeated_sfixed64 = 40;
   */
  repeatedSfixed64: bigint[];

  /**
   * @generated from field: repeated float repeated_float = 41;
   */
  repeatedFloat: number[];

  /**
   * @generated from field: repeated double repeated_double = 42;
   */
  repeatedDouble: number[];

  /**
   * @generated from field: repeated bool repeated_bool = 43;
   */
  repeatedBool: boolean[];

  /**
   * @generated from field: repeated string repeated_string = 44;
   */
  repeatedString: string[];

  /**
   * @generated from field: repeated bytes repeated_bytes = 45;
   */
  repeatedBytes: Uint8Array[];

  /**
   * @generated from field: repeated proto3_lite_unittest.TestAllTypes.NestedMessage repeated_nested_message = 48;
   */
  repeatedNestedMessage: TestAllTypes_NestedMessage[];

  /**
   * @generated from field: repeated proto3_lite_unittest.ForeignMessage repeated_foreign_message = 49;
   */
  repeatedForeignMessage: ForeignMessage[];

  /**
   * @generated from field: repeated protobuf_unittest_import.ImportMessage repeated_import_message = 50;
   */
  repeatedImportMessage: ImportMessage[];

  /**
   * @generated from field: repeated proto3_lite_unittest.TestAllTypes.NestedEnum repeated_nested_enum = 51;
   */
  repeatedNestedEnum: TestAllTypes_NestedEnum[];

  /**
   * @generated from field: repeated proto3_lite_unittest.ForeignEnum repeated_foreign_enum = 52;
   */
  repeatedForeignEnum: ForeignEnum[];

  /**
   * @generated from field: repeated string repeated_string_piece = 54;
   */
  repeatedStringPiece: string[];

  /**
   * @generated from field: repeated string repeated_cord = 55;
   */
  repeatedCord: string[];

  /**
   * @generated from field: repeated proto3_lite_unittest.TestAllTypes.NestedMessage repeated_lazy_message = 57;
   */
  repeatedLazyMessage: TestAllTypes_NestedMessage[];

  /**
   * @generated from oneof proto3_lite_unittest.TestAllTypes.oneof_field
   */
  oneofField: {
    /**
     * @generated from field: uint32 oneof_uint32 = 111;
     */
    value: number;
    case: "oneofUint32";
  } | {
    /**
     * @generated from field: proto3_lite_unittest.TestAllTypes.NestedMessage oneof_nested_message = 112;
     */
    value: TestAllTypes_NestedMessage;
    case: "oneofNestedMessage";
  } | {
    /**
     * @generated from field: string oneof_string = 113;
     */
    value: string;
    case: "oneofString";
  } | {
    /**
     * @generated from field: bytes oneof_bytes = 114;
     */
    value: Uint8Array;
    case: "oneofBytes";
  } | { case: undefined; value?: undefined };
};

// Describes the message proto3_lite_unittest.TestAllTypes. Use `create(TestAllTypesDesc)` to create a new TestAllTypes.
export declare const TestAllTypesDesc: GenDescMessage<TestAllTypes>;

/**
 * @generated from message proto3_lite_unittest.TestAllTypes.NestedMessage
 */
export declare type TestAllTypes_NestedMessage = Message<"proto3_lite_unittest.TestAllTypes.NestedMessage"> & {
  /**
   * The field name "b" fails to compile in proto1 because it conflicts with
   * a local variable named "b" in one of the generated methods.  Doh.
   * This file needs to compile in proto1 to test backwards-compatibility.
   *
   * @generated from field: int32 bb = 1;
   */
  bb: number;
};

// Describes the message proto3_lite_unittest.TestAllTypes.NestedMessage. Use `create(TestAllTypes_NestedMessageDesc)` to create a new TestAllTypes_NestedMessage.
export declare const TestAllTypes_NestedMessageDesc: GenDescMessage<TestAllTypes_NestedMessage>;

/**
 * @generated from enum proto3_lite_unittest.TestAllTypes.NestedEnum
 */
export enum TestAllTypes_NestedEnum {
  /**
   * @generated from enum value: ZERO = 0;
   */
  ZERO = 0,

  /**
   * @generated from enum value: FOO = 1;
   */
  FOO = 1,

  /**
   * @generated from enum value: BAR = 2;
   */
  BAR = 2,

  /**
   * @generated from enum value: BAZ = 3;
   */
  BAZ = 3,

  /**
   * Intentionally negative.
   *
   * @generated from enum value: NEG = -1;
   */
  NEG = -1,
}

// Describes the enum proto3_lite_unittest.TestAllTypes.NestedEnum.
export declare const TestAllTypes_NestedEnumDesc: GenDescEnum<TestAllTypes_NestedEnum>;

/**
 * @generated from message proto3_lite_unittest.TestPackedTypes
 */
export declare type TestPackedTypes = Message<"proto3_lite_unittest.TestPackedTypes"> & {
  /**
   * @generated from field: repeated int32 packed_int32 = 90 [packed = true];
   */
  packedInt32: number[];

  /**
   * @generated from field: repeated int64 packed_int64 = 91 [packed = true];
   */
  packedInt64: bigint[];

  /**
   * @generated from field: repeated uint32 packed_uint32 = 92 [packed = true];
   */
  packedUint32: number[];

  /**
   * @generated from field: repeated uint64 packed_uint64 = 93 [packed = true];
   */
  packedUint64: bigint[];

  /**
   * @generated from field: repeated sint32 packed_sint32 = 94 [packed = true];
   */
  packedSint32: number[];

  /**
   * @generated from field: repeated sint64 packed_sint64 = 95 [packed = true];
   */
  packedSint64: bigint[];

  /**
   * @generated from field: repeated fixed32 packed_fixed32 = 96 [packed = true];
   */
  packedFixed32: number[];

  /**
   * @generated from field: repeated fixed64 packed_fixed64 = 97 [packed = true];
   */
  packedFixed64: bigint[];

  /**
   * @generated from field: repeated sfixed32 packed_sfixed32 = 98 [packed = true];
   */
  packedSfixed32: number[];

  /**
   * @generated from field: repeated sfixed64 packed_sfixed64 = 99 [packed = true];
   */
  packedSfixed64: bigint[];

  /**
   * @generated from field: repeated float packed_float = 100 [packed = true];
   */
  packedFloat: number[];

  /**
   * @generated from field: repeated double packed_double = 101 [packed = true];
   */
  packedDouble: number[];

  /**
   * @generated from field: repeated bool packed_bool = 102 [packed = true];
   */
  packedBool: boolean[];

  /**
   * @generated from field: repeated proto3_lite_unittest.ForeignEnum packed_enum = 103 [packed = true];
   */
  packedEnum: ForeignEnum[];
};

// Describes the message proto3_lite_unittest.TestPackedTypes. Use `create(TestPackedTypesDesc)` to create a new TestPackedTypes.
export declare const TestPackedTypesDesc: GenDescMessage<TestPackedTypes>;

/**
 * Explicitly set packed to false
 *
 * @generated from message proto3_lite_unittest.TestUnpackedTypes
 */
export declare type TestUnpackedTypes = Message<"proto3_lite_unittest.TestUnpackedTypes"> & {
  /**
   * @generated from field: repeated int32 repeated_int32 = 1 [packed = false];
   */
  repeatedInt32: number[];

  /**
   * @generated from field: repeated int64 repeated_int64 = 2 [packed = false];
   */
  repeatedInt64: bigint[];

  /**
   * @generated from field: repeated uint32 repeated_uint32 = 3 [packed = false];
   */
  repeatedUint32: number[];

  /**
   * @generated from field: repeated uint64 repeated_uint64 = 4 [packed = false];
   */
  repeatedUint64: bigint[];

  /**
   * @generated from field: repeated sint32 repeated_sint32 = 5 [packed = false];
   */
  repeatedSint32: number[];

  /**
   * @generated from field: repeated sint64 repeated_sint64 = 6 [packed = false];
   */
  repeatedSint64: bigint[];

  /**
   * @generated from field: repeated fixed32 repeated_fixed32 = 7 [packed = false];
   */
  repeatedFixed32: number[];

  /**
   * @generated from field: repeated fixed64 repeated_fixed64 = 8 [packed = false];
   */
  repeatedFixed64: bigint[];

  /**
   * @generated from field: repeated sfixed32 repeated_sfixed32 = 9 [packed = false];
   */
  repeatedSfixed32: number[];

  /**
   * @generated from field: repeated sfixed64 repeated_sfixed64 = 10 [packed = false];
   */
  repeatedSfixed64: bigint[];

  /**
   * @generated from field: repeated float repeated_float = 11 [packed = false];
   */
  repeatedFloat: number[];

  /**
   * @generated from field: repeated double repeated_double = 12 [packed = false];
   */
  repeatedDouble: number[];

  /**
   * @generated from field: repeated bool repeated_bool = 13 [packed = false];
   */
  repeatedBool: boolean[];

  /**
   * @generated from field: repeated proto3_lite_unittest.TestAllTypes.NestedEnum repeated_nested_enum = 14 [packed = false];
   */
  repeatedNestedEnum: TestAllTypes_NestedEnum[];
};

// Describes the message proto3_lite_unittest.TestUnpackedTypes. Use `create(TestUnpackedTypesDesc)` to create a new TestUnpackedTypes.
export declare const TestUnpackedTypesDesc: GenDescMessage<TestUnpackedTypes>;

/**
 * This proto includes a recursively nested message.
 *
 * @generated from message proto3_lite_unittest.NestedTestAllTypes
 */
export declare type NestedTestAllTypes = Message<"proto3_lite_unittest.NestedTestAllTypes"> & {
  /**
   * @generated from field: proto3_lite_unittest.NestedTestAllTypes child = 1;
   */
  child?: NestedTestAllTypes;

  /**
   * @generated from field: proto3_lite_unittest.TestAllTypes payload = 2;
   */
  payload?: TestAllTypes;
};

// Describes the message proto3_lite_unittest.NestedTestAllTypes. Use `create(NestedTestAllTypesDesc)` to create a new NestedTestAllTypes.
export declare const NestedTestAllTypesDesc: GenDescMessage<NestedTestAllTypes>;

/**
 * Define these after TestAllTypes to make sure the compiler can handle
 * that.
 *
 * @generated from message proto3_lite_unittest.ForeignMessage
 */
export declare type ForeignMessage = Message<"proto3_lite_unittest.ForeignMessage"> & {
  /**
   * @generated from field: int32 c = 1;
   */
  c: number;
};

// Describes the message proto3_lite_unittest.ForeignMessage. Use `create(ForeignMessageDesc)` to create a new ForeignMessage.
export declare const ForeignMessageDesc: GenDescMessage<ForeignMessage>;

/**
 * TestEmptyMessage is used to test behavior of unknown fields.
 *
 * @generated from message proto3_lite_unittest.TestEmptyMessage
 */
export declare type TestEmptyMessage = Message<"proto3_lite_unittest.TestEmptyMessage"> & {
};

// Describes the message proto3_lite_unittest.TestEmptyMessage. Use `create(TestEmptyMessageDesc)` to create a new TestEmptyMessage.
export declare const TestEmptyMessageDesc: GenDescMessage<TestEmptyMessage>;

/**
 * @generated from enum proto3_lite_unittest.ForeignEnum
 */
export enum ForeignEnum {
  /**
   * @generated from enum value: FOREIGN_ZERO = 0;
   */
  FOREIGN_ZERO = 0,

  /**
   * @generated from enum value: FOREIGN_FOO = 4;
   */
  FOREIGN_FOO = 4,

  /**
   * @generated from enum value: FOREIGN_BAR = 5;
   */
  FOREIGN_BAR = 5,

  /**
   * @generated from enum value: FOREIGN_BAZ = 6;
   */
  FOREIGN_BAZ = 6,
}

// Describes the enum proto3_lite_unittest.ForeignEnum.
export declare const ForeignEnumDesc: GenDescEnum<ForeignEnum>;

