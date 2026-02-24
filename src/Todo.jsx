import React, { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]); // List of tasks
  const [input, setInput] = useState(""); // Current input

  // Add new task
  const addTask = () => {
    if (input.trim() === "") return; // ignore empty
    setTasks([...tasks, { text: input, done: false }]);
    setInput(""); // clear input
  };

  // Toggle task done
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  // Delete task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    
    <div style={styles.container}>
      <h1>To-Do List</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button onClick={addTask} style={styles.addButton}>Add</button>
      </div>

      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.task}>
            <span
              onClick={() => toggleTask(index)}
              style={{
                textDecoration: task.done ? "line-through" : "none",
                cursor: "pointer",
                flex: 1
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)} style={styles.deleteButton}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

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

  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  addButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#4f46e5",
    color: "white",
    cursor: "pointer"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  task: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #eee"
  },
  deleteButton: {
    marginLeft: "10px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: "1.2rem"
  }
};

export default Todo;