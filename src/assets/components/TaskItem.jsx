// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck, faEdit, faTrash, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
// import { BadgeCheckIcon } from '@heroicons/react/solid';
// const TaskItem = ({ task, deleteTask, setSelectedTask, toggleComplete }) => (
//   <div className="border-2  border-gray-700 p-2 rounded mb-2 flex justify-between">
//     <div>
//       <h3 className="font-bold">{task.title}</h3>
//       <p>{task.description}</p>
//       <p>Due: {task.dueDate}</p>
//       <p>Priority: {task.priority}</p>
//     </div>
//     <div className="flex items-center gap-3"> {/* Increased gap to 3 */}
//     <FontAwesomeIcon
//         icon={faCheckCircle}
//         onClick={() => toggleComplete(task.id)}
//         className={`p-2 cursor-pointer rounded ${task.completed ? 'text-gray-500' : 'text-green-500'}` }
//         size="lg"
//         title={task.completed ? 'Completed' : 'Mark as Complete'}
//       />
//       <FontAwesomeIcon
//         icon={faEdit}
//         onClick={() => setSelectedTask(task)}
//         className="p-2 cursor-pointer text-blue-500"
//         title="Edit Task"
//         size="lg"
//       />
//       <FontAwesomeIcon
//         icon={faTrash}
//         onClick={() => deleteTask(task.id)}
//         className="p-2 cursor-pointer text-red-500"
//         title="Delete Task"
//         size="lg"
//       />
      
      
      
      
      
      
//       {/* <button 
//         onClick={() => toggleComplete(task.id)} 
//         className={`p-2 rounded ${task.completed ? 'bg-gray-400' : 'bg-green-500 text-white'} hover:bg-green-600`}
//       >
//         {task.completed ? 'Completed' : 'Mark as Complete'}
//       </button>
//       <button 
//         onClick={() => setSelectedTask(task)} 
//         className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//       >
//         Edit
//       </button>
//       <button 
//         onClick={() => deleteTask(task.id)} 
//         className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
//       >
//         Delete
//       </button> */}
//     </div>
//   </div>
// );

// export default TaskItem;



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
