import React from 'react'
import Button from '../../UI/Button/Button';

const controls = (props) => {
    return (
        <form className="game-buttons">
            <Button clicked={props.play}>Play</Button>
            <Button clicked={props.pause}>Pause</Button>
            <Button clicked={() => {console.log("Stop")}}>Stop</Button>
        </form>
    )
}

export default controls
