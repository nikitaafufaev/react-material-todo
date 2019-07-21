import React from 'react';
import PropTypes from 'prop-types';

import '../styles/ClearButton.scss';

function ClearButton(props) {
  const { isCompleted, clearCompleteTasks } = props;
  let classes = 'clear-button__btn btn waves-effect waves-light blue lighten-1';

  if (!isCompleted) classes = `${classes} disabled`;

  return (
    <div className="clear-button">
      <button
        className={classes}
        type="button"
        onClick={() => clearCompleteTasks()}
      >
        Clear completed tasks
        <i className="clear-button__icon material-icons right">
          delete_forever
        </i>
      </button>
    </div>
  );
}

ClearButton.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  clearCompleteTasks: PropTypes.func.isRequired,
};

export default ClearButton;
