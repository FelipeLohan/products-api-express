import express from "express";
import { Request, Response } from "express";
import { DOMAIN, PORT } from "./utils/system.js";
import "dotenv/config";
import databaseConnection from "./config/databaseConection.js";

const app = express();

const conection = await databaseConnection();

conection.on("error", (error) => {
  console.log("Error:" + error);
});

conection.once("open", () => {
  console.log("Connection Oppened");
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({"message": "Hello World!", "status": 200});
})

app.listen(PORT, () => {
  console.log(`Server started in: ${DOMAIN}`);
});

