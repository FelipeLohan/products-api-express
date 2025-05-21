import express, { Router } from "express";
import ProductController from "../controllers/productControllers.js";

const productsRoutes: Router = express.Router();

productsRoutes.get("/v1/api/products/:id", ProductController.findById);
productsRoutes.get("/v1/api/products", ProductController.findAllProducts);
productsRoutes.post("/v1/api/products", ProductController.newProduct);
productsRoutes.put("/v1/api/products/:id", ProductController.updateProduct);

export default productsRoutes;