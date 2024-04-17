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
// @generated from file buf/alpha/registry/v1alpha1/module.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import type { GenDescFile, GenDescMessage } from "@bufbuild/protobuf/next/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/next/wkt";
import { fileDesc_google_protobuf_timestamp } from "@bufbuild/protobuf/next/wkt";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_buf_alpha_registry_v1alpha1_module: GenDescFile = /*@__PURE__*/
  fileDesc("CihidWYvYWxwaGEvcmVnaXN0cnkvdjFhbHBoYTEvbW9kdWxlLnByb3RvEhtidWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEiTAoUTG9jYWxNb2R1bGVSZWZlcmVuY2USDQoFb3duZXIYASABKAkSEgoKcmVwb3NpdG9yeRgCIAEoCRIRCglyZWZlcmVuY2UYAyABKAkilAEKDkxvY2FsTW9kdWxlUGluEg0KBW93bmVyGAEgASgJEhIKCnJlcG9zaXRvcnkYAiABKAkSDgoGYnJhbmNoGAMgASgJEg4KBmNvbW1pdBgEIAEoCRIOCgZkaWdlc3QYBSABKAkSLwoLY3JlYXRlX3RpbWUYByABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wYgZwcm90bzM", [fileDesc_google_protobuf_timestamp]);

/**
 * LocalModuleReference is a local module reference.
 *
 * It does not include a remote.
 *
 * @generated from message buf.alpha.registry.v1alpha1.LocalModuleReference
 */
export type LocalModuleReference = Message<"buf.alpha.registry.v1alpha1.LocalModuleReference"> & {
  /**
   * @generated from field: string owner = 1;
   */
  owner: string;

  /**
   * @generated from field: string repository = 2;
   */
  repository: string;

  /**
   * either branch or commit
   *
   * @generated from field: string reference = 3;
   */
  reference: string;
};

// Describes the message buf.alpha.registry.v1alpha1.LocalModuleReference.
// Use `create(LocalModuleReferenceDesc)` to create a new LocalModuleReference.
export const LocalModuleReferenceDesc: GenDescMessage<LocalModuleReference> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_module, 0);

/**
 * LocalModulePin is a local module pin.
 *
 * It does not include a remote.
 *
 * @generated from message buf.alpha.registry.v1alpha1.LocalModulePin
 */
export type LocalModulePin = Message<"buf.alpha.registry.v1alpha1.LocalModulePin"> & {
  /**
   * @generated from field: string owner = 1;
   */
  owner: string;

  /**
   * @generated from field: string repository = 2;
   */
  repository: string;

  /**
   * @generated from field: string branch = 3;
   */
  branch: string;

  /**
   * @generated from field: string commit = 4;
   */
  commit: string;

  /**
   * @generated from field: string digest = 5;
   */
  digest: string;

  /**
   * @generated from field: google.protobuf.Timestamp create_time = 7;
   */
  createTime?: Timestamp;
};

// Describes the message buf.alpha.registry.v1alpha1.LocalModulePin.
// Use `create(LocalModulePinDesc)` to create a new LocalModulePin.
export const LocalModulePinDesc: GenDescMessage<LocalModulePin> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_module, 1);

