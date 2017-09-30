import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import logo from './dino.svg';
import './App.css';
import EditRules from './containers/EditRules'
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EditRules/>
      </div>
    );
  }
}

export default App;
