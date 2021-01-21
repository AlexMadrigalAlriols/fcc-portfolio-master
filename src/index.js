import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Typed from 'typed.js';

ReactDOM.render(<App />, document.getElementById('app'));

serviceWorker.unregister();
