import React from 'react';
import PropTypes from 'prop-types';

import '../styles/TodoItem.scss';

const TodoItem = props => {
  const { item } = props;
  return (
    <li className="todo-item collection-item">
      <label className="todo-item__label" htmlFor={item}>
        <input className="todo-item__checkbox" type="checkbox" id={item} />
        <span className="todo-item__text">{item}</span>
      </label>
      <button
        className="todo-item__clear btn-floating btn-small waves-effect waves-light red"
        type="button"
      >
        <i className="material-icons">clear</i>
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default TodoItem;
