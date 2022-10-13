const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(m) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  for (i = 0; i < m.length; i++) {
    for (j = 0; j < m.length; j++) {
      if (m[i][j] === true) m[i][j] = '*';
      else m[i][j] = 0
    }
  }

  for (i = 0; i < m.length; i++) {
    for (j = 0; j < m[i].length; j++) {
      if (m[i][j] !== '*') {
        let count = 0;
        if (i - 1 >= 0 && i - 1 < m.length && m[i - 1][j] === '*') count++
        if (i - 1 >= 0 && i - 1 < m.length && j + 1 >= 0 && j + 1 < m[i].length && m[i - 1][j + 1] === '*') count++
        if (j + 1 >= 0 && j + 1 < m[i].length && m[i][j + 1] === '*') count++
        if (i + 1 >= 0 && i + 1 < m.length && j + 1 >= 0 && j + 1 < m[i].length && m[i + 1][j + 1] === '*') count++
        if (i + 1 >= 0 && i + 1 < m.length && m[i + 1][j] === '*') count++
        if (i + 1 >= 0 && i + 1 < m.length && j - 1 >= 0 && j - 1 < m[i].length && m[i + 1][j - 1] === '*') count++
        if (j - 1 >= 0 && j - 1 < m[i].length && m[i][j - 1] === '*') count++
        if (i - 1 >= 0 && i - 1 < m.length && j - 1 >= 0 && j - 1 < m[i].length && m[i - 1][j - 1] === '*') count++
        m[i][j] = count
      }
    }
  }

  for (i = 0; i < m.length; i++) {
    for (j = 0; j < m.length; j++) {
      if (m[i][j] === '*') m[i][j] = 1;
    }
  }

  return m

}

module.exports = {
  minesweeper
};


