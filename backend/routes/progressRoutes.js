// routes/progressRoutes.js
const express = require("express");
const router = express.Router();
const Progress = require("../models/Progress");

// POST a new progress entry
router.post("/", async (req, res) => {
  const { user, weight, bodyFatPercentage, muscleMass } = req.body;

  try {
    const progress = new Progress({ user, weight, bodyFatPercentage, muscleMass });
    const savedProgress = await progress.save();
    res.status(201).json(savedProgress);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET progress entries for a specific user
router.get("/user/:userId", async (req, res) => {
  try {
    const progress = await Progress.find({ user: req.params.userId }).populate("user", "name email");
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
