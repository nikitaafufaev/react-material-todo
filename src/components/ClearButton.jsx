import React from 'react';

import '../styles/ClearButton.scss';

const ClearButton = () => {
  return (
    <div className="clear-button">
      <button
        className="clear-button__btn btn waves-effect waves-light blue lighten-1"
        type="button"
      >
        Clear completed tasks
        <i className="material-icons right">delete_forever</i>
      </button>
    </div>
  );
};

export default ClearButton;
