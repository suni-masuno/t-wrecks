/**
 * Created by LMH1201 on 9/29/17.
 */

import React, { Component } from 'react';
import regions from '../data/regions'

const RegionSelector = props => (
         <select>
            {
                regions.map(function (region) {
                    return <option value={region}>{region}</option>
                })
            }
        </select>
)

export default RegionSelector;