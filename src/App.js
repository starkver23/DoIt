// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Land from "./components/Land";
import Login from "./components/Login";
import About from "./components/About";
import Signup from "./components/SignUp";
import BudgetPlanner from "./components/BudgetPlanner";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/budget-planner" element={<BudgetPlanner />} />
      </Routes>
    </Router>
  );
};

export default App;
