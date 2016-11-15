
/*
* Adding React to an Existing Application
* npm install --save react react-dom
*
*
* Creating a Single Page Application
* npm install -g create-react-app
* create-react-app hello-world
* cd hello-world
* npm start
*
*
* Using a CDN
* <script src="https://unpkg.com/react@15/dist/react.js"></script>
* <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
*
* <script src="https://unpkg.com/react@15/dist/react.min.js"></script>
* <script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
* */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
ReactDOM.render(
    <App />,
    document.getElementById('webComponent')
);