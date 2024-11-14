import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, updateTask, selectedTask, setSelectedTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
    completed: false,
  });

  useEffect(() => {
    if (selectedTask) setTask(selectedTask);
  }, [selectedTask]);

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTask) {
      updateTask(task);
    } else {
      addTask({ ...task, id: Date.now() });
    }
    setTask({
      title: "",
      description: "",
      dueDate: "",
      priority: "Low",
      completed: false,
    });
    setSelectedTask(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2 p-2 shadow-sm shadow-black rounded">
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        className="mb-1 p-1 border-2 border-gray-400 rounded w-full"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        className="mb-1 p-1 w-full border-2 border-gray-400 rounded"
      ></textarea>
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        className="mb-1 p-1 w-full border-2 border-gray-400 rounded"
      />
      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
        className="mb-1 p-1 w-full border-2 border-gray-400 rounded"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
        {selectedTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
