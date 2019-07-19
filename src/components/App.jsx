import React, { Component } from 'react';

import Notification from './Notification';
import TodoInput from './TodoInput';
import TodoOutput from './TodoOutput';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
      incompleteTasks: [],
      completeTasks: [],
      isShowNotification: false,
      isFailure: false,
      notificationText: '',
    };

    this.onTaskChange = this.onTaskChange.bind(this);
    this.onTaskSubmit = this.onTaskSubmit.bind(this);
    this.onClearCompleteTasks = this.onClearCompleteTasks.bind(this);
    this.onDeleteTask = this.onDeleteTask.bind(this);
    this.onToggleDone = this.onToggleDone.bind(this);
  }

  onTaskChange(inputText) {
    this.setState({ inputText });
  }

  onTaskSubmit() {
    const { inputText } = this.state;
    const success = this.checkTask(inputText);

    this.deleteNotification();
    if (!success) return;

    this.setState(state => ({
      inputText: '',
      incompleteTasks: [...state.incompleteTasks, state.inputText],
    }));
  }

  onClearCompleteTasks() {
    const { completeTasks } = this.state;
    const amount = completeTasks.length;

    this.setState({
      completeTasks: [],
      isShowNotification: true,
      isFailure: false,
      notificationText: `${amount} completed task${
        amount > 1 ? 's' : ''
      } successfully deleted`,
    });
    this.deleteNotification();
  }

  onDeleteTask(done, index) {
    const targetTasks = done ? 'completeTasks' : 'incompleteTasks';

    this.setState(state => {
      const tasks = state[targetTasks].slice();
      const removed = tasks.splice(index, 1)[0];

      return {
        [targetTasks]: [...tasks],
        isShowNotification: true,
        isFailure: false,
        notificationText: `Task "${removed}" successfully deleted`,
      };
    });
    this.deleteNotification();
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

  deleteNotification() {
    clearTimeout(this.timerId);
    this.timerId = setTimeout(() => {
      this.setState({ isShowNotification: false });
    }, 3000);
  }

  checkTask(task) {
    const state = { isShowNotification: true, isFailure: true };
    if (task === '') {
      this.setState({
        ...state,
        notificationText: 'New task can not be empty',
      });
      return false;
    }

    if (task.length < 3) {
      this.setState({
        ...state,
        notificationText: 'New task must be at least 3 characters long',
      });
      return false;
    }

    this.setState({
      ...state,
      isFailure: false,
      notificationText: `Task "${task}" successfully created`,
    });
    return true;
  }

  render() {
    const {
      inputText,
      incompleteTasks,
      completeTasks,
      isShowNotification,
      isFailure,
      notificationText,
    } = this.state;

    return (
      <div className="row">
        <Notification
          isShowNotification={isShowNotification}
          isFailure={isFailure}
          notificationText={notificationText}
        />
        <div className="app col s12 m10 offset-m1 l8 offset-l2">
          <h3 className="app__title white-text center-align">To Do</h3>
          <div className="app__main card-panel">
            <TodoInput
              inputText={inputText}
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
