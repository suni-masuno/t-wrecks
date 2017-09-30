import React, { Component } from 'react';
import RuleSelector from '../components/RuleSelector'
import RegionSelector from '../components/RegionSelector'

class EditRules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ruleSet: {
        Cuba: {
          prompt18: false,
          regionalPrivacy: false,
          accessInCountryOnly: true,
          accessOutOfCountryAllowed: false,
          informOfThirdParty: false,
          allowDataRemoval: true,
          allowDataModify: false,
          requireConsentToProcess: true,
          allowComplaints: false,
          requireConsentToCollect: false,
        },
        Mexico: {
          prompt18: true,
          regionalPrivacy: false,
          accessInCountryOnly: false,
          accessOutOfCountryAllowed: false,
          informOfThirdParty: false,
          allowDataRemoval: false,
          allowDataModify: false,
          requireConsentToProcess: false,
          allowComplaints: false,
          requireConsentToCollect: true,
         }
      }
};
  }
  render() {
    return (
      <div>
        <RegionSelector
          ruleSet={this.state.ruleSet} />
      </div>
    );
  }
}

export default EditRules;