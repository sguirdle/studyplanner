import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks(prev => [...prev, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleDone = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  const toggleUndo = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: false } : task
      )
    );
  };

  return (
    <div>
      <h1>To Do</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask}>Add</button>

      <h2>To Do</h2>
      {tasks.filter(t => !t.completed).map(task => (
        <div key={task.id}>
          {task.text}
          <button onClick={() => toggleDone(task.id)}>Done</button>
        </div>
      ))}

      <h2>Already Done</h2>
      {tasks.filter(t => t.completed).map(task => (
        <div key={task.id}>
          {task.text}
          <button onClick={() => toggleUndo(task.id)}>Undo</button>
        </div>
      ))}
    </div>
  );
}

export default Todo;