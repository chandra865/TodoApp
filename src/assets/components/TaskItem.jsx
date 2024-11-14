import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({ task, deleteTask, setSelectedTask, toggleComplete }) => (
  <div className="shadow-sm shadow-black p-2 rounded mb-2 flex justify-between">
    <div>
      <h3 className="font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
    </div>
    <div className="flex items-center gap-3">
      <FontAwesomeIcon
        icon={faCheckCircle}
        onClick={() => toggleComplete(task.id)}
        className={`p-2 cursor-pointer rounded ${task.completed ? 'text-gray-500' : 'text-green-500'}`}
        size="lg"
        title={task.completed ? 'Completed' : 'Mark as Complete'}
      />
      <FontAwesomeIcon
        icon={faEdit}
        onClick={() => setSelectedTask(task)}
        className="p-2 cursor-pointer text-blue-500"
        title="Edit Task"
        size="lg"
      />
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() => deleteTask(task.id)}
        className="p-2 cursor-pointer text-red-500"
        title="Delete Task"
        size="lg"
      />
    </div>
  </div>
);

export default TaskItem;
