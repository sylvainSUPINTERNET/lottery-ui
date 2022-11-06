/**
 * @fileoverview gRPC-Web generated client stub for greet
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v0.0.0
// source: src/protos/greet.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as src_protos_greet_pb from '../../src/protos/greet_pb';


export class GreeterClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGreet = new grpcWeb.MethodDescriptor(
    '/greet.Greeter/Greet',
    grpcWeb.MethodType.UNARY,
    src_protos_greet_pb.GreetRequest,
    src_protos_greet_pb.GreetResponse,
    (request: src_protos_greet_pb.GreetRequest) => {
      return request.serializeBinary();
    },
    src_protos_greet_pb.GreetResponse.deserializeBinary
  );

  greet(
    request: src_protos_greet_pb.GreetRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_protos_greet_pb.GreetResponse>;

  greet(
    request: src_protos_greet_pb.GreetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: src_protos_greet_pb.GreetResponse) => void): grpcWeb.ClientReadableStream<src_protos_greet_pb.GreetResponse>;

  greet(
    request: src_protos_greet_pb.GreetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: src_protos_greet_pb.GreetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/greet.Greeter/Greet',
        request,
        metadata || {},
        this.methodDescriptorGreet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/greet.Greeter/Greet',
    request,
    metadata || {},
    this.methodDescriptorGreet);
  }

}

