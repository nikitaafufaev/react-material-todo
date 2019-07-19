import React from 'react';
import PropTypes from 'prop-types';

import '../styles/TodoList.scss';

import TodoItem from './TodoItem';

function renderTasks(tasks, done, toggleDone, deleteTask) {
  return tasks.map((value, index) => (
    <TodoItem
      done={done}
      item={value}
      index={index}
      toggleDone={toggleDone}
      deleteTask={deleteTask}
      key={value + Math.random().toFixed(3)}
    />
  ));
}

function TodoList(props) {
  const { incompleteTasks, completeTasks, toggleDone, deleteTask } = props;

  return (
    <ul className="todo-list collection">
      {renderTasks(incompleteTasks, false, toggleDone, deleteTask)}
      {renderTasks(completeTasks, true, toggleDone, deleteTask)}
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
