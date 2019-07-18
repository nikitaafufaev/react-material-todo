import React from 'react';
import PropTypes from 'prop-types';

import '../styles/TodoOutput.scss';

import TasksDisplay from './TasksDisplay';
import TodoList from './TodoList';
import ClearButton from './ClearButton';

function TodoOutput(props) {
  const {
    incompleteTasks,
    completeTasks,
    onToggleDone,
    onClearCompleteTasks,
    onDeleteTask,
  } = props;
  const incomplete = incompleteTasks.length;
  const complete = completeTasks.length;

  let classes = 'todo-output';

  if (incomplete === 0 && complete === 0) {
    classes += ' hidden';
  }

  return (
    <div className={classes}>
      <TasksDisplay incomplete={incomplete} complete={complete} />
      <TodoList
        incompleteTasks={incompleteTasks}
        completeTasks={completeTasks}
        toggleDone={onToggleDone}
        deleteTask={onDeleteTask}
      />
      <ClearButton isCompleted={!!complete} clearCompleteTasks={onClearCompleteTasks} />
    </div>
  );
}

TodoOutput.propTypes = {
  incompleteTasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  completeTasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onClearCompleteTasks: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TodoOutput;
