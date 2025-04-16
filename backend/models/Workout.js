// models/Workout.js
const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },  // Reference to the user
  type: { type: String, required: true },  // e.g., Cardio, Strength
  duration: { type: Number, required: true },  // Duration in minutes
  exercises: [
    {
      name: { type: String, required: true },
      reps: { type: Number },
      sets: { type: Number },
      weight: { type: Number },
    }
  ],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Workout", workoutSchema);
