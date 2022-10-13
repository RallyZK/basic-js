const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here;

  const disn = '--discard-next';
  const disp = '--discard-prev';
  const dbn = '--double-next';
  const dbp = '--double-prev';
  const error = '\'arr\' parameter must be an instance of the Array!';
  let trarr = [];

  
  if (Array.isArray(arr) === false) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
    //console.log(error)
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== disn && arr[i] !== disp && arr[i] !== dbn && arr[i] !== dbp) {
        trarr.push(arr[i])
      } else if (arr[i] === disn && arr[i + 2] === dbp) {
        i = i + 2
      } else if (arr[i] === disn && arr[i + 2] === disp) {
        i = i + 2
      } else if (arr[i] === disn && i !== arr.length - 1) {
        i = i + 1
      } else if (arr[i] === disp && i !== 0) {
        trarr.pop()
      } else if (arr[i] === dbn && i !== arr.length - 1) {
        trarr.push(arr[i + 1])
      } else if (arr[i] === dbp && i !== 0) {
        trarr.push(arr[i - 1])
      }
    }
    return trarr
    //console.log(trarr)
  }
}

module.exports = {
  transform
};
