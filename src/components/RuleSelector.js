/**
 * Created by LMH1201 on 9/29/17.
 */

import React, { Component } from 'react';
import questions from '../data/questions'

class RuleSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
    
  onSwitch = event => {
      console.log(event.target.id)
  };

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
      console.log("WE TRIED THIS");
    })
  };

  componentWillReceiveProps(next) {
    this.setState({region: next.selectedRegion, ruleSet: next.ruleSet })
  }

  handleGet = () => {
    fetch('http://localhost:3001/api/v1/ruleSet',
      {
        method: 'get',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }},
    ).then( response => {
      return response.json();
    }).then( json => {
      console.log(this.state.ruleSet);
      this.state.ruleSet = json;
      console.log(this.state.ruleSet);
    });
  };

  render() {
      console.log(this.state)
    return (
    <div>
        <table className="switch-row">
          <tbody>
            {
                Object.keys(questions).map(question => {
                    return <tr>
                        <td>
                            <label className="switch">
                                <input type="checkbox" id={question}
                                    checked={this.props.editRules.state.ruleSet[this.props.selectedRegion][question]}
                                    onChange={(e) => {
                                        this.props.editRules.setState({[this.props.editRules.state.ruleSet[this.props.selectedRegion][e.target.id]]:
                                        true})}}/>
                                <span className="slider round"></span>
                            </label>
                        </td>
                      <td>{questions[question]}</td>
                    </tr>;
                })
            }
          </tbody>
        </table>
        <button onClick={this.handleClick}>Save Region Rules</button>
        <button onClick={this.handleGet}>GET Region Rules</button>
    </div>
    )
  }
}

export default RuleSelector;
