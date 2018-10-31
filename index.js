function generateBoard(rowcol) {
  var result = []
  for (let i = rowcol; i > 0; i--) {
    let array = []
    for (let j = 0; j < rowcol; j++) {
      if (i % 2 === 0) {
        array.push((rowcol*i)-j)
      }
      else {
        array.push((rowcol*i)-(rowcol-1)+j)
      }
    }
    result.push(array)
  }
  return result
}

console.log(generateBoard(10));
console.log(generateBoard(15));
console.log(generateBoard(8));
