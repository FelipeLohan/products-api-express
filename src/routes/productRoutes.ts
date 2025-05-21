import express from "express";
import ProductController from "../controllers/productControllers.js";

const productsRoutes = express.Router();

productsRoutes.get("/v1/api/products", ProductController.findAllProducts);
productsRoutes.post("/v1/api/products", ProductController.newProduct);

export default productsRoutes;