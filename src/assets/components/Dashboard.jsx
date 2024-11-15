import React, { useState, useTransition } from "react";
import TaskList from "./TaskList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Dashboard = ({ tasks, deleteTask, setSelectedTask, toggleComplete }) => {
  const [search, setSearch] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
  const [filterCompletion, setFilterCompletion] = useState(""); // New state for completion status filter
  const [isUpcomingOpen, setIsUpcomingOpen] = useState(true);
  const [isOverdueOpen, setIsOverdueOpen] = useState(true);
  const [isCompletedOpen, setIsCompletedOpen] = useState(true);
  
  // Set up the useTransition hook for non-blocking state updates
  const [isPending, startTransition] = useTransition();

  // Function to filter tasks with transition
  const filteredTasks = tasks.filter((task) => {
    const isSearchMatch = task.title.toLowerCase().includes(search.toLowerCase());
    const isPriorityMatch = filterPriority ? task.priority === filterPriority : true;
    const isCompletionMatch =
      filterCompletion === "completed" ? task.completed :
      filterCompletion === "incomplete" ? !task.completed :
      true; // All tasks if filterCompletion is empty
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
      {/* Filter Section */}
      <div className="flex space-x-4 mb-4"> {/* Horizontal layout */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => startTransition(() => setSearch(e.target.value))}
          className="p-2 flex-grow shadow-sm shadow-black rounded"
        />
        <select
          onChange={(e) => startTransition(() => setFilterPriority(e.target.value))}
          className="p-2 shadow-sm shadow-black rounded"
        >
          <option value="">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select
          onChange={(e) => startTransition(() => setFilterCompletion(e.target.value))}
          className="p-2 shadow-sm shadow-black rounded"
        >
          <option value="">All Statuses</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>

      {/* Upcoming Tasks */}
      <div className="mb-3 border rounded">
        <div
          className="flex justify-between items-center bg-gray-200 p-3 cursor-pointer shadow-sm shadow-black"
          onClick={() => startTransition(() => setIsUpcomingOpen(!isUpcomingOpen))}
        >
          <h2 className="text-xl font-bold">
            Upcoming Tasks ({upcomingTasks.length})
          </h2>
          <span>
            <FontAwesomeIcon icon={isUpcomingOpen ? faMinus : faPlus} size="lg" />
          </span>
        </div>
        {isUpcomingOpen && (
          <TaskList
            tasks={upcomingTasks}
            deleteTask={deleteTask}
            setSelectedTask={setSelectedTask}
            toggleComplete={toggleComplete}
          />
        )}
      </div>

      {/* Overdue Tasks */}
      <div className="mb-3 border rounded">
        <div
          className="flex justify-between items-center bg-gray-200 p-3 cursor-pointer shadow-sm shadow-black"
          onClick={() => startTransition(() => setIsOverdueOpen(!isOverdueOpen))}
        >
          <h2 className="text-xl font-bold">
            Overdue Tasks ({overdueTasks.length})
          </h2>
          <span>
            <FontAwesomeIcon icon={isOverdueOpen ? faMinus : faPlus} size="lg" />
          </span>
        </div>
        {isOverdueOpen && (
          <TaskList
            tasks={overdueTasks}
            deleteTask={deleteTask}
            setSelectedTask={setSelectedTask}
            toggleComplete={toggleComplete}
          />
        )}
      </div>

      {/* Completed Tasks */}
      <div className="mb-4 border rounded">
        <div
          className="flex justify-between items-center bg-gray-200 p-3 cursor-pointer shadow-sm shadow-black"
          onClick={() => startTransition(() => setIsCompletedOpen(!isCompletedOpen))}
        >
          <h2 className="text-xl font-bold">
            Completed Tasks ({completedTasks.length})
          </h2>
          <span>
            <FontAwesomeIcon icon={isCompletedOpen ? faMinus : faPlus} size="lg" />
          </span>
        </div>
        {isCompletedOpen && (
          <TaskList
            tasks={completedTasks}
            deleteTask={deleteTask}
            setSelectedTask={setSelectedTask}
            toggleComplete={toggleComplete}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
