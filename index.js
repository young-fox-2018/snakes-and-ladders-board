function generateBoard(dimensi){
    var result = []
    let initNumber = 1;
    
    for(let i = 0; i < dimensi; i++){
        var arrayRow = []
        for(let j = 0; j < dimensi; j++){
            arrayRow.push(initNumber)
            initNumber++
            
        }
        // result.unshift(arrayRow)
        if(i % 2 !== 0){
            arrayRow = rev(arrayRow)
        }

        result.push(arrayRow)
    }
    result = rev(result)
    return result
}

function rev(arr){
    var reversed = []
    for(let i = arr.length-1; i >= 0; i--){
        reversed.push(arr[i])
    }
    return reversed
}

console.log(generateBoard(8))
console.log("")
console.log(generateBoard(15))