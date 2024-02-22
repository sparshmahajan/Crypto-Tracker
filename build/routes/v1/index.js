"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1Router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.v1Router = router;
const express_validator_1 = require("express-validator");
const requestValidation_1 = require("../../middlewares/requestValidation");
const v1_1 = require("../../controllers/v1");
router.get("/exchange-rate", [
    (0, express_validator_1.query)("fromCurrency").notEmpty().withMessage("fromCurrency is required"),
    (0, express_validator_1.query)("toCurrency").notEmpty().withMessage("toCurrency is required"),
    (0, express_validator_1.query)("date").notEmpty().withMessage("date is required"),
    (0, express_validator_1.query)("date")
        .matches(/^\d{2}-\d{2}-\d{4}$/)
        .withMessage("date should be in the format dd-mm-yyyy"),
    (0, express_validator_1.query)("date").custom((value) => {
        const date = new Date(value.split("-").reverse().join("-"));
        const today = new Date();
        if (date > today) {
            throw new Error("date should be of past or today according to UTC");
        }
        return true;
    }),
], requestValidation_1.validateRequest, v1_1.v1Controllers.exchangeRateController);
router.get("/public-treasury/:coin_id", [
    (0, express_validator_1.param)("coin_id")
        .isIn(["bitcoin", "ethereum"])
        .withMessage("Invalid coin_id"),
], requestValidation_1.validateRequest, v1_1.v1Controllers.publicTreasuryController);
