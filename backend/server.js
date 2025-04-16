const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express(); // Initialize app FIRST

app.use(cors());
app.use(express.json());

// ✅ FIXED MongoDB connection
mongoose.connect(process.env.MONGO_URI || 5000)
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use('/api/workouts', require('./routes/workoutRoutes'));

// Basic test route
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});