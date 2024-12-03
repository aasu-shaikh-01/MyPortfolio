import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    // validate: [validator.isEmail, "Please provide correct email address"],
  },
  message: {
    required: true,
    type: String,
  },
});

export const User = mongoose.model("User", userSchema);
