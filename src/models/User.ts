import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: {
      type: String,
      required: [true, "The name of user is required"]
    },
    email: { type: String, required: [true, "The email of user is required "], unique: [true, "This email of user, exists"]},
    password: { type: String, required: [true, "The password of user is required"] }
  },
  { versionKey: false }
);

const user = mongoose.model("users", userSchema);

export default user;