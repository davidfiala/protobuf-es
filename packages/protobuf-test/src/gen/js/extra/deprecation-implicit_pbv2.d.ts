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
// @generated from file extra/deprecation-implicit.proto (package spec, syntax proto3)
/* eslint-disable */

import type { DescFile } from "@bufbuild/protobuf";
import type { Message } from "@bufbuild/protobuf/next";
import type { GenDescMessage } from "@bufbuild/protobuf/next/codegenv1";

export declare const fileDesc_extra_deprecation_implicit: DescFile;

/**
 * @generated from message spec.ImplicitlyDeprecatedMessage
 * @deprecated
 */
export declare type ImplicitlyDeprecatedMessage = Message<"spec.ImplicitlyDeprecatedMessage"> & {
};

// Describes the message spec.ImplicitlyDeprecatedMessage. Use `create(ImplicitlyDeprecatedMessageDesc)` to create a new ImplicitlyDeprecatedMessage.
export declare const ImplicitlyDeprecatedMessageDesc: GenDescMessage<ImplicitlyDeprecatedMessage>;

