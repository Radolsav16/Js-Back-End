import express from "express";
import router from "./Router.js";
import cookieParser from "cookie-parser";
import { authMiddleware } from "../middlewares/auth.js";

export default function ExpressConfig(app) {
  app.use(express.static("public"));
  app.use(express.urlencoded({ extended: false }));
  app.use(router);
  app.use(cookieParser());
  app.use(authMiddleware);
}
