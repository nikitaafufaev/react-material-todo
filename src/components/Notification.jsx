import React, { Component } from 'react';

import '../styles/Notification.scss';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      failure: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: false,
      });
    }, 3000);
  }

  render() {
    const { show, failure } = this.state;
    const showClass = show ? ' show' : '';
    const failureClass = failure ? ' red' : ' teal';
    let classes = 'notification white-text center-align';

    classes += failureClass + showClass;

    return <div className={classes}>Task successfully created</div>;
  }
}

export default Notification;
