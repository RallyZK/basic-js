const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  Array.isArray(array)
  if (Array.isArray(array) === false || array.length === 0) {
    return false
  } else {
    let name = '';
    let newel;
    array.forEach(el => {
      if (typeof (el) === 'string') {
        newel = el.split(' ').join('');
        name = name + newel[0].toUpperCase()
      }
    });
    const collator = new Intl.Collator('ru')

    function sortAndReverse(str) {
      return str.split('').sort((a, b) => collator.compare(a, b)).join('')
    }
    if (name !== '') {
      return sortAndReverse(name)
    } else {
      return false
    }
  }
}

module.exports = {
  createDreamTeam
};
