"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionError = void 0;
const customError_1 = require("./customError");
class DatabaseConnectionError extends customError_1.CustomError {
    constructor() {
        super("Error connecting to db");
        this.statusCode = 500;
        this.reason = "Error connecting to database";
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
    serializeErrors() {
        return { message: this.reason };
    }
}
exports.DatabaseConnectionError = DatabaseConnectionError;
