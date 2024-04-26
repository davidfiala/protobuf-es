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

// @generated by protoc-gen-es v2.0.0-alpha.1 with parameter "ts_nocheck=false,target=ts"
// @generated from file buf/alpha/registry/v1alpha1/repository_tag.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import type { GenDescFile, GenDescMessage, GenDescService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { fileDesc_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file buf/alpha/registry/v1alpha1/repository_tag.proto.
 */
export const fileDesc_buf_alpha_registry_v1alpha1_repository_tag: GenDescFile = /*@__PURE__*/
  fileDesc("CjBidWYvYWxwaGEvcmVnaXN0cnkvdjFhbHBoYTEvcmVwb3NpdG9yeV90YWcucHJvdG8SG2J1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMSJ/Cg1SZXBvc2l0b3J5VGFnEgoKAmlkGAEgASgJEi8KC2NyZWF0ZV90aW1lGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIMCgRuYW1lGAQgASgJEhMKC2NvbW1pdF9uYW1lGAUgASgJEg4KBmF1dGhvchgGIAEoCSJWChpDcmVhdGVSZXBvc2l0b3J5VGFnUmVxdWVzdBIVCg1yZXBvc2l0b3J5X2lkGAEgASgJEgwKBG5hbWUYAiABKAkSEwoLY29tbWl0X25hbWUYAyABKAkiYQobQ3JlYXRlUmVwb3NpdG9yeVRhZ1Jlc3BvbnNlEkIKDnJlcG9zaXRvcnlfdGFnGAEgASgLMiouYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlJlcG9zaXRvcnlUYWciagoZTGlzdFJlcG9zaXRvcnlUYWdzUmVxdWVzdBIVCg1yZXBvc2l0b3J5X2lkGAEgASgJEhEKCXBhZ2Vfc2l6ZRgCIAEoDRISCgpwYWdlX3Rva2VuGAMgASgJEg8KB3JldmVyc2UYBCABKAgiegoaTGlzdFJlcG9zaXRvcnlUYWdzUmVzcG9uc2USQwoPcmVwb3NpdG9yeV90YWdzGAEgAygLMiouYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlJlcG9zaXRvcnlUYWcSFwoPbmV4dF9wYWdlX3Rva2VuGAIgASgJMqkCChRSZXBvc2l0b3J5VGFnU2VydmljZRKIAQoTQ3JlYXRlUmVwb3NpdG9yeVRhZxI3LmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5DcmVhdGVSZXBvc2l0b3J5VGFnUmVxdWVzdBo4LmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5DcmVhdGVSZXBvc2l0b3J5VGFnUmVzcG9uc2UShQEKEkxpc3RSZXBvc2l0b3J5VGFncxI2LmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5MaXN0UmVwb3NpdG9yeVRhZ3NSZXF1ZXN0GjcuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkxpc3RSZXBvc2l0b3J5VGFnc1Jlc3BvbnNlYgZwcm90bzM", [fileDesc_google_protobuf_timestamp]);

/**
 * @generated from message buf.alpha.registry.v1alpha1.RepositoryTag
 */
export type RepositoryTag = Message<"buf.alpha.registry.v1alpha1.RepositoryTag"> & {
  /**
   * primary key, unique, immutable
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * immutable
   *
   * @generated from field: google.protobuf.Timestamp create_time = 2;
   */
  createTime?: Timestamp;

  /**
   * We reserve field number '3' for the update_time.
   * google.protobuf.Timestamp update_time = 3;
   * The name of the repository tag, e.g. "6e2e7f24718a76caa32a80d0e2b1841ef2c61403".
   *
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * The name of the commit this tag belongs to.
   *
   * @generated from field: string commit_name = 5;
   */
  commitName: string;

  /**
   * The username of the author of the tag.
   *
   * @generated from field: string author = 6;
   */
  author: string;
};

/**
 * Describes the message buf.alpha.registry.v1alpha1.RepositoryTag.
 * Use `create(RepositoryTagDesc)` to create a new message.
 */
export const RepositoryTagDesc: GenDescMessage<RepositoryTag> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_tag, 0);

/**
 * @generated from message buf.alpha.registry.v1alpha1.CreateRepositoryTagRequest
 */
export type CreateRepositoryTagRequest = Message<"buf.alpha.registry.v1alpha1.CreateRepositoryTagRequest"> & {
  /**
   * The ID of the repository this tag should be created on.
   *
   * @generated from field: string repository_id = 1;
   */
  repositoryId: string;

  /**
   * The name of the repository tag, e.g. "6e2e7f24718a76caa32a80d0e2b1841ef2c61403".
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * The name of the commit this tag should be created for.
   *
   * @generated from field: string commit_name = 3;
   */
  commitName: string;
};

/**
 * Describes the message buf.alpha.registry.v1alpha1.CreateRepositoryTagRequest.
 * Use `create(CreateRepositoryTagRequestDesc)` to create a new message.
 */
export const CreateRepositoryTagRequestDesc: GenDescMessage<CreateRepositoryTagRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_tag, 1);

/**
 * @generated from message buf.alpha.registry.v1alpha1.CreateRepositoryTagResponse
 */
export type CreateRepositoryTagResponse = Message<"buf.alpha.registry.v1alpha1.CreateRepositoryTagResponse"> & {
  /**
   * @generated from field: buf.alpha.registry.v1alpha1.RepositoryTag repository_tag = 1;
   */
  repositoryTag?: RepositoryTag;
};

/**
 * Describes the message buf.alpha.registry.v1alpha1.CreateRepositoryTagResponse.
 * Use `create(CreateRepositoryTagResponseDesc)` to create a new message.
 */
export const CreateRepositoryTagResponseDesc: GenDescMessage<CreateRepositoryTagResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_tag, 2);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRepositoryTagsRequest
 */
export type ListRepositoryTagsRequest = Message<"buf.alpha.registry.v1alpha1.ListRepositoryTagsRequest"> & {
  /**
   * The ID of the repository whose tags should be listed.
   *
   * @generated from field: string repository_id = 1;
   */
  repositoryId: string;

  /**
   * @generated from field: uint32 page_size = 2;
   */
  pageSize: number;

  /**
   * The first page is returned if this is empty.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  /**
   * @generated from field: bool reverse = 4;
   */
  reverse: boolean;
};

/**
 * Describes the message buf.alpha.registry.v1alpha1.ListRepositoryTagsRequest.
 * Use `create(ListRepositoryTagsRequestDesc)` to create a new message.
 */
export const ListRepositoryTagsRequestDesc: GenDescMessage<ListRepositoryTagsRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_tag, 3);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRepositoryTagsResponse
 */
export type ListRepositoryTagsResponse = Message<"buf.alpha.registry.v1alpha1.ListRepositoryTagsResponse"> & {
  /**
   * @generated from field: repeated buf.alpha.registry.v1alpha1.RepositoryTag repository_tags = 1;
   */
  repositoryTags: RepositoryTag[];

  /**
   * There are no more pages if this is empty.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

/**
 * Describes the message buf.alpha.registry.v1alpha1.ListRepositoryTagsResponse.
 * Use `create(ListRepositoryTagsResponseDesc)` to create a new message.
 */
export const ListRepositoryTagsResponseDesc: GenDescMessage<ListRepositoryTagsResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_tag, 4);

/**
 * RepositoryTagService is the Repository tag service.
 *
 * @generated from service buf.alpha.registry.v1alpha1.RepositoryTagService
 */
export const RepositoryTagService: GenDescService<{
  /**
   * CreateRepositoryTag creates a new repository tag.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.RepositoryTagService.CreateRepositoryTag
   */
  createRepositoryTag: {
    kind: "unary";
    I: CreateRepositoryTagRequest;
    O: CreateRepositoryTagResponse;
  },
  /**
   * ListRepositoryTags lists the repository tags associated with a Repository.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.RepositoryTagService.ListRepositoryTags
   */
  listRepositoryTags: {
    kind: "unary";
    I: ListRepositoryTagsRequest;
    O: ListRepositoryTagsResponse;
  },
}
> = /*@__PURE__*/
  serviceDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_tag, 0);

