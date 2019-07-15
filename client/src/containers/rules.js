import React from 'react'
import RulesList from '../components/RulesList/RulesList';

const rules = (props) => {
    return (
        <section>
            RULES:
            <RulesList rules={arrRules} />
        </section>
    )
}

export default rules

const arrRules = [
    "rule 1",
    "rule 2",
    "rule 3"
]