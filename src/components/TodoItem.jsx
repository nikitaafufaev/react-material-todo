import React from 'react';
import PropTypes from 'prop-types';

import '../styles/TodoItem.scss';

const TodoItem = props => {
  const { item } = props;
  return <li>{item}</li>;
};

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default TodoItem;
