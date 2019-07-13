import React, { Component } from 'react';

import '../styles/TodoOutput.scss';

import TasksDisplay from './TasksDisplay';
import TodoList from './TodoList';
import ClearButton from './ClearButton';

class TodoOutput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    const { show } = this.state;
    const hiddenClass = show ? '' : ' hidden';
    let classes = 'todo-output';

    classes += hiddenClass;

    return (
      <div className={classes}>
        <TasksDisplay />
        <TodoList />
        <ClearButton />
      </div>
    );
  }
}

export default TodoOutput;
