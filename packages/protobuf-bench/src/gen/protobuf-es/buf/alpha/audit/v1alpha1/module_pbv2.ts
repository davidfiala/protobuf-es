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
// @generated from file buf/alpha/audit/v1alpha1/module.proto (package buf.alpha.audit.v1alpha1, syntax proto3)
/* eslint-disable */

import type { DescFile } from "@bufbuild/protobuf";
import type { GenDescEnum, GenDescMessage } from "@bufbuild/protobuf/next/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/next/wkt";
import { fileDesc_google_protobuf_timestamp } from "@bufbuild/protobuf/next/wkt";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_buf_alpha_audit_v1alpha1_module: DescFile = /*@__PURE__*/
  fileDesc("CiVidWYvYWxwaGEvYXVkaXQvdjFhbHBoYTEvbW9kdWxlLnByb3RvEhhidWYuYWxwaGEuYXVkaXQudjFhbHBoYTEirAEKJkJ1ZkFscGhhUmVnaXN0cnlWMUFscGhhMUxvY2FsTW9kdWxlUGluEg0KBW93bmVyGAEgASgJEhIKCnJlcG9zaXRvcnkYAiABKAkSDgoGYnJhbmNoGAMgASgJEg4KBmNvbW1pdBgEIAEoCRIOCgZkaWdlc3QYBSABKAkSLwoLY3JlYXRlX3RpbWUYByABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wImQKLEJ1ZkFscGhhUmVnaXN0cnlWMUFscGhhMUxvY2FsTW9kdWxlUmVmZXJlbmNlEg0KBW93bmVyGAEgASgJEhIKCnJlcG9zaXRvcnkYAiABKAkSEQoJcmVmZXJlbmNlGAMgASgJIsYCCjBCdWZBbHBoYVJlZ2lzdHJ5VjFBbHBoYTFMb2NhbE1vZHVsZVJlc29sdmVSZXN1bHQSWQoJcmVmZXJlbmNlGAEgASgLMkYuYnVmLmFscGhhLmF1ZGl0LnYxYWxwaGExLkJ1ZkFscGhhUmVnaXN0cnlWMUFscGhhMUxvY2FsTW9kdWxlUmVmZXJlbmNlEk0KA3BpbhgCIAEoCzJALmJ1Zi5hbHBoYS5hdWRpdC52MWFscGhhMS5CdWZBbHBoYVJlZ2lzdHJ5VjFBbHBoYTFMb2NhbE1vZHVsZVBpbhJoChdyZXNvbHZlZF9yZWZlcmVuY2VfdHlwZRgDIAEoDjJHLmJ1Zi5hbHBoYS5hdWRpdC52MWFscGhhMS5CdWZBbHBoYVJlZ2lzdHJ5VjFBbHBoYTFSZXNvbHZlZFJlZmVyZW5jZVR5cGUq9QIKLUJ1ZkFscGhhUmVnaXN0cnlWMUFscGhhMVJlc29sdmVkUmVmZXJlbmNlVHlwZRJECkBCVUZfQUxQSEFfUkVHSVNUUllfVjFfQUxQSEExX1JFU09MVkVEX1JFRkVSRU5DRV9UWVBFX1VOU1BFQ0lGSUVEEAASPwo7QlVGX0FMUEhBX1JFR0lTVFJZX1YxX0FMUEhBMV9SRVNPTFZFRF9SRUZFUkVOQ0VfVFlQRV9DT01NSVQQARI/CjtCVUZfQUxQSEFfUkVHSVNUUllfVjFfQUxQSEExX1JFU09MVkVEX1JFRkVSRU5DRV9UWVBFX0JSQU5DSBACEjwKOEJVRl9BTFBIQV9SRUdJU1RSWV9WMV9BTFBIQTFfUkVTT0xWRURfUkVGRVJFTkNFX1RZUEVfVEFHEAMSPgo6QlVGX0FMUEhBX1JFR0lTVFJZX1YxX0FMUEhBMV9SRVNPTFZFRF9SRUZFUkVOQ0VfVFlQRV9UUkFDSxAEYgZwcm90bzM", [fileDesc_google_protobuf_timestamp]);

/**
 * @generated from message buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin
 */
export type BufAlphaRegistryV1Alpha1LocalModulePin = Message<"buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin"> & {
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

// Describes the message buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.
// Use `create(BufAlphaRegistryV1Alpha1LocalModulePinDesc)` to create a new BufAlphaRegistryV1Alpha1LocalModulePin.
export const BufAlphaRegistryV1Alpha1LocalModulePinDesc: GenDescMessage<BufAlphaRegistryV1Alpha1LocalModulePin> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_audit_v1alpha1_module, 0);

/**
 * @generated from message buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference
 */
export type BufAlphaRegistryV1Alpha1LocalModuleReference = Message<"buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference"> & {
  /**
   * @generated from field: string owner = 1;
   */
  owner: string;

  /**
   * @generated from field: string repository = 2;
   */
  repository: string;

  /**
   * @generated from field: string reference = 3;
   */
  reference: string;
};

// Describes the message buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.
// Use `create(BufAlphaRegistryV1Alpha1LocalModuleReferenceDesc)` to create a new BufAlphaRegistryV1Alpha1LocalModuleReference.
export const BufAlphaRegistryV1Alpha1LocalModuleReferenceDesc: GenDescMessage<BufAlphaRegistryV1Alpha1LocalModuleReference> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_audit_v1alpha1_module, 1);

/**
 * @generated from message buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult
 */
export type BufAlphaRegistryV1Alpha1LocalModuleResolveResult = Message<"buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult"> & {
  /**
   * @generated from field: buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference reference = 1;
   */
  reference?: BufAlphaRegistryV1Alpha1LocalModuleReference;

  /**
   * @generated from field: buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin pin = 2;
   */
  pin?: BufAlphaRegistryV1Alpha1LocalModulePin;

  /**
   * @generated from field: buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1ResolvedReferenceType resolved_reference_type = 3;
   */
  resolvedReferenceType: BufAlphaRegistryV1Alpha1ResolvedReferenceType;
};

// Describes the message buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.
// Use `create(BufAlphaRegistryV1Alpha1LocalModuleResolveResultDesc)` to create a new BufAlphaRegistryV1Alpha1LocalModuleResolveResult.
export const BufAlphaRegistryV1Alpha1LocalModuleResolveResultDesc: GenDescMessage<BufAlphaRegistryV1Alpha1LocalModuleResolveResult> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_audit_v1alpha1_module, 2);

/**
 * @generated from enum buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1ResolvedReferenceType
 */
export enum BufAlphaRegistryV1Alpha1ResolvedReferenceType {
  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_COMMIT = 1;
   */
  COMMIT = 1,

  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_BRANCH = 2;
   */
  BRANCH = 2,

  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_TAG = 3;
   */
  TAG = 3,

  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_TRACK = 4;
   */
  TRACK = 4,
}

// Describes the enum buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1ResolvedReferenceType.
export const BufAlphaRegistryV1Alpha1ResolvedReferenceTypeDesc: GenDescEnum<BufAlphaRegistryV1Alpha1ResolvedReferenceType> = /*@__PURE__*/
  enumDesc(fileDesc_buf_alpha_audit_v1alpha1_module, 0);

