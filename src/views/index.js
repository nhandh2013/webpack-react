import React, { Component } from 'react';
import Profile from './components/Profile';
import Home from './components/Home';
import Nav from './components/Nav';
import {
  Route,
  } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Profile} />
      </div>
    )
  }
}

export default App;