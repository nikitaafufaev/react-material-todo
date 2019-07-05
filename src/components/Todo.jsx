import React from 'react';

import '../styles/Todo.scss';

import Header from './Header';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <div className="todo">
      <Header />
      <TodoList />
    </div>
  );
};

export default Todo;
