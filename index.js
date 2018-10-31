const generateBoard = (num) => {
    let board = [],
        count = Math.pow(num, 2)
    for (let i = 0; i < num; i++) {
        let line = []
        if (num % 2 !== 0) {
            for (let j = num - 1; j >= 0; j--) {
                if (i % 2 === 0) {
                    line[j] = count
                } else {
                    line[(num - 1) - j] = count
                }
                count--
            }
        } else {
            for (let j = 0; j < num; j++) {
                if (i % 2 === 0) {
                    line[j] = count
                } else {
                    line[(num - 1) - j] = count
                }
                count--
            }
        }
        board.push(line)
    }
    return board
}

console.log(generateBoard(15))
console.log(generateBoard(8))