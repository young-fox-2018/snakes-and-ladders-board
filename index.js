function generateBoard(num){
    let output = [];
    for(let i = num; i > 0; i--){
        let inner = []
        if(i % 2 !== 0){
            for(let j = 1; j <= num; j++){
                inner.push(j + (i-1)*num)
            }
        }else{
            for(let j = num; j > 0; j--){
                inner.push(j + (i-1)*num)
            }
        }
        output.push(inner)
    }
    return output
}

console.log(generateBoard(10))
console.log(generateBoard(15))
console.log(generateBoard(8))