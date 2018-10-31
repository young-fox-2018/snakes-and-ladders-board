function generateBoard(num) {
    let board = []
    let count = num * num
    for (let i = 0; i < num; i++) {
        let tmp = []
        let tmpCount = count - num
        for (let j = 0; j < num; j++) {
            if (num % 2 === 0) {
                if (i % 2 === 0) {
                    tmp.push(count)
                }
                else {
                    tmpCount++
                    tmp.push(tmpCount)
                }
            }
            else {
                if (i % 2 !== 0) {
                    tmp.push(count)
                }
                else {
                    tmpCount++
                    tmp.push(tmpCount)
                }
            }
            count--
        }
        board.push(tmp)
    }
    return board
}
console.log(generateBoard(7))
console.log(generateBoard(6))