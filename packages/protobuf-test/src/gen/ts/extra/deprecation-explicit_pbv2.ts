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
// @generated from file extra/deprecation-explicit.proto (package spec, syntax proto3)
/* eslint-disable */

import type { DescFile } from "@bufbuild/protobuf";
import type { GenDescEnum, GenDescMessage } from "@bufbuild/protobuf/next/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_extra_deprecation_explicit: DescFile = /*@__PURE__*/
  fileDesc("CiBleHRyYS9kZXByZWNhdGlvbi1leHBsaWNpdC5wcm90bxIEc3BlYyImChFEZXByZWNhdGVkTWVzc2FnZRINCgVmaWVsZBgBIAEoCToCGAEiTQoWRGVwcmVjYXRlZEZpZWxkTWVzc2FnZRIcChBkZXByZWNhdGVkX2ZpZWxkGAEgASgJQgIYARIVCg1jdXJyZW50X2ZpZWxkGAIgASgJKkIKDkRlcHJlY2F0ZWRFbnVtEhUKEURFUFJFQ0FURURfRU5VTV9BEAASFQoRREVQUkVDQVRFRF9FTlVNX0IQARoCGAEqbAoTRGVwcmVjYXRlZFZhbHVlRW51bRIlCiFERVBSRUNBVEVEX1ZBTFVFX0VOVU1fVU5TUEVDSUZJRUQQABIuCiZERVBSRUNBVEVEX1ZBTFVFX0VOVU1fREVQUkVDQVRFRF9WQUxVRRABGgIIAWIGcHJvdG8z");

/**
 * The entire message is deprecated
 *
 * @generated from message spec.DeprecatedMessage
 * @deprecated
 */
export type DeprecatedMessage = Message<"spec.DeprecatedMessage"> & {
  /**
   * @generated from field: string field = 1;
   */
  field: string;
};

// Describes the message spec.DeprecatedMessage.
// Use `create(DeprecatedMessageDesc)` to create a new DeprecatedMessage.
export const DeprecatedMessageDesc: GenDescMessage<DeprecatedMessage> = /*@__PURE__*/
  messageDesc(fileDesc_extra_deprecation_explicit, 0);

/**
 * A single field of this message is deprecated
 *
 * @generated from message spec.DeprecatedFieldMessage
 */
export type DeprecatedFieldMessage = Message<"spec.DeprecatedFieldMessage"> & {
  /**
   * This field is deprecated
   *
   * @generated from field: string deprecated_field = 1 [deprecated = true];
   * @deprecated
   */
  deprecatedField: string;

  /**
   * This field is not deprecated
   *
   * @generated from field: string current_field = 2;
   */
  currentField: string;
};

// Describes the message spec.DeprecatedFieldMessage.
// Use `create(DeprecatedFieldMessageDesc)` to create a new DeprecatedFieldMessage.
export const DeprecatedFieldMessageDesc: GenDescMessage<DeprecatedFieldMessage> = /*@__PURE__*/
  messageDesc(fileDesc_extra_deprecation_explicit, 1);

/**
 * The entire enum is deprecated
 *
 * @generated from enum spec.DeprecatedEnum
 * @deprecated
 */
export enum DeprecatedEnum {
  /**
   * @generated from enum value: DEPRECATED_ENUM_A = 0;
   */
  A = 0,

  /**
   * @generated from enum value: DEPRECATED_ENUM_B = 1;
   */
  B = 1,
}

// Describes the enum spec.DeprecatedEnum.
export const DeprecatedEnumDesc: GenDescEnum<DeprecatedEnum> = /*@__PURE__*/
  enumDesc(fileDesc_extra_deprecation_explicit, 0);

/**
 * Only a single enum value is deprecated
 *
 * @generated from enum spec.DeprecatedValueEnum
 */
export enum DeprecatedValueEnum {
  /**
   * @generated from enum value: DEPRECATED_VALUE_ENUM_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: DEPRECATED_VALUE_ENUM_DEPRECATED_VALUE = 1 [deprecated = true];
   * @deprecated
   */
  DEPRECATED_VALUE = 1,
}

// Describes the enum spec.DeprecatedValueEnum.
export const DeprecatedValueEnumDesc: GenDescEnum<DeprecatedValueEnum> = /*@__PURE__*/
  enumDesc(fileDesc_extra_deprecation_explicit, 1);

