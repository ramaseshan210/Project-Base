/* eslint arrow-body-style: ["off", "as-needed"] */
/* eslint-disable */
/* eslint no-trailing-spaces: "off" */
/* react/jsx-filename-extension": [ "off": "as-needed" }] */
import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.scss';
import 'remixicon/fonts/remixicon.css';
import App from './components/App.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
