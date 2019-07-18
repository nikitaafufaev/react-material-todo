import React from 'react';
import PropTypes from 'prop-types';

import '../styles/ClearButton.scss';

function ClearButton(props) {
  const { isCompleted, clearCompleteTasks } = props;
  let classes = 'clear-button';

  if (!isCompleted) classes += ' hidden';

  return (
    <div className={classes}>
      <button
        className="clear-button__btn btn waves-effect waves-light blue lighten-1"
        type="button"
        onClick={() => clearCompleteTasks()}
      >
        Clear completed tasks
        <i className="material-icons right">delete_forever</i>
      </button>
    </div>
  );
}

ClearButton.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  clearCompleteTasks: PropTypes.func.isRequired,
};

export default ClearButton;
