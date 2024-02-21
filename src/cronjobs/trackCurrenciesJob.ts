import axios from "axios";
import { Crypto, CryptoDoc } from "../models/cryptoModel";

export const trackCurrenciesJob = async () => {
  console.log("Updating crypto data");

  const requestOptions = {
    method: "GET",
    url: "https://api.coingecko.com/api/v3/coins/list",
  };
  const { data } = (await axios(requestOptions)) as { data: CryptoDoc[] };

  await Crypto.deleteMany({});
  await Crypto.insertMany(data);

  console.log("crypto data updated");
};
