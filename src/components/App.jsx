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
      notification: {},
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
      tasks: [
        ...state.tasks,
        {
          title: state.inputText,
          isCompleted: false,
        },
      ],
    }));
  }

  onClearCompleteTasks() {
    this.setState(state => {
      let counter = 0;
      state.tasks.forEach(element => {
        if (element.isCompleted) counter += 1;
      });
      const newTasks = state.tasks.filter(element => !element.isCompleted);

      return {
        tasks: [...newTasks],
        notification: {
          isShow: true,
          isFailure: false,
          text: `${counter} completed task${
            counter > 1 ? 's' : ''
          } successfully deleted`,
        },
      };
    });

    this.deleteNotification();
  }

  onDeleteTask(index) {
    this.setState(state => {
      const tasks = state.tasks.slice();
      const removed = tasks.splice(index, 1)[0];

      return {
        tasks: [...tasks],
        notification: {
          isShow: true,
          isFailure: false,
          text: `Task "${removed.title}" successfully deleted`,
        },
      };
    });

    this.deleteNotification();
  }

  onToggleDone(index) {
    this.setState(state => {
      const tasks = state.tasks.slice();
      tasks[index].isCompleted = !tasks[index].isCompleted;

      return {
        tasks: [...tasks],
      };
    });
  }

  showNotification(isFailure, text) {
    this.setState({
      notification: {
        isShow: true,
        isFailure,
        text,
      },
    });
  }

  deleteNotification() {
    clearTimeout(this.timerId);
    this.timerId = setTimeout(() => {
      this.setState({
        notification: {
          isShow: false,
        },
      });
    }, 3000);
  }

  checkTask(task) {
    if (task === '') {
      this.showNotification(true, 'New task can not be empty');
      return false;
    }

    if (task.length < 3) {
      this.showNotification(
        true,
        'New task must be at least 3 characters long',
      );
      return false;
    }

    this.showNotification(false, `Task "${task}" successfully created`);
    return true;
  }

  render() {
    const { inputText, tasks, notification } = this.state;

    return (
      <div className="row">
        <Notification notification={notification} />
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
