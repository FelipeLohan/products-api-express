import express from "express";
import { Request, Response } from "express";
import { DOMAIN, PORT } from "./utils/system.js";
import "dotenv/config";
import databaseConnection from "./config/databaseConection.js";
import product from "./models/Product.js";
import category from "./models/Category.js";

const app = express();
app.use(express.json())

const conection = await databaseConnection();

conection.on("error", (error) => {
  console.log("Error:" + error);
});

conection.once("open", () => {
  console.log("Connection Oppened");
});

app.get("/", async (req: Request, res: Response) => {
  const productsData = await product.find();
  res.status(200).json({"message": "success", "status": 200, "data": productsData});
})

app.post("/v1/api/products", async (req: Request, res: Response) => {
  const newProduct = req.body;
  try{
    const newProductData = await product.create(newProduct);
    res.status(200).json({message: "success", status: 201, data: newProductData});
  }catch(e){
    res.status(500).json({message: "error", status: 500, description: `${e}`})
  }
});

app.post("/v1/api/categories", async (req: Request, res: Response) => {
  const newCategory = req.body;
  try{
    const newCategoryData = await category.create(newCategory);
    res.status(200).json({message: "success", status: 201, data: newCategoryData});
  }catch(e){
    res.status(500).json({message: "error", status: 500, description: `${e}`})
  }
});

app.listen(PORT, () => {
  console.log(`Server started in: ${DOMAIN}`);
});

