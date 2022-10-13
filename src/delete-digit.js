const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let narr = n.toString().split('')
  let arr = []

  for (let i = 0; i < narr.length; i++) {
    narr[i] = ''
    arr.push(narr.join(''))
    narr = n.toString().split('')
  }

  arr.sort((a, b) => b - a)
  return Number(arr[0])

}

module.exports = {
  deleteDigit
};
