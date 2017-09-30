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

  onSelect = event => {
    console.log(event);
    this.setState((previousState) => ({
      region: event.target.value
    }))
    console.log(this.state);
  };

  render() {

    return (
      <div>
          <select onChange={this.onSelect} title='Regions' id="bg-nested-dropdown">
            {
              Object.keys(this.props.ruleSet).map((region) => {
                return <option key={region} >{region}</option>
              })
            }
          </select>
      </div>
    )
  }
}

export default RegionSelector;

{/*{*/}
{/*regions.map((region) => {*/}
{/*return <MenuItem value={region}>{region}</MenuItem>*/}
{/*})*/}
{/*}*/}