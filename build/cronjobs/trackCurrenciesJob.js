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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackCurrenciesJob = void 0;
const axios_1 = __importDefault(require("axios"));
const cryptoModel_1 = require("../models/cryptoModel");
const trackCurrenciesJob = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Updating crypto data");
    const requestOptions = {
        method: "GET",
        url: "https://api.coingecko.com/api/v3/coins/list",
    };
    const { data } = (yield (0, axios_1.default)(requestOptions));
    yield cryptoModel_1.Crypto.deleteMany({});
    yield cryptoModel_1.Crypto.insertMany(data);
    console.log("crypto data updated");
});
exports.trackCurrenciesJob = trackCurrenciesJob;
