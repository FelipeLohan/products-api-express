import { Request, Response } from "express";
import product from "../models/Product.js";

class ProductController {
  static findAllProducts = async (req: Request, res: Response) => {
    try {
      const productsData = await product.find();
      res
        .status(200)
        .json({ message: "success", status: 200, data: productsData });
    } catch (e) {
      res
        .status(500)
        .json({ message: "error", status: 500, description: `${e}` });
    }
  };

  static newProduct = async (req: Request, res: Response) => {
    const newProduct = req.body;
    try {
      const newProductData = await product.create(newProduct);
      res
        .status(200)
        .json({ message: "success", status: 201, data: newProductData });
    } catch (e) {
      res
        .status(500)
        .json({ message: "error", status: 500, description: `${e}` });
    }
  };
}

export default ProductController;