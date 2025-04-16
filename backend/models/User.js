// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  height: { type: Number },
  weight: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
