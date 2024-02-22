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
const app_1 = require("./config/app");
const dotenv_1 = require("dotenv");
const mongoose_1 = require("./config/mongoose");
const envConfig_1 = require("./config/envConfig");
const cronjobs_1 = require("./cronjobs");
(0, dotenv_1.config)();
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    const port = process.env.PORT || 3000;
    (0, envConfig_1.envConfig)();
    try {
        yield mongoose_1.db.connect(process.env.DB_URL);
        (0, cronjobs_1.cronJobs)();
        app_1.app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    }
    catch (err) {
        console.error(err);
    }
});
start();
