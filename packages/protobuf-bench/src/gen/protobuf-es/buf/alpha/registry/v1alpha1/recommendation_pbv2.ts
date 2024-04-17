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
// @generated from file buf/alpha/registry/v1alpha1/recommendation.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import type { GenDescFile, GenDescMessage, GenDescService } from "@bufbuild/protobuf/next/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/next/wkt";
import { fileDesc_google_protobuf_timestamp } from "@bufbuild/protobuf/next/wkt";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_buf_alpha_registry_v1alpha1_recommendation: GenDescFile = /*@__PURE__*/
  fileDesc("CjBidWYvYWxwaGEvcmVnaXN0cnkvdjFhbHBoYTEvcmVjb21tZW5kYXRpb24ucHJvdG8SG2J1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMSKRAQoVUmVjb21tZW5kZWRSZXBvc2l0b3J5Eg0KBW93bmVyGAEgASgJEgwKBG5hbWUYAiABKAkSLwoLY3JlYXRlX3RpbWUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEhMKC2Rlc2NyaXB0aW9uGAQgASgJEhUKDXJlcG9zaXRvcnlfaWQYBSABKAkiXAoTUmVjb21tZW5kZWRUZW1wbGF0ZRINCgVvd25lchgBIAEoCRIMCgRuYW1lGAIgASgJEhMKC2Rlc2NyaXB0aW9uGAMgASgJEhMKC3RlbXBsYXRlX2lkGAQgASgJIkYKGFNldFJlY29tbWVuZGVkUmVwb3NpdG9yeRIVCg1yZXBvc2l0b3J5X2lkGAEgASgJEhMKC2Rlc2NyaXB0aW9uGAIgASgJIkIKFlNldFJlY29tbWVuZGVkVGVtcGxhdGUSEwoLdGVtcGxhdGVfaWQYASABKAkSEwoLZGVzY3JpcHRpb24YAiABKAkiIAoeUmVjb21tZW5kZWRSZXBvc2l0b3JpZXNSZXF1ZXN0ImsKH1JlY29tbWVuZGVkUmVwb3NpdG9yaWVzUmVzcG9uc2USSAoMcmVwb3NpdG9yaWVzGAEgAygLMjIuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlJlY29tbWVuZGVkUmVwb3NpdG9yeSIdChtSZWNvbW1lbmRlZFRlbXBsYXRlc1JlcXVlc3QiYwocUmVjb21tZW5kZWRUZW1wbGF0ZXNSZXNwb25zZRJDCgl0ZW1wbGF0ZXMYASADKAsyMC5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuUmVjb21tZW5kZWRUZW1wbGF0ZSIkCiJMaXN0UmVjb21tZW5kZWRSZXBvc2l0b3JpZXNSZXF1ZXN0Im8KI0xpc3RSZWNvbW1lbmRlZFJlcG9zaXRvcmllc1Jlc3BvbnNlEkgKDHJlcG9zaXRvcmllcxgBIAMoCzIyLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5SZWNvbW1lbmRlZFJlcG9zaXRvcnkiIQofTGlzdFJlY29tbWVuZGVkVGVtcGxhdGVzUmVxdWVzdCJnCiBMaXN0UmVjb21tZW5kZWRUZW1wbGF0ZXNSZXNwb25zZRJDCgl0ZW1wbGF0ZXMYASADKAsyMC5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuUmVjb21tZW5kZWRUZW1wbGF0ZSJwCiFTZXRSZWNvbW1lbmRlZFJlcG9zaXRvcmllc1JlcXVlc3QSSwoMcmVwb3NpdG9yaWVzGAEgAygLMjUuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlNldFJlY29tbWVuZGVkUmVwb3NpdG9yeSIkCiJTZXRSZWNvbW1lbmRlZFJlcG9zaXRvcmllc1Jlc3BvbnNlImgKHlNldFJlY29tbWVuZGVkVGVtcGxhdGVzUmVxdWVzdBJGCgl0ZW1wbGF0ZXMYASADKAsyMy5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuU2V0UmVjb21tZW5kZWRUZW1wbGF0ZSIhCh9TZXRSZWNvbW1lbmRlZFRlbXBsYXRlc1Jlc3BvbnNlMrAHChVSZWNvbW1lbmRhdGlvblNlcnZpY2USlAEKF1JlY29tbWVuZGVkUmVwb3NpdG9yaWVzEjsuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlJlY29tbWVuZGVkUmVwb3NpdG9yaWVzUmVxdWVzdBo8LmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5SZWNvbW1lbmRlZFJlcG9zaXRvcmllc1Jlc3BvbnNlEosBChRSZWNvbW1lbmRlZFRlbXBsYXRlcxI4LmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5SZWNvbW1lbmRlZFRlbXBsYXRlc1JlcXVlc3QaOS5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuUmVjb21tZW5kZWRUZW1wbGF0ZXNSZXNwb25zZRKgAQobTGlzdFJlY29tbWVuZGVkUmVwb3NpdG9yaWVzEj8uYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkxpc3RSZWNvbW1lbmRlZFJlcG9zaXRvcmllc1JlcXVlc3QaQC5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuTGlzdFJlY29tbWVuZGVkUmVwb3NpdG9yaWVzUmVzcG9uc2USlwEKGExpc3RSZWNvbW1lbmRlZFRlbXBsYXRlcxI8LmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5MaXN0UmVjb21tZW5kZWRUZW1wbGF0ZXNSZXF1ZXN0Gj0uYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkxpc3RSZWNvbW1lbmRlZFRlbXBsYXRlc1Jlc3BvbnNlEp0BChpTZXRSZWNvbW1lbmRlZFJlcG9zaXRvcmllcxI+LmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5TZXRSZWNvbW1lbmRlZFJlcG9zaXRvcmllc1JlcXVlc3QaPy5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuU2V0UmVjb21tZW5kZWRSZXBvc2l0b3JpZXNSZXNwb25zZRKUAQoXU2V0UmVjb21tZW5kZWRUZW1wbGF0ZXMSOy5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuU2V0UmVjb21tZW5kZWRUZW1wbGF0ZXNSZXF1ZXN0GjwuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlNldFJlY29tbWVuZGVkVGVtcGxhdGVzUmVzcG9uc2ViBnByb3RvMw", [fileDesc_google_protobuf_timestamp]);

/**
 * RecommendedRepository is the information about a repository needed to link to
 * its owner page.
 *
 * @generated from message buf.alpha.registry.v1alpha1.RecommendedRepository
 */
export type RecommendedRepository = Message<"buf.alpha.registry.v1alpha1.RecommendedRepository"> & {
  /**
   * @generated from field: string owner = 1;
   */
  owner: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: google.protobuf.Timestamp create_time = 3;
   */
  createTime?: Timestamp;

  /**
   * @generated from field: string description = 4;
   */
  description: string;

  /**
   * @generated from field: string repository_id = 5;
   */
  repositoryId: string;
};

// Describes the message buf.alpha.registry.v1alpha1.RecommendedRepository.
// Use `create(RecommendedRepositoryDesc)` to create a new RecommendedRepository.
export const RecommendedRepositoryDesc: GenDescMessage<RecommendedRepository> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_recommendation, 0);

/**
 * RecommendedTemplate is the information needed to recommend a template and link
 * to its owner page.
 *
 * @generated from message buf.alpha.registry.v1alpha1.RecommendedTemplate
 */
export type RecommendedTemplate = Message<"buf.alpha.registry.v1alpha1.RecommendedTemplate"> & {
  /**
   * @generated from field: string owner = 1;
   */
  owner: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * @generated from field: string template_id = 4;
   */
  templateId: string;
};

// Describes the message buf.alpha.registry.v1alpha1.RecommendedTemplate.
// Use `create(RecommendedTemplateDesc)` to create a new RecommendedTemplate.
export const RecommendedTemplateDesc: GenDescMessage<RecommendedTemplate> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_recommendation, 1);

/**
 * SetRecommendedRepository is the information needed to configure a repository recommendation
 *
 * @generated from message buf.alpha.registry.v1alpha1.SetRecommendedRepository
 */
export type SetRecommendedRepository = Message<"buf.alpha.registry.v1alpha1.SetRecommendedRepository"> & {
  /**
   * @generated from field: string repository_id = 1;
   */
  repositoryId: string;

  /**
   * @generated from field: string description = 2;
   */
  description: string;
};

// Describes the message buf.alpha.registry.v1alpha1.SetRecommendedRepository.
// Use `create(SetRecommendedRepositoryDesc)` to create a new SetRecommendedRepository.
export const SetRecommendedRepositoryDesc: GenDescMessage<SetRecommendedRepository> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_recommendation, 2);

/**
 * SetRecommendedTemplate is the information needed to configure a template recommendation
 *
 * @generated from message buf.alpha.registry.v1alpha1.SetRecommendedTemplate
 */
export type SetRecommendedTemplate = Message<"buf.alpha.registry.v1alpha1.SetRecommendedTemplate"> & {
  /**
   * @generated from field: string template_id = 1;
   */
  templateId: string;

  /**
   * @generated from field: string description = 2;
   */
  description: string;
};

// Describes the message buf.alpha.registry.v1alpha1.SetRecommendedTemplate.
// Use `create(SetRecommendedTemplateDesc)` to create a new SetRecommendedTemplate.
export const SetRecommendedTemplateDesc: GenDescMessage<SetRecommendedTemplate> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_recommendation, 3);

/**
 * @generated from message buf.alpha.registry.v1alpha1.RecommendedRepositoriesRequest
 */
export type RecommendedRepositoriesRequest = Message<"buf.alpha.registry.v1alpha1.RecommendedRepositoriesRequest"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.RecommendedRepositoriesRequest.
// Use `create(RecommendedRepositoriesRequestDesc)` to create a new RecommendedRepositoriesRequest.
export const RecommendedRepositoriesRequestDesc: GenDescMessage<RecommendedRepositoriesRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_recommendation, 4);

/**
 * @generated from message buf.alpha.registry.v1alpha1.RecommendedRepositoriesResponse
 */
export type RecommendedRepositoriesResponse = Message<"buf.alpha.registry.v1alpha1.RecommendedRepositoriesResponse"> & {
  /**
   * @generated from field: repeated buf.alpha.registry.v1alpha1.RecommendedRepository repositories = 1;
   */
  repositories: RecommendedRepository[];
};

// Describes the message buf.alpha.registry.v1alpha1.RecommendedRepositoriesResponse.
// Use `create(RecommendedRepositoriesResponseDesc)` to create a new RecommendedRepositoriesResponse.
export const RecommendedRepositoriesResponseDesc: GenDescMessage<RecommendedRepositoriesResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_recommendation, 5);

/**
 * @generated from message buf.alpha.registry.v1alpha1.RecommendedTemplatesRequest
 */
export type RecommendedTemplatesRequest = Message<"buf.alpha.registry.v1alpha1.RecommendedTemplatesRequest"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.RecommendedTemplatesRequest.
// Use `create(RecommendedTemplatesRequestDesc)` to create a new RecommendedTemplatesRequest.
export const RecommendedTemplatesRequestDesc: GenDescMessage<RecommendedTemplatesRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_recommendation, 6);

/**
 * @generated from message buf.alpha.registry.v1alpha1.RecommendedTemplatesResponse
 */
export type RecommendedTemplatesResponse = Message<"buf.alpha.registry.v1alpha1.RecommendedTemplatesResponse"> & {
  /**
   * @generated from field: repeated buf.alpha.registry.v1alpha1.RecommendedTemplate templates = 1;
   */
  templates: RecommendedTemplate[];
};

// Describes the message buf.alpha.registry.v1alpha1.RecommendedTemplatesResponse.
// Use `create(RecommendedTemplatesResponseDesc)` to create a new RecommendedTemplatesResponse.
export const RecommendedTemplatesResponseDesc: GenDescMessage<RecommendedTemplatesResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_recommendation, 7);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRecommendedRepositoriesRequest
 */
export type ListRecommendedRepositoriesRequest = Message<"buf.alpha.registry.v1alpha1.ListRecommendedRepositoriesRequest"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.ListRecommendedRepositoriesRequest.
// Use `create(ListRecommendedRepositoriesRequestDesc)` to create a new ListRecommendedRepositoriesRequest.
export const ListRecommendedRepositoriesRequestDesc: GenDescMessage<ListRecommendedRepositoriesRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_recommendation, 8);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRecommendedRepositoriesResponse
 */
export type ListRecommendedRepositoriesResponse = Message<"buf.alpha.registry.v1alpha1.ListRecommendedRepositoriesResponse"> & {
  /**
   * @generated from field: repeated buf.alpha.registry.v1alpha1.RecommendedRepository repositories = 1;
   */
  repositories: RecommendedRepository[];
};

// Describes the message buf.alpha.registry.v1alpha1.ListRecommendedRepositoriesResponse.
// Use `create(ListRecommendedRepositoriesResponseDesc)` to create a new ListRecommendedRepositoriesResponse.
export const ListRecommendedRepositoriesResponseDesc: GenDescMessage<ListRecommendedRepositoriesResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_recommendation, 9);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRecommendedTemplatesRequest
 */
export type ListRecommendedTemplatesRequest = Message<"buf.alpha.registry.v1alpha1.ListRecommendedTemplatesRequest"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.ListRecommendedTemplatesRequest.
// Use `create(ListRecommendedTemplatesRequestDesc)` to create a new ListRecommendedTemplatesRequest.
export const ListRecommendedTemplatesRequestDesc: GenDescMessage<ListRecommendedTemplatesRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_recommendation, 10);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRecommendedTemplatesResponse
 */
export type ListRecommendedTemplatesResponse = Message<"buf.alpha.registry.v1alpha1.ListRecommendedTemplatesResponse"> & {
  /**
   * @generated from field: repeated buf.alpha.registry.v1alpha1.RecommendedTemplate templates = 1;
   */
  templates: RecommendedTemplate[];
};

// Describes the message buf.alpha.registry.v1alpha1.ListRecommendedTemplatesResponse.
// Use `create(ListRecommendedTemplatesResponseDesc)` to create a new ListRecommendedTemplatesResponse.
export const ListRecommendedTemplatesResponseDesc: GenDescMessage<ListRecommendedTemplatesResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_recommendation, 11);

/**
 * @generated from message buf.alpha.registry.v1alpha1.SetRecommendedRepositoriesRequest
 */
export type SetRecommendedRepositoriesRequest = Message<"buf.alpha.registry.v1alpha1.SetRecommendedRepositoriesRequest"> & {
  /**
   * @generated from field: repeated buf.alpha.registry.v1alpha1.SetRecommendedRepository repositories = 1;
   */
  repositories: SetRecommendedRepository[];
};

// Describes the message buf.alpha.registry.v1alpha1.SetRecommendedRepositoriesRequest.
// Use `create(SetRecommendedRepositoriesRequestDesc)` to create a new SetRecommendedRepositoriesRequest.
export const SetRecommendedRepositoriesRequestDesc: GenDescMessage<SetRecommendedRepositoriesRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_recommendation, 12);

/**
 * @generated from message buf.alpha.registry.v1alpha1.SetRecommendedRepositoriesResponse
 */
export type SetRecommendedRepositoriesResponse = Message<"buf.alpha.registry.v1alpha1.SetRecommendedRepositoriesResponse"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.SetRecommendedRepositoriesResponse.
// Use `create(SetRecommendedRepositoriesResponseDesc)` to create a new SetRecommendedRepositoriesResponse.
export const SetRecommendedRepositoriesResponseDesc: GenDescMessage<SetRecommendedRepositoriesResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_recommendation, 13);

/**
 * @generated from message buf.alpha.registry.v1alpha1.SetRecommendedTemplatesRequest
 */
export type SetRecommendedTemplatesRequest = Message<"buf.alpha.registry.v1alpha1.SetRecommendedTemplatesRequest"> & {
  /**
   * @generated from field: repeated buf.alpha.registry.v1alpha1.SetRecommendedTemplate templates = 1;
   */
  templates: SetRecommendedTemplate[];
};

// Describes the message buf.alpha.registry.v1alpha1.SetRecommendedTemplatesRequest.
// Use `create(SetRecommendedTemplatesRequestDesc)` to create a new SetRecommendedTemplatesRequest.
export const SetRecommendedTemplatesRequestDesc: GenDescMessage<SetRecommendedTemplatesRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_recommendation, 14);

/**
 * @generated from message buf.alpha.registry.v1alpha1.SetRecommendedTemplatesResponse
 */
export type SetRecommendedTemplatesResponse = Message<"buf.alpha.registry.v1alpha1.SetRecommendedTemplatesResponse"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.SetRecommendedTemplatesResponse.
// Use `create(SetRecommendedTemplatesResponseDesc)` to create a new SetRecommendedTemplatesResponse.
export const SetRecommendedTemplatesResponseDesc: GenDescMessage<SetRecommendedTemplatesResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_recommendation, 15);

/**
 * RecommendationService is the recommendation service.
 *
 * @generated from service buf.alpha.registry.v1alpha1.RecommendationService
 */
export const RecommendationService: GenDescService<{
  /**
   * RecommendedRepositories returns a list of recommended repositories.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.RecommendationService.RecommendedRepositories
   */
  recommendedRepositories: {
    kind: "unary";
    I: RecommendedRepositoriesRequest;
    O: RecommendedRepositoriesResponse;
  },
  /**
   * RecommendedTemplates returns a list of recommended templates.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.RecommendationService.RecommendedTemplates
   */
  recommendedTemplates: {
    kind: "unary";
    I: RecommendedTemplatesRequest;
    O: RecommendedTemplatesResponse;
  },
  /**
   * ListRecommendedRepositories returns a list of recommended repositories that user have access to.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.RecommendationService.ListRecommendedRepositories
   */
  listRecommendedRepositories: {
    kind: "unary";
    I: ListRecommendedRepositoriesRequest;
    O: ListRecommendedRepositoriesResponse;
  },
  /**
   * ListRecommendedTemplates returns a list of recommended templates that user have access to.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.RecommendationService.ListRecommendedTemplates
   */
  listRecommendedTemplates: {
    kind: "unary";
    I: ListRecommendedTemplatesRequest;
    O: ListRecommendedTemplatesResponse;
  },
  /**
   * SetRecommendedRepositories set the list of repository recommendations in the server.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.RecommendationService.SetRecommendedRepositories
   */
  setRecommendedRepositories: {
    kind: "unary";
    I: SetRecommendedRepositoriesRequest;
    O: SetRecommendedRepositoriesResponse;
  },
  /**
   * SetRecommendedTemplates set the list of template recommendations in the server.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.RecommendationService.SetRecommendedTemplates
   */
  setRecommendedTemplates: {
    kind: "unary";
    I: SetRecommendedTemplatesRequest;
    O: SetRecommendedTemplatesResponse;
  },
}
> = /*@__PURE__*/
  serviceDesc(fileDesc_buf_alpha_registry_v1alpha1_recommendation, 0);

