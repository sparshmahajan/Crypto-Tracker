import { CronJob } from "cron";
import { trackCurrenciesJob } from "./trackCurrenciesJob";

export const cronJobs = () => {
  const trackCurrenciesJobInstance = new CronJob(
    "0 0 * * *",
    trackCurrenciesJob,
    null,
    true,
    "UTC"
  );

  try {
    trackCurrenciesJobInstance.start();
  } catch (err) {
    console.error(err);
  }
};
