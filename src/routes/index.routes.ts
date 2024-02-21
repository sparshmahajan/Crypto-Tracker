import { Application } from "express";
import { NotFoundError } from "./../handlers/errors";

export const indexRoutes = (app: Application) => {
  app.get("/api", async (_req, res) => {
    res.status(200).send("Server is running");
  });
  app.use("*", async () => {
    throw new NotFoundError();
  });
};
