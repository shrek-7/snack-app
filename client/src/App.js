import React, { Component } from 'react';
import Header from './components/header';
import Dashboard from './components/dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Dashboard/>
      </div>
    );
  }
}

export default App;
