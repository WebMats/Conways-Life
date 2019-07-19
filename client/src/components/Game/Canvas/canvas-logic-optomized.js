const squaresPerRow = 200;
let curState = [] ;
let allNeighbors = [];
let nextState = new Array(squaresPerRow * squaresPerRow);
let widthRes, heigthRes, width, height, ctx, isPlaying = false;

export const start = () => {
    let curX = 0;
    let curY = 0;
    if (isPlaying) {
        for (let index = 1; index <= squaresPerRow * squaresPerRow; index++) {
            const neighbors = allNeighbors[ index - 1];
            let value = curState[index - 1];
            let newValue = value;
            let aliveNeighbors = 0;
            let fill;
            for (let neighbor of neighbors) {
                if (curState[neighbor - 1] === 1) {
                    aliveNeighbors++
                }
            }
            if (value === 0 && aliveNeighbors === 3) {
                newValue = 1
            } else if (value === 1 && !(aliveNeighbors === 2 || aliveNeighbors === 3)) {
                newValue = 0
            }
            if (value !== newValue) {
                nextState[index - 1] = newValue === value ? value : newValue;
                fill = newValue === 0 ? "#FFFFFF" : "#000000";
                paintBlock(curX, curY, fill)
            }
            if ((curX = curX + width / squaresPerRow, curX + width / squaresPerRow > width)) {
                curX = 0
                curY = curY + height / squaresPerRow
            }
        }
        curState = [...nextState]
    }
    requestAnimationFrame(start)
}

export default (canvEl, status) => {
    isPlaying = status
    if (curState.length > 0) return;
    ctx = canvEl.getContext('2d');
    width = canvEl.width;
    height = canvEl.height;
    widthRes = width / squaresPerRow;
    heigthRes = height / squaresPerRow;
    if (!ctx) return;
    initCurState()
    start()
}

const paintBlock = (x, y, fill) => {
    ctx.fillStyle = fill;
    ctx.fillRect(x, y, widthRes , heigthRes);
}

function initCurState() {
    let curX = 0;
    let curY = 0;
    let fill = "#FFFFFF"
    for (let i = 1; i <= squaresPerRow * squaresPerRow; i++) {
        let randSeed = Math.random()
        if (randSeed < .5) {
            fill = "#FFFFFF"
            curState[i - 1] = 0
        } else {
            fill = "#000000"
            curState[i - 1] = 1
        }
        paintBlock(curX, curY, fill)
        if ((curX = curX + width / squaresPerRow, curX + width / squaresPerRow > width)) {
            curX = 0
            curY = curY + height / squaresPerRow
        }
        getNeighbors(i)
    }
    nextState = [...curState]
}


function getNeighbors(index) {
    let found = []
    for (let i = -1; i <= 1; i++) {
        const top = index - squaresPerRow + i;
        if ( top > 0 && ((index % squaresPerRow !== 1 || i !== -1) && (index % squaresPerRow !== 0 || i !== 1))) {
            found.push(top)   
        }
    }
    for (let i = -1; i <= 1; i++) {
        const middle = index + i
        if ( index !== middle && ((index % squaresPerRow !== 1 || i !== -1) && (index % squaresPerRow !== 0 || i !== 1))) {
            found.push(middle)
        }
    }
    for (let i = -1; i <= 1; i++) {
        const bottom = index + squaresPerRow + i;
        if (bottom < squaresPerRow * squaresPerRow + 1 && ((index % squaresPerRow !== 1 || i !== -1) && (index % squaresPerRow !== 0 || i !== 1))) {
            found.push(bottom)
        }
    }
    allNeighbors.push(found);
}