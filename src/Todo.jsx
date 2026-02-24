import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (

    <div style={styles.container}>
      <h1>To Do</h1>

      <div className="input-row">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      <h2>To Do</h2>
      {tasks.filter(t => !t.completed).map((task, i) => (
        <div key={i} className="task">
          <span>{task.text}</span>
          <button onClick={() => toggleTask(i)}>Done</button>
        </div>
      ))}

      <h2>Already Done</h2>
      {tasks.filter(t => t.completed).map((task, i) => (
        <div key={i} className="task done">
          <span>{task.text}</span>
          <button onClick={() => toggleTask(i)}>Undo</button>
        </div>
      ))}
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
  }
}
export default Todo;