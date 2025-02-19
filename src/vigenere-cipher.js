const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(text) {
    if (text === false) {
      this.text = true;
    } else {
      this.text = false;
    }
  }

  encrypt(string, key) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  decrypt(string, key) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here    
  }
}

module.exports = {
  VigenereCipheringMachine
};
