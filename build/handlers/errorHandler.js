"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const customError_1 = require("./errors/customError");
const errorHandler = (err, req, res, next) => {
    if (err instanceof customError_1.CustomError) {
        return res
            .status(err.statusCode)
            .send({ message: err.serializeErrors().message });
    }
    console.log(err);
    res.status(500).send({
        message: "Something went wrong",
    });
};
exports.errorHandler = errorHandler;
