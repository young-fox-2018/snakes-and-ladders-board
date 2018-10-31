function generateBoard(num) {
    var path = num * num;
    var result = [];
    for (let i = 0; i < num; i++) {
        result.push([]);
        if (num % 2 == 0 && i % 2 === 0 || num % 2 !== 0 && i % 2 !== 0) {
            for (let j = 0; j < num; j++) {
                result[i].push(path);
                path--;
            }
        } else {
            for (let k = num-1; k >= 0; k--) {
                result[i][k] = path;
                path--
            }
        }
    }
    return result;
}

console.log(generateBoard(15));
console.log(generateBoard(8));