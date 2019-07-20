import React from 'react';
import PropTypes from 'prop-types';

import '../styles/TasksDisplay.scss';

function TasksDisplay(props) {
  const { completedList } = props;
  const all = completedList.length;
  const completeArr = completedList.filter(value => value);
  const complete = completeArr.length;
  const incomplete = all - complete;

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
  completedList: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default TasksDisplay;
