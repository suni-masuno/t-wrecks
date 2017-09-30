import React, { Component } from 'react';
import RuleSelector from '../components/RuleSelector'
import RegionSelector from '../components/RegionSelector'

class EditRules extends Component {
  constructor(props) {
    super(props);
    this.state = { ruleSet:{Cuba:{allowComplaints:true}, Mexico:{regionalPrivacy: true}}};
  }
    render() {
        return (
            <div>
              <RegionSelector
                ruleSet={this.state.ruleSet}/>
            </div>
        );
    }
}

export default EditRules;