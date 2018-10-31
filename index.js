
function generateBoard(num){
  var result = []
  var bil = num * num

  for(var i = 0 ; i < num ; i++){
    var arr = []
    // CEK BARIS GANJIL ATAU GENAP 
    if(i % 2 === 1){
      bil = result[i-1][num-1] - num
    }else if (i % 2 !== 1 && i !== 0){
      bil = result[i-1][0]- 1
    }

    for(var j = 1 ; j <= num; j++){
      arr.push(bil)
      if( i % 2 === 1){
        bil++
      }else{
        bil --

      }
    }
    result.push(arr)
  }
  return result

}


console.log(generateBoard(10))