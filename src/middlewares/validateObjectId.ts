import { Request, Response, NextFunction } from "express";
import { isObjectIdOrHexString } from "mongoose";
import CustomError from "../utils/CustomError.js"; 

// Middleware para validar o formato do ID
export const validateObjectId = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  if (!isObjectIdOrHexString(id)) {
    return next(new CustomError("Invalid ID", 400, "This ID is not a valid ObjectId."));
  }
  next();  
};
