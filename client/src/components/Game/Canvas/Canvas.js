import React, { useCallback, useState, useEffect } from 'react'
import canvInit from './canvas-logic';

const Canvas = (props) => {
    const [controls, setControls] = useState({})
    const measuredRef = useCallback((node) => {
            if (node !== null) {
                const controls = canvInit(node)
                setControls(controls)
            }
            else {
                setControls({})
            }
        }, [props.play] )
    return <canvas id="game" height="400" width="400" ref={measuredRef}></canvas>
}

export default Canvas
