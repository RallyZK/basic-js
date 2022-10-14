const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr1 = s1.split(''), arr2 = s2.split(''), count = 0, length;

  //console.log(arr1)
  //console.log(arr2)

  arr1.length > arr2.length ? checkarray(arr1, arr2) : checkarray(arr2, arr1);

  function checkarray(maxarr, minarr) {
    for (let i = 0; i < maxarr.length; i++) {
      let j = minarr.indexOf(maxarr[i]);
      if (j !== -1 && maxarr[i] === minarr[j]) {
        count++
        minarr.splice(j, 1);
      }
    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
