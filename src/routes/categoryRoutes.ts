import express from "express";
import CategoryController from "../controllers/categoryControllers.js";

const categoriesRoutes = express.Router();

categoriesRoutes.get("/v1/api/categories", CategoryController.findAllCategories);
categoriesRoutes.post("/v1/api/categories", CategoryController.newCategory);

export default categoriesRoutes;