"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryFoundHandler = void 0;
class EntryFoundHandler {
    constructor(res, message, data, entryFound = true) {
        this.statusCode = 200;
        this.res = res;
        this.entryFound = entryFound;
        this.message = message;
        this.data = data;
        this.send();
    }
    send() {
        this.res.status(this.statusCode).json(Object.assign({ entryFound: this.entryFound, message: this.message }, this.data));
    }
}
exports.EntryFoundHandler = EntryFoundHandler;
