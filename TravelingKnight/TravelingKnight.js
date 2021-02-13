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

// All possible moves 
const xMoves = [2, 1, -1, -2, -2, -1, 1, 2];
const yMoves = [-1, -2, -2, -1, 1, 2, 2, 1];

/* 
  Function takes in x and y coordinates and a board size(n) and
  returns an array with all possible moves based on initial coordinates
*/
const travelingKnight = (x, y, n) => {
  createBoard(n);
  const resultCoordinates = [];

  // Check if starting coordinate is within board bounderies
  if (x >= n || y >= n || x < 0 || y < 0) {
    return [];
  };

  if (Number.isNaN(n) || Number.isNaN(x) || Number.isNaN(y)) {
    console.log('Please input a valid number')
  }

  // Use index to iterate through x and y possible moves arrays
  for (let i = 0; i < 8; i++) {
    // position of knight after moving
    let newX = x + xMoves[i];
    let newY = y + yMoves[i];

    /* 
      If coordinates after moving are greater than 0 and less than board size,
      push into result array
    */
    if (newX >= 0 && newY >= 0 && newX < n && newY < n) {
      resultCoordinates.push([newX, newY]);
    }
  }
  return resultCoordinates;
};