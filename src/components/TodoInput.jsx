import React, { Component } from 'react';

import '../styles/TodoInput.scss';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'You created task!',
    };

    this.taskInput = this.taskInput.bind(this);
  }

  taskInput(event) {
    event.preventDefault();

    const { text } = this.state;
    // eslint-disable-next-line no-console
    console.log(text);
  }

  render() {
    return (
      <form className="todo-input" onSubmit={this.taskInput}>
        <button
          className="todo-input__button btn-floating waves-effect waves-light btn blue"
          type="submit"
        >
          <i className="material-icons">add</i>
        </button>
        <input className="todo-input__field" type="text" placeholder="Create some tasks..." />
      </form>
    );
  }
}

export default TodoInput;
