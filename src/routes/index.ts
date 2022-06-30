import { Express } from "express";
import pictureRoutes from "./picture.routes";

export const appRoutes = (app: Express) => {
  app.use("/picture", pictureRoutes);
};
