import { Request, Response } from "express";
import { getCryptoPrice } from "../../common/getCryptoPrice";
import { BadRequestError } from "../../handlers/errors";
import { ActionSuccessHandler } from "../../handlers/responses";
import { Crypto } from "../../models/cryptoModel";

export const exchangeRateController = async (req: Request, res: Response) => {
  const { fromCurrency, toCurrency, date } = req.query as {
    fromCurrency: string;
    toCurrency: string;
    date: string;
  };

  const fromCurrencyExistsPromise = Crypto.exists({ id: fromCurrency });
  const toCurrencyExistsPromise = Crypto.exists({ id: toCurrency });

  const [fromCurrencyExists, toCurrencyExists] = await Promise.all([
    fromCurrencyExistsPromise,
    toCurrencyExistsPromise,
  ]);

  if (!fromCurrencyExists || !toCurrencyExists) {
    throw new BadRequestError("Invalid currency");
  }

  const fromCurrencyPricePromise = getCryptoPrice(fromCurrency, date);
  const toCurrencyPricePromise = getCryptoPrice(toCurrency, date);

  const [fromCurrencyPrice, toCurrencyPrice] = await Promise.all([
    fromCurrencyPricePromise,
    toCurrencyPricePromise,
  ]);

  if (!fromCurrencyPrice || !toCurrencyPrice) {
    throw new BadRequestError("Currency details not found");
  }

  const exchangeRate = fromCurrencyPrice / toCurrencyPrice;

  return new ActionSuccessHandler(res, "Exchange rate calculated", {
    exchangeRate,
    fromCurrency,
    toCurrency,
    date,
  });
};
