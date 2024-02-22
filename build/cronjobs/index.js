"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cronJobs = void 0;
const cron_1 = require("cron");
const trackCurrenciesJob_1 = require("./trackCurrenciesJob");
const cronJobs = () => {
    const trackCurrenciesJobInstance = new cron_1.CronJob("0 0 * * *", trackCurrenciesJob_1.trackCurrenciesJob, null, true, "UTC");
    try {
        trackCurrenciesJobInstance.start();
    }
    catch (err) {
        console.error(err);
    }
};
exports.cronJobs = cronJobs;
