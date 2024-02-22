"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConfig = void 0;
const envConfig = () => {
    if (!process.env.DB_URL) {
        throw new Error("DB_URL must be defined");
    }
};
exports.envConfig = envConfig;
