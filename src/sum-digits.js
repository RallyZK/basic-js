const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let summ

  let arr = n.toString().split('')
  let result = sumarr(n)  

  function sumarr(x) {
    let arrn = []
    arr.forEach(el => arrn.push(Number(el)));
    summ = arrn.reduce((acc, x) => acc + x, 0);
    return summ
  }

  while (summ.toString().length !== 1) {
    arr = summ.toString().split('')
    result = sumarr(summ)       
  }
  return result
}

module.exports = {
  getSumOfDigits
};
