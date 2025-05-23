import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: {
      type: String,
      unique: [true, "This category name exists."],
      required: [true, "The name of category is required"],
    },
  },
  { versionKey: false }
);

const category = mongoose.model("categories", categorySchema);

export default category;
