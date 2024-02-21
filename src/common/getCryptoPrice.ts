import axios from "axios";
import { param } from "express-validator";

export const getCryptoPrice = async (cryptoId: string, date: string) => {
  const requestOptions = {
    method: "GET",
    url: `https://api.coingecko.com/api/v3/coins/${cryptoId}/history`,
    params: {
      date: date,
      localization: false,
    },
  };
  const { data } = await axios(requestOptions);
  return (data.market_data?.current_price?.usd as number) || null;
};
