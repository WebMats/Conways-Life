import React from 'react'
import Rule from './Rule/Rule';

const rulesList = ({ rules }) => <ul rules={rules}>
                            {rules.map((rule, i) => <Rule rule={rule} key={i} />)}
                        </ul>


export default rulesList
