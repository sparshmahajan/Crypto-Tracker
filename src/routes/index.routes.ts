import { Application } from "express";
import { NotFoundError } from "./../handlers/errors";
import { v1Router } from "./v1";

export const indexRoutes = (app: Application) => {
  app.use("/api/v1", v1Router);

  app.get("/api", async (_req, res) => {
    res.status(200).send("Server is running");
  });

  app.use("*", async () => {
    throw new NotFoundError();
  });
};
