function generateBoard(row){
    var result = [];


    for(var i = row-1; i >=0; i--){
        cont =[];
        for(var j = 1; j <= row; j++){
            
            if(i%2 == 0){
                cont.push((i*row)+ j)
            }else{
                cont.push((i*row)+((row+1)-j))
            }
        }
        result.push(cont)
    }



    return result
}

console.log(generateBoard(15));