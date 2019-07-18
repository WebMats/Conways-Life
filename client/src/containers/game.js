import React, { useState, useEffect } from 'react'
import Game from '../components/Game/Game';
import Controls from '../components/Game/Controls/Controls';
// import ErrorBoundary from '../pages/error';


const Main = () => {
    const [gameStatus, setGameStatus] = useState({
        play: false,
        refreshed: false,
        generation: 0,
    })
    const [generation, setGen] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            if (gameStatus.play === true) {
                setGen(generation + 1)
            }
        }, 1000)
    })
    return (
        <main>
            <div className="game-controls-container">
                <h3 className="game-generation">Generation: {generation}</h3>
                <Game play={gameStatus.play} />
                <Controls 
                    play={() => setGameStatus({ ...gameStatus, play: true })} 
                    pause={() => setGameStatus({ ...gameStatus, play: false })}
                    refresh={() => {
                        setGameStatus({ ...gameStatus, refreshed: true })
                        setGameStatus({ ...gameStatus, refreshed: false })
                    }}
                />
            </div>
        </main>
    )
}

export default Main
