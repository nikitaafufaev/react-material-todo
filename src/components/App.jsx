import React, { Component } from 'react';

import '../styles/App.scss';

import Notification from './Notification';
import Header from './Header';
import TodoInput from './TodoInput';
import TodoOutput from './TodoOutput';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      incompleteTasks: [],
      completeTasks: [],
    };

    this.onTaskChange = this.onTaskChange.bind(this);
    this.onTaskSubmit = this.onTaskSubmit.bind(this);
    this.onClearCompleteTasks = this.onClearCompleteTasks.bind(this);
    this.onDeleteTask = this.onDeleteTask.bind(this);
    this.onToggleDone = this.onToggleDone.bind(this);
  }

  onTaskChange(text) {
    this.setState({
      text,
    });
  }

  onTaskSubmit() {
    this.setState(state => ({
      text: '',
      incompleteTasks: [...state.incompleteTasks, state.text],
    }));
  }

  onClearCompleteTasks() {
    this.setState({
      completeTasks: [],
    });
  }

  onDeleteTask(done, index) {
    const targetTasks = done ? 'completeTasks' : 'incompleteTasks';

    this.setState(state => {
      const tasks = state[targetTasks].slice();
      tasks.splice(index, 1);

      return {
        [targetTasks]: [...tasks],
      };
    });
  }

  onToggleDone(done, index) {
    const initialTasks = done ? 'completeTasks' : 'incompleteTasks';
    const finiteTasks = done ? 'incompleteTasks' : 'completeTasks';
    this.changeTaskStatus(initialTasks, finiteTasks, index);
  }

  changeTaskStatus(initialTasks, finiteTasks, index) {
    this.setState(state => {
      const tasks = state[initialTasks].slice();
      const removed = tasks.splice(index, 1);

      return {
        [finiteTasks]: [...state[finiteTasks], ...removed],
        [initialTasks]: [...tasks],
      };
    });
  }

  render() {
    const { text, incompleteTasks, completeTasks } = this.state;

    return (
      <div className="row">
        <Notification />
        <div className="app col s12 m10 offset-m1 l8 offset-l2">
          <Header />
          <div className="app__main card-panel">
            <TodoInput
              text={text}
              onTaskChange={this.onTaskChange}
              onTaskSubmit={this.onTaskSubmit}
            />
            <TodoOutput
              incompleteTasks={incompleteTasks}
              completeTasks={completeTasks}
              onToggleDone={this.onToggleDone}
              onClearCompleteTasks={this.onClearCompleteTasks}
              onDeleteTask={this.onDeleteTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
