const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let s, res, add, addition = '';

  if (str === null) {
    str = 'null';
  } else {
    str = str.toString()
  }

  if (options.addition || options.addition === false  || options.addition === null) {
    if (options.addition === null) addition = 'null';
    else addition = options.addition.toString();
  }

  add = addition
  for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
    if (options.additionSeparator) {
      add = add + options.additionSeparator + addition
    } else {
      add = add + '|' + addition
    }
  }
  s = str + add;
  res = str + add;

  for (let j = 0; j < options.repeatTimes - 1; j++) {
    if (options.separator) {
      res = res + options.separator + s
    } else {
      res = res + '+' + s
    }
  }
  return res
}

module.exports = {
  repeater
};
