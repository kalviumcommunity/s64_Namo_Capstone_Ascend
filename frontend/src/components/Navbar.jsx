import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">FitTrack</div>
      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/meals">Meals</Link>
        <Link to="/progress">Progress</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
