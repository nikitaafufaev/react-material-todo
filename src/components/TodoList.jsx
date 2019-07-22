import React from 'react';
import PropTypes from 'prop-types';

import '../styles/TodoList.scss';

import TodoItem from './TodoItem';

function TodoList(props) {
  const { tasks, toggleDone, deleteTask } = props;

  return (
    <ul className="todo-list collection">
      {tasks.map((element, index) => (
        <TodoItem
          done={element.isCompleted}
          item={element.title}
          index={index}
          toggleDone={toggleDone}
          deleteTask={deleteTask}
          key={element.title + Math.random().toFixed(3)}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])),
  ).isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TodoList;
