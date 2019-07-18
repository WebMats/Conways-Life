import React from 'react'

const about = () => {
    return (
        <section className="about">
            <h3>About This Algorithm</h3>
            <p>
                Conceived in 1970 and named after John Conway. As its designer, he helped bring the work of Stanislaw Ulam and John von Neumann outside of academia nearly three decades after they postulated cellular automatons during their time at Los Alamos.
            </p>
            <p>
                A cellular automaton(CA) is a grid of cells, usually in 2D, where each cell derives it's next state based on its own and the state of its nearest neighbors. This happens for every cell in a nearly simultaneous moment sometimes referred to as a 'tick.'
            </p>
        </section>
    )
}

export default about
