"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = void 0;
const customError_1 = require("./customError");
class InternalServerError extends customError_1.CustomError {
    constructor(message = "Internal Server Error") {
        super(message);
        this.statusCode = 500;
        console.log(message);
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
    serializeErrors() {
        return { message: "Internal Server Error" };
    }
}
exports.InternalServerError = InternalServerError;
