import React, { useState, useEffect } from 'react';
import Dashboard from './assets/components/Dashboard';
import TaskForm from './assets/components/TaskForm';
import sampleTasks from './sampleTasks';

function App() {
  // Initialize tasks from localStorage or fallback to sampleTasks

  const [tasks, setTasks] = useState(sampleTasks);
  // const [tasks, setTasks] = useState(() => {
  //   const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  //   return storedTasks // If no tasks in localStorage, use sampleTasks
  // });
  const [selectedTask, setSelectedTask] = useState(null);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2">What needs to be done?</h1>
      <TaskForm addTask={addTask} updateTask={updateTask} selectedTask={selectedTask} setSelectedTask={setSelectedTask} />
      <Dashboard tasks={tasks} deleteTask={deleteTask} setSelectedTask={setSelectedTask} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
