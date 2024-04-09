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
// @generated from file extra/service-example.proto (package spec, syntax proto3)
/* eslint-disable */

import type { DescFile, MethodKind } from "@bufbuild/protobuf";
import type { GenDescEnum, GenDescMessage, GenDescService } from "@bufbuild/protobuf/next/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/next/codegenv1";
import type { Message } from "@bufbuild/protobuf/next";

export const fileDesc_extra_service_example: DescFile = /*@__PURE__*/
  fileDesc("ChtleHRyYS9zZXJ2aWNlLWV4YW1wbGUucHJvdG8SBHNwZWMingEKDkV4YW1wbGVSZXF1ZXN0EhAKCHF1ZXN0aW9uGAEgASgJEiYKC3BsZWFzZV9mYWlsGAIgASgOMhEuc3BlYy5GYWlsUmVxdWVzdBIgChhwbGVhc2VfZGVsYXlfcmVzcG9uc2VfbXMYAyABKAUSMAooZGlzYWJsZV9zZW5kaW5nX2V4YW1wbGVfcmVzcG9uc2VfaGVhZGVycxgEIAEoCCLuAQoPRXhhbXBsZVJlc3BvbnNlEg4KBmFuc3dlchgBIAEoCRJLChR5b3VyX3JlcXVlc3RfaGVhZGVycxgCIAMoCzItLnNwZWMuRXhhbXBsZVJlc3BvbnNlLllvdXJSZXF1ZXN0SGVhZGVyc0VudHJ5EhUKDXlvdXJfZGVhZGxpbmUYAyABKAkSLAoReW91cl9mYWlsX3JlcXVlc3QYBCABKA4yES5zcGVjLkZhaWxSZXF1ZXN0GjkKF1lvdXJSZXF1ZXN0SGVhZGVyc0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAEqWgoLRmFpbFJlcXVlc3QSFQoRRkFJTF9SRVFVRVNUX05PTkUQABIdChlNRVNTQUdFX1RIRU5fRVJST1JfU1RBVFVTEAESFQoRRVJST1JfU1RBVFVTX09OTFkQAjL9AQoORXhhbXBsZVNlcnZpY2USNAoFVW5hcnkSFC5zcGVjLkV4YW1wbGVSZXF1ZXN0GhUuc3BlYy5FeGFtcGxlUmVzcG9uc2USPQoMU2VydmVyU3RyZWFtEhQuc3BlYy5FeGFtcGxlUmVxdWVzdBoVLnNwZWMuRXhhbXBsZVJlc3BvbnNlMAESPQoMQ2xpZW50U3RyZWFtEhQuc3BlYy5FeGFtcGxlUmVxdWVzdBoVLnNwZWMuRXhhbXBsZVJlc3BvbnNlKAESNwoEQmlkaRIULnNwZWMuRXhhbXBsZVJlcXVlc3QaFS5zcGVjLkV4YW1wbGVSZXNwb25zZSgBMAFiBnByb3RvMw");

/**
 * @generated from message spec.ExampleRequest
 */
export type ExampleRequest = Message<"spec.ExampleRequest"> & {
  /**
   * any text
   *
   * @generated from field: string question = 1;
   */
  question: string;

  /**
   * the server should simulate an error in the requested way 
   *
   * @generated from field: spec.FailRequest please_fail = 2;
   */
  pleaseFail: FailRequest;

  /**
   * the server should delay it's response for this amount of milliseconds
   *
   * @generated from field: int32 please_delay_response_ms = 3;
   */
  pleaseDelayResponseMs: number;

  /**
   * by default, the server always writes some custom response headers
   *
   * @generated from field: bool disable_sending_example_response_headers = 4;
   */
  disableSendingExampleResponseHeaders: boolean;
};

// Describes the message spec.ExampleRequest.
// Use `create(ExampleRequestDesc)` to create a new ExampleRequest.
export const ExampleRequestDesc: GenDescMessage<ExampleRequest> = /*@__PURE__*/
  messageDesc(fileDesc_extra_service_example, 0);

/**
 * @generated from message spec.ExampleResponse
 */
export type ExampleResponse = Message<"spec.ExampleResponse"> & {
  /**
   * any text
   *
   * @generated from field: string answer = 1;
   */
  answer: string;

  /**
   * contains the request headers that the server received
   *
   * @generated from field: map<string, string> your_request_headers = 2;
   */
  yourRequestHeaders: { [key: string]: string };

  /**
   * contains the deadline that the server received 
   *
   * @generated from field: string your_deadline = 3;
   */
  yourDeadline: string;

  /**
   * the failure requested 
   *
   * @generated from field: spec.FailRequest your_fail_request = 4;
   */
  yourFailRequest: FailRequest;
};

// Describes the message spec.ExampleResponse.
// Use `create(ExampleResponseDesc)` to create a new ExampleResponse.
export const ExampleResponseDesc: GenDescMessage<ExampleResponse> = /*@__PURE__*/
  messageDesc(fileDesc_extra_service_example, 1);

/**
 * @generated from enum spec.FailRequest
 */
export enum FailRequest {
  /**
   * don't fail
   *
   * @generated from enum value: FAIL_REQUEST_NONE = 0;
   */
  FAIL_REQUEST_NONE = 0,

  /**
   * send an error status trailer after sending a message
   *
   * @generated from enum value: MESSAGE_THEN_ERROR_STATUS = 1;
   */
  MESSAGE_THEN_ERROR_STATUS = 1,

  /**
   * send an error status, don't send any message
   *
   * @generated from enum value: ERROR_STATUS_ONLY = 2;
   */
  ERROR_STATUS_ONLY = 2,
}

// Describes the enum spec.FailRequest.
export const FailRequestDesc: GenDescEnum<FailRequest> = /*@__PURE__*/
  enumDesc(fileDesc_extra_service_example, 0);

/**
 * @generated from service spec.ExampleService
 */
export const ExampleService: GenDescService<{
  /**
   * @generated from rpc spec.ExampleService.Unary
   */
  unary: {
    kind: MethodKind.Unary;
    I: ExampleRequest;
    O: ExampleResponse;
  },
  /**
   * @generated from rpc spec.ExampleService.ServerStream
   */
  serverStream: {
    kind: MethodKind.ServerStreaming;
    I: ExampleRequest;
    O: ExampleResponse;
  },
  /**
   * @generated from rpc spec.ExampleService.ClientStream
   */
  clientStream: {
    kind: MethodKind.ClientStreaming;
    I: ExampleRequest;
    O: ExampleResponse;
  },
  /**
   * @generated from rpc spec.ExampleService.Bidi
   */
  bidi: {
    kind: MethodKind.BiDiStreaming;
    I: ExampleRequest;
    O: ExampleResponse;
  },
}
> = /*@__PURE__*/
  serviceDesc(fileDesc_extra_service_example, 0);

