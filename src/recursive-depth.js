const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(Array.isArray(arr) && arr.length > 0){
      return 1 + (arr.map(item=> this.calculateDepth(item))).sort((a,b)=>b-a)[0]
    }
    else if(arr.length === 0){
      return 1;
    }
    else{
      return 0;
    }
  }
};