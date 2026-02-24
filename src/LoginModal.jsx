import { useState } from "react";

function LoginModal({ onClose, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // TEMP: just use email as username for now
    onLogin({ name: email }); // <-- important: updates parent navbar
  };

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <div style={styles.buttons}>
          <button onClick={handleLogin} style={styles.btn}>
            Login
          </button>
          <button onClick={onClose} style={styles.btn}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#1e293b",
    color: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
  btn: {
    padding: "6px 12px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    backgroundColor: "#6366f1",
    color: "white",
  },
};

export default LoginModal;