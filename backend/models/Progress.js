// models/Progress.js
const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  weight: { type: Number },
  bodyFatPercentage: { type: Number },
  muscleMass: { type: Number },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Progress", progressSchema);
