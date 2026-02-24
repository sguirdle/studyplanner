import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/todo" style={styles.link}>To-Do</Link>
      <Link to="/calendar" style={styles.link}>Calendar</Link>
      <Link to="/notes" style={styles.link}>Notes</Link>
      <Link to="/settings" style={styles.link}>Settings</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "15px 30px",
    backgroundColor: "#4f46e5",
    color: "white",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
  }
};

export default Navbar;