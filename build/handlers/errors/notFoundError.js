"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const customError_1 = require("./customError");
class NotFoundError extends customError_1.CustomError {
    constructor(message = "Route not found") {
        super(message);
        this.message = message;
        this.statusCode = 404;
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    serializeErrors() {
        return { message: this.message };
    }
}
exports.NotFoundError = NotFoundError;
