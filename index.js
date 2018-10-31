function generateBoard(dimensi){
    let temp = []
    let count = []
    for ( let i = dimensi-1; i >= 0; i--) {
        count = []
        for( let j = 1; j<=dimensi; j++){
            if(i%2 == 0){

                count.push((i*dimensi)+j)
            }else {

                count.push((i*dimensi)+((dimensi+1)-j))

            }
        }
        temp.push(count)
    }

    return temp
}

console.log(generateBoard(15))