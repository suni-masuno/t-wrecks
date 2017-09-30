/**
 * Created by LMH1201 on 9/29/17.
 */

import React, { Component } from 'react';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap'
import regions from '../data/regions'

class RegionSelector extends Component{
  render() {

    return (
      <div>
        <ButtonGroup>
          <DropdownButton title={this.props.region} id="bg-nested-dropdown">
            {
              regions.map((region) => {
                return <MenuItem value={region}>{region}</MenuItem>
              })
            }
          </DropdownButton>
        </ButtonGroup>
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