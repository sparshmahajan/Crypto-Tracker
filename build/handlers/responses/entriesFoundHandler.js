"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntriesFoundHandler = void 0;
class EntriesFoundHandler {
    constructor(res, message, data, length = 0) {
        this.statusCode = 200;
        this.res = res;
        this.entriesFound = data.length || length;
        this.message = message;
        this.data = data;
        this.send();
    }
    send() {
        this.res.status(this.statusCode).json({
            entriesFound: this.entriesFound,
            message: this.message,
            data: this.data,
        });
    }
}
exports.EntriesFoundHandler = EntriesFoundHandler;
