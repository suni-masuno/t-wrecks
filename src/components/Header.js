/**
 * Created by LMH1201 on 9/30/17.
 */

import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class Header extends Component{

  render() {
    return (
      <div className="header">
        <img className="dino" />
        <span className="header-title">CODE: DINO</span>
        <Button onClick={this.handleClick} bsStyle="danger" className="header-button">Deploy</Button>
        <img className="shield" />
      </div>
    )
  }
}

export default Header;