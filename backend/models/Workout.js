const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },  // removed required: true
  type: { type: String },  // removed required: true
  duration: { type: Number, required: true },
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
