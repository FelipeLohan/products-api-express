import { NextFunction, Request, Response } from "express";
import category from "../models/Category.js";
import CustomError from "../utils/CustomError.js";

class CategoryController {

  // /v1/api/categories - FindAll categories
  static findAllCategories = async (req: Request, res: Response) => {
    try {
      const categoriesData = await category.find();
      res
        .status(200)
        .json({ message: "success", status: 200, data: categoriesData });
    } catch (e) {
      res
        .status(500)
        .json({ message: "fail", status: 500, description: `${e}` });
    }
  };

  // /v1/api/categories/:id - FindById category
  static findById = async (req: Request, res: Response, next: NextFunction) => {
    const categoryId = req.params.id;

    try {
      const categoriesData = await category.findById(categoryId);

      if (!categoriesData) {
        throw new CustomError("Not found", 404, "This id is invalid");
      }
      res
        .status(200)
        .json({ message: "success", status: 200, data: categoriesData });
    } catch (e) {
      next(e);
    }
  };

  // /v1/api/categories - New category
  static newCategory = async (req: Request, res: Response) => {
    const newCategory = req.body;
    try {
      const newCategoryData = await category.create(newCategory);
      res
        .status(201)
        .json({ message: "success", status: 201, data: newCategoryData });
    } catch (e) {
      res
        .status(500)
        .json({ message: "fail", status: 500, description: `${e}` });
    }
  };

  // /v1/api/categories/:id - Update category
  static updateCategory = async (req: Request, res: Response) => {
    const categoryBody = req.body;
    const categoryId = req.params.id;

    try {
      const updatedcategory = await category.findByIdAndUpdate(
        categoryId,
        categoryBody
      );
      res.status(200).json({
        message: "success",
        status: 200,
        data: updatedcategory,
      });
    } catch (e) {
      res
        .status(500)
        .json({ message: "fail", status: 500, description: `${e}` });
    }
  };

  // /v1/api/categories/:id - Delete category
  static deleteCategory = async (req: Request, res: Response) => {
    const categoryId = req.params.id;

    try {
      await category.findByIdAndDelete(categoryId);

      res.status(204).json({
        message: "success",
        status: 204,
      });
    } catch (e) {
      res.status(500).json({
        message: "fail",
        status: 500,
        description: `${e}`,
      });
    }
  };
}

export default CategoryController;
