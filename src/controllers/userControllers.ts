import { NextFunction, Request, Response } from "express";
import user from "../models/User.js";
import CustomError from "../utils/CustomError.js";

class UserController {

  // /v1/api/users - FindAll Users
  static findAllUsers = async ( req: Request , res: Response ) => {
    try {
      const usersData = await user.find();
      res.status(200).json({
        "message": "success",
        "status": 200,
        "data": usersData
      })
    } catch (e) {
      res.status(500).json({
        "message": "fail",
        "status": 500,
        "description": `${e}`
      })
    }
  }
}

export default UserController