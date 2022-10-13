const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let elcount = matrix.length

  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        for (let k = i + 1; k < elcount; k++) {
          matrix[k][j] = 0
        }
      }
    }
  }
  let res = 0;
  for (let i = 0; i < matrix.length; i++) {
    let sum = matrix[i].reduce((acc, a) => acc + a, 0)
    res = res + sum
  }

  return res

}

module.exports = {
  getMatrixElementsSum
};
