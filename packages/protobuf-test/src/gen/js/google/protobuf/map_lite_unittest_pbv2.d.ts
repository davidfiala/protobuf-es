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
// @generated from file google/protobuf/map_lite_unittest.proto (package protobuf_unittest, syntax proto2)
/* eslint-disable */

import type { GenDescEnum, GenDescExtension, GenDescFile, GenDescMessage } from "@bufbuild/protobuf/next/codegenv1";
import type { Message } from "@bufbuild/protobuf/next";
import type { ForeignMessageLite, TestAllExtensionsLite, TestAllTypesLite } from "./unittest_lite_pbv2.js";

export declare const fileDesc_google_protobuf_map_lite_unittest: GenDescFile;

/**
 * @generated from message protobuf_unittest.TestMapLite
 */
export declare type TestMapLite = Message<"protobuf_unittest.TestMapLite"> & {
  /**
   * @generated from field: map<int32, int32> map_int32_int32 = 1;
   */
  mapInt32Int32: { [key: number]: number };

  /**
   * @generated from field: map<int64, int64> map_int64_int64 = 2;
   */
  mapInt64Int64: { [key: string]: bigint };

  /**
   * @generated from field: map<uint32, uint32> map_uint32_uint32 = 3;
   */
  mapUint32Uint32: { [key: number]: number };

  /**
   * @generated from field: map<uint64, uint64> map_uint64_uint64 = 4;
   */
  mapUint64Uint64: { [key: string]: bigint };

  /**
   * @generated from field: map<sint32, sint32> map_sint32_sint32 = 5;
   */
  mapSint32Sint32: { [key: number]: number };

  /**
   * @generated from field: map<sint64, sint64> map_sint64_sint64 = 6;
   */
  mapSint64Sint64: { [key: string]: bigint };

  /**
   * @generated from field: map<fixed32, fixed32> map_fixed32_fixed32 = 7;
   */
  mapFixed32Fixed32: { [key: number]: number };

  /**
   * @generated from field: map<fixed64, fixed64> map_fixed64_fixed64 = 8;
   */
  mapFixed64Fixed64: { [key: string]: bigint };

  /**
   * @generated from field: map<sfixed32, sfixed32> map_sfixed32_sfixed32 = 9;
   */
  mapSfixed32Sfixed32: { [key: number]: number };

  /**
   * @generated from field: map<sfixed64, sfixed64> map_sfixed64_sfixed64 = 10;
   */
  mapSfixed64Sfixed64: { [key: string]: bigint };

  /**
   * @generated from field: map<int32, float> map_int32_float = 11;
   */
  mapInt32Float: { [key: number]: number };

  /**
   * @generated from field: map<int32, double> map_int32_double = 12;
   */
  mapInt32Double: { [key: number]: number };

  /**
   * @generated from field: map<bool, bool> map_bool_bool = 13;
   */
  mapBoolBool: { [key: string]: boolean };

  /**
   * @generated from field: map<string, string> map_string_string = 14;
   */
  mapStringString: { [key: string]: string };

  /**
   * @generated from field: map<int32, bytes> map_int32_bytes = 15;
   */
  mapInt32Bytes: { [key: number]: Uint8Array };

  /**
   * @generated from field: map<int32, protobuf_unittest.MapEnumLite> map_int32_enum = 16;
   */
  mapInt32Enum: { [key: number]: MapEnumLite };

  /**
   * @generated from field: map<int32, protobuf_unittest.ForeignMessageLite> map_int32_foreign_message = 17;
   */
  mapInt32ForeignMessage: { [key: number]: ForeignMessageLite };

  /**
   * @generated from field: map<int32, int32> teboring = 18;
   */
  teboring: { [key: number]: number };
};

// Describes the message protobuf_unittest.TestMapLite. Use `create(TestMapLiteDesc)` to create a new TestMapLite.
export declare const TestMapLiteDesc: GenDescMessage<TestMapLite>;

/**
 * @generated from message protobuf_unittest.TestArenaMapLite
 */
export declare type TestArenaMapLite = Message<"protobuf_unittest.TestArenaMapLite"> & {
  /**
   * @generated from field: map<int32, int32> map_int32_int32 = 1;
   */
  mapInt32Int32: { [key: number]: number };

  /**
   * @generated from field: map<int64, int64> map_int64_int64 = 2;
   */
  mapInt64Int64: { [key: string]: bigint };

  /**
   * @generated from field: map<uint32, uint32> map_uint32_uint32 = 3;
   */
  mapUint32Uint32: { [key: number]: number };

  /**
   * @generated from field: map<uint64, uint64> map_uint64_uint64 = 4;
   */
  mapUint64Uint64: { [key: string]: bigint };

  /**
   * @generated from field: map<sint32, sint32> map_sint32_sint32 = 5;
   */
  mapSint32Sint32: { [key: number]: number };

  /**
   * @generated from field: map<sint64, sint64> map_sint64_sint64 = 6;
   */
  mapSint64Sint64: { [key: string]: bigint };

  /**
   * @generated from field: map<fixed32, fixed32> map_fixed32_fixed32 = 7;
   */
  mapFixed32Fixed32: { [key: number]: number };

  /**
   * @generated from field: map<fixed64, fixed64> map_fixed64_fixed64 = 8;
   */
  mapFixed64Fixed64: { [key: string]: bigint };

  /**
   * @generated from field: map<sfixed32, sfixed32> map_sfixed32_sfixed32 = 9;
   */
  mapSfixed32Sfixed32: { [key: number]: number };

  /**
   * @generated from field: map<sfixed64, sfixed64> map_sfixed64_sfixed64 = 10;
   */
  mapSfixed64Sfixed64: { [key: string]: bigint };

  /**
   * @generated from field: map<int32, float> map_int32_float = 11;
   */
  mapInt32Float: { [key: number]: number };

  /**
   * @generated from field: map<int32, double> map_int32_double = 12;
   */
  mapInt32Double: { [key: number]: number };

  /**
   * @generated from field: map<bool, bool> map_bool_bool = 13;
   */
  mapBoolBool: { [key: string]: boolean };

  /**
   * @generated from field: map<string, string> map_string_string = 14;
   */
  mapStringString: { [key: string]: string };

  /**
   * @generated from field: map<int32, bytes> map_int32_bytes = 15;
   */
  mapInt32Bytes: { [key: number]: Uint8Array };

  /**
   * @generated from field: map<int32, protobuf_unittest.MapEnumLite> map_int32_enum = 16;
   */
  mapInt32Enum: { [key: number]: MapEnumLite };

  /**
   * @generated from field: map<int32, protobuf_unittest.ForeignMessageArenaLite> map_int32_foreign_message = 17;
   */
  mapInt32ForeignMessage: { [key: number]: ForeignMessageArenaLite };
};

// Describes the message protobuf_unittest.TestArenaMapLite. Use `create(TestArenaMapLiteDesc)` to create a new TestArenaMapLite.
export declare const TestArenaMapLiteDesc: GenDescMessage<TestArenaMapLite>;

/**
 * Test embedded message with required fields
 *
 * @generated from message protobuf_unittest.TestRequiredMessageMapLite
 */
export declare type TestRequiredMessageMapLite = Message<"protobuf_unittest.TestRequiredMessageMapLite"> & {
  /**
   * @generated from field: map<int32, protobuf_unittest.TestRequiredLite> map_field = 1;
   */
  mapField: { [key: number]: TestRequiredLite };
};

// Describes the message protobuf_unittest.TestRequiredMessageMapLite. Use `create(TestRequiredMessageMapLiteDesc)` to create a new TestRequiredMessageMapLite.
export declare const TestRequiredMessageMapLiteDesc: GenDescMessage<TestRequiredMessageMapLite>;

/**
 * @generated from message protobuf_unittest.TestEnumMapLite
 */
export declare type TestEnumMapLite = Message<"protobuf_unittest.TestEnumMapLite"> & {
  /**
   * @generated from field: map<int32, protobuf_unittest.Proto2MapEnumLite> known_map_field = 101;
   */
  knownMapField: { [key: number]: Proto2MapEnumLite };

  /**
   * @generated from field: map<int32, protobuf_unittest.Proto2MapEnumLite> unknown_map_field = 102;
   */
  unknownMapField: { [key: number]: Proto2MapEnumLite };
};

// Describes the message protobuf_unittest.TestEnumMapLite. Use `create(TestEnumMapLiteDesc)` to create a new TestEnumMapLite.
export declare const TestEnumMapLiteDesc: GenDescMessage<TestEnumMapLite>;

/**
 * @generated from message protobuf_unittest.TestEnumMapPlusExtraLite
 */
export declare type TestEnumMapPlusExtraLite = Message<"protobuf_unittest.TestEnumMapPlusExtraLite"> & {
  /**
   * @generated from field: map<int32, protobuf_unittest.Proto2MapEnumPlusExtraLite> known_map_field = 101;
   */
  knownMapField: { [key: number]: Proto2MapEnumPlusExtraLite };

  /**
   * @generated from field: map<int32, protobuf_unittest.Proto2MapEnumPlusExtraLite> unknown_map_field = 102;
   */
  unknownMapField: { [key: number]: Proto2MapEnumPlusExtraLite };
};

// Describes the message protobuf_unittest.TestEnumMapPlusExtraLite. Use `create(TestEnumMapPlusExtraLiteDesc)` to create a new TestEnumMapPlusExtraLite.
export declare const TestEnumMapPlusExtraLiteDesc: GenDescMessage<TestEnumMapPlusExtraLite>;

/**
 * @generated from message protobuf_unittest.TestMessageMapLite
 */
export declare type TestMessageMapLite = Message<"protobuf_unittest.TestMessageMapLite"> & {
  /**
   * @generated from field: map<int32, protobuf_unittest.TestAllTypesLite> map_int32_message = 1;
   */
  mapInt32Message: { [key: number]: TestAllTypesLite };
};

// Describes the message protobuf_unittest.TestMessageMapLite. Use `create(TestMessageMapLiteDesc)` to create a new TestMessageMapLite.
export declare const TestMessageMapLiteDesc: GenDescMessage<TestMessageMapLite>;

/**
 * @generated from message protobuf_unittest.TestRequiredLite
 */
export declare type TestRequiredLite = Message<"protobuf_unittest.TestRequiredLite"> & {
  /**
   * @generated from field: required int32 a = 1;
   */
  a: number;

  /**
   * @generated from field: required int32 b = 2;
   */
  b: number;

  /**
   * @generated from field: required int32 c = 3;
   */
  c: number;
};

// Describes the message protobuf_unittest.TestRequiredLite. Use `create(TestRequiredLiteDesc)` to create a new TestRequiredLite.
export declare const TestRequiredLiteDesc: GenDescMessage<TestRequiredLite>;

/**
 * @generated from extension: optional protobuf_unittest.TestRequiredLite single = 1000;
 */
export declare const TestRequiredLite_single: GenDescExtension<TestAllExtensionsLite, TestRequiredLite>;

/**
 * @generated from message protobuf_unittest.ForeignMessageArenaLite
 */
export declare type ForeignMessageArenaLite = Message<"protobuf_unittest.ForeignMessageArenaLite"> & {
  /**
   * @generated from field: optional int32 c = 1;
   */
  c: number;
};

// Describes the message protobuf_unittest.ForeignMessageArenaLite. Use `create(ForeignMessageArenaLiteDesc)` to create a new ForeignMessageArenaLite.
export declare const ForeignMessageArenaLiteDesc: GenDescMessage<ForeignMessageArenaLite>;

/**
 * @generated from enum protobuf_unittest.Proto2MapEnumLite
 */
export enum Proto2MapEnumLite {
  /**
   * @generated from enum value: PROTO2_MAP_ENUM_FOO_LITE = 0;
   */
  PROTO2_MAP_ENUM_FOO_LITE = 0,

  /**
   * @generated from enum value: PROTO2_MAP_ENUM_BAR_LITE = 1;
   */
  PROTO2_MAP_ENUM_BAR_LITE = 1,

  /**
   * @generated from enum value: PROTO2_MAP_ENUM_BAZ_LITE = 2;
   */
  PROTO2_MAP_ENUM_BAZ_LITE = 2,
}

// Describes the enum protobuf_unittest.Proto2MapEnumLite.
export declare const Proto2MapEnumLiteDesc: GenDescEnum<Proto2MapEnumLite>;

/**
 * @generated from enum protobuf_unittest.Proto2MapEnumPlusExtraLite
 */
export enum Proto2MapEnumPlusExtraLite {
  /**
   * @generated from enum value: E_PROTO2_MAP_ENUM_FOO_LITE = 0;
   */
  E_PROTO2_MAP_ENUM_FOO_LITE = 0,

  /**
   * @generated from enum value: E_PROTO2_MAP_ENUM_BAR_LITE = 1;
   */
  E_PROTO2_MAP_ENUM_BAR_LITE = 1,

  /**
   * @generated from enum value: E_PROTO2_MAP_ENUM_BAZ_LITE = 2;
   */
  E_PROTO2_MAP_ENUM_BAZ_LITE = 2,

  /**
   * @generated from enum value: E_PROTO2_MAP_ENUM_EXTRA_LITE = 3;
   */
  E_PROTO2_MAP_ENUM_EXTRA_LITE = 3,
}

// Describes the enum protobuf_unittest.Proto2MapEnumPlusExtraLite.
export declare const Proto2MapEnumPlusExtraLiteDesc: GenDescEnum<Proto2MapEnumPlusExtraLite>;

/**
 * @generated from enum protobuf_unittest.MapEnumLite
 */
export enum MapEnumLite {
  /**
   * @generated from enum value: MAP_ENUM_FOO_LITE = 0;
   */
  MAP_ENUM_FOO_LITE = 0,

  /**
   * @generated from enum value: MAP_ENUM_BAR_LITE = 1;
   */
  MAP_ENUM_BAR_LITE = 1,

  /**
   * @generated from enum value: MAP_ENUM_BAZ_LITE = 2;
   */
  MAP_ENUM_BAZ_LITE = 2,
}

// Describes the enum protobuf_unittest.MapEnumLite.
export declare const MapEnumLiteDesc: GenDescEnum<MapEnumLite>;

