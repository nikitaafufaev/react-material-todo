import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Notification.scss';

function Notification(props) {
  const { showNotification, isFailure, notificationText } = props;
  const showClass = showNotification ? 'show' : '';
  const failureClass = isFailure ? 'red' : 'teal';
  const classes = `notification white-text center-align ${failureClass} ${showClass}`;

  return <div className={classes}>{notificationText}</div>;
}

Notification.propTypes = {
  showNotification: PropTypes.bool.isRequired,
  isFailure: PropTypes.bool.isRequired,
  notificationText: PropTypes.string.isRequired,
};

export default Notification;
