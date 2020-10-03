const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transformedArr = arr.slice();
  transformedArr.forEach((item,index)=>{
    if(item === "--discard-next"){
      transformedArr[index] = undefined
      transformedArr[index+1] = undefined;
    }
    else if(item === "--discard-prev"){
      transformedArr[index] = undefined
      transformedArr[index-1] = undefined;
    }
    else if(item === "--double-prev"){
      transformedArr[index] = transformedArr[index-1]
    }
    else if (item === "--double-next"){
      transformedArr[index] = transformedArr[index+1]
    }
  })
  return transformedArr.filter(item=> item !== undefined);
};