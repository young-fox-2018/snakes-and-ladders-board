function generateBoard(rowcol) {
  var result = []
  for (let i = 0; i < rowcol; i++) {
    let array = []
    for (let j = 0; j < rowcol; j++) {
      if (rowcol % 2 !== 0) {
        if (i % 2 === 0) {
          array.unshift((rowcol*(rowcol-i))-j)
        }
        else {
          array.push((rowcol*(rowcol-i))-j)
        }
      }
      else {
        if (i % 2 === 0) {
          array.push((rowcol*(rowcol-i))-j)
        }
        else {
          array.unshift((rowcol*(rowcol-i))-j)
        }
      }
    }
    result.push(array)
  }
  return result
}

console.log(generateBoard(10));
console.log(generateBoard(15));
console.log(generateBoard(8));
