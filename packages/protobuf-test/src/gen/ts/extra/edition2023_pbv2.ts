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

// @generated by protoc-gen-es-next v1.8.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file extra/edition2023.proto (package spec, edition 2023)
/* eslint-disable */

import type { DescFile } from "@bufbuild/protobuf";
import type { GenDescEnum, GenDescMessage } from "@bufbuild/protobuf/next/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { UInt32Value } from "@bufbuild/protobuf/next/wkt";
import { fileDesc_google_protobuf_wrappers } from "@bufbuild/protobuf/next/wkt";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_extra_edition2023: DescFile = /*@__PURE__*/
  fileDesc("ChdleHRyYS9lZGl0aW9uMjAyMy5wcm90bxIEc3BlYyLuJgoSRWRpdGlvbjIwMjNNZXNzYWdlEh4KFWV4cGxpY2l0X3N0cmluZ19maWVsZBitAiABKAkSHQoUZXhwbGljaXRfYnl0ZXNfZmllbGQYrgIgASgMEh0KFGV4cGxpY2l0X2ludDMyX2ZpZWxkGK8CIAEoBRIdChRleHBsaWNpdF9pbnQ2NF9maWVsZBiwAiABKAMSKwoeZXhwbGljaXRfaW50NjRfanNfbnVtYmVyX2ZpZWxkGLECIAEoA0ICMAISKwoeZXhwbGljaXRfaW50NjRfanNfc3RyaW5nX2ZpZWxkGLICIAEoA0ICMAESHQoUZXhwbGljaXRfZmxvYXRfZmllbGQYswIgASgCEhwKE2V4cGxpY2l0X2Jvb2xfZmllbGQYtAIgASgIEjwKGGV4cGxpY2l0X2VudW1fb3Blbl9maWVsZBi1AiABKA4yGS5zcGVjLkVkaXRpb24yMDIzRW51bU9wZW4SQAoaZXhwbGljaXRfZW51bV9jbG9zZWRfZmllbGQYtgIgASgOMhsuc3BlYy5FZGl0aW9uMjAyM0VudW1DbG9zZWQSOQoWZXhwbGljaXRfbWVzc2FnZV9maWVsZBi3AiABKAsyGC5zcGVjLkVkaXRpb24yMDIzTWVzc2FnZRJKCiBleHBsaWNpdF9tZXNzYWdlX2RlbGltaXRlZF9maWVsZBi4AiABKAsyGC5zcGVjLkVkaXRpb24yMDIzTWVzc2FnZUIFqgECKAISRAodZXhwbGljaXRfd3JhcHBlZF91aW50MzJfZmllbGQYuQIgASgLMhwuZ29vZ2xlLnByb3RvYnVmLlVJbnQzMlZhbHVlEiUKFWltcGxpY2l0X3N0cmluZ19maWVsZBjJASABKAlCBaoBAggCEiQKFGltcGxpY2l0X2J5dGVzX2ZpZWxkGMoBIAEoDEIFqgECCAISJAoUaW1wbGljaXRfaW50MzJfZmllbGQYywEgASgFQgWqAQIIAhIkChRpbXBsaWNpdF9pbnQ2NF9maWVsZBjMASABKANCBaoBAggCEjAKHmltcGxpY2l0X2ludDY0X2pzX251bWJlcl9maWVsZBjNASABKANCBzACqgECCAISMAoeaW1wbGljaXRfaW50NjRfanNfc3RyaW5nX2ZpZWxkGM4BIAEoA0IHMAGqAQIIAhIkChRpbXBsaWNpdF9mbG9hdF9maWVsZBjPASABKAJCBaoBAggCEiMKE2ltcGxpY2l0X2Jvb2xfZmllbGQY0AEgASgIQgWqAQIIAhJDChhpbXBsaWNpdF9lbnVtX29wZW5fZmllbGQY0QEgASgOMhkuc3BlYy5FZGl0aW9uMjAyM0VudW1PcGVuQgWqAQIIAhIkChVyZXF1aXJlZF9zdHJpbmdfZmllbGQYASABKAlCBaoBAggDEiMKFHJlcXVpcmVkX2J5dGVzX2ZpZWxkGAIgASgMQgWqAQIIAxIjChRyZXF1aXJlZF9pbnQzMl9maWVsZBgDIAEoBUIFqgECCAMSIwoUcmVxdWlyZWRfaW50NjRfZmllbGQYBCABKANCBaoBAggDEi8KHnJlcXVpcmVkX2ludDY0X2pzX251bWJlcl9maWVsZBgFIAEoA0IHMAKqAQIIAxIvCh5yZXF1aXJlZF9pbnQ2NF9qc19zdHJpbmdfZmllbGQYBiABKANCBzABqgECCAMSIwoUcmVxdWlyZWRfZmxvYXRfZmllbGQYByABKAJCBaoBAggDEiIKE3JlcXVpcmVkX2Jvb2xfZmllbGQYCCABKAhCBaoBAggDEkIKGHJlcXVpcmVkX2VudW1fb3Blbl9maWVsZBgJIAEoDjIZLnNwZWMuRWRpdGlvbjIwMjNFbnVtT3BlbkIFqgECCAMSRgoacmVxdWlyZWRfZW51bV9jbG9zZWRfZmllbGQYCiABKA4yGy5zcGVjLkVkaXRpb24yMDIzRW51bUNsb3NlZEIFqgECCAMSRQoWcmVxdWlyZWRfbWVzc2FnZV9maWVsZBgLIAEoCzIeLnNwZWMuRWRpdGlvbjIwMjNNZXNzYWdlLkNoaWxkQgWqAQIIAxJRCiByZXF1aXJlZF9tZXNzYWdlX2RlbGltaXRlZF9maWVsZBgMIAEoCzIeLnNwZWMuRWRpdGlvbjIwMjNNZXNzYWdlLkNoaWxkQgeqAQQIAygCEkoKHXJlcXVpcmVkX3dyYXBwZWRfdWludDMyX2ZpZWxkGA0gASgLMhwuZ29vZ2xlLnByb3RvYnVmLlVJbnQzMlZhbHVlQgWqAQIIAxI5Ch1yZXF1aXJlZF9kZWZhdWx0X3N0cmluZ19maWVsZBhlIAEoCToLaGVsbG8gIiAqLyBCBaoBAggDElIKHHJlcXVpcmVkX2RlZmF1bHRfYnl0ZXNfZmllbGQYZiABKAw6JVwwMDB4XFx4XCJ4XCdBQUFBQUFcMDEwXDAxNFxuXHJcdFwwMTNCBaoBAggDEjAKHHJlcXVpcmVkX2RlZmF1bHRfaW50MzJfZmllbGQYZyABKAU6AzEyOEIFqgECCAMSMQoccmVxdWlyZWRfZGVmYXVsdF9pbnQ2NF9maWVsZBhoIAEoAzoELTI1NkIFqgECCAMSPQomcmVxdWlyZWRfZGVmYXVsdF9pbnQ2NF9qc19udW1iZXJfZmllbGQYaSABKAM6BC0yNTZCBzACqgECCAMSPQomcmVxdWlyZWRfZGVmYXVsdF9pbnQ2NF9qc19zdHJpbmdfZmllbGQYaiABKAM6BC0yNTZCBzABqgECCAMSNAoccmVxdWlyZWRfZGVmYXVsdF9mbG9hdF9maWVsZBhrIAEoAjoHLTUxMi4xM0IFqgECCAMSMAobcmVxdWlyZWRfZGVmYXVsdF9ib29sX2ZpZWxkGGwgASgIOgR0cnVlQgWqAQIIAxJkCiByZXF1aXJlZF9kZWZhdWx0X2VudW1fb3Blbl9maWVsZBhtIAEoDjIZLnNwZWMuRWRpdGlvbjIwMjNFbnVtT3BlbjoYRURJVElPTl8yMDIzX0VOVU1fT1BFTl9BQgWqAQIIAxJqCiJyZXF1aXJlZF9kZWZhdWx0X2VudW1fY2xvc2VkX2ZpZWxkGG4gASgOMhsuc3BlYy5FZGl0aW9uMjAyM0VudW1DbG9zZWQ6GkVESVRJT05fMjAyM19FTlVNX0NMT1NFRF9BQgWqAQIIAxIeChVyZXBlYXRlZF9zdHJpbmdfZmllbGQYkQMgAygJEh0KFHJlcGVhdGVkX2J5dGVzX2ZpZWxkGJIDIAMoDBIdChRyZXBlYXRlZF9pbnQzMl9maWVsZBiTAyADKAUSHQoUcmVwZWF0ZWRfaW50NjRfZmllbGQYlAMgAygDEisKHnJlcGVhdGVkX2ludDY0X2pzX251bWJlcl9maWVsZBiVAyADKANCAjACEisKHnJlcGVhdGVkX2ludDY0X2pzX3N0cmluZ19maWVsZBiWAyADKANCAjABEh0KFHJlcGVhdGVkX2Zsb2F0X2ZpZWxkGJcDIAMoAhIcChNyZXBlYXRlZF9ib29sX2ZpZWxkGJgDIAMoCBI8ChhyZXBlYXRlZF9lbnVtX29wZW5fZmllbGQYmQMgAygOMhkuc3BlYy5FZGl0aW9uMjAyM0VudW1PcGVuEkAKGnJlcGVhdGVkX2VudW1fY2xvc2VkX2ZpZWxkGJoDIAMoDjIbLnNwZWMuRWRpdGlvbjIwMjNFbnVtQ2xvc2VkEjkKFnJlcGVhdGVkX21lc3NhZ2VfZmllbGQYmwMgAygLMhguc3BlYy5FZGl0aW9uMjAyM01lc3NhZ2USSgogcmVwZWF0ZWRfbWVzc2FnZV9kZWxpbWl0ZWRfZmllbGQYnAMgAygLMhguc3BlYy5FZGl0aW9uMjAyM01lc3NhZ2VCBaoBAigCEkQKHXJlcGVhdGVkX3dyYXBwZWRfdWludDMyX2ZpZWxkGJ0DIAMoCzIcLmdvb2dsZS5wcm90b2J1Zi5VSW50MzJWYWx1ZRIjChNwYWNrZWRfZG91YmxlX2ZpZWxkGJ4DIAMoAUIFqgECGAESIwoTcGFja2VkX3VpbnQzMl9maWVsZBifAyADKA1CBaoBAhgBEiMKE3BhY2tlZF91aW50NjRfZmllbGQYoAMgAygEQgWqAQIYARIlChV1bnBhY2tlZF9kb3VibGVfZmllbGQYoQMgAygBQgWqAQIYAhIlChV1bnBhY2tlZF91aW50MzJfZmllbGQYogMgAygNQgWqAQIYAhIlChV1bnBhY2tlZF91aW50NjRfZmllbGQYowMgAygEQgWqAQIYAhIdChJvbmVvZl9zdHJpbmdfZmllbGQY9QMgASgJSAASHAoRb25lb2ZfYnl0ZXNfZmllbGQY9gMgASgMSAASHAoRb25lb2ZfaW50MzJfZmllbGQY9wMgASgFSAASHAoRb25lb2ZfaW50NjRfZmllbGQY+AMgASgDSAASKgobb25lb2ZfaW50NjRfanNfbnVtYmVyX2ZpZWxkGPkDIAEoA0ICMAJIABIqChtvbmVvZl9pbnQ2NF9qc19zdHJpbmdfZmllbGQY+gMgASgDQgIwAUgAEhwKEW9uZW9mX2Zsb2F0X2ZpZWxkGPsDIAEoAkgAEhsKEG9uZW9mX2Jvb2xfZmllbGQY/AMgASgISAASOwoVb25lb2ZfZW51bV9vcGVuX2ZpZWxkGP0DIAEoDjIZLnNwZWMuRWRpdGlvbjIwMjNFbnVtT3BlbkgAEj8KF29uZW9mX2VudW1fY2xvc2VkX2ZpZWxkGP4DIAEoDjIbLnNwZWMuRWRpdGlvbjIwMjNFbnVtQ2xvc2VkSAASOAoTb25lb2ZfbWVzc2FnZV9maWVsZBj/AyABKAsyGC5zcGVjLkVkaXRpb24yMDIzTWVzc2FnZUgAEkkKHW9uZW9mX21lc3NhZ2VfZGVsaW1pdGVkX2ZpZWxkGIAEIAEoCzIYLnNwZWMuRWRpdGlvbjIwMjNNZXNzYWdlQgWqAQIoAkgAEkMKGm9uZW9mX3dyYXBwZWRfdWludDMyX2ZpZWxkGIEEIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5VSW50MzJWYWx1ZUgAElQKF21hcF9zdHJpbmdfc3RyaW5nX2ZpZWxkGNkEIAMoCzIyLnNwZWMuRWRpdGlvbjIwMjNNZXNzYWdlLk1hcFN0cmluZ1N0cmluZ0ZpZWxkRW50cnkSUAoVbWFwX2ludDMyX2ludDMyX2ZpZWxkGNoEIAMoCzIwLnNwZWMuRWRpdGlvbjIwMjNNZXNzYWdlLk1hcEludDMySW50MzJGaWVsZEVudHJ5EkwKE21hcF9ib29sX2Jvb2xfZmllbGQY2wQgAygLMi4uc3BlYy5FZGl0aW9uMjAyM01lc3NhZ2UuTWFwQm9vbEJvb2xGaWVsZEVudHJ5ElAKFW1hcF9pbnQ2NF9pbnQ2NF9maWVsZBjcBCADKAsyMC5zcGVjLkVkaXRpb24yMDIzTWVzc2FnZS5NYXBJbnQ2NEludDY0RmllbGRFbnRyeRJXChltYXBfaW50MzJfZW51bV9vcGVuX2ZpZWxkGN0EIAMoCzIzLnNwZWMuRWRpdGlvbjIwMjNNZXNzYWdlLk1hcEludDMyRW51bU9wZW5GaWVsZEVudHJ5ElQKF21hcF9pbnQzMl9tZXNzYWdlX2ZpZWxkGN8EIAMoCzIyLnNwZWMuRWRpdGlvbjIwMjNNZXNzYWdlLk1hcEludDMyTWVzc2FnZUZpZWxkRW50cnkSYQoebWFwX2ludDMyX3dyYXBwZWRfdWludDMyX2ZpZWxkGOAEIAMoCzI4LnNwZWMuRWRpdGlvbjIwMjNNZXNzYWdlLk1hcEludDMyV3JhcHBlZFVpbnQzMkZpZWxkRW50cnkaOwoZTWFwU3RyaW5nU3RyaW5nRmllbGRFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBGjkKF01hcEludDMySW50MzJGaWVsZEVudHJ5EgsKA2tleRgBIAEoBRINCgV2YWx1ZRgCIAEoBToCOAEaNwoVTWFwQm9vbEJvb2xGaWVsZEVudHJ5EgsKA2tleRgBIAEoCBINCgV2YWx1ZRgCIAEoCDoCOAEaOQoXTWFwSW50NjRJbnQ2NEZpZWxkRW50cnkSCwoDa2V5GAEgASgDEg0KBXZhbHVlGAIgASgDOgI4ARpXChpNYXBJbnQzMkVudW1PcGVuRmllbGRFbnRyeRILCgNrZXkYASABKAUSKAoFdmFsdWUYAiABKA4yGS5zcGVjLkVkaXRpb24yMDIzRW51bU9wZW46AjgBGlUKGU1hcEludDMyTWVzc2FnZUZpZWxkRW50cnkSCwoDa2V5GAEgASgFEicKBXZhbHVlGAIgASgLMhguc3BlYy5FZGl0aW9uMjAyM01lc3NhZ2U6AjgBGl8KH01hcEludDMyV3JhcHBlZFVpbnQzMkZpZWxkRW50cnkSCwoDa2V5GAEgASgFEisKBXZhbHVlGAIgASgLMhwuZ29vZ2xlLnByb3RvYnVmLlVJbnQzMlZhbHVlOgI4ARoSCgVDaGlsZBIJCgFmGAEgASgFQggKBmVpdGhlcipbChNFZGl0aW9uMjAyM0VudW1PcGVuEiYKIkVESVRJT05fMjAyM19FTlVNX09QRU5fVU5TUEVDSUZJRUQQABIcChhFRElUSU9OXzIwMjNfRU5VTV9PUEVOX0EQASo9ChVFZGl0aW9uMjAyM0VudW1DbG9zZWQSHgoaRURJVElPTl8yMDIzX0VOVU1fQ0xPU0VEX0EQARoEOgIQAmIIZWRpdGlvbnNw6Ac", [fileDesc_google_protobuf_wrappers]);

/**
 * Note: We do not exhaust all field types
 *
 * @generated from message spec.Edition2023Message
 */
export type Edition2023Message = Message<"spec.Edition2023Message"> & {
  /**
   * @generated from field: string explicit_string_field = 301;
   */
  explicitStringField: string;

  /**
   * @generated from field: bytes explicit_bytes_field = 302;
   */
  explicitBytesField: Uint8Array;

  /**
   * @generated from field: int32 explicit_int32_field = 303;
   */
  explicitInt32Field: number;

  /**
   * @generated from field: int64 explicit_int64_field = 304;
   */
  explicitInt64Field: bigint;

  /**
   * @generated from field: int64 explicit_int64_js_number_field = 305 [jstype = JS_NUMBER];
   */
  explicitInt64JsNumberField: bigint;

  /**
   * @generated from field: int64 explicit_int64_js_string_field = 306 [jstype = JS_STRING];
   */
  explicitInt64JsStringField: string;

  /**
   * @generated from field: float explicit_float_field = 307;
   */
  explicitFloatField: number;

  /**
   * @generated from field: bool explicit_bool_field = 308;
   */
  explicitBoolField: boolean;

  /**
   * @generated from field: spec.Edition2023EnumOpen explicit_enum_open_field = 309;
   */
  explicitEnumOpenField: Edition2023EnumOpen;

  /**
   * @generated from field: spec.Edition2023EnumClosed explicit_enum_closed_field = 310;
   */
  explicitEnumClosedField: Edition2023EnumClosed;

  /**
   * @generated from field: spec.Edition2023Message explicit_message_field = 311;
   */
  explicitMessageField?: Edition2023Message;

  /**
   * @generated from field: spec.Edition2023Message explicit_message_delimited_field = 312;
   */
  explicitMessageDelimitedField?: Edition2023Message;

  /**
   * @generated from field: google.protobuf.UInt32Value explicit_wrapped_uint32_field = 313;
   */
  explicitWrappedUint32Field?: number;

  /**
   * @generated from field: string implicit_string_field = 201;
   */
  implicitStringField: string;

  /**
   * @generated from field: bytes implicit_bytes_field = 202;
   */
  implicitBytesField: Uint8Array;

  /**
   * @generated from field: int32 implicit_int32_field = 203;
   */
  implicitInt32Field: number;

  /**
   * @generated from field: int64 implicit_int64_field = 204;
   */
  implicitInt64Field: bigint;

  /**
   * @generated from field: int64 implicit_int64_js_number_field = 205 [jstype = JS_NUMBER];
   */
  implicitInt64JsNumberField: bigint;

  /**
   * @generated from field: int64 implicit_int64_js_string_field = 206 [jstype = JS_STRING];
   */
  implicitInt64JsStringField: string;

  /**
   * @generated from field: float implicit_float_field = 207;
   */
  implicitFloatField: number;

  /**
   * @generated from field: bool implicit_bool_field = 208;
   */
  implicitBoolField: boolean;

  /**
   * @generated from field: spec.Edition2023EnumOpen implicit_enum_open_field = 209;
   */
  implicitEnumOpenField: Edition2023EnumOpen;

  /**
   * @generated from field: string required_string_field = 1;
   */
  requiredStringField: string;

  /**
   * @generated from field: bytes required_bytes_field = 2;
   */
  requiredBytesField: Uint8Array;

  /**
   * @generated from field: int32 required_int32_field = 3;
   */
  requiredInt32Field: number;

  /**
   * @generated from field: int64 required_int64_field = 4;
   */
  requiredInt64Field: bigint;

  /**
   * @generated from field: int64 required_int64_js_number_field = 5 [jstype = JS_NUMBER];
   */
  requiredInt64JsNumberField: bigint;

  /**
   * @generated from field: int64 required_int64_js_string_field = 6 [jstype = JS_STRING];
   */
  requiredInt64JsStringField: string;

  /**
   * @generated from field: float required_float_field = 7;
   */
  requiredFloatField: number;

  /**
   * @generated from field: bool required_bool_field = 8;
   */
  requiredBoolField: boolean;

  /**
   * @generated from field: spec.Edition2023EnumOpen required_enum_open_field = 9;
   */
  requiredEnumOpenField: Edition2023EnumOpen;

  /**
   * @generated from field: spec.Edition2023EnumClosed required_enum_closed_field = 10;
   */
  requiredEnumClosedField: Edition2023EnumClosed;

  /**
   * @generated from field: spec.Edition2023Message.Child required_message_field = 11;
   */
  requiredMessageField?: Edition2023Message_Child;

  /**
   * @generated from field: spec.Edition2023Message.Child required_message_delimited_field = 12;
   */
  requiredMessageDelimitedField?: Edition2023Message_Child;

  /**
   * @generated from field: google.protobuf.UInt32Value required_wrapped_uint32_field = 13;
   */
  requiredWrappedUint32Field?: number;

  /**
   * @generated from field: string required_default_string_field = 101 [default = "hello \" *\/ "];
   */
  requiredDefaultStringField: string;

  /**
   * @generated from field: bytes required_default_bytes_field = 102 [default = "\000x\\x\\"x\'AAAAAA\010\014\n\r\t\013"];
   */
  requiredDefaultBytesField: Uint8Array;

  /**
   * @generated from field: int32 required_default_int32_field = 103 [default = 128];
   */
  requiredDefaultInt32Field: number;

  /**
   * @generated from field: int64 required_default_int64_field = 104 [default = -256];
   */
  requiredDefaultInt64Field: bigint;

  /**
   * @generated from field: int64 required_default_int64_js_number_field = 105 [default = -256, jstype = JS_NUMBER];
   */
  requiredDefaultInt64JsNumberField: bigint;

  /**
   * @generated from field: int64 required_default_int64_js_string_field = 106 [default = -256, jstype = JS_STRING];
   */
  requiredDefaultInt64JsStringField: string;

  /**
   * @generated from field: float required_default_float_field = 107 [default = -512.13];
   */
  requiredDefaultFloatField: number;

  /**
   * @generated from field: bool required_default_bool_field = 108 [default = true];
   */
  requiredDefaultBoolField: boolean;

  /**
   * @generated from field: spec.Edition2023EnumOpen required_default_enum_open_field = 109 [default = EDITION_2023_ENUM_OPEN_A];
   */
  requiredDefaultEnumOpenField: Edition2023EnumOpen;

  /**
   * @generated from field: spec.Edition2023EnumClosed required_default_enum_closed_field = 110 [default = EDITION_2023_ENUM_CLOSED_A];
   */
  requiredDefaultEnumClosedField: Edition2023EnumClosed;

  /**
   * @generated from field: repeated string repeated_string_field = 401;
   */
  repeatedStringField: string[];

  /**
   * @generated from field: repeated bytes repeated_bytes_field = 402;
   */
  repeatedBytesField: Uint8Array[];

  /**
   * @generated from field: repeated int32 repeated_int32_field = 403;
   */
  repeatedInt32Field: number[];

  /**
   * @generated from field: repeated int64 repeated_int64_field = 404;
   */
  repeatedInt64Field: bigint[];

  /**
   * @generated from field: repeated int64 repeated_int64_js_number_field = 405 [jstype = JS_NUMBER];
   */
  repeatedInt64JsNumberField: bigint[];

  /**
   * @generated from field: repeated int64 repeated_int64_js_string_field = 406 [jstype = JS_STRING];
   */
  repeatedInt64JsStringField: string[];

  /**
   * @generated from field: repeated float repeated_float_field = 407;
   */
  repeatedFloatField: number[];

  /**
   * @generated from field: repeated bool repeated_bool_field = 408;
   */
  repeatedBoolField: boolean[];

  /**
   * @generated from field: repeated spec.Edition2023EnumOpen repeated_enum_open_field = 409;
   */
  repeatedEnumOpenField: Edition2023EnumOpen[];

  /**
   * @generated from field: repeated spec.Edition2023EnumClosed repeated_enum_closed_field = 410;
   */
  repeatedEnumClosedField: Edition2023EnumClosed[];

  /**
   * @generated from field: repeated spec.Edition2023Message repeated_message_field = 411;
   */
  repeatedMessageField: Edition2023Message[];

  /**
   * @generated from field: repeated spec.Edition2023Message repeated_message_delimited_field = 412;
   */
  repeatedMessageDelimitedField: Edition2023Message[];

  /**
   * @generated from field: repeated google.protobuf.UInt32Value repeated_wrapped_uint32_field = 413;
   */
  repeatedWrappedUint32Field: UInt32Value[];

  /**
   * @generated from field: repeated double packed_double_field = 414;
   */
  packedDoubleField: number[];

  /**
   * @generated from field: repeated uint32 packed_uint32_field = 415;
   */
  packedUint32Field: number[];

  /**
   * @generated from field: repeated uint64 packed_uint64_field = 416;
   */
  packedUint64Field: bigint[];

  /**
   * @generated from field: repeated double unpacked_double_field = 417;
   */
  unpackedDoubleField: number[];

  /**
   * @generated from field: repeated uint32 unpacked_uint32_field = 418;
   */
  unpackedUint32Field: number[];

  /**
   * @generated from field: repeated uint64 unpacked_uint64_field = 419;
   */
  unpackedUint64Field: bigint[];

  /**
   * @generated from oneof spec.Edition2023Message.either
   */
  either: {
    /**
     * @generated from field: string oneof_string_field = 501;
     */
    value: string;
    case: "oneofStringField";
  } | {
    /**
     * @generated from field: bytes oneof_bytes_field = 502;
     */
    value: Uint8Array;
    case: "oneofBytesField";
  } | {
    /**
     * @generated from field: int32 oneof_int32_field = 503;
     */
    value: number;
    case: "oneofInt32Field";
  } | {
    /**
     * @generated from field: int64 oneof_int64_field = 504;
     */
    value: bigint;
    case: "oneofInt64Field";
  } | {
    /**
     * @generated from field: int64 oneof_int64_js_number_field = 505 [jstype = JS_NUMBER];
     */
    value: bigint;
    case: "oneofInt64JsNumberField";
  } | {
    /**
     * @generated from field: int64 oneof_int64_js_string_field = 506 [jstype = JS_STRING];
     */
    value: string;
    case: "oneofInt64JsStringField";
  } | {
    /**
     * @generated from field: float oneof_float_field = 507;
     */
    value: number;
    case: "oneofFloatField";
  } | {
    /**
     * @generated from field: bool oneof_bool_field = 508;
     */
    value: boolean;
    case: "oneofBoolField";
  } | {
    /**
     * @generated from field: spec.Edition2023EnumOpen oneof_enum_open_field = 509;
     */
    value: Edition2023EnumOpen;
    case: "oneofEnumOpenField";
  } | {
    /**
     * @generated from field: spec.Edition2023EnumClosed oneof_enum_closed_field = 510;
     */
    value: Edition2023EnumClosed;
    case: "oneofEnumClosedField";
  } | {
    /**
     * @generated from field: spec.Edition2023Message oneof_message_field = 511;
     */
    value: Edition2023Message;
    case: "oneofMessageField";
  } | {
    /**
     * @generated from field: spec.Edition2023Message oneof_message_delimited_field = 512;
     */
    value: Edition2023Message;
    case: "oneofMessageDelimitedField";
  } | {
    /**
     * @generated from field: google.protobuf.UInt32Value oneof_wrapped_uint32_field = 513;
     */
    value: UInt32Value;
    case: "oneofWrappedUint32Field";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: map<string, string> map_string_string_field = 601;
   */
  mapStringStringField: { [key: string]: string };

  /**
   * @generated from field: map<int32, int32> map_int32_int32_field = 602;
   */
  mapInt32Int32Field: { [key: number]: number };

  /**
   * @generated from field: map<bool, bool> map_bool_bool_field = 603;
   */
  mapBoolBoolField: { [key: string]: boolean };

  /**
   * @generated from field: map<int64, int64> map_int64_int64_field = 604;
   */
  mapInt64Int64Field: { [key: string]: bigint };

  /**
   * @generated from field: map<int32, spec.Edition2023EnumOpen> map_int32_enum_open_field = 605;
   */
  mapInt32EnumOpenField: { [key: number]: Edition2023EnumOpen };

  /**
   * @generated from field: map<int32, spec.Edition2023Message> map_int32_message_field = 607;
   */
  mapInt32MessageField: { [key: number]: Edition2023Message };

  /**
   * @generated from field: map<int32, google.protobuf.UInt32Value> map_int32_wrapped_uint32_field = 608;
   */
  mapInt32WrappedUint32Field: { [key: number]: UInt32Value };
};

// Describes the message spec.Edition2023Message.
// Use `create(Edition2023MessageDesc)` to create a new Edition2023Message.
export const Edition2023MessageDesc: GenDescMessage<Edition2023Message> = /*@__PURE__*/
  messageDesc(fileDesc_extra_edition2023, 0);

/**
 * message for use in required fields above to avoid circular reference
 *
 * @generated from message spec.Edition2023Message.Child
 */
export type Edition2023Message_Child = Message<"spec.Edition2023Message.Child"> & {
  /**
   * @generated from field: int32 f = 1;
   */
  f: number;
};

// Describes the message spec.Edition2023Message.Child.
// Use `create(Edition2023Message_ChildDesc)` to create a new Edition2023Message_Child.
export const Edition2023Message_ChildDesc: GenDescMessage<Edition2023Message_Child> = /*@__PURE__*/
  messageDesc(fileDesc_extra_edition2023, 0, 0);

/**
 * @generated from enum spec.Edition2023EnumOpen
 */
export enum Edition2023EnumOpen {
  /**
   * @generated from enum value: EDITION_2023_ENUM_OPEN_UNSPECIFIED = 0;
   */
  EDITION_2023_ENUM_OPEN_UNSPECIFIED = 0,

  /**
   * @generated from enum value: EDITION_2023_ENUM_OPEN_A = 1;
   */
  EDITION_2023_ENUM_OPEN_A = 1,
}

// Describes the enum spec.Edition2023EnumOpen.
export const Edition2023EnumOpenDesc: GenDescEnum<Edition2023EnumOpen> = /*@__PURE__*/
  enumDesc(fileDesc_extra_edition2023, 0);

/**
 * @generated from enum spec.Edition2023EnumClosed
 */
export enum Edition2023EnumClosed {
  /**
   * @generated from enum value: EDITION_2023_ENUM_CLOSED_A = 1;
   */
  EDITION_2023_ENUM_CLOSED_A = 1,
}

// Describes the enum spec.Edition2023EnumClosed.
export const Edition2023EnumClosedDesc: GenDescEnum<Edition2023EnumClosed> = /*@__PURE__*/
  enumDesc(fileDesc_extra_edition2023, 1);

