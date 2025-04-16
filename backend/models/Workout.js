const mongoose = require("mongoose");
require("./User"); // 👈 add this line

const workoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  exercises: [
    {
      name: { type: String, required: true },
      reps: { type: Number },
      sets: { type: Number },
      weight: { type: Number }
    }
  ],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Workout", workoutSchema);
