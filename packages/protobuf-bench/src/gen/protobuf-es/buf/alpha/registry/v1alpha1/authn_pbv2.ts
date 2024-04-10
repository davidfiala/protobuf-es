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
// @generated from file buf/alpha/registry/v1alpha1/authn.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import type { DescFile, MethodKind } from "@bufbuild/protobuf";
import type { GenDescMessage, GenDescService } from "@bufbuild/protobuf/next/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { User } from "./user_pbv2.js";
import { fileDesc_buf_alpha_registry_v1alpha1_user } from "./user_pbv2.js";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_buf_alpha_registry_v1alpha1_authn: DescFile = /*@__PURE__*/
  fileDesc("CididWYvYWxwaGEvcmVnaXN0cnkvdjFhbHBoYTEvYXV0aG4ucHJvdG8SG2J1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMSIXChVHZXRDdXJyZW50VXNlclJlcXVlc3QiSQoWR2V0Q3VycmVudFVzZXJSZXNwb25zZRIvCgR1c2VyGAEgASgLMiEuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlVzZXIiHgocR2V0Q3VycmVudFVzZXJTdWJqZWN0UmVxdWVzdCIwCh1HZXRDdXJyZW50VXNlclN1YmplY3RSZXNwb25zZRIPCgdzdWJqZWN0GAEgASgJMpoCCgxBdXRoblNlcnZpY2USeQoOR2V0Q3VycmVudFVzZXISMi5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuR2V0Q3VycmVudFVzZXJSZXF1ZXN0GjMuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkdldEN1cnJlbnRVc2VyUmVzcG9uc2USjgEKFUdldEN1cnJlbnRVc2VyU3ViamVjdBI5LmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5HZXRDdXJyZW50VXNlclN1YmplY3RSZXF1ZXN0GjouYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkdldEN1cnJlbnRVc2VyU3ViamVjdFJlc3BvbnNlYgZwcm90bzM", [fileDesc_buf_alpha_registry_v1alpha1_user]);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetCurrentUserRequest
 */
export type GetCurrentUserRequest = Message<"buf.alpha.registry.v1alpha1.GetCurrentUserRequest"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.GetCurrentUserRequest.
// Use `create(GetCurrentUserRequestDesc)` to create a new GetCurrentUserRequest.
export const GetCurrentUserRequestDesc: GenDescMessage<GetCurrentUserRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_authn, 0);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetCurrentUserResponse
 */
export type GetCurrentUserResponse = Message<"buf.alpha.registry.v1alpha1.GetCurrentUserResponse"> & {
  /**
   * @generated from field: buf.alpha.registry.v1alpha1.User user = 1;
   */
  user?: User;
};

// Describes the message buf.alpha.registry.v1alpha1.GetCurrentUserResponse.
// Use `create(GetCurrentUserResponseDesc)` to create a new GetCurrentUserResponse.
export const GetCurrentUserResponseDesc: GenDescMessage<GetCurrentUserResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_authn, 1);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetCurrentUserSubjectRequest
 */
export type GetCurrentUserSubjectRequest = Message<"buf.alpha.registry.v1alpha1.GetCurrentUserSubjectRequest"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.GetCurrentUserSubjectRequest.
// Use `create(GetCurrentUserSubjectRequestDesc)` to create a new GetCurrentUserSubjectRequest.
export const GetCurrentUserSubjectRequestDesc: GenDescMessage<GetCurrentUserSubjectRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_authn, 2);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetCurrentUserSubjectResponse
 */
export type GetCurrentUserSubjectResponse = Message<"buf.alpha.registry.v1alpha1.GetCurrentUserSubjectResponse"> & {
  /**
   * The user's subject for mapping to user in identity provider.
   * Note: we do not want to make it part of the User response as
   * it contains potentially sensitive information and the User
   * response is shared with other users.
   *
   * @generated from field: string subject = 1;
   */
  subject: string;
};

// Describes the message buf.alpha.registry.v1alpha1.GetCurrentUserSubjectResponse.
// Use `create(GetCurrentUserSubjectResponseDesc)` to create a new GetCurrentUserSubjectResponse.
export const GetCurrentUserSubjectResponseDesc: GenDescMessage<GetCurrentUserSubjectResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_authn, 3);

/**
 * AuthnService supplies authenication helpers.
 *
 * @generated from service buf.alpha.registry.v1alpha1.AuthnService
 */
export const AuthnService: GenDescService<{
  /**
   * GetCurrentUser gets information associated with the current user.
   *
   * The user's ID is retrieved from the request's authentication header.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.AuthnService.GetCurrentUser
   */
  getCurrentUser: {
    kind: MethodKind.Unary;
    I: GetCurrentUserRequest;
    O: GetCurrentUserResponse;
  },
  /**
   * GetCurrentUserSubject gets the currently logged in users subject.
   *
   * The user's ID is retrieved from the request's authentication header.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.AuthnService.GetCurrentUserSubject
   */
  getCurrentUserSubject: {
    kind: MethodKind.Unary;
    I: GetCurrentUserSubjectRequest;
    O: GetCurrentUserSubjectResponse;
  },
}
> = /*@__PURE__*/
  serviceDesc(fileDesc_buf_alpha_registry_v1alpha1_authn, 0);

