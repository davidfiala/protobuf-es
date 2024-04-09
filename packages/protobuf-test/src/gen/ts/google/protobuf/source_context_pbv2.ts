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
// @generated from file google/protobuf/source_context.proto (package google.protobuf, syntax proto3)
/* eslint-disable */

import type { DescFile } from "@bufbuild/protobuf";
import type { GenDescMessage } from "@bufbuild/protobuf/next/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_google_protobuf_source_context: DescFile = /*@__PURE__*/
  fileDesc("CiRnb29nbGUvcHJvdG9idWYvc291cmNlX2NvbnRleHQucHJvdG8SD2dvb2dsZS5wcm90b2J1ZiIiCg1Tb3VyY2VDb250ZXh0EhEKCWZpbGVfbmFtZRgBIAEoCUKKAQoTY29tLmdvb2dsZS5wcm90b2J1ZkISU291cmNlQ29udGV4dFByb3RvUAFaNmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3NvdXJjZWNvbnRleHRwYqICA0dQQqoCHkdvb2dsZS5Qcm90b2J1Zi5XZWxsS25vd25UeXBlc2IGcHJvdG8z");

/**
 * `SourceContext` represents information about the source of a
 * protobuf element, like the file in which it is defined.
 *
 * @generated from message google.protobuf.SourceContext
 */
export type SourceContext = Message<"google.protobuf.SourceContext"> & {
  /**
   * The path-qualified name of the .proto file that contained the associated
   * protobuf element.  For example: `"google/protobuf/source_context.proto"`.
   *
   * @generated from field: string file_name = 1;
   */
  fileName: string;
};

// Describes the message google.protobuf.SourceContext.
// Use `create(SourceContextDesc)` to create a new SourceContext.
export const SourceContextDesc: GenDescMessage<SourceContext> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_source_context, 0);

