/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  return areValidRows(board) && areValidColumns(board) &&
    isValidThreeByThree(board);
};

const isValidColumn = (board, index) => {
  const uniqueCol = {};
  for (const row of board) {
    const value = row[index];
    if ((value in uniqueCol) && value !== ".") {
      return false;
    }
  }
  return true;
};

const areValidColumns = (board) => {
  for (let index = 0; index < board.length; index++) {
    if (!isValidColumn(board, index)) {
      return false;
    }
  }
  return true;
};

const isValidRow = (row) => {
  const uniqueRow = {};
  for (const value of row) {
    if ((value in uniqueRow) && (value !== ".")) {
      return false;
    }
    uniqueRow[value] = 1;
  }
  return true;
};

const areValidRows = (board) => {
  for (const row of board) {
    if (!isValidRow(row)) {
      return false;
    }
  }
  return true;
};

const isValidThreeByThree = (board) => {
};
