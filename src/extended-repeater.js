const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let partStr = str;
  let fullStr = "";
  if(options.addition === undefined){
    options.addition = "";
  }
  if(options.repeatTimes === undefined){
    options.repeatTimes = 1;
  }
  if(options.additionRepeatTimes === undefined){
    options.additionRepeatTimes = 1;
  }
  if(options.separator === undefined){
    options.separator = "+"
  }
  if(options.additionSeparator === undefined){
    options.additionSeparator = "|"
  }
  for(let i = 0;i<options.additionRepeatTimes;i++){
    if(i<options.additionRepeatTimes-1){
      partStr += options.addition + options.additionSeparator
    }
    else{
      partStr += options.addition
    }
  }
  for(let i = 0;i<options.repeatTimes;i++){
    if(i<options.repeatTimes-1){
      fullStr += partStr + options.separator
    }
    else{
      fullStr += partStr
    }
  }
  return fullStr
};
  