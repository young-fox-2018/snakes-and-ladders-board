
function snakeLadder(size) {
    let boardSize = size * size
    let board = []
    for (let i = 0; i < size; i++) {
        let inner = []
        for (let j = 0; j < size; j++) {
            inner.push(boardSize)
            boardSize--
        }
        if ((i % 2) && !(size % 2)) {
            let sort
            for (let k = 0; k < inner.length; k++) {
                for (let l = 0; l < inner.length; l++) {
                    if (inner[k] < inner[l]) {
                        sort = inner[k]
                        inner[k] = inner[l]
                        inner[l] = sort
                    }
                }
            }
        } else if (!(i % 2) && (size % 2)) {
            let sort
            for (let k = 0; k < inner.length; k++) {
                for (let l = 0; l < inner.length; l++) {
                    if (inner[k] < inner[l]) {
                        sort = inner[k]
                        inner[k] = inner[l]
                        inner[l] = sort
                    }
                }
            }
        }
        board.push(inner)
    }
    return board
}

console.log(snakeLadder(10))
console.log(snakeLadder(11))