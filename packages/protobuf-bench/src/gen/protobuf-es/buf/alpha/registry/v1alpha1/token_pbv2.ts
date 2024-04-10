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
// @generated from file buf/alpha/registry/v1alpha1/token.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import type { DescFile, MethodKind } from "@bufbuild/protobuf";
import type { GenDescMessage, GenDescService } from "@bufbuild/protobuf/next/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/next/wkt";
import { fileDesc_google_protobuf_timestamp } from "@bufbuild/protobuf/next/wkt";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_buf_alpha_registry_v1alpha1_token: DescFile = /*@__PURE__*/
  fileDesc("CididWYvYWxwaGEvcmVnaXN0cnkvdjFhbHBoYTEvdG9rZW4ucHJvdG8SG2J1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMSKDAQoFVG9rZW4SCgoCaWQYASABKAkSLwoLY3JlYXRlX3RpbWUYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi8KC2V4cGlyZV90aW1lGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIMCgRub3RlGAQgASgJIlMKEkNyZWF0ZVRva2VuUmVxdWVzdBIMCgRub3RlGAEgASgJEi8KC2V4cGlyZV90aW1lGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCIkChNDcmVhdGVUb2tlblJlc3BvbnNlEg0KBXRva2VuGAEgASgJIiMKD0dldFRva2VuUmVxdWVzdBIQCgh0b2tlbl9pZBgBIAEoCSJFChBHZXRUb2tlblJlc3BvbnNlEjEKBXRva2VuGAEgASgLMiIuYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLlRva2VuIksKEUxpc3RUb2tlbnNSZXF1ZXN0EhEKCXBhZ2Vfc2l6ZRgBIAEoDRISCgpwYWdlX3Rva2VuGAIgASgJEg8KB3JldmVyc2UYAyABKAgiYQoSTGlzdFRva2Vuc1Jlc3BvbnNlEjIKBnRva2VucxgBIAMoCzIiLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5Ub2tlbhIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkiJgoSRGVsZXRlVG9rZW5SZXF1ZXN0EhAKCHRva2VuX2lkGAEgASgJIhUKE0RlbGV0ZVRva2VuUmVzcG9uc2UyygMKDFRva2VuU2VydmljZRJwCgtDcmVhdGVUb2tlbhIvLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5DcmVhdGVUb2tlblJlcXVlc3QaMC5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuQ3JlYXRlVG9rZW5SZXNwb25zZRJnCghHZXRUb2tlbhIsLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5HZXRUb2tlblJlcXVlc3QaLS5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuR2V0VG9rZW5SZXNwb25zZRJtCgpMaXN0VG9rZW5zEi4uYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkxpc3RUb2tlbnNSZXF1ZXN0Gi8uYnVmLmFscGhhLnJlZ2lzdHJ5LnYxYWxwaGExLkxpc3RUb2tlbnNSZXNwb25zZRJwCgtEZWxldGVUb2tlbhIvLmJ1Zi5hbHBoYS5yZWdpc3RyeS52MWFscGhhMS5EZWxldGVUb2tlblJlcXVlc3QaMC5idWYuYWxwaGEucmVnaXN0cnkudjFhbHBoYTEuRGVsZXRlVG9rZW5SZXNwb25zZWIGcHJvdG8z", [fileDesc_google_protobuf_timestamp]);

/**
 * @generated from message buf.alpha.registry.v1alpha1.Token
 */
export type Token = Message<"buf.alpha.registry.v1alpha1.Token"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: google.protobuf.Timestamp create_time = 2;
   */
  createTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp expire_time = 3;
   */
  expireTime?: Timestamp;

  /**
   * @generated from field: string note = 4;
   */
  note: string;
};

// Describes the message buf.alpha.registry.v1alpha1.Token.
// Use `create(TokenDesc)` to create a new Token.
export const TokenDesc: GenDescMessage<Token> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_token, 0);

/**
 * @generated from message buf.alpha.registry.v1alpha1.CreateTokenRequest
 */
export type CreateTokenRequest = Message<"buf.alpha.registry.v1alpha1.CreateTokenRequest"> & {
  /**
   * @generated from field: string note = 1;
   */
  note: string;

  /**
   * The time until which the token should be valid.
   * Must be in the future. May be null for no expiry.
   *
   * @generated from field: google.protobuf.Timestamp expire_time = 2;
   */
  expireTime?: Timestamp;
};

// Describes the message buf.alpha.registry.v1alpha1.CreateTokenRequest.
// Use `create(CreateTokenRequestDesc)` to create a new CreateTokenRequest.
export const CreateTokenRequestDesc: GenDescMessage<CreateTokenRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_token, 1);

/**
 * @generated from message buf.alpha.registry.v1alpha1.CreateTokenResponse
 */
export type CreateTokenResponse = Message<"buf.alpha.registry.v1alpha1.CreateTokenResponse"> & {
  /**
   * The plaintext token to use for authentication.
   *
   * @generated from field: string token = 1;
   */
  token: string;
};

// Describes the message buf.alpha.registry.v1alpha1.CreateTokenResponse.
// Use `create(CreateTokenResponseDesc)` to create a new CreateTokenResponse.
export const CreateTokenResponseDesc: GenDescMessage<CreateTokenResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_token, 2);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetTokenRequest
 */
export type GetTokenRequest = Message<"buf.alpha.registry.v1alpha1.GetTokenRequest"> & {
  /**
   * @generated from field: string token_id = 1;
   */
  tokenId: string;
};

// Describes the message buf.alpha.registry.v1alpha1.GetTokenRequest.
// Use `create(GetTokenRequestDesc)` to create a new GetTokenRequest.
export const GetTokenRequestDesc: GenDescMessage<GetTokenRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_token, 3);

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetTokenResponse
 */
export type GetTokenResponse = Message<"buf.alpha.registry.v1alpha1.GetTokenResponse"> & {
  /**
   * @generated from field: buf.alpha.registry.v1alpha1.Token token = 1;
   */
  token?: Token;
};

// Describes the message buf.alpha.registry.v1alpha1.GetTokenResponse.
// Use `create(GetTokenResponseDesc)` to create a new GetTokenResponse.
export const GetTokenResponseDesc: GenDescMessage<GetTokenResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_token, 4);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListTokensRequest
 */
export type ListTokensRequest = Message<"buf.alpha.registry.v1alpha1.ListTokensRequest"> & {
  /**
   * @generated from field: uint32 page_size = 1;
   */
  pageSize: number;

  /**
   * The first page is returned if this is empty.
   *
   * @generated from field: string page_token = 2;
   */
  pageToken: string;

  /**
   * @generated from field: bool reverse = 3;
   */
  reverse: boolean;
};

// Describes the message buf.alpha.registry.v1alpha1.ListTokensRequest.
// Use `create(ListTokensRequestDesc)` to create a new ListTokensRequest.
export const ListTokensRequestDesc: GenDescMessage<ListTokensRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_token, 5);

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListTokensResponse
 */
export type ListTokensResponse = Message<"buf.alpha.registry.v1alpha1.ListTokensResponse"> & {
  /**
   * @generated from field: repeated buf.alpha.registry.v1alpha1.Token tokens = 1;
   */
  tokens: Token[];

  /**
   * There are no more pages if this is empty.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;
};

// Describes the message buf.alpha.registry.v1alpha1.ListTokensResponse.
// Use `create(ListTokensResponseDesc)` to create a new ListTokensResponse.
export const ListTokensResponseDesc: GenDescMessage<ListTokensResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_token, 6);

/**
 * @generated from message buf.alpha.registry.v1alpha1.DeleteTokenRequest
 */
export type DeleteTokenRequest = Message<"buf.alpha.registry.v1alpha1.DeleteTokenRequest"> & {
  /**
   * @generated from field: string token_id = 1;
   */
  tokenId: string;
};

// Describes the message buf.alpha.registry.v1alpha1.DeleteTokenRequest.
// Use `create(DeleteTokenRequestDesc)` to create a new DeleteTokenRequest.
export const DeleteTokenRequestDesc: GenDescMessage<DeleteTokenRequest> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_token, 7);

/**
 * @generated from message buf.alpha.registry.v1alpha1.DeleteTokenResponse
 */
export type DeleteTokenResponse = Message<"buf.alpha.registry.v1alpha1.DeleteTokenResponse"> & {
};

// Describes the message buf.alpha.registry.v1alpha1.DeleteTokenResponse.
// Use `create(DeleteTokenResponseDesc)` to create a new DeleteTokenResponse.
export const DeleteTokenResponseDesc: GenDescMessage<DeleteTokenResponse> = /*@__PURE__*/
  messageDesc(fileDesc_buf_alpha_registry_v1alpha1_token, 8);

/**
 * TokenService is the Token service.
 *
 * @generated from service buf.alpha.registry.v1alpha1.TokenService
 */
export const TokenService: GenDescService<{
  /**
   * CreateToken creates a new token suitable for machine-to-machine authentication.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.TokenService.CreateToken
   */
  createToken: {
    kind: MethodKind.Unary;
    I: CreateTokenRequest;
    O: CreateTokenResponse;
  },
  /**
   * GetToken gets the specific token for the user
   *
   * This method requires authentication.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.TokenService.GetToken
   */
  getToken: {
    kind: MethodKind.Unary;
    I: GetTokenRequest;
    O: GetTokenResponse;
  },
  /**
   * ListTokens lists the users active tokens
   *
   * This method requires authentication.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.TokenService.ListTokens
   */
  listTokens: {
    kind: MethodKind.Unary;
    I: ListTokensRequest;
    O: ListTokensResponse;
  },
  /**
   * DeleteToken deletes an existing token.
   *
   * This method requires authentication.
   *
   * @generated from rpc buf.alpha.registry.v1alpha1.TokenService.DeleteToken
   */
  deleteToken: {
    kind: MethodKind.Unary;
    I: DeleteTokenRequest;
    O: DeleteTokenResponse;
  },
}
> = /*@__PURE__*/
  serviceDesc(fileDesc_buf_alpha_registry_v1alpha1_token, 0);

