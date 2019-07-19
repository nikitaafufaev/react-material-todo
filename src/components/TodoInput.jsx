import React from 'react';
import PropTypes from 'prop-types';

import '../styles/TodoInput.scss';

function TodoInput(props) {
  const { inputText, onTaskSubmit, onTaskChange } = props;

  return (
    <form
      className="todo-input"
      onSubmit={event => {
        event.preventDefault();
        onTaskSubmit();
      }}
    >
      <button
        className="todo-input__button btn-floating waves-effect waves-light btn blue"
        type="submit"
      >
        <i className="todo-input__icon material-icons">add</i>
      </button>
      <input
        className="todo-input__field"
        onChange={event => onTaskChange(event.target.value)}
        value={inputText}
        type="text"
        placeholder="Create some tasks..."
      />
    </form>
  );
}

TodoInput.propTypes = {
  inputText: PropTypes.string.isRequired,
  onTaskChange: PropTypes.func.isRequired,
  onTaskSubmit: PropTypes.func.isRequired,
};

export default TodoInput;
