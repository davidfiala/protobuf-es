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

// @generated by protoc-gen-es v2.0.0-alpha.2 with parameter "ts_nocheck=false,target=ts"
// @generated from file google/type/fraction.proto (package google.type, syntax proto3)
/* eslint-disable */

import type { GenDescFile, GenDescMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/type/fraction.proto.
 */
export const fileDesc_google_type_fraction: GenDescFile = /*@__PURE__*/
  fileDesc("Chpnb29nbGUvdHlwZS9mcmFjdGlvbi5wcm90bxILZ29vZ2xlLnR5cGUiMgoIRnJhY3Rpb24SEQoJbnVtZXJhdG9yGAEgASgDEhMKC2Rlbm9taW5hdG9yGAIgASgDQmYKD2NvbS5nb29nbGUudHlwZUINRnJhY3Rpb25Qcm90b1ABWjxnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL3R5cGUvZnJhY3Rpb247ZnJhY3Rpb26iAgNHVFBiBnByb3RvMw");

/**
 * Represents a fraction in terms of a numerator divided by a denominator.
 *
 * @generated from message google.type.Fraction
 */
export type Fraction = Message<"google.type.Fraction"> & {
  /**
   * The numerator in the fraction, e.g. 2 in 2/3.
   *
   * @generated from field: int64 numerator = 1;
   */
  numerator: bigint;

  /**
   * The value by which the numerator is divided, e.g. 3 in 2/3. Must be
   * positive.
   *
   * @generated from field: int64 denominator = 2;
   */
  denominator: bigint;
};

/**
 * Describes the message google.type.Fraction.
 * Use `create(FractionDesc)` to create a new message.
 */
export const FractionDesc: GenDescMessage<Fraction> = /*@__PURE__*/
  messageDesc(fileDesc_google_type_fraction, 0);

