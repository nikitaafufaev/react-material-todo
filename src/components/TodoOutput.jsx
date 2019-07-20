import React from 'react';
import PropTypes from 'prop-types';

import '../styles/TodoOutput.scss';

import TasksDisplay from './TasksDisplay';
import SearchBar from './SearchBar';
import TodoList from './TodoList';
import ClearButton from './ClearButton';

function TodoOutput(props) {
  const {
    tasks,
    completedList,
    onToggleDone,
    onClearCompleteTasks,
    onDeleteTask,
  } = props;
  let classes = 'todo-output';

  if (tasks.length === 0) {
    classes = `${classes} hidden`;
  }

  return (
    <div className={classes}>
      <TasksDisplay completedList={completedList} />
      <SearchBar />
      <TodoList
        tasks={tasks}
        completedList={completedList}
        toggleDone={onToggleDone}
        deleteTask={onDeleteTask}
      />
      <ClearButton
        isCompleted={completedList.indexOf(true) > -1}
        clearCompleteTasks={onClearCompleteTasks}
      />
    </div>
  );
}

TodoOutput.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  completedList: PropTypes.arrayOf(PropTypes.bool).isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onClearCompleteTasks: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TodoOutput;
