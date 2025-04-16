const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');

// POST a new workout
router.post('/', async (req, res) => {
  const { user, type, duration, exercises } = req.body;

  const newWorkout = new Workout({
    user,
    type,
    duration,
    exercises
  });

  try {
    const savedWorkout = await newWorkout.save();
    res.status(201).json(savedWorkout);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// router.get("/", async (req, res) => {
//     try {
//       const workouts = await Workout.find().populate("user", "email"); // populate user info (optional)
//       res.json(workouts);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });

  router.get("/:id", async (req, res) => {
    try {
      const workout = await Workout.findById(req.params.id).populate("user", "email");
      if (!workout) return res.status(404).json({ message: "Workout not found" });
      res.json(workout);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // GET /api/workouts/user/:userId
router.get('/user/:userId', async (req, res) => {
    try {
      const { userId } = req.params;
      const workouts = await Workout.find({ user: userId }).populate("user", "name email");
      res.status(200).json(workouts);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    }
  });
  

module.exports = router;