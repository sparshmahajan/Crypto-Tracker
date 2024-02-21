export const envConfig = () => {
  if (!process.env.COINGECKO_API_KEY) {
    throw new Error("COINGECKO_API_KEY must be defined");
  }
  if (!process.env.DB_URL) {
    throw new Error("DB_URL must be defined");
  }
};
