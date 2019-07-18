import React from 'react';
import PropTypes from 'prop-types';

import '../styles/TodoList.scss';

import TodoItem from './TodoItem';

function TodoList(props) {
  const { incompleteTasks, completeTasks, toggleDone, deleteTask } = props;

  return (
    <ul className="todo-list collection">
      {incompleteTasks.map((value, index) => (
        <TodoItem
          done={false}
          item={value}
          index={index}
          toggleDone={toggleDone}
          deleteTask={deleteTask}
          key={value + Math.random().toFixed(3)}
        />
      ))}
      {completeTasks.map((value, index) => (
        <TodoItem
          done
          item={value}
          index={index}
          toggleDone={toggleDone}
          deleteTask={deleteTask}
          key={value + Math.random().toFixed(3)}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  incompleteTasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  completeTasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TodoList;
