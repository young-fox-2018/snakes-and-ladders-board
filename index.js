function generatorBoard(num) {
    let result = []
    let tempArr = []
    let counter = 1
    for(let i = 1; i <= num*num; i++) {
        if(counter % 2 !== 0) {
            tempArr.push(i)
        } else {
            tempArr.unshift(i)
        }

        if(i % num === 0) {
            result.unshift(tempArr)
            tempArr = []
            counter += 1
        }
    }
    return result
}

console.log(generatorBoard(15))
console.log(generatorBoard(8))