"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
const customError_1 = require("./customError");
class RequestValidationError extends customError_1.CustomError {
    constructor(errors) {
        super("Invalid request parameters");
        this.errors = errors;
        this.statusCode = 400;
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    serializeErrors() {
        return { message: this.errors[0].msg };
    }
}
exports.RequestValidationError = RequestValidationError;
