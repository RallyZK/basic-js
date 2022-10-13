const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = []
  let obj = {}


  domains.forEach(element => {
    arr = element.split('.').reverse();
    let x = ''
    arr.forEach(el => {
      x = x + '.' + el;
      if (obj.hasOwnProperty(x)) {
        obj[x] = obj[x] + 1
      } else {
        obj[x] = 1
      }

    })
  })


  //console.log(obj)
  return obj;
}

module.exports = {
  getDNSStats
};
