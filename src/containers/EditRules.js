import React, { Component } from 'react';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap'
import questions from '../data/questions'
import { mapValues } from 'lodash'


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
    }
  }

  toggleClick = (event) => {
    const oldRuleSet = this.state.ruleSet;
    const changedIdValue = event.target.id;
    oldRuleSet[this.state.selectedRegion][changedIdValue] = !oldRuleSet[this.state.selectedRegion][changedIdValue];
    this.setState({
      oldRuleSet
    });
    console.log(this.state.ruleSet);
  }

  handleClick = () => {
    console.log(this.state.ruleSet)

    fetch('http://localhost:3001/api/v1/ruleSet',
      {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: JSON.stringify(this.state.ruleSet)  },
    ).then(() => {
      console.log("Post successful");
    })
  };

  componentWillReceiveProps(next) {
    console.log(next)
    this.setState({region: this.state.selectedRegion, ruleset: next.state.ruleSet})
  }
  render() {
    console.log(this.state.ruleSet);
    return (
      <div>
          <DropdownButton title={this.state.selectedRegion ? this.state.selectedRegion : 'Select a Region'} id="bg-nested-dropdown">
            {
              Object.keys(this.state.ruleSet).map((region) => {
                return <MenuItem onClick={() => this.setState((prevState) => ({
                  selectedRegion: region,
                  })
                )} key={region} >{region}</MenuItem>
              })
            }
          </DropdownButton>
          {this.state.selectedRegion ? 
            <div>
              <table className="switch-row">
                <tbody>
                  {
                      Object.keys(questions).map(question => {
                          return <tr>
                          <td>
                            <label className="switch">
                              <input type="checkbox" id={question}
                                     checked={this.state.ruleSet[this.state.selectedRegion][question]}
                                     onChange={this.toggleClick}/>
                              <span className="slider round"></span>
                            </label>
                          </td>
                          <td>{questions[question]}</td>
                        </tr>;
                      })
                  }
                </tbody>
              </table>
              <Button onClick={this.handleClick} bsStyle="default">Save Region Rules</Button>
          </div>
          : ''}
      </div>
    );
  }
}

export default EditRules;