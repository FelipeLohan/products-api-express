import mongoose from "mongoose";

const DB_CONNECTION_STRING: string = process.env.DB_CONNECTION_STRING!

async function databaseConnection(){
  mongoose.connect(DB_CONNECTION_STRING);

  return mongoose.connection;
}

export default databaseConnection;