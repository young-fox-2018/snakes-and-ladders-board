function generateBoard(size) {
    let board = []
    let counter = 0
    for (let i = size - 1; i >= 0; i--) {
        let arr = []
        let reverse = size
        for (let j = size - 1; j >= 0; j--) {
            counter++
            if (size % 2 === 0) {
                if (i % 2 === 0) {
                    arr[reverse - 1] = counter
                    reverse--
                }
                else {
                    arr.push(counter)
                }
            }
            else {
                if (i % 2 !== 0) {
                    arr[reverse - 1] = counter
                    reverse--
                }
                else {
                    arr.push(counter)
                }
            }
        }
        board[i] = arr 
    }
    return board
}

console.log(generateBoard(10))
console.log('')
console.log(generateBoard(8))
console.log('')
console.log(generateBoard(15))