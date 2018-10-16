import React, {Component} from "react";
import ReactDOM from 'react-dom';
import App from './views/index.js';
import {
  BrowserRouter,
  Route,
  Link
  } from 'react-router-dom'


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

if(module.hot) module.hot.accept('./views/index.js', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
})