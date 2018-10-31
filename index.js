function generateBoard(row){
    var result = [];


    for(var i = row-1; i >=0; i--){
        cont =[];
        for(var j = 1; j <= 10; j++){
            
            if(i%2 == 0){
                cont.push((i*10)+ j)
            }else{
                cont.unshift((i*10)+ j)
            }
        }
        result.push(cont)
    }



    return result
}

console.log(generateBoard(10));