"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crypto = void 0;
const mongoose_1 = require("mongoose");
const cryptoSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
}, {
    versionKey: false,
});
cryptoSchema.statics.build = (attrs) => {
    return new exports.Crypto(attrs);
};
exports.Crypto = (0, mongoose_1.model)("crypto", cryptoSchema);
