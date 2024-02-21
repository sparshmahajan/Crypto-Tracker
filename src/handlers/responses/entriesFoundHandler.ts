import { Response } from "express";

export class EntriesFoundHandler {
  private res: Response;
  private data: any;
  private message: string;
  private entriesFound: number;
  private statusCode = 200;

  constructor(res: Response, message: string, data: any, length: number = 0) {
    this.res = res;
    this.entriesFound = data.length || length;
    this.message = message;
    this.data = data;
    this.send();
  }

  private send() {
    this.res.status(this.statusCode).json({
      entriesFound: this.entriesFound,
      message: this.message,
      data: this.data,
    });
  }
}
