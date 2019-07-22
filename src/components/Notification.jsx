import React from 'react';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types';

import '../styles/Notification.scss';

function Notification(props) {
  const { notification } = props;
  const failureClass = notification.isFailure ? 'red' : 'teal';
  const classes = `notification white-text center-align ${failureClass}`;

  return (
    <Fade in={notification.isShow}>
      <div className={classes}>{notification.text}</div>
    </Fade>
  );
}

Notification.propTypes = {
  notification: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  ).isRequired,
};

export default Notification;
