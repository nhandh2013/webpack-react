import React, {Component} from "react";
import ReactDOM from 'react-dom';
import App from './views/index.js';

ReactDOM.render(<App />, document.getElementById('root'));

if(module.hot) module.hot.accept('./views/index.js', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
})