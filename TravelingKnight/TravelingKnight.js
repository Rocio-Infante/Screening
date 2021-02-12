/*
  Creates a chess board based on numerical value of input
  Ex. if size === 3, a 3 x 3 board will be created
  all values are initially set to 0
*/
const createBoard = (size) => {
  const board = [];
  let rowCount = 0;
  while (rowCount <= size - 1) {
    let row = new Array(size).fill(0)
    board.push(row)
    rowCount++;
  }
  return board;
}