import express, { Router } from "express";
import CategoryController from "../controllers/categoryControllers.js";
import { validateObjectId } from "../middlewares/validateObjectId.js";

const categoriesRoutes: Router = express.Router();

categoriesRoutes.get("/v1/api/categories/:id", validateObjectId ,CategoryController.findById);
categoriesRoutes.get("/v1/api/categories", CategoryController.findAllCategories);
categoriesRoutes.post("/v1/api/categories", CategoryController.newCategory);
categoriesRoutes.put("/v1/api/categories/:id", validateObjectId , CategoryController.updateCategory);
categoriesRoutes.delete("/v1/api/categories/:id", validateObjectId , CategoryController.deleteCategory);

export default categoriesRoutes;