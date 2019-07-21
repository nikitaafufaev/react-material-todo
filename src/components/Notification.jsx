import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Notification.scss';

function Notification(props) {
  const { notification } = props;
  const showClass = notification.isShow ? 'show' : '';
  const failureClass = notification.isFailure ? 'red' : 'teal';
  const classes = `notification white-text center-align ${failureClass} ${showClass}`;

  return <div className={classes}>{notification.text}</div>;
}

Notification.propTypes = {
  notification: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  ).isRequired,
};

export default Notification;
