const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(string1,string2) {
    let index = 0;
    let arr = []; 
    for(let i = 0;i<string1.length;i++){
      if(string1.toUpperCase()[i].codePointAt() < 91 && string1.toUpperCase()[i].codePointAt()>64){
        let letter = string1.toUpperCase().codePointAt(i) + string2.toUpperCase().codePointAt(index) - "A".codePointAt(0);
        index = index + 1;
        if(index > string2.length-1){
          index = 0;
        }
        if(letter < 91){
          arr.push(String.fromCharCode(letter))
        }
        else{
          arr.push(String.fromCharCode(letter-26))
        }
      }
      else{
        arr.push(string1[i])
      }
    }
	  return arr.join("");
  }    
  decrypt(string1,string2) {
    let index = 0;
    let arr = []; 
    for(let i = 0;i<string1.length;i++){
      if(string1.toUpperCase()[i].codePointAt() < 91 && string1.toUpperCase()[i].codePointAt()>64){
        let letter = string1.toUpperCase().codePointAt(i) - (string2.toUpperCase().codePointAt(index) - "A".codePointAt(0));
        index = index + 1;
        if(index > string2.length-1){
          index = 0;
        }
        if(letter > 64){
          arr.push(String.fromCharCode(letter))
        }
        else{
          arr.push(String.fromCharCode(letter+26))
        }
      }
      else{
        arr.push(string1[i])
      }
    }
	  return arr.join("");
  }
}

module.exports = VigenereCipheringMachine;
