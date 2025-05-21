import express, { Application } from "express";
import categoriesRoutes from "./categoryRoutes.js";
import productsRoutes from "./productRoutes.js";

const routes = (app: Application) => {
  app.use(express.json(), categoriesRoutes, productsRoutes)
}

export default routes;