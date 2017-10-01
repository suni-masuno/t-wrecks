/**
 * Created by LMH1201 on 9/30/17.
 */

import React, { Component } from 'react';

class Header extends Component{

  render() {
    return (
      <div class="header">
        <img class="dino" />
        <span class="header-title">Code: Dino</span>
        <img class="shield" />
      </div>
    )
  }
}

export default Header;