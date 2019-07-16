import React, { useState } from 'react'
import Game from '../components/Game/Game';
import Controls from '../components/Game/Controls/Controls';
// import ErrorBoundary from '../pages/error';


const game = () => {
    return (
        <section>
            <div className="game-controls-container">
                <Game />
                <Controls />
            </div>
        </section>
    )
}

export default game
