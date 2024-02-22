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
exports.exchangeRateController = void 0;
const getCryptoPrice_1 = require("../../common/getCryptoPrice");
const errors_1 = require("../../handlers/errors");
const responses_1 = require("../../handlers/responses");
const cryptoModel_1 = require("../../models/cryptoModel");
const exchangeRateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fromCurrency, toCurrency, date } = req.query;
    const fromCurrencyExistsPromise = cryptoModel_1.Crypto.exists({ id: fromCurrency });
    const toCurrencyExistsPromise = cryptoModel_1.Crypto.exists({ id: toCurrency });
    const [fromCurrencyExists, toCurrencyExists] = yield Promise.all([
        fromCurrencyExistsPromise,
        toCurrencyExistsPromise,
    ]);
    if (!fromCurrencyExists || !toCurrencyExists) {
        throw new errors_1.BadRequestError("Invalid currency");
    }
    const fromCurrencyPricePromise = (0, getCryptoPrice_1.getCryptoPrice)(fromCurrency, date);
    const toCurrencyPricePromise = (0, getCryptoPrice_1.getCryptoPrice)(toCurrency, date);
    const [fromCurrencyPrice, toCurrencyPrice] = yield Promise.all([
        fromCurrencyPricePromise,
        toCurrencyPricePromise,
    ]);
    if (!fromCurrencyPrice || !toCurrencyPrice) {
        throw new errors_1.BadRequestError("Currency details not found");
    }
    const exchangeRate = fromCurrencyPrice / toCurrencyPrice;
    return new responses_1.ActionSuccessHandler(res, "Exchange rate calculated", {
        exchangeRate,
        fromCurrency,
        toCurrency,
        date,
    });
});
exports.exchangeRateController = exchangeRateController;
