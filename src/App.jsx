import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const task = prompt("Enter task:");
    if(task) setTasks([...tasks, task]);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Study Planner</h1>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, i) => <li key={i}>{task}</li>)}
      </ul>
    </div>
  );
}

export default App;