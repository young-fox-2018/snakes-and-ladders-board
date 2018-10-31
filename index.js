function snakesLadders(input){
    let hasil = []
    let num = input*input
    for(let i = 0; i < input; i++){
        let temp = []
        for(let j = 0; j < input; j++){
            temp.push(num)
            num--
        }
        if(input % 2 === 0){
            if ( i % 2 !== 0 ) {
                temp = balikArr(temp)
            }
        }else {
            if ( i % 2 === 0 ) {
                temp = balikArr(temp)
            }
        }
        hasil.push(temp)
    }
    return hasil
}

function balikArr(arr){
    let balik = []
    for(let i = arr.length-1; i >= 0; i--){
        balik.push(arr[i])
    }
    return balik
}

console.log(snakesLadders(10));
console.log(snakesLadders(15));