function generatorBoard(num) {
    let result = []
    let total = num*num+1
    for (let i = 1; i <= num; i++) {
        let temp = []
        for (let j = 1; j <= num; j++) {
            
            if(num % 2 === 0) {
                if (i !== 1 && j === 1 && i % 2 === 0) {
                    total -= num+1
                } else if(i !== 1 && j === 1 && i % 2 !== 0) {
                    total -= num-1
                }
                
                
                if(i % 2 !== 0) {
                    total -= 1
                } else if (i % 2 === 0){
                    total += 1
                }
                
                temp.push(total)
            } else {
                // console.log(i)

                if (i % 2 !== 0 && j === 1) {
                    total -= num+1
                } else if(i % 2 === 0 && j === 1) {
                    total -= num-1
                }
    
                
                if(i % 2 === 0) {
                    total -= 1
                } else if (i % 2 !== 0){
                    total += 1
                }
                
                temp.push(total)
            }
        }
        result.push(temp)
    }
    
    return result
}

console.log(generatorBoard(15))
// console.log(generatorBoard(8))