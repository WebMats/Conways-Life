import React from 'react'
import Canvas from './Canvas/Canvas';


const game = (props) => {
    return (
        <div>
            <Canvas play={props.play} />
        </div>
    )
}

export default game
