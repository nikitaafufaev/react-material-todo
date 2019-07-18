import React from 'react';
import PropTypes from 'prop-types';

import '../styles/TasksDisplay.scss';

function TasksDisplay(props) {
  const { incomplete, complete } = props;
  const all = incomplete + complete;

  return (
    <div className="tasks-display white-text">
      <span className="tasks-display__type blue">
        {'All Tasks: '}
        {all}
      </span>
      <span className="tasks-display__type red">
        {'Incomplete: '}
        {incomplete}
      </span>
      <span className="tasks-display__type teal">
        {'Complete: '}
        {complete}
      </span>
    </div>
  );
}

TasksDisplay.propTypes = {
  incomplete: PropTypes.number.isRequired,
  complete: PropTypes.number.isRequired,
};

export default TasksDisplay;
