

var addon = require('nexa');   

//Transmitter module is connected to GPIO6   
//Check pins from http://wiringpi.com/pins/   
addon.nexaInit(0, function() {   
    console.info("Done");   
});  

var controller_id = 43265881;
var device = 0;

//Set nexa module off
// addon.nexaOff(controller_id,device, function() {
//     console.info("Done");
// });


//Set nexa module on
addon.nexaOn(controller_id,device, function() {
    console.info("Done");
});


//pairing
// addon.nexaPairing(controller_id,device, function() {
//     console.info("Done");
// });

//unpairing
// addon.nexaUnpairing(controller_id,device, function() {
//     console.info("Done");
// });