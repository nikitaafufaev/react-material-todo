import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/TodoInput.scss';

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.taskInput = this.taskInput.bind(this);
    this.taskSubmit = this.taskSubmit.bind(this);
  }

  taskInput(event) {
    const { onTaskChange } = this.props;
    onTaskChange(event.target.value);
  }

  taskSubmit(event) {
    event.preventDefault();

    const { onTaskSubmit } = this.props;
    onTaskSubmit();
  }

  render() {
    const { text } = this.props;

    return (
      <form className="todo-input" onSubmit={this.taskSubmit}>
        <button
          className="todo-input__button btn-floating waves-effect waves-light btn blue"
          type="submit"
        >
          <i className="material-icons">add</i>
        </button>
        <input
          className="todo-input__field"
          onChange={this.taskInput}
          value={text}
          type="text"
          placeholder="Create some tasks..."
        />
      </form>
    );
  }
}

TodoInput.propTypes = {
  text: PropTypes.string.isRequired,
  onTaskChange: PropTypes.func.isRequired,
  onTaskSubmit: PropTypes.func.isRequired,
};

export default TodoInput;
