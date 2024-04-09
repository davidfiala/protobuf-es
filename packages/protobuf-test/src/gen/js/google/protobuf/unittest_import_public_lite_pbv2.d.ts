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

// Author: liujisi@google.com (Pherl Liu)

// @generated by protoc-gen-es-next v1.8.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/unittest_import_public_lite.proto (package protobuf_unittest_import, syntax proto2)
/* eslint-disable */

import type { DescFile } from "@bufbuild/protobuf";
import type { Message } from "@bufbuild/protobuf/next";
import type { GenDescMessage } from "@bufbuild/protobuf/next/codegenv1";

export declare const fileDesc_google_protobuf_unittest_import_public_lite: DescFile;

/**
 * @generated from message protobuf_unittest_import.PublicImportMessageLite
 */
export declare type PublicImportMessageLite = Message<"protobuf_unittest_import.PublicImportMessageLite"> & {
  /**
   * @generated from field: optional int32 e = 1;
   */
  e: number;
};

// Describes the message protobuf_unittest_import.PublicImportMessageLite. Use `create(PublicImportMessageLiteDesc)` to create a new PublicImportMessageLite.
export declare const PublicImportMessageLiteDesc: GenDescMessage<PublicImportMessageLite>;

