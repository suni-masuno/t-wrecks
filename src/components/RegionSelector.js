/**
 * Created by LMH1201 on 9/29/17.
 */

import React, { Component } from 'react';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap'
import regions from '../data/regions'

class RegionSelector extends Component{
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
          <div>stuff and things</div>
          <DropdownButton title='Regions' id="bg-nested-dropdown">
            {
              Object.keys(this.props.ruleSet).map((region) => {
                return <MenuItem onClick={() => this.setState((prevState) => ({
                  selectedRegion: region,
                  })
                )} key={region} >{region}</MenuItem>
              })
            }
          </DropdownButton>
      </div>
    )
  }
}

export default RegionSelector;
