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

// @generated by protoc-gen-es v2.0.0-beta.3 with parameter "target=js+dts,import_extension=js,json_types=true"
// @generated from file extra/json_types.proto (package spec, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_google_protobuf_any, file_google_protobuf_duration, file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_struct, file_google_protobuf_timestamp, file_google_protobuf_wrappers } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file extra/json_types.proto.
 */
export const file_extra_json_types = /*@__PURE__*/
  fileDesc("ChZleHRyYS9qc29uX3R5cGVzLnByb3RvEgRzcGVjIu4KChBKc29uVHlwZXNNZXNzYWdlEi4KCmJvb2xfZmllbGQYASABKAhSGmJvb2xlYW5GaWVsZFdpdGhDdXN0b21OYW1lEhQKDGRvdWJsZV9maWVsZBgCIAEoARITCgtieXRlc19maWVsZBgDIAEoDBITCgtpbnQ2NF9maWVsZBgEIAEoAxImCgplbnVtX2ZpZWxkGAUgASgOMhIuc3BlYy5Kc29uVHlwZUVudW0SLQoNbWVzc2FnZV9maWVsZBgGIAEoCzIWLnNwZWMuSnNvblR5cGVzTWVzc2FnZRInCglhbnlfZmllbGQYByABKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKDmR1cmF0aW9uX2ZpZWxkGAggASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uEisKC2VtcHR5X2ZpZWxkGAkgASgLMhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5EjQKEGZpZWxkX21hc2tfZmllbGQYCiABKAsyGi5nb29nbGUucHJvdG9idWYuRmllbGRNYXNrEi0KDHN0cnVjdF9maWVsZBgLIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QSKwoLdmFsdWVfZmllbGQYDCABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWUSNAoQbGlzdF92YWx1ZV9maWVsZBgNIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5MaXN0VmFsdWUSNAoQbnVsbF92YWx1ZV9maWVsZBgOIAEoDjIaLmdvb2dsZS5wcm90b2J1Zi5OdWxsVmFsdWUSMwoPdGltZXN0YW1wX2ZpZWxkGA8gASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBI6ChR3cmFwcGVkX2RvdWJsZV9maWVsZBgQIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5Eb3VibGVWYWx1ZRI4ChN3cmFwcGVkX2Zsb2F0X2ZpZWxkGBEgASgLMhsuZ29vZ2xlLnByb3RvYnVmLkZsb2F0VmFsdWUSOAoTd3JhcHBlZF9pbnQ2NF9maWVsZBgSIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5JbnQ2NFZhbHVlEjoKFHdyYXBwZWRfdWludDY0X2ZpZWxkGBMgASgLMhwuZ29vZ2xlLnByb3RvYnVmLlVJbnQ2NFZhbHVlEjgKE3dyYXBwZWRfaW50MzJfZmllbGQYFCABKAsyGy5nb29nbGUucHJvdG9idWYuSW50MzJWYWx1ZRI6ChR3cmFwcGVkX3VpbnQzMl9maWVsZBgVIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5VSW50MzJWYWx1ZRI2ChJ3cmFwcGVkX2Jvb2xfZmllbGQYFiABKAsyGi5nb29nbGUucHJvdG9idWYuQm9vbFZhbHVlEjoKFHdyYXBwZWRfc3RyaW5nX2ZpZWxkGBcgASgLMhwuZ29vZ2xlLnByb3RvYnVmLlN0cmluZ1ZhbHVlEjgKE3dyYXBwZWRfYnl0ZXNfZmllbGQYGCABKAsyGy5nb29nbGUucHJvdG9idWYuQnl0ZXNWYWx1ZRIvChNyZXBlYXRlZF9lbnVtX2ZpZWxkGBkgAygOMhIuc3BlYy5Kc29uVHlwZUVudW0SSQoTbWFwX2Jvb2xfZW51bV9maWVsZBgaIAMoCzIsLnNwZWMuSnNvblR5cGVzTWVzc2FnZS5NYXBCb29sRW51bUZpZWxkRW50cnkaSwoVTWFwQm9vbEVudW1GaWVsZEVudHJ5EgsKA2tleRgBIAEoCBIhCgV2YWx1ZRgCIAEoDjISLnNwZWMuSnNvblR5cGVFbnVtOgI4ASpdCgxKc29uVHlwZUVudW0SHgoaSlNPTl9UWVBFX0VOVU1fVU5TUEVDSUZJRUQQABIWChJKU09OX1RZUEVfRU5VTV9ZRVMQARIVChFKU09OX1RZUEVfRU5VTV9OTxACYgZwcm90bzM", [file_google_protobuf_any, file_google_protobuf_duration, file_google_protobuf_empty, file_google_protobuf_field_mask, file_google_protobuf_struct, file_google_protobuf_timestamp, file_google_protobuf_wrappers]);

/**
 * Describes the message spec.JsonTypesMessage.
 * Use `create(JsonTypesMessageSchema)` to create a new message.
 */
export const JsonTypesMessageSchema = /*@__PURE__*/
  messageDesc(file_extra_json_types, 0);

/**
 * Describes the enum spec.JsonTypeEnum.
 */
export const JsonTypeEnumSchema = /*@__PURE__*/
  enumDesc(file_extra_json_types, 0);

/**
 * @generated from enum spec.JsonTypeEnum
 */
export const JsonTypeEnum = /*@__PURE__*/
  tsEnum(JsonTypeEnumSchema);

