const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let hanoiTower = {
    turns:1,
    seconds:1,
}
if(disksNumber === 1){
    hanoiTower.seconds = Math.floor(hanoiTower.turns/(turnsSpeed/3600));
    return hanoiTower;
}
else{
    for(let i = 0; i<disksNumber-1;i++){
        hanoiTower.turns = hanoiTower.turns*2+1;
    }
    hanoiTower.seconds = Math.floor(hanoiTower.turns/(turnsSpeed/3600));
    return hanoiTower;
}
};
