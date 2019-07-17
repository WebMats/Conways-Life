import React, { useState } from 'react'
import Game from '../components/Game/Game';
import Controls from '../components/Game/Controls/Controls';
// import ErrorBoundary from '../pages/error';


const Main = () => {
    const [gameStatus, setGameStatus] = useState({
        play: false,
        refreshed: false
    })
    return (
        <main>
            <div className="game-controls-container">
                {!gameStatus.refreshed && <Game play={gameStatus.play}  />}
                <Controls 
                    play={() => setGameStatus({ play: true })} 
                    pause={() => setGameStatus({ play: false })}
                    refresh={() => {
                        setGameStatus({ refreshed: true })
                        setGameStatus({ refreshed: false })
                    }}
                />
            </div>
        </main>
    )
}

export default Main
