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
                    arr.unshift(j)
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
}

console.log(generateBoard(10));
