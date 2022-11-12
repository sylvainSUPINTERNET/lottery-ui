import * as jspb from 'google-protobuf'



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

export class HistoryEvent extends jspb.Message {
  getWinnernickname(): string;
  setWinnernickname(value: string): HistoryEvent;

  getItemprice(): string;
  setItemprice(value: string): HistoryEvent;

  getWinat(): number;
  setWinat(value: number): HistoryEvent;

  getItemurl(): string;
  setItemurl(value: string): HistoryEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistoryEvent.AsObject;
  static toObject(includeInstance: boolean, msg: HistoryEvent): HistoryEvent.AsObject;
  static serializeBinaryToWriter(message: HistoryEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistoryEvent;
  static deserializeBinaryFromReader(message: HistoryEvent, reader: jspb.BinaryReader): HistoryEvent;
}

export namespace HistoryEvent {
  export type AsObject = {
    winnernickname: string,
    itemprice: string,
    winat: number,
    itemurl: string,
  }
}

export class HistoryWinEventResponseStream extends jspb.Message {
  getHistoryeventlistList(): Array<HistoryEvent>;
  setHistoryeventlistList(value: Array<HistoryEvent>): HistoryWinEventResponseStream;
  clearHistoryeventlistList(): HistoryWinEventResponseStream;
  addHistoryeventlist(value?: HistoryEvent, index?: number): HistoryEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistoryWinEventResponseStream.AsObject;
  static toObject(includeInstance: boolean, msg: HistoryWinEventResponseStream): HistoryWinEventResponseStream.AsObject;
  static serializeBinaryToWriter(message: HistoryWinEventResponseStream, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistoryWinEventResponseStream;
  static deserializeBinaryFromReader(message: HistoryWinEventResponseStream, reader: jspb.BinaryReader): HistoryWinEventResponseStream;
}

export namespace HistoryWinEventResponseStream {
  export type AsObject = {
    historyeventlistList: Array<HistoryEvent.AsObject>,
  }
}

