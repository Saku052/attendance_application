import React from 'react';
import TaskItem from './TaskItem.js';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;