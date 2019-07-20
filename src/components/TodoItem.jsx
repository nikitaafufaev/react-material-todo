import React from 'react';
import PropTypes from 'prop-types';

import '../styles/TodoItem.scss';

function TodoItem(props) {
  const { done, item, index, toggleDone, deleteTask } = props;
  let classes = 'todo-item collection-item';
  let icon = 'check_box_outline_blank';

  if (done) {
    classes = `${classes} done grey-text`;
    icon = 'check_box';
  }

  return (
    <li className={classes}>
      <div
        className="todo-item__main"
        role="button"
        tabIndex="0"
        onClick={() => toggleDone(index)}
        onKeyPress={() => toggleDone(index)}
      >
        <i className="todo-item__icon material-icons">{icon}</i>
        <span className="todo-item__text">{item}</span>
      </div>
      <button
        className="todo-item__clear-button btn-floating btn-small waves-effect waves-light red"
        type="button"
        onClick={() => deleteTask(index)}
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
