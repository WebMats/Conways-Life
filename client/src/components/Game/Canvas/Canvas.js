import React, { useRef, useEffect, useCallback } from 'react'
import canvInit from './canvas-logic';

const Canvas = () => {
    const measuredRef = useCallback((node) => {
            if (node !== null) {
                canvInit(node)
            }
            else {
                return
            }
        },
        [],
    )    
    return <canvas id="game" height="400" width="400" ref={measuredRef}></canvas>
}

export default Canvas
