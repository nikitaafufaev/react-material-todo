import React from 'react';

import '../styles/TodoOutput.scss';

import TasksDisplay from './TasksDisplay';
import TodoList from './TodoList';
import ClearButton from './ClearButton';

const TodoOutput = () => {
  return (
    <div className="todo-output scale-transition">
      <TasksDisplay />
      <TodoList />
      <ClearButton />
    </div>
  );
};

export default TodoOutput;
