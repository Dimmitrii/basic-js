const CustomError = require("../extensions/custom-error");

const chainMaker = {
  links:[],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    this.links.push(value);
    return this;
  },
  removeLink(position) {
    if(typeof position === "number" && position <= this.links.length-1 && position > 0){
      this.links.splice(position-1,1);
    }
    else{
      this.links = [];
      throw Error();
    }
    return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    let string = "";
    this.links.forEach((item,index)=>{
      if(index !== this.links.length-1){
        string += `( ${item} )~~`
      }
      else{
        string += `( ${item} )`;
      }
    })
    this.links = [];
    return string;
  }
};

module.exports = chainMaker;
