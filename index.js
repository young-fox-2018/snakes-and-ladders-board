function generateBoard(number){
    var result = []
    
    for(var i = number; i > 0 ; i--){
        var arr = []
        for(var j = 0 ; j < number ; j++){
            var batas;
            if(i % 2 === 0){
                batas = (number * i) - j
                // (10 * 2) - 1
            }else if (i % 2 === 1){
                batas = (number * i ) - (number - j) + 1
                // (10 * 1) - (10-2) + 1
                // 10 - 8 + 1
            }

            arr.push(batas)
        }
        result.push(arr)
    }
    return result
}


console.log(generateBoard(10))
console.log(generateBoard(15))