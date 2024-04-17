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
// @generated from file buf/alpha/registry/v1alpha1/role.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import type { GenDescEnum, GenDescFile } from "@bufbuild/protobuf/next/codegenv1";
import { enumDesc, fileDesc } from "@bufbuild/protobuf/next/codegenv1";

export const fileDesc_buf_alpha_registry_v1alpha1_role: GenDescFile = /*@__PURE__*/
  fileDesc("CiZidWYvYWxwaGEvcmVnaXN0cnkvdjFhbHBoYTEvcm9sZS5wcm90bxIbYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExKlgKClNlcnZlclJvbGUSGwoXU0VSVkVSX1JPTEVfVU5TUEVDSUZJRUQQABIVChFTRVJWRVJfUk9MRV9BRE1JThABEhYKElNFUlZFUl9ST0xFX01FTUJFUhACKo0BChBPcmdhbml6YXRpb25Sb2xlEiEKHU9SR0FOSVpBVElPTl9ST0xFX1VOU1BFQ0lGSUVEEAASGwoXT1JHQU5JWkFUSU9OX1JPTEVfT1dORVIQARIbChdPUkdBTklaQVRJT05fUk9MRV9BRE1JThACEhwKGE9SR0FOSVpBVElPTl9ST0xFX01FTUJFUhADKpwBCg5SZXBvc2l0b3J5Um9sZRIfChtSRVBPU0lUT1JZX1JPTEVfVU5TUEVDSUZJRUQQABIZChVSRVBPU0lUT1JZX1JPTEVfT1dORVIQARIZChVSRVBPU0lUT1JZX1JPTEVfQURNSU4QAhIZChVSRVBPU0lUT1JZX1JPTEVfV1JJVEUQAxIYChRSRVBPU0lUT1JZX1JPTEVfUkVBRBAEKpABCgxUZW1wbGF0ZVJvbGUSHQoZVEVNUExBVEVfUk9MRV9VTlNQRUNJRklFRBAAEhcKE1RFTVBMQVRFX1JPTEVfT1dORVIQARIXChNURU1QTEFURV9ST0xFX0FETUlOEAISFwoTVEVNUExBVEVfUk9MRV9XUklURRADEhYKElRFTVBMQVRFX1JPTEVfUkVBRBAEKoQBCgpQbHVnaW5Sb2xlEhsKF1BMVUdJTl9ST0xFX1VOU1BFQ0lGSUVEEAASFQoRUExVR0lOX1JPTEVfT1dORVIQARIVChFQTFVHSU5fUk9MRV9BRE1JThACEhUKEVBMVUdJTl9ST0xFX1dSSVRFEAMSFAoQUExVR0lOX1JPTEVfUkVBRBAEYgZwcm90bzM");

/**
 * The roles that users can have in a Server.
 *
 * @generated from enum buf.alpha.registry.v1alpha1.ServerRole
 */
export enum ServerRole {
  /**
   * @generated from enum value: SERVER_ROLE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: SERVER_ROLE_ADMIN = 1;
   */
  ADMIN = 1,

  /**
   * @generated from enum value: SERVER_ROLE_MEMBER = 2;
   */
  MEMBER = 2,
}

// Describes the enum buf.alpha.registry.v1alpha1.ServerRole.
export const ServerRoleDesc: GenDescEnum<ServerRole> = /*@__PURE__*/
  enumDesc(fileDesc_buf_alpha_registry_v1alpha1_role, 0);

/**
 * The roles that users can have in a Organization.
 *
 * @generated from enum buf.alpha.registry.v1alpha1.OrganizationRole
 */
export enum OrganizationRole {
  /**
   * @generated from enum value: ORGANIZATION_ROLE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ORGANIZATION_ROLE_OWNER = 1;
   */
  OWNER = 1,

  /**
   * @generated from enum value: ORGANIZATION_ROLE_ADMIN = 2;
   */
  ADMIN = 2,

  /**
   * @generated from enum value: ORGANIZATION_ROLE_MEMBER = 3;
   */
  MEMBER = 3,
}

// Describes the enum buf.alpha.registry.v1alpha1.OrganizationRole.
export const OrganizationRoleDesc: GenDescEnum<OrganizationRole> = /*@__PURE__*/
  enumDesc(fileDesc_buf_alpha_registry_v1alpha1_role, 1);

/**
 * The roles that users can have for a Repository.
 *
 * @generated from enum buf.alpha.registry.v1alpha1.RepositoryRole
 */
export enum RepositoryRole {
  /**
   * @generated from enum value: REPOSITORY_ROLE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: REPOSITORY_ROLE_OWNER = 1;
   */
  OWNER = 1,

  /**
   * @generated from enum value: REPOSITORY_ROLE_ADMIN = 2;
   */
  ADMIN = 2,

  /**
   * @generated from enum value: REPOSITORY_ROLE_WRITE = 3;
   */
  WRITE = 3,

  /**
   * @generated from enum value: REPOSITORY_ROLE_READ = 4;
   */
  READ = 4,
}

// Describes the enum buf.alpha.registry.v1alpha1.RepositoryRole.
export const RepositoryRoleDesc: GenDescEnum<RepositoryRole> = /*@__PURE__*/
  enumDesc(fileDesc_buf_alpha_registry_v1alpha1_role, 2);

/**
 * The roles that users can have for a Template.
 *
 * @generated from enum buf.alpha.registry.v1alpha1.TemplateRole
 */
export enum TemplateRole {
  /**
   * @generated from enum value: TEMPLATE_ROLE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: TEMPLATE_ROLE_OWNER = 1;
   */
  OWNER = 1,

  /**
   * @generated from enum value: TEMPLATE_ROLE_ADMIN = 2;
   */
  ADMIN = 2,

  /**
   * @generated from enum value: TEMPLATE_ROLE_WRITE = 3;
   */
  WRITE = 3,

  /**
   * @generated from enum value: TEMPLATE_ROLE_READ = 4;
   */
  READ = 4,
}

// Describes the enum buf.alpha.registry.v1alpha1.TemplateRole.
export const TemplateRoleDesc: GenDescEnum<TemplateRole> = /*@__PURE__*/
  enumDesc(fileDesc_buf_alpha_registry_v1alpha1_role, 3);

/**
 * The roles that users can have for a Plugin.
 *
 * @generated from enum buf.alpha.registry.v1alpha1.PluginRole
 */
export enum PluginRole {
  /**
   * @generated from enum value: PLUGIN_ROLE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PLUGIN_ROLE_OWNER = 1;
   */
  OWNER = 1,

  /**
   * @generated from enum value: PLUGIN_ROLE_ADMIN = 2;
   */
  ADMIN = 2,

  /**
   * @generated from enum value: PLUGIN_ROLE_WRITE = 3;
   */
  WRITE = 3,

  /**
   * @generated from enum value: PLUGIN_ROLE_READ = 4;
   */
  READ = 4,
}

// Describes the enum buf.alpha.registry.v1alpha1.PluginRole.
export const PluginRoleDesc: GenDescEnum<PluginRole> = /*@__PURE__*/
  enumDesc(fileDesc_buf_alpha_registry_v1alpha1_role, 4);

