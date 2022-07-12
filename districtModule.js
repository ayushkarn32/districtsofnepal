//read from the file districts.json
var fs = require('fs');
const districts = JSON.parse(fs.readFileSync('districts.json', 'utf8'));
const result=[]


function listByState(state) {
   districts.map(function(district) {
        if(district.stateno == state) {
            return result.push(district);
        }
     }
    )
    return result;
}

function findState(name){
    districts.map(function(district) {
        if(district.title == name) {
            // console.log(district.stateno);
            result.push(district);
        }
     }
    )
    return result;
}

//export the function
module.exports = {
    listByState: listByState,
    findState: findState
}
