import React from "react";
import Navbar from "./components/Navbar"; // Adjust path if needed
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Add temporary route to test display */}
        <Route path="/" element={<div style={{ color: "white", padding: "2rem" }}>Welcome to FitTrack</div>} />
      </Routes>
    </Router>
  );
}

export default App;
