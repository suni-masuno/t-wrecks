import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import EditRules from './containers/EditRules';
import 'react-toastify/dist/ReactToastify.min.css'

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
