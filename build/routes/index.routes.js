"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRoutes = void 0;
const errors_1 = require("./../handlers/errors");
const v1_1 = require("./v1");
const indexRoutes = (app) => {
    app.use("/api/v1", v1_1.v1Router);
    app.get("/api", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.status(200).send("Server is running");
    }));
    app.use("*", () => __awaiter(void 0, void 0, void 0, function* () {
        throw new errors_1.NotFoundError();
    }));
};
exports.indexRoutes = indexRoutes;
