import React from 'react';
import PropTypes from 'prop-types';

import '../styles/TasksDisplay.scss';

function TasksDisplay(props) {
  const { completed, incompleted } = props;
  const all = completed + incompleted;

  return (
    <div className="tasks-display white-text">
      <span className="tasks-display__type blue">
        {'All Tasks: '}
        {all}
      </span>
      <span className="tasks-display__type red">
        {'Incomplete: '}
        {incompleted}
      </span>
      <span className="tasks-display__type teal">
        {'Complete: '}
        {completed}
      </span>
    </div>
  );
}

TasksDisplay.propTypes = {
  completed: PropTypes.number.isRequired,
  incompleted: PropTypes.number.isRequired,
};

export default TasksDisplay;
