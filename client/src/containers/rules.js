import React from 'react'
import RulesList from '../components/RulesList/RulesList';

const rules = (props) => {
    return (
        <section className="rules">
            <h3>RULES:</h3>
            <RulesList rules={arrRules} />
        </section>
    )
}

export default rules

const arrRules = [
    "• A typical cell has 8 neighbors, 4 in the diagonol directions, and 4 in the cross directions",
    "• If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies.",
    "• If the cell is dead and has exactly 3 neighbors, then it comes to life. Ele it remains dead.",
]