import express, { Application } from "express";
import { DOMAIN, PORT } from "./utils/system.js";
import "dotenv/config";
import databaseConnection from "./config/databaseConection.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

const app: Application = express();

routes(app);

const conection = await databaseConnection();

conection.on("error", (error) => {
  console.log("Error:" + error);
});

conection.once("open", () => {
  console.log("Connection Oppened");
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started in: ${DOMAIN}`);
});

