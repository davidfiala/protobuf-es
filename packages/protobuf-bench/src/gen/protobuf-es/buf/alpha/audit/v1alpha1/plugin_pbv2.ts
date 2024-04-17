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
// @generated from file buf/alpha/audit/v1alpha1/plugin.proto (package buf.alpha.audit.v1alpha1, syntax proto3)
/* eslint-disable */

import type { GenDescEnum, GenDescFile, GenDescMessage } from "@bufbuild/protobuf/next/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_buf_alpha_audit_v1alpha1_plugin: GenDescFile = /*@__PURE__*/
  fileDesc("CiVidWYvYWxwaGEvYXVkaXQvdjFhbHBoYTEvcGx1Z2luLnByb3RvEhhidWYuYWxwaGEuYXVkaXQudjFhbHBoYTEiewosQnVmQWxwaGFSZWdpc3RyeVYxQWxwaGExUGx1Z2luVmVyc2lvbk1hcHBpbmcSFAoMcGx1Z2luX293bmVyGAEgASgJEhMKC3BsdWdpbl9uYW1lGAIgASgJEg8KB3ZlcnNpb24YAyABKAkSDwoHZGVsZXRlZBgEIAEoCCJ2CiRCdWZBbHBoYVJlZ2lzdHJ5VjFBbHBoYTFQbHVnaW5Db25maWcSFAoMcGx1Z2luX293bmVyGAEgASgJEhMKC3BsdWdpbl9uYW1lGAIgASgJEhIKCnBhcmFtZXRlcnMYAyADKAkSDwoHZGVsZXRlZBgEIAEoCCJUCjNCdWZBbHBoYVJlZ2lzdHJ5VjFBbHBoYTFQbHVnaW5WZXJzaW9uUnVudGltZUxpYnJhcnkSDAoEbmFtZRgBIAEoCRIPCgd2ZXJzaW9uGAIgASgJKuEBCihCdWZBbHBoYVJlZ2lzdHJ5VjFBbHBoYTFQbHVnaW5WaXNpYmlsaXR5Ej4KOkJVRl9BTFBIQV9SRUdJU1RSWV9WMV9BTFBIQTFfUExVR0lOX1ZJU0lCSUxJVFlfVU5TUEVDSUZJRUQQABI5CjVCVUZfQUxQSEFfUkVHSVNUUllfVjFfQUxQSEExX1BMVUdJTl9WSVNJQklMSVRZX1BVQkxJQxABEjoKNkJVRl9BTFBIQV9SRUdJU1RSWV9WMV9BTFBIQTFfUExVR0lOX1ZJU0lCSUxJVFlfUFJJVkFURRACYgZwcm90bzM");

/**
 * @generated from message buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1PluginVersionMapping
 */
export type BufAlphaRegistryV1Alpha1PluginVersionMapping = Message<"buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1PluginVersionMapping"> & {
  /**
   * @generated from field: string plugin_owner = 1;
   */
  pluginOwner: string;

  /**
   * @generated from field: string plugin_name = 2;
   */
  pluginName: string;

  /**
   * @generated from field: string version = 3;
   */
  version: string;

  /**
   * @generated from field: bool deleted = 4;
   */
  deleted: boolean;
};

// Describes the message buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1PluginVersionMapping.
// Use `create(BufAlphaRegistryV1Alpha1PluginVersionMappingDesc)` to create a new BufAlphaRegistryV1Alpha1PluginVersionMapping.
export const BufAlphaRegistryV1Alpha1PluginVersionMappingDesc: GenDescMessage<BufAlphaRegistryV1Alpha1PluginVersionMapping> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_audit_v1alpha1_plugin, 0);

/**
 * @generated from message buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1PluginConfig
 */
export type BufAlphaRegistryV1Alpha1PluginConfig = Message<"buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1PluginConfig"> & {
  /**
   * @generated from field: string plugin_owner = 1;
   */
  pluginOwner: string;

  /**
   * @generated from field: string plugin_name = 2;
   */
  pluginName: string;

  /**
   * @generated from field: repeated string parameters = 3;
   */
  parameters: string[];

  /**
   * @generated from field: bool deleted = 4;
   */
  deleted: boolean;
};

// Describes the message buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1PluginConfig.
// Use `create(BufAlphaRegistryV1Alpha1PluginConfigDesc)` to create a new BufAlphaRegistryV1Alpha1PluginConfig.
export const BufAlphaRegistryV1Alpha1PluginConfigDesc: GenDescMessage<BufAlphaRegistryV1Alpha1PluginConfig> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_audit_v1alpha1_plugin, 1);

/**
 * @generated from message buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1PluginVersionRuntimeLibrary
 */
export type BufAlphaRegistryV1Alpha1PluginVersionRuntimeLibrary = Message<"buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1PluginVersionRuntimeLibrary"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string version = 2;
   */
  version: string;
};

// Describes the message buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1PluginVersionRuntimeLibrary.
// Use `create(BufAlphaRegistryV1Alpha1PluginVersionRuntimeLibraryDesc)` to create a new BufAlphaRegistryV1Alpha1PluginVersionRuntimeLibrary.
export const BufAlphaRegistryV1Alpha1PluginVersionRuntimeLibraryDesc: GenDescMessage<BufAlphaRegistryV1Alpha1PluginVersionRuntimeLibrary> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_audit_v1alpha1_plugin, 2);

/**
 * @generated from enum buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1PluginVisibility
 */
export enum BufAlphaRegistryV1Alpha1PluginVisibility {
  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_PLUGIN_VISIBILITY_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_PLUGIN_VISIBILITY_PUBLIC = 1;
   */
  PUBLIC = 1,

  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_PLUGIN_VISIBILITY_PRIVATE = 2;
   */
  PRIVATE = 2,
}

// Describes the enum buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1PluginVisibility.
export const BufAlphaRegistryV1Alpha1PluginVisibilityDesc: GenDescEnum<BufAlphaRegistryV1Alpha1PluginVisibility> = /*@__PURE__*/
  enumDesc(fileDesc_buf_alpha_audit_v1alpha1_plugin, 0);

