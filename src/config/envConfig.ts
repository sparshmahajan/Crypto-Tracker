export const envConfig = () => {
  if (!process.env.DB_URL) {
    throw new Error("DB_URL must be defined");
  }
};
