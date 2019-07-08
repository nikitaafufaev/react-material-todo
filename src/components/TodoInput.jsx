import React from 'react';

import '../styles/TodoInput.scss';

const TodoInput = () => {
  return (
    <div className="todo-input">
      <div className="todo-input__button btn-floating waves-effect waves-light btn blue">
        <i className="material-icons">add</i>
      </div>
      <input className="todo-input__field" type="text" placeholder="Create some tasks..." />
    </div>
  );
};

export default TodoInput;
