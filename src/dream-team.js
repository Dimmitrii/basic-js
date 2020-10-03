const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  const sortMembers = [];
    let dreamTeamName = "";
    if(Array.isArray(members)){
        members.forEach((item,index)=>{
            if(typeof(item) === "string"){
                sortMembers.push(item.trim().toUpperCase());
                if(index === members.length - 1){
                    sortMembers.sort();
                    sortMembers.forEach(item => dreamTeamName =  dreamTeamName + item[0]);
                }
            }
        });
    }
    else{
        return false;
    }
    return dreamTeamName
};
