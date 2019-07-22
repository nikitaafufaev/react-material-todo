import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import PropTypes from 'prop-types';

import '../styles/TodoOutput.scss';

import TasksDisplay from './TasksDisplay';
import TodoList from './TodoList';
import ClearButton from './ClearButton';

function TodoOutput(props) {
  const { tasks, onToggleDone, onClearCompleteTasks, onDeleteTask } = props;

  const completedArr = tasks.filter(element => element.isCompleted);
  const completed = completedArr.length;
  const incompleted = tasks.length - completed;
  const isCompleted =
    tasks.find(element => element.isCompleted === true) !== undefined;

  return (
    <Collapse in={tasks.length !== 0}>
      <div className="todo-output">
        <TasksDisplay completed={completed} incompleted={incompleted} />
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
    </Collapse>
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
