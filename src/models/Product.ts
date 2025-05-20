import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: [true, "The name of product is required"]},
  category: { type: mongoose.Schema.Types.ObjectId, ref: "categories", required: [true, "The category of product is required"] },
  price: { type: Number , required: [true, "The price of product is required"]},
  image: { type: String }
});

const product = mongoose.model("products", productSchema);

export default product;