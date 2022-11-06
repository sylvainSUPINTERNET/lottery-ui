import * as jspb from 'google-protobuf'



export class Greeting extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): Greeting;

  getLastName(): string;
  setLastName(value: string): Greeting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Greeting.AsObject;
  static toObject(includeInstance: boolean, msg: Greeting): Greeting.AsObject;
  static serializeBinaryToWriter(message: Greeting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Greeting;
  static deserializeBinaryFromReader(message: Greeting, reader: jspb.BinaryReader): Greeting;
}

export namespace Greeting {
  export type AsObject = {
    firstName: string,
    lastName: string,
  }
}

export class GreetRequest extends jspb.Message {
  getGreeting(): Greeting | undefined;
  setGreeting(value?: Greeting): GreetRequest;
  hasGreeting(): boolean;
  clearGreeting(): GreetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GreetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GreetRequest): GreetRequest.AsObject;
  static serializeBinaryToWriter(message: GreetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GreetRequest;
  static deserializeBinaryFromReader(message: GreetRequest, reader: jspb.BinaryReader): GreetRequest;
}

export namespace GreetRequest {
  export type AsObject = {
    greeting?: Greeting.AsObject,
  }
}

export class GreetResponse extends jspb.Message {
  getResult(): string;
  setResult(value: string): GreetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GreetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GreetResponse): GreetResponse.AsObject;
  static serializeBinaryToWriter(message: GreetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GreetResponse;
  static deserializeBinaryFromReader(message: GreetResponse, reader: jspb.BinaryReader): GreetResponse;
}

export namespace GreetResponse {
  export type AsObject = {
    result: string,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class GreetResponseStream extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): GreetResponseStream;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GreetResponseStream.AsObject;
  static toObject(includeInstance: boolean, msg: GreetResponseStream): GreetResponseStream.AsObject;
  static serializeBinaryToWriter(message: GreetResponseStream, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GreetResponseStream;
  static deserializeBinaryFromReader(message: GreetResponseStream, reader: jspb.BinaryReader): GreetResponseStream;
}

export namespace GreetResponseStream {
  export type AsObject = {
    message: string,
  }
}

