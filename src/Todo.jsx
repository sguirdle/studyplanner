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
    <div style={{ padding: "20px" }}>
      <h1>To Do List</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New task..."
      />
      <button onClick={addTask}>Add</button>

      <h2>To Do</h2>
      {tasks.filter(t => !t.completed).map((task, i) => (
        <div key={i}>
          <span>{task.text}</span>
          <button onClick={() => toggleTask(i)}>Done</button>
        </div>
      ))}

      <h2>Already Done</h2>
      {tasks.filter(t => t.completed).map((task, i) => (
        <div key={i} style={{ textDecoration: "line-through", color: "gray" }}>
          <span>{task.text}</span>
          <button onClick={() => toggleTask(i)}>Undo</button>
        </div>
      ))}
    </div>
  );
}

export default Todo;