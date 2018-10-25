import React, {Component} from "react";
import ReactDOM from 'react-dom';
import App from './views/index.js';
import {Provider} from 'react-redux';
import configureStore from './views/store';
import {
  BrowserRouter,
  Route,
  Link
  } from 'react-router-dom'


ReactDOM.render((
  <Provider store={configureStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

if(module.hot) module.hot.accept('./views/index.js', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
})