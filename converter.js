/*
converts:
m, cm, mm
kg, g
*/

// require
const convert = require('convert-units');

try {
    console.log(convert(process.argv[2]).from(process.argv[3]).to(process.argv[5]));
} catch (e){
    handleArgumentError();
}
// argument errors
function handleArgumentError() {
    console.error("Wrong arguments, 2 ways of usage: \n node converter.js [number] [m | cm | mm] to [number] [m | cm | mm] \n node converter.js [number] [kg | g] to [kg | g]");
    process.exit(-1);
}