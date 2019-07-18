import React from 'react';
import PropTypes from 'prop-types';

import '../styles/TodoItem.scss';

function TodoItem(props) {
  const { item, index, done, toggleDone, deleteTask } = props;
  let classes = 'todo-item collection-item';
  let icon = 'check_box_outline_blank';

  if (done) {
    classes += ' done grey-text';
    icon = 'check_box';
  }

  return (
    <li className={classes}>
      <div className="todo-item__main" onClick={() => toggleDone(done, index)}>
        <i className="todo-item__icon material-icons">{icon}</i>
        <span className="todo-item__text">{item}</span>
      </div>
      <button
        className="todo-item__clear btn-floating btn-small waves-effect waves-light red"
        type="button"
        onClick={() => deleteTask(done, index)}
      >
        <i className="todo-item__clear-icon material-icons">clear</i>
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TodoItem;
