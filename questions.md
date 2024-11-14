# Answers to Technical Questions

## How long did you spend on the coding test?
I spent approximately 4-5 hours on the coding test, including time for research and debugging.

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
In React, the most useful feature in recent versions is the `useTransition` hook. This hook helps manage state updates that do not need to block the UI rendering. It allows for smoother transitions when handling multiple updates, such as filtering or sorting tasks in my task management application.

Here’s how I used it in the `Dashboard` component:

```jsx
import React, { useState, useTransition } from "react";
import TaskList from "./TaskList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Dashboard = ({ tasks, deleteTask, setSelectedTask, toggleComplete }) => {
  const [search, setSearch] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
  const [filterCompletion, setFilterCompletion] = useState("");
  const [isUpcomingOpen, setIsUpcomingOpen] = useState(true);
  const [isOverdueOpen, setIsOverdueOpen] = useState(true);
  const [isCompletedOpen, setIsCompletedOpen] = useState(true);

  const [isPending, startTransition] = useTransition();

  const filteredTasks = tasks.filter((task) => {
    const isSearchMatch = task.title.toLowerCase().includes(search.toLowerCase());
    const isPriorityMatch = filterPriority ? task.priority === filterPriority : true;
    const isCompletionMatch =
      filterCompletion === "completed" ? task.completed :
      filterCompletion === "incomplete" ? !task.completed :
      true;
    return isSearchMatch && isPriorityMatch && isCompletionMatch;
  });

  const upcomingTasks = filteredTasks.filter(
    (task) => !task.completed && new Date(task.dueDate) > new Date()
  );
  const overdueTasks = filteredTasks.filter(
    (task) => !task.completed && new Date(task.dueDate) <= new Date()
  );
  const completedTasks = filteredTasks.filter((task) => task.completed);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => startTransition(() => setSearch(e.target.value))}
      />
      <select
        onChange={(e) => startTransition(() => setFilterPriority(e.target.value))}
      >
        <option value="">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <select
        onChange={(e) => startTransition(() => setFilterCompletion(e.target.value))}
      >
        <option value="">All Statuses</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>

      <TaskList tasks={upcomingTasks} />
      <TaskList tasks={overdueTasks} />
      <TaskList tasks={completedTasks} />
    </div>
  );
};

```

## 3. How would you track down a performance issue in production? Have you ever had to do this?
I would use tools like **Google Lighthouse**, **React Profiler**, and **network request analysis** to identify performance bottlenecks. Yes, I’ve had to track performance issues before, like optimizing unnecessary re-renders in a previous project.

## 4. If you had more time, what additional features or improvements would you consider adding to the task management application?
I would add features like **user authentication**, **task categorization**, **task assignment**, **time tracking**, and **drag-and-drop functionality** to improve collaboration, organization, and user experience.
