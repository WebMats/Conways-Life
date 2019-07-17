// canv width x height = 400 x 400
const squares_per_row = 8;
let canvasBlocks = [];
let width, height, ctx, isPaused;


export const start = () => {
    for (let i=0; i < canvasBlocks.length; i++) {
        canvasBlocks[i].animate()
    }
}

const Block = (index, fill, x, y) => {
    const neighbors = getNeighbors(index);
    ctx.fillStyle = fill
    ctx.fillRect(x, y, width / squares_per_row , height /squares_per_row);
    return {
        index,
        position: [x, y],
        neighbors: neighbors,
        fill,
        animate () {
            let aliveNeighbors = 0;
            for (let neighbor of neighbors) {
                if (canvasBlocks[neighbor - 1].fill === "#000000") {
                    aliveNeighbors++
                }
            }
            if (isPaused) {
                if (this.fill === "#FFFFFF" && aliveNeighbors === 3) {
                    this.fill = "#000000"
                } else if (this.fill === "#000000" && !(aliveNeighbors === 2 || aliveNeighbors === 3)) {
                    this.fill = "#FFFFFF"
                }
                ctx.fillStyle = this.fill
                ctx.fillRect(this.position[0], this.position[1], width / squares_per_row , height /squares_per_row);
            }
            setTimeout(() => requestAnimationFrame(this.animate.bind(this)), 5000)
        },
        getNeighborsFill (index) {
            return canvasBlocks[index - 1].fill
        }
    }
}

export default (canvEl, status) => {
    isPaused = status
    if (canvasBlocks.length > 0) {
        return
    }
    canvasBlocks = []
    ctx = canvEl.getContext('2d');
    width = canvEl.width;
    height = canvEl.height;
    if (!ctx) return;
    generateBlocks()
    start()
    const first = canvasBlocks[5].neighbors[0]
    // return {
    //     change () {
            
    //     }
    // }
}


function generateBlocks() {
    let curX = 0;
    let curY = 0;
    for (let i = 1; i <= squares_per_row * squares_per_row;i++) {
        let ranNumber = Math.random()
        let fill;
        if (ranNumber < .5 && ranNumber > .2) { fill = '#FFFFFF' } 
        else { fill = '#000000' } 
        const block = Block(i, fill, curX, curY);
        canvasBlocks.push(block)
        if ((curX = curX + width / squares_per_row, curX + width / squares_per_row > width)) {
            curX = 0
            curY = curY + height / squares_per_row
        }
    }
    return canvasBlocks;
}

function getNeighbors(index) {
    let found = []
    for (let i = -1; i <= 1; i++) {
        const top = index - squares_per_row + i;
        if ( top > 0 && ((index % squares_per_row !== 1 || i !== -1) && (index % squares_per_row !== 0 || i !== 1))) {
            found.push(top)   
        }
    }
    for (let i = -1; i <= 1; i++) {
        const middle = index + i
        if ( index !== middle && ((index % squares_per_row !== 1 || i !== -1) && (index % squares_per_row !== 0 || i !== 1))) {
            found.push(middle)
        }
    }
    for (let i = -1; i <= 1; i++) {
        const bottom = index + squares_per_row + i;
        if (bottom < squares_per_row * squares_per_row + 1 && ((index % squares_per_row !== 1 || i !== -1) && (index % squares_per_row !== 0 || i !== 1))) {
            found.push(bottom)
        }
    }
    return found;
}
