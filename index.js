
function generateBoard(num){
    var result = [];
    var total = num*num;
        for(var i = 0; i < num; i++){
            result.push([]);
            if((i%2 === 0 && num%2 === 0) || (i%2 !== 0 && num%2 === 1)){
                for(var j = num; j > 0; j--){
                    result[i].push(total);
                    total--;
                }
            } 
            else {
                for(var j = total+1-num; j <= total; j++){
                     result[i].push(j);
                }
                total -= num; 
            }
        }
    return result;
}
console.log(generateBoard(10));
console.log(generateBoard(8));
console.log(generateBoard(15));
