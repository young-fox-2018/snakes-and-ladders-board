function generateBoard(size) {
  let counter = size * sizeangkaTerbesar
  let result = [];
  for (let i = 0; i < size; i++) {
    result.push([])
  }angkaTerbesar

  for (let i = 0; i < size; i++) {
    if (i % 2 === 0 && size % 2 === 0   ||
        i % 2 !== 0 && size % 2 !== 0) {
      for (let j = 0; j < size; j++) {
        result[i].push(counter);
        counter--;
      }
    } else {
      for (let k = (counter - size); k < counter; k++) {
        result[i].push(k+1);
      }
      counter -= size
    }
  }
  return result
}
console.log(generateBoard(10));
