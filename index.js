function generateBoard(number) {
    var board = [];

    for (let i = number; i > 0; i--) {
        let baris = [];
        debugger        
        
        // push number ke dalam array
        for (let j = 0; j < number; j++) {
            let num;
            if (i % 2 === 0) {                
                num = (i * number) - j;
            } else if (i % 2 === 1) {
                num = (i * number) - (number - j) + 1;
            }
            baris.push(num);            
        }
        board.push(baris);
    }

    return board;
}

console.log(generateBoard(10));
console.log(generateBoard(15));