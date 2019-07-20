import React, { Component } from 'react';

import Notification from './Notification';
import TodoInput from './TodoInput';
import TodoOutput from './TodoOutput';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
      tasks: [],
      completedList: [],
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
      tasks: [...state.tasks, state.inputText],
      completedList: [...state.completedList, false],
    }));
  }

  onClearCompleteTasks() {
    this.setState(state => {
      const removedArr = [];
      state.completedList.forEach((value, index) => {
        if (value) removedArr.push(index);
      });
      const removedAmount = removedArr.length;
      const tasks = state.tasks.filter(
        (value, index) => removedArr.indexOf(index) === -1,
      );
      const completedList = state.completedList.filter(
        (value, index) => removedArr.indexOf(index) === -1,
      );

      return {
        tasks: [...tasks],
        completedList: [...completedList],
        isShowNotification: true,
        isFailure: false,
        notificationText: `${removedAmount} completed task${
          removedAmount > 1 ? 's' : ''
        } successfully deleted`,
      };
    });
    this.deleteNotification();
  }

  onDeleteTask(index) {
    this.setState(state => {
      const tasks = state.tasks.slice();
      const completedList = state.completedList.slice();
      const removed = tasks.splice(index, 1)[0];
      completedList.splice(index, 1);

      return {
        tasks: [...tasks],
        completedList: [...completedList],
        isShowNotification: true,
        isFailure: false,
        notificationText: `Task "${removed}" successfully deleted`,
      };
    });
    this.deleteNotification();
  }

  onToggleDone(index) {
    this.setState(state => {
      const completedList = state.completedList.slice();
      completedList[index] = !completedList[index];

      return {
        completedList: [...completedList],
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
      tasks,
      completedList,
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
              tasks={tasks}
              completedList={completedList}
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
