function generateBoard(dimensi){
    var initNumber = dimensi * dimensi
    let result = []

    if(dimensi % 2 === 0){
        // console.log("dimensi genap")
        for(let i = dimensi; i > 0; i--){
            let arrayRow = []
            for(let j = dimensi; j > 0; j--){
                if(i % 2 === 0){
                    arrayRow.push(initNumber)
                    initNumber--
                }
                else{
                    arrayRow.push((i)*dimensi - (j-1))
                    initNumber--
                }
            }
            result.push(arrayRow)
        }
    }
    else{
        // console.log("dimensi ganjil")
        // console.log("init", initNumber)
        for(let i = dimensi; i > 0; i--){
            let arrayRow = []
            var temp = initNumber
            // console.log(i+"-"+temp)
            // console.log("initNUm:",initNumber)
            for(let j = dimensi; j > 0; j--){
                if(i % 2 !== 0){
                    arrayRow.push(temp - (j-1))
                    initNumber -= 1
                }
                else{
                    arrayRow.push(initNumber)
                    temp = temp - 1
                    initNumber -=1
                }
            }
            result.push(arrayRow)
        }
    }
    return result
}


console.log(generateBoard(8))
console.log("")
console.log(generateBoard(15))

// function generateBoard(dimensi){
//     var result = []
//     let initNumber = 1;
    
//     for(let i = 0; i < dimensi; i++){
//         var arrayRow = []
//         for(let j = 0; j < dimensi; j++){
//             arrayRow.push(initNumber)
//             initNumber++
//         }
//         // result.unshift(arrayRow)
//         if(i % 2 !== 0){
//             arrayRow = rev(arrayRow)
//         }

//         result.push(arrayRow)
//     }
//     result = rev(result)
//     return result
// }

// function rev(arr){
//     var reversed = []
//     for(let i = arr.length-1; i >= 0; i--){
//         reversed.push(arr[i])
//     }
//     return reversed
// }
