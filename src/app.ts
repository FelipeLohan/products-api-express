import express from "express";
import { Request, Response } from "express";
import { DOMAIN, PORT } from "./utils/system.js";
import "dotenv/config";
import databaseConnection from "./config/databaseConection.js";
import product from "./models/Product.js";
import category from "./models/Category.js";
import ProductController from "./controllers/productControllers.js";
import CategoryController from "./controllers/categoryControllers.js";

const app = express();
app.use(express.json())

const conection = await databaseConnection();

conection.on("error", (error) => {
  console.log("Error:" + error);
});

conection.once("open", () => {
  console.log("Connection Oppened");
});

app.get("/v1/api/products", ProductController.findAllProducts);
app.post("/v1/api/products", ProductController.newProduct);

app.get("/v1/api/categories", CategoryController.findAllCategories);
app.post("/v1/api/categories", CategoryController.newCategory);

app.listen(PORT, () => {
  console.log(`Server started in: ${DOMAIN}`);
});

