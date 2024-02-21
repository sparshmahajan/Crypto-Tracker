import axios from "axios";

export const getPublicTreasury = async (coin_id: "bitcoin" | "ethereum") => {
  const requestOptions = {
    method: "GET",
    url: `https://api.coingecko.com/api/v3/companies/public_treasury/${coin_id}`,
  };

  const { data } = await axios.request(requestOptions);
  return data;
};
