"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotAuthorizedError = void 0;
const customError_1 = require("./customError");
class NotAuthorizedError extends customError_1.CustomError {
    constructor(message = "Not authorized") {
        super(message);
        this.statusCode = 401;
        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }
    serializeErrors() {
        return { message: this.message };
    }
}
exports.NotAuthorizedError = NotAuthorizedError;
