import React from 'react';

import '../styles/TodoList.scss';

import TodoItem from './TodoItem';

const TodoList = () => {
  const items = ['Finish new app', 'Read book on programming', 'Run marathon', 'New To-do'];
  return (
    <ul className="todo-list">
      {items.map(value => (
        <TodoItem item={value} key={Math.random()} />
      ))}
    </ul>
  );
};

export default TodoList;
