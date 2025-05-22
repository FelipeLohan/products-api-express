import { Request, Response, NextFunction } from "express";
import CustomError from "../utils/CustomError.js";

// Middleware de tratamento de erros
  const errorHandler = (err: any, req: any, res: any, next: any) => {
  console.error(err);  

  // Se for uma instância do CustomError
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      message: err.message,
      status: err.statusCode,
      description: err.description,
    });
  }

  // Erros genéricos
  res.status(500).json({
    message: "Internal server error",
    status: 500,
    description: err.message || "Something went wrong.",
  });
};

export default errorHandler;
