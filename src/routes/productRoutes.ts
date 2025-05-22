import express, { Router } from "express";
import ProductController from "../controllers/productControllers.js";
import { validateObjectId } from "../middlewares/validateObjectId.js";

const productsRoutes: Router = express.Router();

productsRoutes.get("/v1/api/products/:id", validateObjectId, ProductController.findById);
productsRoutes.get("/v1/api/products", ProductController.findAllProducts);
productsRoutes.post("/v1/api/products", ProductController.newProduct);
productsRoutes.put("/v1/api/products/:id", validateObjectId, ProductController.updateProduct);
productsRoutes.delete("/v1/api/products/:id", validateObjectId, ProductController.deleteProduct);

export default productsRoutes;