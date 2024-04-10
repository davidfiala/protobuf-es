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
// @generated from file buf/alpha/registry/v1alpha1/repository_branch.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import type { DescFile, MethodKind } from "@bufbuild/protobuf";
import type { GenDescMessage, GenDescService } from "@bufbuild/protobuf/next/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/next/wkt";
import { fileDesc_google_protobuf_timestamp } from "@bufbuild/protobuf/next/wkt";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_buf_alpha_registry_v1alpha1_repository_branch: DescFile = /*@__PURE__*/
  fileDesc("CjNidWYvYWxwaGEvcmVnaXN0cnkvdjFhbHBoYTEvcmVwb3NpdG9yeV9icmFuY2gucHJvdG8SG2J1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMSJ0ChBSZXBvc2l0b3J5QnJhbmNoEgoKAmlkGAEgASgJEi8KC2NyZWF0ZV90aW1lGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIMCgRuYW1lGAQgASgJEhUKDXJlcG9zaXRvcnlfaWQYBSABKAkiWwodQ3JlYXRlUmVwb3NpdG9yeUJyYW5jaFJlcXVlc3QSFQoNcmVwb3NpdG9yeV9pZBgBIAEoCRIMCgRuYW1lGAIgASgJEhUKDXBhcmVudF9icmFuY2gYAyABKAkiagoeQ3JlYXRlUmVwb3NpdG9yeUJyYW5jaFJlc3BvbnNlEkgKEXJlcG9zaXRvcnlfYnJhbmNoGAEgASgLMi0uYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlJlcG9zaXRvcnlCcmFuY2gibgodTGlzdFJlcG9zaXRvcnlCcmFuY2hlc1JlcXVlc3QSFQoNcmVwb3NpdG9yeV9pZBgBIAEoCRIRCglwYWdlX3NpemUYAiABKA0SEgoKcGFnZV90b2tlbhgDIAEoCRIPCgdyZXZlcnNlGAQgASgIIoUBCh5MaXN0UmVwb3NpdG9yeUJyYW5jaGVzUmVzcG9uc2USSgoTcmVwb3NpdG9yeV9icmFuY2hlcxgBIAMoCzItLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5SZXBvc2l0b3J5QnJhbmNoEhcKD25leHRfcGFnZV90b2tlbhgCIAEoCTLBAgoXUmVwb3NpdG9yeUJyYW5jaFNlcnZpY2USkQEKFkNyZWF0ZVJlcG9zaXRvcnlCcmFuY2gSOi5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuQ3JlYXRlUmVwb3NpdG9yeUJyYW5jaFJlcXVlc3QaOy5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuQ3JlYXRlUmVwb3NpdG9yeUJyYW5jaFJlc3BvbnNlEpEBChZMaXN0UmVwb3NpdG9yeUJyYW5jaGVzEjouYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkxpc3RSZXBvc2l0b3J5QnJhbmNoZXNSZXF1ZXN0GjsuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkxpc3RSZXBvc2l0b3J5QnJhbmNoZXNSZXNwb25zZWIGcHJvdG8z", [fileDesc_google_protobuf_timestamp]);

/**
 * @generated from message buf.alpha.registry.v1alpha1.RepositoryBranch
 */
export type RepositoryBranch = Message<"buf.alpha.registry.v1alpha1.RepositoryBranch"> & {
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
   * The name of the repository branch, i.e. "v1".
   *
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * The ID of the repository this branch belongs to.
   *
   * @generated from field: string repository_id = 5;
   */
  repositoryId: string;
};

// Describes the message buf.alpha.registry.v1alpha1.RepositoryBranch.
// Use `create(RepositoryBranchDesc)` to create a new RepositoryBranch.
export const RepositoryBranchDesc: GenDescMessage<RepositoryBranch> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_branch, 0);

/**
 * @generated from message buf.alpha.registry.v1alpha1.CreateRepositoryBranchRequest
 */
export type CreateRepositoryBranchRequest = Message<"buf.alpha.registry.v1alpha1.CreateRepositoryBranchRequest"> & {
  /**
   * The ID of the repository this branch should be created on.
   *
   * @generated from field: string repository_id = 1;
   */
  repositoryId: string;

  /**
   * The name of the repository branch, i.e. v1.
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * The name of the parent branch. The latest commit on this
   * branch will be used as the branch's parent.
   *
   * @generated from field: string parent_branch = 3;
   */
  parentBranch: string;
};

// Describes the message buf.alpha.registry.v1alpha1.CreateRepositoryBranchRequest.
// Use `create(CreateRepositoryBranchRequestDesc)` to create a new CreateRepositoryBranchRequest.
export const CreateRepositoryBranchRequestDesc: GenDescMessage<CreateRepositoryBranchRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_branch, 1);

/**
 * @generated from message buf.alpha.registry.v1alpha1.CreateRepositoryBranchResponse
 */
export type CreateRepositoryBranchResponse = Message<"buf.alpha.registry.v1alpha1.CreateRepositoryBranchResponse"> & {
  /**
   * @generated from field: buf.alpha.registry.v1alpha1.RepositoryBranch repository_branch = 1;
   */
  repositoryBranch?: RepositoryBranch;
};

// Describes the message buf.alpha.registry.v1alpha1.CreateRepositoryBranchResponse.
// Use `create(CreateRepositoryBranchResponseDesc)` to create a new CreateRepositoryBranchResponse.
export const CreateRepositoryBranchResponseDesc: GenDescMessage<CreateRepositoryBranchResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_branch, 2);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRepositoryBranchesRequest
 */
export type ListRepositoryBranchesRequest = Message<"buf.alpha.registry.v1alpha1.ListRepositoryBranchesRequest"> & {
  /**
   * The ID of the repository whose branches should be listed.
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

// Describes the message buf.alpha.registry.v1alpha1.ListRepositoryBranchesRequest.
// Use `create(ListRepositoryBranchesRequestDesc)` to create a new ListRepositoryBranchesRequest.
export const ListRepositoryBranchesRequestDesc: GenDescMessage<ListRepositoryBranchesRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_branch, 3);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRepositoryBranchesResponse
 */
export type ListRepositoryBranchesResponse = Message<"buf.alpha.registry.v1alpha1.ListRepositoryBranchesResponse"> & {
  /**
   * @generated from field: repeated buf.alpha.registry.v1alpha1.RepositoryBranch repository_branches = 1;
   */
  repositoryBranches: RepositoryBranch[];

  /**
   * There are no more pages if this is empty.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

// Describes the message buf.alpha.registry.v1alpha1.ListRepositoryBranchesResponse.
// Use `create(ListRepositoryBranchesResponseDesc)` to create a new ListRepositoryBranchesResponse.
export const ListRepositoryBranchesResponseDesc: GenDescMessage<ListRepositoryBranchesResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_branch, 4);

/**
 * RepositoryBranchService is the Repository branch service.
 *
 * @generated from service buf.alpha.registry.v1alpha1.RepositoryBranchService
 */
export const RepositoryBranchService: GenDescService<{
  /**
   * CreateRepositoryBranch creates a new repository branch.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.RepositoryBranchService.CreateRepositoryBranch
   */
  createRepositoryBranch: {
    kind: MethodKind.Unary;
    I: CreateRepositoryBranchRequest;
    O: CreateRepositoryBranchResponse;
  },
  /**
   * ListRepositoryBranches lists the repository branches associated with a Repository.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.RepositoryBranchService.ListRepositoryBranches
   */
  listRepositoryBranches: {
    kind: MethodKind.Unary;
    I: ListRepositoryBranchesRequest;
    O: ListRepositoryBranchesResponse;
  },
}
> = /*@__PURE__*/
  serviceDesc(fileDesc_buf_alpha_registry_v1alpha1_repository_branch, 0);

