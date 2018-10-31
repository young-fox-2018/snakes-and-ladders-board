function generateBoard(dimensi){
    let temp = []

    let counter = dimensi*dimensi

    for ( let i = 0 ; i<dimensi; i++ ) {
        temp.push([])

        for ( let j = 0; j<dimensi; j++ ) {
            if(i%2 == 0) {
                temp[i].push(counter)
                counter -= 1
            } else if (i%2 != 0) {
                temp[i].push(counter)
                counter += 1
            }
        }

        counter = ( i%2 == 0 ) ? counter-dimensi+1 : counter-dimensi-1
        
    }

    return temp
}

console.log(generateBoard(4))