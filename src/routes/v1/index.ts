import express from "express";
const router = express.Router();
import { param, query } from "express-validator";
import { validateRequest } from "../../middlewares/requestValidation";
import { v1Controllers } from "../../controllers/v1";

router.get(
  "/exchange-rate",
  [
    query("fromCurrency").notEmpty().withMessage("fromCurrency is required"),
    query("toCurrency").notEmpty().withMessage("toCurrency is required"),
    query("date").notEmpty().withMessage("date is required"),
    query("date")
      .matches(/^\d{2}-\d{2}-\d{4}$/)
      .withMessage("date should be in the format dd-mm-yyyy"),
    query("date").custom((value) => {
      const date = new Date(value.split("-").reverse().join("-"));
      const today = new Date();
      if (date > today) {
        throw new Error("date should be of past or today according to UTC");
      }
      return true;
    }),
  ],
  validateRequest,
  v1Controllers.exchangeRateController
);

router.get(
  "/public-treasury/:coin_id",
  [
    param("coin_id")
      .isIn(["bitcoin", "ethereum"])
      .withMessage("Invalid coin_id"),
  ],
  validateRequest,
  v1Controllers.publicTreasuryController
);

export { router as v1Router };
