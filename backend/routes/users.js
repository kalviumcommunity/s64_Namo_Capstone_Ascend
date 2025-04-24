const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST - Create a new user
router.post("/", async (req, res) => {
  const { name, email, password, age, height, weight } = req.body;

  try {
    const newUser = new User({ name, email, password, age, height, weight });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET - Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Hide passwords
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET - Get user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
