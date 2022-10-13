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
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!string || !key) throw new Error('Incorrect arguments!');
    string = string.toUpperCase();
    key = key.toUpperCase();
    let res = '';

    if (this.text) {
      string = string.split('').reverse().join('');
    }

    let j = 0;

    for (let i = 0; i < string.length; i++) {
      //for (let j = 0; j < key.length; j++) {
      if (string[i] >= 'A' && string[i] <= 'Z') {
        res = res + String.fromCharCode(((string.charCodeAt(i) + key.charCodeAt(j % key.length)) % 26) + 65);
        j++;
      } else res = res + string[i];
      //}
    }
    return res
  }

  decrypt(string, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!string || !key) throw new Error('Incorrect arguments!');
    string = string.toUpperCase();
    key = key.toUpperCase();
    let res = '';

    if (this.text) {
      string = string.split('').reverse().join('');
    }
    let j = 0;
    for (let i = 0; i < string.length; i++) {
      //for (let j = 0; j < key.length; j++) {
      if (string[i] >= 'A' && string[i] <= 'Z') {
        res = res + String.fromCharCode((26 + string.charCodeAt(i) - key.charCodeAt(j % key.length)) % 26 + 65);
        j++;
      } else res = res + string[i];
      //}
    }
    return res;
  }
}

module.exports = {
  VigenereCipheringMachine
};
