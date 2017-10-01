import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import EditRules from './containers/EditRules'
import Header from './components/Header'
import Welcome from './components/Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <EditRules/>
      </div>
    );
  }
}

export default App;
