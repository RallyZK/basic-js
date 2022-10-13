const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let indexes = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) indexes.push(i)
  }
  console.log(indexes)

  arr2 = arr.filter(a => a !== -1).sort((a, b) => a - b)
  console.log(arr2)

  let result = []
  let j = 0

  for (let i = 0; i < arr.length; i++) {
    if (indexes.includes(i)) {
      result.push(-1);
    } else {
      result.push(arr2[j]);
      j++
    }

  }
  return result

}

module.exports = {
  sortByHeight
};
