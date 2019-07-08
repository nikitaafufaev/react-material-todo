import React from 'react';

import '../styles/TodoList.scss';

import TodoItem from './TodoItem';

const TodoList = () => {
  const items = [
    'Get more shampoo',
    'Drink more coffee',
    'Sleep less',
    'Get less shampoo',
    'Drink less coffee',
    'Sleep more',
  ];
  return (
    <form action="#">
      <ul className="todo-list collection">
        {items.map(value => (
          <TodoItem item={value} key={Math.random()} />
        ))}
      </ul>
    </form>
  );
};

export default TodoList;
