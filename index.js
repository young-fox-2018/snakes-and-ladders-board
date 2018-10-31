function generateBoard(dimensi){
    var result = []
    let initNumber = 1;
    
    for(let i = 0; i < dimensi; i++){
        var arrayRow = []
        for(let j = 0; j < dimensi; j++){
            if(i % 2 === 0){
                arrayRow.push(initNumber)
                initNumber++
            }
            else{
                arrayRow.unshift(initNumber)
                initNumber++
            }
        }
        result.unshift(arrayRow)
    }
    return result
}

console.log(generateBoard(8))
console.log("")
console.log(generateBoard(15))