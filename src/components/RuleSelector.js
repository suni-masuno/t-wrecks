/**
 * Created by LMH1201 on 9/29/17.
 */

import React, { Component } from 'react';
import questions from '../data/questions'

class RuleSelector extends Component {
    constructor(props) {
        super(props);
        this.state = { ruleSet:{Cuba:{allowComplaints:true}}};
      }
    
  onSwitch = event => {
      console.log(event.target.id)
  };

  isSelected = (rule, selectedRules) => {
      let selected = selectedRules.filter(function(oneRule){
        return (oneRule === rule);
      });
      if (selected.length > 0) {
        return true;
      } else {
        return false;
      }
  };

  handleClick = () => {
    console.log(this.state.ruleSet)

    fetch('http://localhost:3001/api/v1/ruleSet',
        { method: 'POST',
          headers: {'Accept': 'application/json',
            'content-type': 'application/json'},
          body: 'HELLO'},
        ).then(() => {
      console.log("WE TRIED THIS");
    })
  };

  render() {
    return (
    <div>
        <table className="switch-row">
            {
                Object.keys(questions).map(question => {
                    return <tr>
                        <td>{question}</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" id={question} defaultChecked={this.state.ruleSet['Cuba'][question]}/>
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>;
                })
            }
        </table>
        <button onClick={this.handleClick}>Save Region Rules</button>
    </div>
    )
  }
}

export default RuleSelector;
