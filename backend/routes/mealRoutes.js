// routes/mealRoutes.js
const express = require("express");
const router = express.Router();
const Meal = require("../models/Meal");

// POST a new meal
router.post("/", async (req, res) => {
  const { user, name, calories, protein, carbs, fats } = req.body;

  try {
    const meal = new Meal({ user, name, calories, protein, carbs, fats });
    const savedMeal = await meal.save();
    res.status(201).json(savedMeal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET meals for a user
router.get("/user/:userId", async (req, res) => {
  try {
    const meals = await Meal.find({ user: req.params.userId }).populate("user", "name email");
    res.status(200).json(meals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
