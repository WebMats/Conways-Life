import React from 'react'
import Button from '../../UI/Button/Button';

const controls = (props) => {
    return (
        <form className="game-buttons">
            <Button clicked={() => {console.log("Play")}}>Play</Button>
            <Button clicked={() => {console.log("Pause")}}>Pause</Button>
            <Button clicked={() => {console.log("Stop")}}>Stop</Button>
        </form>
    )
}

export default controls
