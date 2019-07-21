import React from 'react';
import PropTypes from 'prop-types';

import '../styles/TodoOutput.scss';

import TasksDisplay from './TasksDisplay';
import SearchBar from './SearchBar';
import TodoList from './TodoList';
import ClearButton from './ClearButton';

function TodoOutput(props) {
  const { tasks, onToggleDone, onClearCompleteTasks, onDeleteTask } = props;
  let classes = 'todo-output';

  if (tasks.length === 0) {
    classes = `${classes} hidden`;
  }

  const completedArr = tasks.filter(element => element.isCompleted);
  const completed = completedArr.length;
  const incompleted = tasks.length - completed;

  const isCompleted =
    tasks.findIndex(element => element.isCompleted === true) !== -1;

  return (
    <div className={classes}>
      <TasksDisplay completed={completed} incompleted={incompleted} />
      <SearchBar />
      <TodoList
        tasks={tasks}
        toggleDone={onToggleDone}
        deleteTask={onDeleteTask}
      />
      <ClearButton
        isCompleted={isCompleted}
        clearCompleteTasks={onClearCompleteTasks}
      />
    </div>
  );
}

TodoOutput.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])),
  ).isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onClearCompleteTasks: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TodoOutput;
