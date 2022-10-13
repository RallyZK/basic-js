const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let strarr = Array.from(str);

  let arr = [];
  let count = 1;
  let i = 0

  while (i < strarr.length) {
    if (strarr[i] !== strarr[i + 1]) {
      arr.push([count, strarr[i]]);
    } else {      
      while (strarr[i] === strarr[i + 1]) {
        count = count + 1;
        i = i + 1;
      }
      arr.push([count, strarr[i]]);
      count = 1;
    }
    i = i + 1
  }

  arr.forEach(el => {
    if (el[0] === 1) el[0] = ''
  })

  let res = ''
  arr.forEach(el => res = res + el.reduce((acc, a) => acc + a, ''))

  return res
}

module.exports = {
  encodeLine
};
