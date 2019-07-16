// canv width x height = 400 x 400
const squares_per_row = 4;
const canvasBlocks = [];
let width, height, ctx;

const Block = (index, fill, x, y) => {
    const neighbors = getNeighbors(index);
    return {
        index,
        position: [x, y],
        neighbors: [],
        fill,
        animate () {
            let ranNumber = Math.random()
            if (ranNumber < .5) { this.fill = '#FFFFFF' } 
            else { this.fill = '#000000' }
            ctx.fillStyle = this.fill
            ctx.fillRect(this.position[0], this.position[1], width / squares_per_row , height /squares_per_row);
            setTimeout(() => requestAnimationFrame(this.animate.bind(this)), 3800)
        },
    }
}

export default (canvEl) => {
    ctx = canvEl.getContext('2d');
    width = canvEl.width;
    height = canvEl.height;
    if (!ctx) return;
    generateBlocks()
    return {
        change () {
            
        }
    }
}

function generateBlocks() {
    let curX = 0;
    let curY = 0;
    for (let i = 1; i <= squares_per_row * squares_per_row;i++) {
        let ranNumber = Math.random()
        let fill;
        if (ranNumber < .5) { fill = '#FFFFFF' } 
        else { fill = '#000000' } 
        const block = Block(i, fill, curX, curY);
        block.animate()
        canvasBlocks.push(block)
        if ((curX = curX + width / squares_per_row, curX + width / squares_per_row > width)) {
            curX = 0
            curY = curY + height / squares_per_row
        }
    }
    return canvasBlocks;
}

function getNeighbors(index) {
    for (let i = 0; i < 8; i++) {
        
    }
}

// need to store the objects returned by a constructor function
// the objects should have a self index, the fillColor, and the index of the 8 neighgbors.