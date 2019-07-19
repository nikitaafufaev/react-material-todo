import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Notification.scss';

function Notification(props) {
  const { isShowNotification, isFailure, notificationText } = props;
  const showClass = isShowNotification ? 'show' : '';
  const failureClass = isFailure ? 'red' : 'teal';
  const classes = `notification white-text center-align ${failureClass} ${showClass}`;

  return <div className={classes}>{notificationText}</div>;
}

Notification.propTypes = {
  isShowNotification: PropTypes.bool.isRequired,
  isFailure: PropTypes.bool.isRequired,
  notificationText: PropTypes.string.isRequired,
};

export default Notification;
