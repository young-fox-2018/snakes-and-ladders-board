function generateBoard(height){
    var res = []
    var counter = 1
    
        for (var col = 0 ; col < height ; col++){
          var inner = []
          for (var row = 1 ; row <= height ; row++){
            inner.push(counter)
            counter++
          }
        res.push(inner)
        }
    
    function reverseArr(input) {
        var rev = [];
        for(var i = input.length-1; i >= 0; i--) {
            rev.push(input[i]);
        }
        return rev;
    }
      
      //REVERSING ARRAY & ROW
      var reversed = []  
      for(var j = res.length - 1 ; j >= 0 ; j--){
        if(j % 2 === 1){
            var rev = reverseArr(res[j])
            res[j] = rev
            }
        reversed.push(res[j])
      }
    
      return reversed
    }
    
    // console.log(generateBoard(10));
    console.log(generateBoard(15));