// snake & ladder

function generateBoard(dimension) {
    let output = []
    num = dimension * dimension 
    for (let i = 1; i <= dimension; i++) {
        let temp = []
        let tempCount = num + 1
        for (let j = dimension; j > 0; j--) {
            if (dimension % 2 == 0) { // genap
                if (i % 2 == 0) {
                    temp.push(tempCount-j)
                }else {
                    temp.push(num)
                }
                num -= 1
            } else { // ganjil
                if (i % 2 != 0) {
                    temp.push(tempCount-j)
                }else {
                    temp.push(num)
                }
                num -= 1
            }

        }
        output.push(temp)
    }
    return output
}

//console.log(generateBoard(15))
console.log(generateBoard(10))