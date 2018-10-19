import React, { Component } from 'react';
import './App.css';
import { ConnectionForm } from './components/connectionForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectionForm/>
      </div>
    );
  }
}

export default App;
