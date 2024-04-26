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

// @formatter:off

// Comment before syntax.

// @generated by protoc-gen-es v2.0.0-alpha.1 with parameter "ts_nocheck=false,target=ts"
// @generated from file extra/comments.proto (package spec, syntax proto3)
/* eslint-disable */

// Comment after syntax.

// Comment before package.

import type { GenDescEnum, GenDescFile, GenDescMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file extra/comments.proto.
 */
export const fileDesc_extra_comments: GenDescFile = /*@__PURE__*/
  fileDesc("ChRleHRyYS9jb21tZW50cy5wcm90bxIEc3BlYyKiAQoTTWVzc2FnZVdpdGhDb21tZW50cxILCgNmb28YASABKAkSDwoFdmFsdWUYAiABKAVIABIPCgVlcnJvchgDIAEoCUgAEicKH3RoaXNfZmllbGRfaGFzX2FuX2VtcHR5X2NvbW1lbnQYBCABKAkSKQoYdGhpc19maWVsZF9pc19kZXByZWNhdGVkGAUgASgJQgIYAVIDc2RmQggKBnJlc3VsdCIZChdFbXB0eU1lc3NhZ2VXaXRoQ29tbWVudCJpChRHb29nbGVDb21tZW50RXhhbXBsZRILCgNmb28YASABKAUSCwoDYmFyGAIgASgFEgsKA2JhehgDIAEoCRILCgNxdXgYBCABKAESDQoFY29yZ2UYBSABKAkSDgoGZ3JhdWx0GAYgASgFKh0KEEVudW1XaXRoQ29tbWVudHMSCQoFVkFMVUUQACpnChlEZXByZWNhdGVkRW51bVdpdGhDb21tZW50EiIKHkRFUFJFQ0FURURfRU5VTV9XSVRIX0NPTU1FTlRfQRAAEiIKHkRFUFJFQ0FURURfRU5VTV9XSVRIX0NPTU1FTlRfQhABGgIYASphChdEZXByZWNhdGVkRW51bU5vQ29tbWVudBIgChxERVBSRUNBVEVEX0VOVU1fTk9fQ09NTUVOVF9BEAASIAocREVQUkVDQVRFRF9FTlVNX05PX0NPTU1FTlRfQhABGgIYAWIGcHJvdG8z");

/**
 * Comment before message.
 *
 * @generated from message spec.MessageWithComments
 */
export type MessageWithComments = Message<"spec.MessageWithComments"> & {
  /**
   * Comment before field with 5 lines:
   * line 2, next is empty
   *
   * line 4, next is empty
   *
   *
   * Comment next to field.
   *
   * @generated from field: string foo = 1;
   */
  foo: string;

  /**
   * Comment before oneof.
   *
   * Comment after start of oneof.
   *
   * @generated from oneof spec.MessageWithComments.result
   */
  result: {
    /**
     * Comment before oneof member.
     *
     * Comment next to oneof member.
     *
     * @generated from field: int32 value = 2;
     */
    value: number;
    case: "value";
  } | {
    /**
     * @generated from field: string error = 3;
     */
    value: string;
    case: "error";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: string this_field_has_an_empty_comment = 4;
   */
  thisFieldHasAnEmptyComment: string;

  /**
   * @generated from field: string this_field_is_deprecated = 5 [json_name = "sdf", deprecated = true];
   * @deprecated
   */
  thisFieldIsDeprecated: string;
};

/**
 * Describes the message spec.MessageWithComments.
 * Use `create(MessageWithCommentsDesc)` to create a new message.
 */
export const MessageWithCommentsDesc: GenDescMessage<MessageWithComments> = /*@__PURE__*/
  messageDesc(fileDesc_extra_comments, 0);

/**
 * Comment within empty message.
 *
 * @generated from message spec.EmptyMessageWithComment
 */
export type EmptyMessageWithComment = Message<"spec.EmptyMessageWithComment"> & {
};

/**
 * Describes the message spec.EmptyMessageWithComment.
 * Use `create(EmptyMessageWithCommentDesc)` to create a new message.
 */
export const EmptyMessageWithCommentDesc: GenDescMessage<EmptyMessageWithComment> = /*@__PURE__*/
  messageDesc(fileDesc_extra_comments, 1);

/**
 * see https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/descriptor.proto
 *
 * @generated from message spec.GoogleCommentExample
 */
export type GoogleCommentExample = Message<"spec.GoogleCommentExample"> & {
  /**
   * Comment attached to foo.
   *
   * @generated from field: int32 foo = 1;
   */
  foo: number;

  /**
   * Comment attached to bar.
   *
   * @generated from field: int32 bar = 2;
   */
  bar: number;

  /**
   * Comment attached to baz.
   * Another line attached to baz.
   *
   * @generated from field: string baz = 3;
   */
  baz: string;

  /**
   * Comment attached to qux.
   *
   * Another line attached to qux.
   *
   * @generated from field: double qux = 4;
   */
  qux: number;

  /**
   * Block comment attached
   * to corge.  Leading asterisks
   * will be removed. 
   *
   * @generated from field: string corge = 5;
   */
  corge: string;

  /**
   * Block comment attached to
   * grault. 
   *
   * @generated from field: int32 grault = 6;
   */
  grault: number;
};

/**
 * Describes the message spec.GoogleCommentExample.
 * Use `create(GoogleCommentExampleDesc)` to create a new message.
 */
export const GoogleCommentExampleDesc: GenDescMessage<GoogleCommentExample> = /*@__PURE__*/
  messageDesc(fileDesc_extra_comments, 2);

/**
 * Leading comment for enum.
 *
 * Comment between start of enum and first value.
 *
 * @generated from enum spec.EnumWithComments
 */
export enum EnumWithComments {
  /**
   * Comment before enum value.
   *
   * Comment next to enum value.
   *
   * @generated from enum value: VALUE = 0;
   */
  VALUE = 0,
}

/**
 * Describes the enum spec.EnumWithComments.
 */
export const EnumWithCommentsDesc: GenDescEnum<EnumWithComments> = /*@__PURE__*/
  enumDesc(fileDesc_extra_comments, 0);

/**
 * Leading comment for deprecated enum
 *
 * @generated from enum spec.DeprecatedEnumWithComment
 * @deprecated
 */
export enum DeprecatedEnumWithComment {
  /**
   * @generated from enum value: DEPRECATED_ENUM_WITH_COMMENT_A = 0;
   */
  A = 0,

  /**
   * @generated from enum value: DEPRECATED_ENUM_WITH_COMMENT_B = 1;
   */
  B = 1,
}

/**
 * Describes the enum spec.DeprecatedEnumWithComment.
 * @deprecated
 */
export const DeprecatedEnumWithCommentDesc: GenDescEnum<DeprecatedEnumWithComment> = /*@__PURE__*/
  enumDesc(fileDesc_extra_comments, 1);

/**
 * @generated from enum spec.DeprecatedEnumNoComment
 * @deprecated
 */
export enum DeprecatedEnumNoComment {
  /**
   * @generated from enum value: DEPRECATED_ENUM_NO_COMMENT_A = 0;
   */
  A = 0,

  /**
   * @generated from enum value: DEPRECATED_ENUM_NO_COMMENT_B = 1;
   */
  B = 1,
}

/**
 * Describes the enum spec.DeprecatedEnumNoComment.
 * @deprecated
 */
export const DeprecatedEnumNoCommentDesc: GenDescEnum<DeprecatedEnumNoComment> = /*@__PURE__*/
  enumDesc(fileDesc_extra_comments, 2);

