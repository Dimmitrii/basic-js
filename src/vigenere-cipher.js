const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(string1,string2) {
    let arr = []; 
    string1 = string1.replace(/\s/gi,"");
    for(let i = 0;i<string1.length;i++){
      let letter = string1.toUpperCase().codePointAt(i) + string2.toUpperCase().codePointAt(i) - "A".codePointAt(0);
      if(letter < 90){
        arr.push(String.fromCharCode(letter))
      }
      else{
        arr.push(String.fromCharCode(letter-26))
      }
    }
	  return arr.join("");
  }    
  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
