"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionSuccessHandler = void 0;
class ActionSuccessHandler {
    constructor(res, message, data, statusCode = 200) {
        this.res = res;
        this.message = message;
        this.data = data;
        this.statusCode = statusCode;
        this.send();
    }
    send() {
        this.res.status(this.statusCode).json(Object.assign({ message: this.message }, this.data));
    }
}
exports.ActionSuccessHandler = ActionSuccessHandler;
