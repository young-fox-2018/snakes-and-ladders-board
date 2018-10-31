function snakeLadder (num) {
    let snakeLadderBoard = []
    let rowCounter = 0
    let counter = 1
    for (let i = num-1; i >= 0; i--) {
        snakeLadderBoard[i] = []
        if ( rowCounter % 2 === 0) {
            for (let j = 0; j < num; j++) {
                snakeLadderBoard[i][j] = counter
                counter++
            }
        } else {
            for (let j = num-1; j >= 0; j--) {
                snakeLadderBoard[i][j] = counter
                counter++
            }
        }
        rowCounter++
    }
    return snakeLadderBoard
}

console.log(snakeLadder(9))