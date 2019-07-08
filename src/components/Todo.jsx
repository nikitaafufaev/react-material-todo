import React from 'react';

import '../styles/Todo.scss';

import TodoInput from './TodoInput';
import TodoOutput from './TodoOutput';

const Todo = () => {
  return (
    <div className="row">
      <div className="todo col s12 m10 offset-m1 l8 offset-l2">
        <h3 className="todo__title white-text center-align">To Do</h3>
        <div className="todo__main card-panel">
          <TodoInput />
          <TodoOutput />
        </div>
      </div>
    </div>
  );
};

export default Todo;
