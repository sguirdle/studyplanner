import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time
  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <div style={styles.container}>
      <h1 style={styles.time}>{formattedTime}</h1>

        <div style={styles.buttons}>
        <Link to="/todo" style={styles.button}>To-Do List</Link>
        <Link to="/calendar" style={styles.button}>Calendar</Link>
        <Link to="/notes" style={styles.button}>Notes</Link>
        <Link to="/settings" style={styles.button}>Settings</Link>
        </div>
    </div>
  );
}

// Fullscreen container with flex centering
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",      // 100% of viewport height
    width: "100vw",       // 100% of viewport width
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  time: {
    fontSize: "6rem",     // bigger clock
    marginBottom: "50px",
  },
  buttons: {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    padding: "18px 30px",
    fontSize: "1.3rem",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#4f46e5",
    color: "white",
    transition: "background-color 0.3s",
  }
};

export default Home;