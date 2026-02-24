import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal"; // make sure you have this
// import "./Navbar.css"; // optional if using CSS instead of inline

function Navbar({ user, setUser }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.links}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/todo" style={styles.link}>To-Do</Link>
          <Link to="/calendar" style={styles.link}>Calendar</Link>
          <Link to="/notes" style={styles.link}>Notes</Link>
          <Link to="/settings" style={styles.link}>Settings</Link>
        </div>

        <div style={styles.navRight}>
          {!user && (
            <button style={styles.loginBtn} onClick={() => setShowLogin(true)}>
              Login
            </button>
          )}
          {user && (
            <>
              <span style={styles.username}>Hello, {user.name}</span>
              <button style={styles.loginBtn} onClick={() => setUser(null)}>
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLogin={(userData) => {
            setUser(userData); // sets the logged-in user
            setShowLogin(false);
          }}
        />
      )}
    </>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    padding: "15px 30px",
    backgroundColor: "#4f46e5",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  loginBtn: {
    padding: "6px 12px",
    cursor: "pointer",
    fontWeight: "bold",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#6366f1",
    color: "white",
  },
  username: {
    fontWeight: "bold",
  }
};

export default Navbar;