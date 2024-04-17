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

// Author: kenton@google.com (Kenton Varda)
//  Based on original Protocol Buffers design by
//  Sanjay Ghemawat, Jeff Dean, and others.
//
// This file is similar to unittest_mset_wire_format.proto, but does not
// have a TestMessageSet, so it can be downgraded to proto1.

// @generated by protoc-gen-es-next v1.8.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file google/protobuf/unittest_mset.proto (package protobuf_unittest, syntax proto2)
/* eslint-disable */

import type { GenDescExtension, GenDescFile, GenDescMessage } from "@bufbuild/protobuf/next/codegenv1";
import { extDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { TestMessageSet } from "./unittest_mset_wire_format_pbv2.js";
import { fileDesc_google_protobuf_unittest_mset_wire_format } from "./unittest_mset_wire_format_pbv2.js";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_google_protobuf_unittest_mset: GenDescFile = /*@__PURE__*/
  fileDesc("CiNnb29nbGUvcHJvdG9idWYvdW5pdHRlc3RfbXNldC5wcm90bxIRcHJvdG9idWZfdW5pdHRlc3QiWgoXVGVzdE1lc3NhZ2VTZXRDb250YWluZXISPwoLbWVzc2FnZV9zZXQYASABKAsyKi5wcm90bzJfd2lyZWZvcm1hdF91bml0dGVzdC5UZXN0TWVzc2FnZVNldCLpAQodTmVzdGVkVGVzdE1lc3NhZ2VTZXRDb250YWluZXISPQoJY29udGFpbmVyGAEgASgLMioucHJvdG9idWZfdW5pdHRlc3QuVGVzdE1lc3NhZ2VTZXRDb250YWluZXISPwoFY2hpbGQYAiABKAsyMC5wcm90b2J1Zl91bml0dGVzdC5OZXN0ZWRUZXN0TWVzc2FnZVNldENvbnRhaW5lchJICgpsYXp5X2NoaWxkGAMgASgLMjAucHJvdG9idWZfdW5pdHRlc3QuTmVzdGVkVGVzdE1lc3NhZ2VTZXRDb250YWluZXJCAigBIlYKDU5lc3RlZFRlc3RJbnQSCQoBYRgBIAEoBxIJCgFiGAMgASgFEi8KBWNoaWxkGAIgASgLMiAucHJvdG9idWZfdW5pdHRlc3QuTmVzdGVkVGVzdEludCKPAgoYVGVzdE1lc3NhZ2VTZXRFeHRlbnNpb24xEgkKAWkYDyABKAUSPQoJcmVjdXJzaXZlGBAgASgLMioucHJvdG8yX3dpcmVmb3JtYXRfdW5pdHRlc3QuVGVzdE1lc3NhZ2VTZXQSGQoNdGVzdF9hbGlhc2luZxgRIAEoCUICCAIyjQEKFW1lc3NhZ2Vfc2V0X2V4dGVuc2lvbhIqLnByb3RvMl93aXJlZm9ybWF0X3VuaXR0ZXN0LlRlc3RNZXNzYWdlU2V0GLCmXiABKAsyKy5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWVzc2FnZVNldEV4dGVuc2lvbjFSE21lc3NhZ2VTZXRFeHRlbnNpb24itwEKGFRlc3RNZXNzYWdlU2V0RXh0ZW5zaW9uMhILCgNzdHIYGSABKAkyjQEKFW1lc3NhZ2Vfc2V0X2V4dGVuc2lvbhIqLnByb3RvMl93aXJlZm9ybWF0X3VuaXR0ZXN0LlRlc3RNZXNzYWdlU2V0GPm7XiABKAsyKy5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWVzc2FnZVNldEV4dGVuc2lvbjJSE21lc3NhZ2VTZXRFeHRlbnNpb24i8AEKGFRlc3RNZXNzYWdlU2V0RXh0ZW5zaW9uMxItCgNtc2cYIyABKAsyIC5wcm90b2J1Zl91bml0dGVzdC5OZXN0ZWRUZXN0SW50EhQKDHJlcXVpcmVkX2ludBgkIAIoBTKOAQoVbWVzc2FnZV9zZXRfZXh0ZW5zaW9uEioucHJvdG8yX3dpcmVmb3JtYXRfdW5pdHRlc3QuVGVzdE1lc3NhZ2VTZXQYqcOOXSABKAsyKy5wcm90b2J1Zl91bml0dGVzdC5UZXN0TWVzc2FnZVNldEV4dGVuc2lvbjNSE21lc3NhZ2VTZXRFeHRlbnNpb24ibgoNUmF3TWVzc2FnZVNldBIzCgRpdGVtGAEgAygKMiUucHJvdG9idWZfdW5pdHRlc3QuUmF3TWVzc2FnZVNldC5JdGVtGigKBEl0ZW0SDwoHdHlwZV9pZBgCIAIoBRIPCgdtZXNzYWdlGAMgAigMQgVIAfgBAQ", [fileDesc_google_protobuf_unittest_mset_wire_format]);

/**
 * @generated from message protobuf_unittest.TestMessageSetContainer
 */
export type TestMessageSetContainer = Message<"protobuf_unittest.TestMessageSetContainer"> & {
  /**
   * @generated from field: optional proto2_wireformat_unittest.TestMessageSet message_set = 1;
   */
  messageSet?: TestMessageSet;
};

// Describes the message protobuf_unittest.TestMessageSetContainer.
// Use `create(TestMessageSetContainerDesc)` to create a new TestMessageSetContainer.
export const TestMessageSetContainerDesc: GenDescMessage<TestMessageSetContainer> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_mset, 0);

/**
 * @generated from message protobuf_unittest.NestedTestMessageSetContainer
 */
export type NestedTestMessageSetContainer = Message<"protobuf_unittest.NestedTestMessageSetContainer"> & {
  /**
   * @generated from field: optional protobuf_unittest.TestMessageSetContainer container = 1;
   */
  container?: TestMessageSetContainer;

  /**
   * @generated from field: optional protobuf_unittest.NestedTestMessageSetContainer child = 2;
   */
  child?: NestedTestMessageSetContainer;

  /**
   * @generated from field: optional protobuf_unittest.NestedTestMessageSetContainer lazy_child = 3;
   */
  lazyChild?: NestedTestMessageSetContainer;
};

// Describes the message protobuf_unittest.NestedTestMessageSetContainer.
// Use `create(NestedTestMessageSetContainerDesc)` to create a new NestedTestMessageSetContainer.
export const NestedTestMessageSetContainerDesc: GenDescMessage<NestedTestMessageSetContainer> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_mset, 1);

/**
 * @generated from message protobuf_unittest.NestedTestInt
 */
export type NestedTestInt = Message<"protobuf_unittest.NestedTestInt"> & {
  /**
   * @generated from field: optional fixed32 a = 1;
   */
  a: number;

  /**
   * @generated from field: optional int32 b = 3;
   */
  b: number;

  /**
   * @generated from field: optional protobuf_unittest.NestedTestInt child = 2;
   */
  child?: NestedTestInt;
};

// Describes the message protobuf_unittest.NestedTestInt.
// Use `create(NestedTestIntDesc)` to create a new NestedTestInt.
export const NestedTestIntDesc: GenDescMessage<NestedTestInt> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_mset, 2);

/**
 * @generated from message protobuf_unittest.TestMessageSetExtension1
 */
export type TestMessageSetExtension1 = Message<"protobuf_unittest.TestMessageSetExtension1"> & {
  /**
   * @generated from field: optional int32 i = 15;
   */
  i: number;

  /**
   * @generated from field: optional proto2_wireformat_unittest.TestMessageSet recursive = 16;
   */
  recursive?: TestMessageSet;

  /**
   * @generated from field: optional string test_aliasing = 17;
   */
  testAliasing: string;
};

// Describes the message protobuf_unittest.TestMessageSetExtension1.
// Use `create(TestMessageSetExtension1Desc)` to create a new TestMessageSetExtension1.
export const TestMessageSetExtension1Desc: GenDescMessage<TestMessageSetExtension1> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_mset, 3);

/**
 * @generated from extension: optional protobuf_unittest.TestMessageSetExtension1 message_set_extension = 1545008;
 */
export const TestMessageSetExtension1_message_set_extension: GenDescExtension<TestMessageSet, TestMessageSetExtension1> = /*@__PURE__*/
  extDesc(fileDesc_google_protobuf_unittest_mset, 3, 0);

/**
 * @generated from message protobuf_unittest.TestMessageSetExtension2
 */
export type TestMessageSetExtension2 = Message<"protobuf_unittest.TestMessageSetExtension2"> & {
  /**
   * @generated from field: optional string str = 25;
   */
  str: string;
};

// Describes the message protobuf_unittest.TestMessageSetExtension2.
// Use `create(TestMessageSetExtension2Desc)` to create a new TestMessageSetExtension2.
export const TestMessageSetExtension2Desc: GenDescMessage<TestMessageSetExtension2> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_mset, 4);

/**
 * @generated from extension: optional protobuf_unittest.TestMessageSetExtension2 message_set_extension = 1547769;
 */
export const TestMessageSetExtension2_message_set_extension: GenDescExtension<TestMessageSet, TestMessageSetExtension2> = /*@__PURE__*/
  extDesc(fileDesc_google_protobuf_unittest_mset, 4, 0);

/**
 * @generated from message protobuf_unittest.TestMessageSetExtension3
 */
export type TestMessageSetExtension3 = Message<"protobuf_unittest.TestMessageSetExtension3"> & {
  /**
   * @generated from field: optional protobuf_unittest.NestedTestInt msg = 35;
   */
  msg?: NestedTestInt;

  /**
   * @generated from field: required int32 required_int = 36;
   */
  requiredInt: number;
};

// Describes the message protobuf_unittest.TestMessageSetExtension3.
// Use `create(TestMessageSetExtension3Desc)` to create a new TestMessageSetExtension3.
export const TestMessageSetExtension3Desc: GenDescMessage<TestMessageSetExtension3> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_mset, 5);

/**
 * @generated from extension: optional protobuf_unittest.TestMessageSetExtension3 message_set_extension = 195273129;
 */
export const TestMessageSetExtension3_message_set_extension: GenDescExtension<TestMessageSet, TestMessageSetExtension3> = /*@__PURE__*/
  extDesc(fileDesc_google_protobuf_unittest_mset, 5, 0);

/**
 * MessageSet wire format is equivalent to this.
 *
 * @generated from message protobuf_unittest.RawMessageSet
 */
export type RawMessageSet = Message<"protobuf_unittest.RawMessageSet"> & {
  /**
   * @generated from field: repeated protobuf_unittest.RawMessageSet.Item item = 1;
   */
  item: RawMessageSet_Item[];
};

// Describes the message protobuf_unittest.RawMessageSet.
// Use `create(RawMessageSetDesc)` to create a new RawMessageSet.
export const RawMessageSetDesc: GenDescMessage<RawMessageSet> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_mset, 6);

/**
 * @generated from message protobuf_unittest.RawMessageSet.Item
 */
export type RawMessageSet_Item = Message<"protobuf_unittest.RawMessageSet.Item"> & {
  /**
   * @generated from field: required int32 type_id = 2;
   */
  typeId: number;

  /**
   * @generated from field: required bytes message = 3;
   */
  message: Uint8Array;
};

// Describes the message protobuf_unittest.RawMessageSet.Item.
// Use `create(RawMessageSet_ItemDesc)` to create a new RawMessageSet_Item.
export const RawMessageSet_ItemDesc: GenDescMessage<RawMessageSet_Item> = /*@__PURE__*/
  messageDesc(fileDesc_google_protobuf_unittest_mset, 6, 0);

