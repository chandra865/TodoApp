// import React from 'react';
// import TaskItem from './TaskItem';

// const TaskList = ({ tasks, deleteTask, setSelectedTask, toggleComplete }) => (
//   <div>
//     {tasks.length > 0 ? tasks.map(task => (
//       <TaskItem 
//         key={task.id} 
//         task={task} 
//         deleteTask={deleteTask} 
//         setSelectedTask={setSelectedTask} 
//         toggleComplete={toggleComplete} 
//       />
//     )) : <p>No tasks found.</p>}
//   </div>
// );

// export default TaskList;


import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, setSelectedTask, toggleComplete }) => (
  <div>
    {tasks.length > 0 ? tasks.map(task => (
      <TaskItem 
        key={task.id} 
        task={task} 
        deleteTask={deleteTask} 
        setSelectedTask={setSelectedTask} 
        toggleComplete={toggleComplete} 
      />
    )) : <p>No tasks found.</p>}
  </div>
);

export default TaskList;
