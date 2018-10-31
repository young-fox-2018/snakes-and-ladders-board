function generateBoard(params) {
    let counter = params * params
    let board = []
    for (let i = 1; i <= params; i++) {
        let inner = []
        for (let j = 1; j <= params; j++) {
            inner.push(counter)
            counter--
        }


        if (params % 2 === 1) {
            if (i % 2 === 0) board.push(inner)
            else {
                let newInner = reverse(inner)
                board.push(newInner)
            }
        }

        else {
            if (i % 2) board.push(inner)
            else {
                let newInner = reverse(inner)
                board.push(newInner)
            }
        }
    }
    return board

}

function reverse(arr) {
    let newInner = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newInner.push(arr[i])
    }
    return newInner
}

console.log(generateBoard(10));
console.log(generateBoard(15));
console.log(generateBoard(8));
