import express, { Router } from "express";
import CategoryController from "../controllers/categoryControllers.js";

const categoriesRoutes: Router = express.Router();

categoriesRoutes.get("/v1/api/categories/:id", CategoryController.findById);
categoriesRoutes.get("/v1/api/categories", CategoryController.findAllCategories);
categoriesRoutes.post("/v1/api/categories", CategoryController.newCategory);
categoriesRoutes.put("/v1/api/categories/:id", CategoryController.updateCategory);
categoriesRoutes.delete("/v1/api/categories/:id", CategoryController.deleteCategory);

export default categoriesRoutes;