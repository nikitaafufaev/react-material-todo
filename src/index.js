import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/js/materialize.min';

import 'materialize-css/dist/css/materialize.min.css';
import './styles/index.scss';

import Todo from './components/Todo';

ReactDOM.render(<Todo />, document.getElementById('root'));
