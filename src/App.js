import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import logo from './dino.svg';
import './App.css';
import EditRules from './containers/EditRules'
import { Button } from 'react-bootstrap';

class App extends Component {
    handleClick = () => {
        console.log("HELLO")
    };
  render() {
    return (
      <div className="App">
        <p className="App-intro">
            <button onClick={this.handleClick}>Save Region Rules</button>
        </p>
        <EditRules/>
      </div>
    );
  }
}

export default App;
