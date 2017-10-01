/**
 * Created by LMH1201 on 9/30/17.
 */

import React, { Component } from 'react';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap'


class Welcome extends Component{

  render() {
    return (
      <div>
        <div class="welcome-message">Welcome, Agent Dino #12</div>
        <div class="button-wrapper">
          <Button bsStyle="info">Region List</Button>
        </div>
        <div class="button-wrapper">
          <Button bsStyle="info">Add Region</Button>
        </div>
        <div class="button-wrapper">
          <Button bsStyle="info">Rule List</Button>
        </div>
      </div>
    )
  }
}

export default Welcome;