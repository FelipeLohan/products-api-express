import mongoose from "mongoose";

const DB_CONNECTION: string = process.env.DB_CONNECTION!

async function databaseConnection(){
  mongoose.connect(DB_CONNECTION);

  return mongoose.connection;
}

export default databaseConnection;