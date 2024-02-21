import { app } from "./config/app";
import { config } from "dotenv";
import { db } from "./config/mongoose";
import { envConfig } from "./config/envConfig";
import { cronJobs } from "./cronjobs";
config();

const start = async () => {
  const port = process.env.PORT || 3000;
  envConfig();
  try {
    await db.connect(process.env.DB_URL!);
    cronJobs();
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
};

start();
