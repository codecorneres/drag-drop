import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Sample from './Sample';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import { initializeIcons } from '@uifabric/icons';

initializeIcons();
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
