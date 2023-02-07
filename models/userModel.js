// Import mongoose
const mongoose = require("mongoose");

// Define the structure of the model
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  admin:{
    type: Boolean,
    default: false,
  },
  visible:{
    type: Boolean,
    default: true,
  }
});

// variable that will contain the model to be able to export
const User = mongoose.model("User", userSchema);

module.exports = User;