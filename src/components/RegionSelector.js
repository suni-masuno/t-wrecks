/**
 * Created by LMH1201 on 9/29/17.
 */

import React, { Component } from 'react';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap'
import regions from '../data/regions'
import RuleSelector from '../components/RuleSelector'

class RegionSelector extends Component{
  constructor(props) {
    super(props);
    this.state = { };
  }
  componentWillReceiveProps(next) {
    this.setState({region: this.props.selectedRegion})
  }

  render() {
    return (
      <div>
          <p>{this.state.selectedRegion}</p>
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
          {this.state.selectedRegion ? <RuleSelector
                editRules={this.props.editRules}
                ruleSet={this.props.ruleSet}
                selectedRegion={this.state.selectedRegion}
          /> : ''}
      </div>
    )
  }
}

export default RegionSelector;
