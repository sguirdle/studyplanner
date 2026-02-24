import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./home";
import Todo from "./Todo";
import Calendar from "./Calendar";
import Notes from "./Notes";
import Settings from "./Settings";

function App() {
  return (
    <Router>
      <Navbar /> {/* <- Always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;