// models/Meal.js
const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },  // Reference to the user
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  protein: { type: Number },
  carbs: { type: Number },
  fats: { type: Number },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Meal", mealSchema);
