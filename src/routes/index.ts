import express, { Application } from "express";
import categoriesRoutes from "./categoryRoutes.js";
import productsRoutes from "./productRoutes.js";
import usersRoutes from "./userRoutes.js";

const routes = (app: Application) => {
  app.use(express.json(), categoriesRoutes, productsRoutes, usersRoutes)
}

export default routes;