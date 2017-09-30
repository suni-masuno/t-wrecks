import React, { Component } from 'react';
import RuleSelector from '../components/RuleSelector'
import RegionSelector from '../components/RegionSelector'

class EditRules extends Component {
  constructor(props) {
    super(props);
    this.state = { region: 'Cuba', rules: ['Allow complaints.'] };
  }
    render() {
        return (
            <div>
              <RegionSelector
                region={this.state.region}/>
              <RuleSelector
                rules={this.state.rules}/>
            </div>
        );
    }
}

export default EditRules;