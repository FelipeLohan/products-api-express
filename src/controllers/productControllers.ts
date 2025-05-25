import { NextFunction, Request, Response } from "express";
import product from "../models/Product.js";
import CustomError from "../utils/CustomError.js";

class ProductController {

  // /v1/api/products - FindAll Products
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

  // /v1/api/products/:id - FindById product
  static findById = async (req: Request, res: Response, next: NextFunction) => {
    const productId = req.params.id;
    try {
      const productData = await product.findById(productId);

      if (!productData) {
        throw new CustomError("Not found", 404, "This id is invalid");
      }
      
      res
        .status(200)
        .json({ message: "success", status: 200, data: productData });
    } catch (e) {
      next(e);
      res
        .status(500)
        .json({ message: "fail", status: 500, description: `${e}` });
    }
  };

  // /v1/api/products - New Product 
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

  // /v1/api/products/:id - Update Product
  static updateProduct = async (req: Request, res: Response) => {
    const productId = req.params.id;
    const productBody = req.body;

    try {
      const updatedProduct = await product.findByIdAndUpdate(
        productId,
        productBody
      );
      res.status(201).json({
        message: "success",
        status: 201,
        data: updatedProduct,
      });
    } catch (e) {
      res.status(500).json({
        message: "fail",
        status: 500,
        description: `${e}`,
      });
    }
  };

  // /v1/api/products/:id - Delete Product
  static deleteProduct = async (req: Request, res: Response) => {
    const productId = req.params.id;

    try {
      const productDeleted = await product.findByIdAndDelete(productId);
      res.status(204).json({ message: "success", status: 200, data: {} });
    } catch (e) {
      res
        .status(500)
        .json({ message: "fail", status: 500, description: `${e}` });
    }
  };
}

export default ProductController;
