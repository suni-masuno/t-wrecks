import React, { Component } from 'react';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import questions from '../data/questions';
import regions from '../data/regions';
import { ToastContainer, toast } from 'react-toastify';

class EditRules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...regions,
    }
  }

  toggleClick = (event) => {
    const oldRuleSet = this.state.ruleSet;
    const changedIdValue = event.target.id;
    oldRuleSet[this.state.selectedRegion][changedIdValue] = !oldRuleSet[this.state.selectedRegion][changedIdValue];
    this.setState({
      oldRuleSet
    });
  }

  handleClick = () => {
    fetch('http://localhost:3001/api/v1/ruleSet',
      {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: JSON.stringify(this.state.ruleSet)  },
    ).then(() => {
      console.log('saved')
      // toast('Saved Rule Set!');

    })
  };

  handleDeploy = () => {
    fetch('http://localhost:3002/api/v1/generate',
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
    this.setState({region: this.state.selectedRegion, ruleset: next.state.ruleSet})
  }
  render() {
    return (
      <div>
        <ToastContainer 
          position="top-right"
          type="default"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
        <div className="header">
          <img className="dino" />
          <span className="header-title">CODE: DINO</span>
          <Button onClick={this.handleDeploy} bsStyle="danger" className="header-button">Deploy</Button>
          <img className="shield" />
        </div>
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
                <br></br>
                <Button onClick={this.handleClick} bsStyle="warning">Save</Button>
            </div>
            : ''}
        </div>
      </div>
    );
  }
}

export default EditRules;