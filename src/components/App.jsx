import React from 'react';

import '../styles/App.scss';

import Notification from './Notification';
import Header from './Header';
import TodoInput from './TodoInput';
import TodoOutput from './TodoOutput';

function App() {
  return (
    <div className="row">
      <Notification />
      <div className="app col s12 m10 offset-m1 l8 offset-l2">
        <Header />
        <div className="app__main card-panel">
          <TodoInput />
          <TodoOutput />
        </div>
      </div>
    </div>
  );
}

export default App;
