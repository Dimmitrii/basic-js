const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let numberOfCats = 0;
  matrix.forEach((secondaryarray)=>{
    secondaryarray.forEach((item)=>{
      if(item === "^^"){
        numberOfCats = numberOfCats + 1;
      }
      });
    });
  if(numberOfCats === 0){
    return 0;
  }
  return numberOfCats;
};
