import express, { Router } from "express";
import UserController from "../controllers/userControllers.js";
import { validateObjectId } from "../middlewares/validateObjectId.js";

const usersRoutes: Router = express.Router();

usersRoutes.get("/v1/api/users", UserController.findAllUsers);

export default usersRoutes;