function generateBoard(rows) {
    let board = []
    let biggestNumber = rows * rows
    let totalRows = rows - 1

    for (let i = totalRows; i >= 0; i--) {
        let innerBoard = []
        
        if (i % 2 == 0 || (i != totalRows && i % 2 != 0)) {
            biggestNumber = biggestNumber - totalRows
        }

        for (let j = 0; j < rows; j++) {
            innerBoard[j] = biggestNumber
            if (j != totalRows && i % 2 == 0) {
                biggestNumber++
            } else {
                biggestNumber--
            }
        }

        board.push(innerBoard)
    }

    return board
}

console.log(generateBoard(15))