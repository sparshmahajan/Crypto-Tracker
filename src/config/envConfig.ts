export const envConfig = () => {
  if (!process.env.KOINX_KEY) {
    throw new Error("KOINX_KEY must be defined");
  }
  if (!process.env.DB_URL) {
    throw new Error("DB_URL must be defined");
  }
};
