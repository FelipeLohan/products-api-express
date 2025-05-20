import { Request, Response } from "express";
import category from "../models/Category.js";

class CategoryController {
  static findAllCategories = async (req: Request, res: Response) => {
    try {
      const categoriesData = await category.find();
      res
        .status(200)
        .json({ "message": "success", "status": 200, "data": categoriesData });
    } catch (e) {
      res.status(500).json({ "message": "fail", "status": 500, "description": `${e}` });
    }
  };

  static newCategory = async (req: Request, res: Response) => {
    const newCategory = req.body;
    try {
      const newCategoryData = await category.create(newCategory);
      res
        .status(201)
        .json({ "message": "success", "status": 201, "data": newCategoryData });
    } catch (e) {
      res.status(500).json({"message": "fail", "status": 500, "description": `${e}`})
    }
  };
}

export default CategoryController;
