/**
 * Created by LMH1201 on 9/29/17.
 */

import React, { Component } from 'react';
import rules from '../data/rules'

class RuleSelector extends Component {
    onSwitch = event => {
        console.log(event.target.id)
    };

    render() {
        return <table className="switch-row">
            {
                rules.map(rule => {
                    return <tr>
                        <td>{rule}</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" id={rule} onChange={this.onSwitch}/>
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>;
                })
            }
        </table>;
    }
}

export default RuleSelector;
