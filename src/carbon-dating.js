const { NotImplementedError } = require('../extensions/index.js');
/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (typeof (sampleActivity) !== 'string' || parseFloat(sampleActivity) < 0 || parseFloat(sampleActivity) > 15) {
    return false
    //console.log('false1')
  } else {
    let t = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD)
  
    if (!isFinite(t)) {
      return false
      //console.log('неверный ввод')
     
    } else {    
      return Math.ceil(t)
       //console.log(Math.ceil(t))
    }
  
  }
}

module.exports = {
  dateSample
};

