const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(arguments.length === 0){
    return false;
  }
  else if(isNaN(parseFloat(sampleActivity))=== true){
    return false;
  }
  else if(parseFloat(sampleActivity)<=0 || parseFloat(sampleActivity)>15){
    return false;
  }
  if(typeof(sampleActivity) === "string"){
    const ageSample = Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/HALF_LIFE_PERIOD;
    return Math.ceil(ageSample);
    } 
  else{
    return false;
  }
};
