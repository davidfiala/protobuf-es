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

// @generated by protoc-gen-es v2.2.0 with parameter "target=ts,import_extension=js"
// @generated from file google/protobuf/unittest_well_known_types.proto (package protobuf_unittest, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any, Api, BoolValue, BytesValue, DoubleValue, Duration, Empty, FieldMask, FloatValue, Int32Value, Int64Value, SourceContext, StringValue, Timestamp, UInt32Value, UInt64Value, Value } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any, file_google_protobuf_api, file_google_protobuf_duration, file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_source_context, file_google_protobuf_struct, file_google_protobuf_timestamp, file_google_protobuf_wrappers } from "@bufbuild/protobuf/wkt";
import type { Type } from "./type_pb.js";
import { file_google_protobuf_type } from "./type_pb.js";
import type { JsonObject, Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/protobuf/unittest_well_known_types.proto.
 */
export const file_google_protobuf_unittest_well_known_types: GenFile = /*@__PURE__*/
  fileDesc("Ci9nb29nbGUvcHJvdG9idWYvdW5pdHRlc3Rfd2VsbF9rbm93bl90eXBlcy5wcm90bxIRcHJvdG9idWZfdW5pdHRlc3QivgcKElRlc3RXZWxsS25vd25UeXBlcxInCglhbnlfZmllbGQYASABKAsyFC5nb29nbGUucHJvdG9idWYuQW55EicKCWFwaV9maWVsZBgCIAEoCzIULmdvb2dsZS5wcm90b2J1Zi5BcGkSMQoOZHVyYXRpb25fZmllbGQYAyABKAsyGS5nb29nbGUucHJvdG9idWYuRHVyYXRpb24SKwoLZW1wdHlfZmllbGQYBCABKAsyFi5nb29nbGUucHJvdG9idWYuRW1wdHkSNAoQZmllbGRfbWFza19maWVsZBgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE1hc2sSPAoUc291cmNlX2NvbnRleHRfZmllbGQYBiABKAsyHi5nb29nbGUucHJvdG9idWYuU291cmNlQ29udGV4dBItCgxzdHJ1Y3RfZmllbGQYByABKAsyFy5nb29nbGUucHJvdG9idWYuU3RydWN0EjMKD3RpbWVzdGFtcF9maWVsZBgIIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASKQoKdHlwZV9maWVsZBgJIAEoCzIVLmdvb2dsZS5wcm90b2J1Zi5UeXBlEjIKDGRvdWJsZV9maWVsZBgKIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5Eb3VibGVWYWx1ZRIwCgtmbG9hdF9maWVsZBgLIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5GbG9hdFZhbHVlEjAKC2ludDY0X2ZpZWxkGAwgASgLMhsuZ29vZ2xlLnByb3RvYnVmLkludDY0VmFsdWUSMgoMdWludDY0X2ZpZWxkGA0gASgLMhwuZ29vZ2xlLnByb3RvYnVmLlVJbnQ2NFZhbHVlEjAKC2ludDMyX2ZpZWxkGA4gASgLMhsuZ29vZ2xlLnByb3RvYnVmLkludDMyVmFsdWUSMgoMdWludDMyX2ZpZWxkGA8gASgLMhwuZ29vZ2xlLnByb3RvYnVmLlVJbnQzMlZhbHVlEi4KCmJvb2xfZmllbGQYECABKAsyGi5nb29nbGUucHJvdG9idWYuQm9vbFZhbHVlEjIKDHN0cmluZ19maWVsZBgRIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5TdHJpbmdWYWx1ZRIwCgtieXRlc19maWVsZBgSIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5CeXRlc1ZhbHVlEisKC3ZhbHVlX2ZpZWxkGBMgASgLMhYuZ29vZ2xlLnByb3RvYnVmLlZhbHVlIpUHChZSZXBlYXRlZFdlbGxLbm93blR5cGVzEicKCWFueV9maWVsZBgBIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSJwoJYXBpX2ZpZWxkGAIgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFwaRIxCg5kdXJhdGlvbl9maWVsZBgDIAMoCzIZLmdvb2dsZS5wcm90b2J1Zi5EdXJhdGlvbhIrCgtlbXB0eV9maWVsZBgEIAMoCzIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eRI0ChBmaWVsZF9tYXNrX2ZpZWxkGAUgAygLMhouZ29vZ2xlLnByb3RvYnVmLkZpZWxkTWFzaxI8ChRzb3VyY2VfY29udGV4dF9maWVsZBgGIAMoCzIeLmdvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb250ZXh0Ei0KDHN0cnVjdF9maWVsZBgHIAMoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QSMwoPdGltZXN0YW1wX2ZpZWxkGAggAygLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIpCgp0eXBlX2ZpZWxkGAkgAygLMhUuZ29vZ2xlLnByb3RvYnVmLlR5cGUSMgoMZG91YmxlX2ZpZWxkGAogAygLMhwuZ29vZ2xlLnByb3RvYnVmLkRvdWJsZVZhbHVlEjAKC2Zsb2F0X2ZpZWxkGAsgAygLMhsuZ29vZ2xlLnByb3RvYnVmLkZsb2F0VmFsdWUSMAoLaW50NjRfZmllbGQYDCADKAsyGy5nb29nbGUucHJvdG9idWYuSW50NjRWYWx1ZRIyCgx1aW50NjRfZmllbGQYDSADKAsyHC5nb29nbGUucHJvdG9idWYuVUludDY0VmFsdWUSMAoLaW50MzJfZmllbGQYDiADKAsyGy5nb29nbGUucHJvdG9idWYuSW50MzJWYWx1ZRIyCgx1aW50MzJfZmllbGQYDyADKAsyHC5nb29nbGUucHJvdG9idWYuVUludDMyVmFsdWUSLgoKYm9vbF9maWVsZBgQIAMoCzIaLmdvb2dsZS5wcm90b2J1Zi5Cb29sVmFsdWUSMgoMc3RyaW5nX2ZpZWxkGBEgAygLMhwuZ29vZ2xlLnByb3RvYnVmLlN0cmluZ1ZhbHVlEjAKC2J5dGVzX2ZpZWxkGBIgAygLMhsuZ29vZ2xlLnByb3RvYnVmLkJ5dGVzVmFsdWUixQcKE09uZW9mV2VsbEtub3duVHlwZXMSKQoJYW55X2ZpZWxkGAEgASgLMhQuZ29vZ2xlLnByb3RvYnVmLkFueUgAEikKCWFwaV9maWVsZBgCIAEoCzIULmdvb2dsZS5wcm90b2J1Zi5BcGlIABIzCg5kdXJhdGlvbl9maWVsZBgDIAEoCzIZLmdvb2dsZS5wcm90b2J1Zi5EdXJhdGlvbkgAEi0KC2VtcHR5X2ZpZWxkGAQgASgLMhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5SAASNgoQZmllbGRfbWFza19maWVsZBgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE1hc2tIABI+ChRzb3VyY2VfY29udGV4dF9maWVsZBgGIAEoCzIeLmdvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb250ZXh0SAASLwoMc3RydWN0X2ZpZWxkGAcgASgLMhcuZ29vZ2xlLnByb3RvYnVmLlN0cnVjdEgAEjUKD3RpbWVzdGFtcF9maWVsZBgIIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBIABIrCgp0eXBlX2ZpZWxkGAkgASgLMhUuZ29vZ2xlLnByb3RvYnVmLlR5cGVIABI0Cgxkb3VibGVfZmllbGQYCiABKAsyHC5nb29nbGUucHJvdG9idWYuRG91YmxlVmFsdWVIABIyCgtmbG9hdF9maWVsZBgLIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5GbG9hdFZhbHVlSAASMgoLaW50NjRfZmllbGQYDCABKAsyGy5nb29nbGUucHJvdG9idWYuSW50NjRWYWx1ZUgAEjQKDHVpbnQ2NF9maWVsZBgNIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5VSW50NjRWYWx1ZUgAEjIKC2ludDMyX2ZpZWxkGA4gASgLMhsuZ29vZ2xlLnByb3RvYnVmLkludDMyVmFsdWVIABI0Cgx1aW50MzJfZmllbGQYDyABKAsyHC5nb29nbGUucHJvdG9idWYuVUludDMyVmFsdWVIABIwCgpib29sX2ZpZWxkGBAgASgLMhouZ29vZ2xlLnByb3RvYnVmLkJvb2xWYWx1ZUgAEjQKDHN0cmluZ19maWVsZBgRIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5TdHJpbmdWYWx1ZUgAEjIKC2J5dGVzX2ZpZWxkGBIgASgLMhsuZ29vZ2xlLnByb3RvYnVmLkJ5dGVzVmFsdWVIAEINCgtvbmVvZl9maWVsZCKWFgoRTWFwV2VsbEtub3duVHlwZXMSRQoJYW55X2ZpZWxkGAEgAygLMjIucHJvdG9idWZfdW5pdHRlc3QuTWFwV2VsbEtub3duVHlwZXMuQW55RmllbGRFbnRyeRJFCglhcGlfZmllbGQYAiADKAsyMi5wcm90b2J1Zl91bml0dGVzdC5NYXBXZWxsS25vd25UeXBlcy5BcGlGaWVsZEVudHJ5Ek8KDmR1cmF0aW9uX2ZpZWxkGAMgAygLMjcucHJvdG9idWZfdW5pdHRlc3QuTWFwV2VsbEtub3duVHlwZXMuRHVyYXRpb25GaWVsZEVudHJ5EkkKC2VtcHR5X2ZpZWxkGAQgAygLMjQucHJvdG9idWZfdW5pdHRlc3QuTWFwV2VsbEtub3duVHlwZXMuRW1wdHlGaWVsZEVudHJ5ElIKEGZpZWxkX21hc2tfZmllbGQYBSADKAsyOC5wcm90b2J1Zl91bml0dGVzdC5NYXBXZWxsS25vd25UeXBlcy5GaWVsZE1hc2tGaWVsZEVudHJ5EloKFHNvdXJjZV9jb250ZXh0X2ZpZWxkGAYgAygLMjwucHJvdG9idWZfdW5pdHRlc3QuTWFwV2VsbEtub3duVHlwZXMuU291cmNlQ29udGV4dEZpZWxkRW50cnkSSwoMc3RydWN0X2ZpZWxkGAcgAygLMjUucHJvdG9idWZfdW5pdHRlc3QuTWFwV2VsbEtub3duVHlwZXMuU3RydWN0RmllbGRFbnRyeRJRCg90aW1lc3RhbXBfZmllbGQYCCADKAsyOC5wcm90b2J1Zl91bml0dGVzdC5NYXBXZWxsS25vd25UeXBlcy5UaW1lc3RhbXBGaWVsZEVudHJ5EkcKCnR5cGVfZmllbGQYCSADKAsyMy5wcm90b2J1Zl91bml0dGVzdC5NYXBXZWxsS25vd25UeXBlcy5UeXBlRmllbGRFbnRyeRJLCgxkb3VibGVfZmllbGQYCiADKAsyNS5wcm90b2J1Zl91bml0dGVzdC5NYXBXZWxsS25vd25UeXBlcy5Eb3VibGVGaWVsZEVudHJ5EkkKC2Zsb2F0X2ZpZWxkGAsgAygLMjQucHJvdG9idWZfdW5pdHRlc3QuTWFwV2VsbEtub3duVHlwZXMuRmxvYXRGaWVsZEVudHJ5EkkKC2ludDY0X2ZpZWxkGAwgAygLMjQucHJvdG9idWZfdW5pdHRlc3QuTWFwV2VsbEtub3duVHlwZXMuSW50NjRGaWVsZEVudHJ5EksKDHVpbnQ2NF9maWVsZBgNIAMoCzI1LnByb3RvYnVmX3VuaXR0ZXN0Lk1hcFdlbGxLbm93blR5cGVzLlVpbnQ2NEZpZWxkRW50cnkSSQoLaW50MzJfZmllbGQYDiADKAsyNC5wcm90b2J1Zl91bml0dGVzdC5NYXBXZWxsS25vd25UeXBlcy5JbnQzMkZpZWxkRW50cnkSSwoMdWludDMyX2ZpZWxkGA8gAygLMjUucHJvdG9idWZfdW5pdHRlc3QuTWFwV2VsbEtub3duVHlwZXMuVWludDMyRmllbGRFbnRyeRJHCgpib29sX2ZpZWxkGBAgAygLMjMucHJvdG9idWZfdW5pdHRlc3QuTWFwV2VsbEtub3duVHlwZXMuQm9vbEZpZWxkRW50cnkSSwoMc3RyaW5nX2ZpZWxkGBEgAygLMjUucHJvdG9idWZfdW5pdHRlc3QuTWFwV2VsbEtub3duVHlwZXMuU3RyaW5nRmllbGRFbnRyeRJJCgtieXRlc19maWVsZBgSIAMoCzI0LnByb3RvYnVmX3VuaXR0ZXN0Lk1hcFdlbGxLbm93blR5cGVzLkJ5dGVzRmllbGRFbnRyeRpFCg1BbnlGaWVsZEVudHJ5EgsKA2tleRgBIAEoBRIjCgV2YWx1ZRgCIAEoCzIULmdvb2dsZS5wcm90b2J1Zi5Bbnk6AjgBGkUKDUFwaUZpZWxkRW50cnkSCwoDa2V5GAEgASgFEiMKBXZhbHVlGAIgASgLMhQuZ29vZ2xlLnByb3RvYnVmLkFwaToCOAEaTwoSRHVyYXRpb25GaWVsZEVudHJ5EgsKA2tleRgBIAEoBRIoCgV2YWx1ZRgCIAEoCzIZLmdvb2dsZS5wcm90b2J1Zi5EdXJhdGlvbjoCOAEaSQoPRW1wdHlGaWVsZEVudHJ5EgsKA2tleRgBIAEoBRIlCgV2YWx1ZRgCIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eToCOAEaUQoTRmllbGRNYXNrRmllbGRFbnRyeRILCgNrZXkYASABKAUSKQoFdmFsdWUYAiABKAsyGi5nb29nbGUucHJvdG9idWYuRmllbGRNYXNrOgI4ARpZChdTb3VyY2VDb250ZXh0RmllbGRFbnRyeRILCgNrZXkYASABKAUSLQoFdmFsdWUYAiABKAsyHi5nb29nbGUucHJvdG9idWYuU291cmNlQ29udGV4dDoCOAEaSwoQU3RydWN0RmllbGRFbnRyeRILCgNrZXkYASABKAUSJgoFdmFsdWUYAiABKAsyFy5nb29nbGUucHJvdG9idWYuU3RydWN0OgI4ARpRChNUaW1lc3RhbXBGaWVsZEVudHJ5EgsKA2tleRgBIAEoBRIpCgV2YWx1ZRgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXA6AjgBGkcKDlR5cGVGaWVsZEVudHJ5EgsKA2tleRgBIAEoBRIkCgV2YWx1ZRgCIAEoCzIVLmdvb2dsZS5wcm90b2J1Zi5UeXBlOgI4ARpQChBEb3VibGVGaWVsZEVudHJ5EgsKA2tleRgBIAEoBRIrCgV2YWx1ZRgCIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5Eb3VibGVWYWx1ZToCOAEaTgoPRmxvYXRGaWVsZEVudHJ5EgsKA2tleRgBIAEoBRIqCgV2YWx1ZRgCIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5GbG9hdFZhbHVlOgI4ARpOCg9JbnQ2NEZpZWxkRW50cnkSCwoDa2V5GAEgASgFEioKBXZhbHVlGAIgASgLMhsuZ29vZ2xlLnByb3RvYnVmLkludDY0VmFsdWU6AjgBGlAKEFVpbnQ2NEZpZWxkRW50cnkSCwoDa2V5GAEgASgFEisKBXZhbHVlGAIgASgLMhwuZ29vZ2xlLnByb3RvYnVmLlVJbnQ2NFZhbHVlOgI4ARpOCg9JbnQzMkZpZWxkRW50cnkSCwoDa2V5GAEgASgFEioKBXZhbHVlGAIgASgLMhsuZ29vZ2xlLnByb3RvYnVmLkludDMyVmFsdWU6AjgBGlAKEFVpbnQzMkZpZWxkRW50cnkSCwoDa2V5GAEgASgFEisKBXZhbHVlGAIgASgLMhwuZ29vZ2xlLnByb3RvYnVmLlVJbnQzMlZhbHVlOgI4ARpMCg5Cb29sRmllbGRFbnRyeRILCgNrZXkYASABKAUSKQoFdmFsdWUYAiABKAsyGi5nb29nbGUucHJvdG9idWYuQm9vbFZhbHVlOgI4ARpQChBTdHJpbmdGaWVsZEVudHJ5EgsKA2tleRgBIAEoBRIrCgV2YWx1ZRgCIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5TdHJpbmdWYWx1ZToCOAEaTgoPQnl0ZXNGaWVsZEVudHJ5EgsKA2tleRgBIAEoBRIqCgV2YWx1ZRgCIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5CeXRlc1ZhbHVlOgI4AUI5Chhjb20uZ29vZ2xlLnByb3RvYnVmLnRlc3RQAaoCGkdvb2dsZS5Qcm90b2J1Zi5UZXN0UHJvdG9zYgZwcm90bzM", [file_google_protobuf_any, file_google_protobuf_api, file_google_protobuf_duration, file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_source_context, file_google_protobuf_struct, file_google_protobuf_timestamp, file_google_protobuf_type, file_google_protobuf_wrappers]);

/**
 * Test that we can include all well-known types.
 * Each wrapper type is included separately, as languages
 * map handle different wrappers in different ways.
 *
 * @generated from message protobuf_unittest.TestWellKnownTypes
 */
export type TestWellKnownTypes = Message<"protobuf_unittest.TestWellKnownTypes"> & {
  /**
   * @generated from field: google.protobuf.Any any_field = 1;
   */
  anyField?: Any;

  /**
   * @generated from field: google.protobuf.Api api_field = 2;
   */
  apiField?: Api;

  /**
   * @generated from field: google.protobuf.Duration duration_field = 3;
   */
  durationField?: Duration;

  /**
   * @generated from field: google.protobuf.Empty empty_field = 4;
   */
  emptyField?: Empty;

  /**
   * @generated from field: google.protobuf.FieldMask field_mask_field = 5;
   */
  fieldMaskField?: FieldMask;

  /**
   * @generated from field: google.protobuf.SourceContext source_context_field = 6;
   */
  sourceContextField?: SourceContext;

  /**
   * @generated from field: google.protobuf.Struct struct_field = 7;
   */
  structField?: JsonObject;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp_field = 8;
   */
  timestampField?: Timestamp;

  /**
   * @generated from field: google.protobuf.Type type_field = 9;
   */
  typeField?: Type;

  /**
   * @generated from field: google.protobuf.DoubleValue double_field = 10;
   */
  doubleField?: number;

  /**
   * @generated from field: google.protobuf.FloatValue float_field = 11;
   */
  floatField?: number;

  /**
   * @generated from field: google.protobuf.Int64Value int64_field = 12;
   */
  int64Field?: bigint;

  /**
   * @generated from field: google.protobuf.UInt64Value uint64_field = 13;
   */
  uint64Field?: bigint;

  /**
   * @generated from field: google.protobuf.Int32Value int32_field = 14;
   */
  int32Field?: number;

  /**
   * @generated from field: google.protobuf.UInt32Value uint32_field = 15;
   */
  uint32Field?: number;

  /**
   * @generated from field: google.protobuf.BoolValue bool_field = 16;
   */
  boolField?: boolean;

  /**
   * @generated from field: google.protobuf.StringValue string_field = 17;
   */
  stringField?: string;

  /**
   * @generated from field: google.protobuf.BytesValue bytes_field = 18;
   */
  bytesField?: Uint8Array;

  /**
   * Part of struct, but useful to be able to test separately
   *
   * @generated from field: google.protobuf.Value value_field = 19;
   */
  valueField?: Value;
};

/**
 * Describes the message protobuf_unittest.TestWellKnownTypes.
 * Use `create(TestWellKnownTypesSchema)` to create a new message.
 */
export const TestWellKnownTypesSchema: GenMessage<TestWellKnownTypes> = /*@__PURE__*/
  messageDesc(file_google_protobuf_unittest_well_known_types, 0);

/**
 * A repeated field for each well-known type.
 *
 * @generated from message protobuf_unittest.RepeatedWellKnownTypes
 */
export type RepeatedWellKnownTypes = Message<"protobuf_unittest.RepeatedWellKnownTypes"> & {
  /**
   * @generated from field: repeated google.protobuf.Any any_field = 1;
   */
  anyField: Any[];

  /**
   * @generated from field: repeated google.protobuf.Api api_field = 2;
   */
  apiField: Api[];

  /**
   * @generated from field: repeated google.protobuf.Duration duration_field = 3;
   */
  durationField: Duration[];

  /**
   * @generated from field: repeated google.protobuf.Empty empty_field = 4;
   */
  emptyField: Empty[];

  /**
   * @generated from field: repeated google.protobuf.FieldMask field_mask_field = 5;
   */
  fieldMaskField: FieldMask[];

  /**
   * @generated from field: repeated google.protobuf.SourceContext source_context_field = 6;
   */
  sourceContextField: SourceContext[];

  /**
   * @generated from field: repeated google.protobuf.Struct struct_field = 7;
   */
  structField: JsonObject[];

  /**
   * @generated from field: repeated google.protobuf.Timestamp timestamp_field = 8;
   */
  timestampField: Timestamp[];

  /**
   * @generated from field: repeated google.protobuf.Type type_field = 9;
   */
  typeField: Type[];

  /**
   * These don't actually make a lot of sense, but they're not prohibited...
   *
   * @generated from field: repeated google.protobuf.DoubleValue double_field = 10;
   */
  doubleField: DoubleValue[];

  /**
   * @generated from field: repeated google.protobuf.FloatValue float_field = 11;
   */
  floatField: FloatValue[];

  /**
   * @generated from field: repeated google.protobuf.Int64Value int64_field = 12;
   */
  int64Field: Int64Value[];

  /**
   * @generated from field: repeated google.protobuf.UInt64Value uint64_field = 13;
   */
  uint64Field: UInt64Value[];

  /**
   * @generated from field: repeated google.protobuf.Int32Value int32_field = 14;
   */
  int32Field: Int32Value[];

  /**
   * @generated from field: repeated google.protobuf.UInt32Value uint32_field = 15;
   */
  uint32Field: UInt32Value[];

  /**
   * @generated from field: repeated google.protobuf.BoolValue bool_field = 16;
   */
  boolField: BoolValue[];

  /**
   * @generated from field: repeated google.protobuf.StringValue string_field = 17;
   */
  stringField: StringValue[];

  /**
   * @generated from field: repeated google.protobuf.BytesValue bytes_field = 18;
   */
  bytesField: BytesValue[];
};

/**
 * Describes the message protobuf_unittest.RepeatedWellKnownTypes.
 * Use `create(RepeatedWellKnownTypesSchema)` to create a new message.
 */
export const RepeatedWellKnownTypesSchema: GenMessage<RepeatedWellKnownTypes> = /*@__PURE__*/
  messageDesc(file_google_protobuf_unittest_well_known_types, 1);

/**
 * @generated from message protobuf_unittest.OneofWellKnownTypes
 */
export type OneofWellKnownTypes = Message<"protobuf_unittest.OneofWellKnownTypes"> & {
  /**
   * @generated from oneof protobuf_unittest.OneofWellKnownTypes.oneof_field
   */
  oneofField: {
    /**
     * @generated from field: google.protobuf.Any any_field = 1;
     */
    value: Any;
    case: "anyField";
  } | {
    /**
     * @generated from field: google.protobuf.Api api_field = 2;
     */
    value: Api;
    case: "apiField";
  } | {
    /**
     * @generated from field: google.protobuf.Duration duration_field = 3;
     */
    value: Duration;
    case: "durationField";
  } | {
    /**
     * @generated from field: google.protobuf.Empty empty_field = 4;
     */
    value: Empty;
    case: "emptyField";
  } | {
    /**
     * @generated from field: google.protobuf.FieldMask field_mask_field = 5;
     */
    value: FieldMask;
    case: "fieldMaskField";
  } | {
    /**
     * @generated from field: google.protobuf.SourceContext source_context_field = 6;
     */
    value: SourceContext;
    case: "sourceContextField";
  } | {
    /**
     * @generated from field: google.protobuf.Struct struct_field = 7;
     */
    value: JsonObject;
    case: "structField";
  } | {
    /**
     * @generated from field: google.protobuf.Timestamp timestamp_field = 8;
     */
    value: Timestamp;
    case: "timestampField";
  } | {
    /**
     * @generated from field: google.protobuf.Type type_field = 9;
     */
    value: Type;
    case: "typeField";
  } | {
    /**
     * @generated from field: google.protobuf.DoubleValue double_field = 10;
     */
    value: DoubleValue;
    case: "doubleField";
  } | {
    /**
     * @generated from field: google.protobuf.FloatValue float_field = 11;
     */
    value: FloatValue;
    case: "floatField";
  } | {
    /**
     * @generated from field: google.protobuf.Int64Value int64_field = 12;
     */
    value: Int64Value;
    case: "int64Field";
  } | {
    /**
     * @generated from field: google.protobuf.UInt64Value uint64_field = 13;
     */
    value: UInt64Value;
    case: "uint64Field";
  } | {
    /**
     * @generated from field: google.protobuf.Int32Value int32_field = 14;
     */
    value: Int32Value;
    case: "int32Field";
  } | {
    /**
     * @generated from field: google.protobuf.UInt32Value uint32_field = 15;
     */
    value: UInt32Value;
    case: "uint32Field";
  } | {
    /**
     * @generated from field: google.protobuf.BoolValue bool_field = 16;
     */
    value: BoolValue;
    case: "boolField";
  } | {
    /**
     * @generated from field: google.protobuf.StringValue string_field = 17;
     */
    value: StringValue;
    case: "stringField";
  } | {
    /**
     * @generated from field: google.protobuf.BytesValue bytes_field = 18;
     */
    value: BytesValue;
    case: "bytesField";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message protobuf_unittest.OneofWellKnownTypes.
 * Use `create(OneofWellKnownTypesSchema)` to create a new message.
 */
export const OneofWellKnownTypesSchema: GenMessage<OneofWellKnownTypes> = /*@__PURE__*/
  messageDesc(file_google_protobuf_unittest_well_known_types, 2);

/**
 * A map field for each well-known type. We only
 * need to worry about the value part of the map being the
 * well-known types, as messages can't be map keys.
 *
 * @generated from message protobuf_unittest.MapWellKnownTypes
 */
export type MapWellKnownTypes = Message<"protobuf_unittest.MapWellKnownTypes"> & {
  /**
   * @generated from field: map<int32, google.protobuf.Any> any_field = 1;
   */
  anyField: { [key: number]: Any };

  /**
   * @generated from field: map<int32, google.protobuf.Api> api_field = 2;
   */
  apiField: { [key: number]: Api };

  /**
   * @generated from field: map<int32, google.protobuf.Duration> duration_field = 3;
   */
  durationField: { [key: number]: Duration };

  /**
   * @generated from field: map<int32, google.protobuf.Empty> empty_field = 4;
   */
  emptyField: { [key: number]: Empty };

  /**
   * @generated from field: map<int32, google.protobuf.FieldMask> field_mask_field = 5;
   */
  fieldMaskField: { [key: number]: FieldMask };

  /**
   * @generated from field: map<int32, google.protobuf.SourceContext> source_context_field = 6;
   */
  sourceContextField: { [key: number]: SourceContext };

  /**
   * @generated from field: map<int32, google.protobuf.Struct> struct_field = 7;
   */
  structField: { [key: number]: JsonObject };

  /**
   * @generated from field: map<int32, google.protobuf.Timestamp> timestamp_field = 8;
   */
  timestampField: { [key: number]: Timestamp };

  /**
   * @generated from field: map<int32, google.protobuf.Type> type_field = 9;
   */
  typeField: { [key: number]: Type };

  /**
   * @generated from field: map<int32, google.protobuf.DoubleValue> double_field = 10;
   */
  doubleField: { [key: number]: DoubleValue };

  /**
   * @generated from field: map<int32, google.protobuf.FloatValue> float_field = 11;
   */
  floatField: { [key: number]: FloatValue };

  /**
   * @generated from field: map<int32, google.protobuf.Int64Value> int64_field = 12;
   */
  int64Field: { [key: number]: Int64Value };

  /**
   * @generated from field: map<int32, google.protobuf.UInt64Value> uint64_field = 13;
   */
  uint64Field: { [key: number]: UInt64Value };

  /**
   * @generated from field: map<int32, google.protobuf.Int32Value> int32_field = 14;
   */
  int32Field: { [key: number]: Int32Value };

  /**
   * @generated from field: map<int32, google.protobuf.UInt32Value> uint32_field = 15;
   */
  uint32Field: { [key: number]: UInt32Value };

  /**
   * @generated from field: map<int32, google.protobuf.BoolValue> bool_field = 16;
   */
  boolField: { [key: number]: BoolValue };

  /**
   * @generated from field: map<int32, google.protobuf.StringValue> string_field = 17;
   */
  stringField: { [key: number]: StringValue };

  /**
   * @generated from field: map<int32, google.protobuf.BytesValue> bytes_field = 18;
   */
  bytesField: { [key: number]: BytesValue };
};

/**
 * Describes the message protobuf_unittest.MapWellKnownTypes.
 * Use `create(MapWellKnownTypesSchema)` to create a new message.
 */
export const MapWellKnownTypesSchema: GenMessage<MapWellKnownTypes> = /*@__PURE__*/
  messageDesc(file_google_protobuf_unittest_well_known_types, 3);

