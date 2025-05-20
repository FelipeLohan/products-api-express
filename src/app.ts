import express from "express";
import { Request, Response } from "express";
import { DOMAIN, PORT } from "./utils/system.js";
import "dotenv/config";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({"message": "Hello World!", "status": 200});
})

app.listen(PORT, () => {
  console.log(`Server started in: ${DOMAIN}`);
});

