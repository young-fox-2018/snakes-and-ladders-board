function generateBoard(n) {
    let result = []
    let arr = []
    let check = 0

    for (let j = 1; j <= n * n; j++) {
        if (arr.length < n) {
            switch (check) {
                case 0:
                    arr.push(j)
                    break;

                default:
                    leftUnshift(j)
                    break;
            }
        }
        if (arr.length == n) {
            result.unshift(arr)
            arr = []
            if (check == 1) {
                check = 0
            } else {
                check = 1
            }
        } 
      

    }


    return result

    //ALTERNATIF .unshift()
    function leftUnshift(params) {
        for (let i = arr.length-1; i >= 0; i--) {
            arr[i+1] = arr[i]
        }
        arr[0] = params
    }
}



console.log(generateBoard(10));
