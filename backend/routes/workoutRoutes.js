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

module.exports = router;