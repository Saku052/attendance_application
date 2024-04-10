import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js';
import TaskList from './TaskList.js';
import AddTaskForm from './AddTaskForm.js';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length, text: task, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <Sidebar />
      <div className='MainContent'>
        <h1>Todo List</h1>
        <AddTaskForm addTask={addTask} />
        <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
