import React, { useCallback, useState } from 'react'
import canvInit from './canvas-logic';

const Canvas = () => {
    const [controls, setControls] = useState({})
    const measuredRef = useCallback((node) => {
            if (node !== null) {
                const controls = canvInit(node)
                setControls(controls)
            }
            else {
                setControls({})
            }
        }, [] )
    return <canvas id="game" height="400" width="400" ref={measuredRef}></canvas>
}

export default Canvas
