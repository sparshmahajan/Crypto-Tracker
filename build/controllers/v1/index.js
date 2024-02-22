"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1Controllers = void 0;
const exchangeRateController_1 = require("./exchangeRateController");
const publicTreasuryController_1 = require("./publicTreasuryController");
exports.v1Controllers = {
    exchangeRateController: exchangeRateController_1.exchangeRateController,
    publicTreasuryController: publicTreasuryController_1.publicTreasuryController,
};
