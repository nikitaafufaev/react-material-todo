import React from 'react';

import '../styles/TasksDisplay.scss';

const TasksDisplay = () => {
  return (
    <div className="tasks-display white-text">
      <span className="tasks-display__type blue">All Tasks: 3</span>
      <span className="tasks-display__type red">Incomplete: 1</span>
      <span className="tasks-display__type teal">Complete: 2</span>
    </div>
  );
};

export default TasksDisplay;
