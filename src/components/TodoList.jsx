import React from 'react';
import PropTypes from 'prop-types';

import '../styles/TodoList.scss';

import TodoItem from './TodoItem';

function TodoList(props) {
  const { tasks, completedList, toggleDone, deleteTask } = props;
  return (
    <ul className="todo-list collection">
      {tasks.map((value, index) => (
        <TodoItem
          done={completedList[index]}
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
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  completedList: PropTypes.arrayOf(PropTypes.bool).isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TodoList;
