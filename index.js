function snakeLadder(num){
    let arr = []
    let counter = num*num
    let ganjilGenap = 0
if(num % 2 === 0){
    for(var i = 0; i < num; i++){
        let row = []
        let  temp = counter
        if(ganjilGenap % 2 === 0){
            for(var j = 0; j < num; j++){
                row.push(counter)
                counter --
            }
            ganjilGenap ++
        }else{
            for(var j = num-1; j >= 0; j--){
                row.push(temp-j)
                counter--
            } 
            ganjilGenap ++
        }
        arr.push(row)
    }
    return arr
}else{
    for(var i = 0; i < num; i++){
        let row = []
        let  temp = counter
        if(ganjilGenap % 2 === 1){
            for(var j = 0; j < num; j++){
                row.push(counter)
                counter --
            }
            ganjilGenap ++
        }else{
            for(var j = num-1; j >= 0; j--){
                row.push(temp-j)
                counter--
            } 
            ganjilGenap ++
        }
        arr.push(row)
    }
    return arr
}

}

console.log(snakeLadder(9))