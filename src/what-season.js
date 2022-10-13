const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

Date.prototype.isValid = function () {
  // An invalid date object returns NaN for getTime() and NaN is the only
  // object not strictly equal to itself.
  return this.getTime() === this.getTime();
};

function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  try {
    date.getUTCSeconds()
  }
  catch {
    throw new Error('Invalid date!')
  }

  if (!Date.parse(date)) {
    throw new Error('Invalid date!')
  }

  if (!date) {
    return 'Unable to determine the time of year!'
  } else {
    let m = date.getMonth();
    if (m === 11 || m === 0 || m === 1) {
      return 'winter'
    } else if (m === 2 || m === 3 || m === 4) {
      return 'spring'
    } else if (m === 5 || m === 6 || m === 7) {
      return 'summer'
    } else if (m === 8 || m === 9 || m === 10) {
      return 'fall'
    }
  }
}

// function isValidDate(x) {
//   let a = x.match(/\d+/g),
//     date = new Date(a[2], a[1] - 1, a[0]);
//   return date.getFullYear() === a[2] && date.getDate() === a[0] && date.getMonth() === (a[1] - 1);
// }


module.exports = {
  getSeason
};
