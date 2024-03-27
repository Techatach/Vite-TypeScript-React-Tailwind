// const mongoose = require("mongoose"); // Erase if already required
import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    doj: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Export the model
// module.exports = mongoose.model("User", EmployeeSchema);
export const EmployeeModel = mongoose.model("Employee", EmployeeSchema);
