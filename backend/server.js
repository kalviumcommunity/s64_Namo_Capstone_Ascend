const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express(); // Initialize app FIRST

// Middlewares
app.use(cors());
app.use(express.json());

// ✅ Import and use user routes
const userRoutes = require("./routes/users");
app.use("/api/users", userRoutes);


// Add this line near the other routes
const mealRoutes = require('./routes/mealRoutes');
app.use('/api/meals', mealRoutes);

const progressRoutes = require('./routes/progressRoutes');
app.use('/api/progress', progressRoutes);



// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Workout routes
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
