
//var sleep = require('sleep');
//var NanoTimer = require('nanotimer');


var gpio = require('gpio');
var gpio17 = gpio.export(16, gpio.DIRECTION.OUT);



// const Gpio = require('onoff').Gpio;
// const rx = new Gpio(17, 'out');

const Logger = require('../Logger');
const log = new Logger();

//var timerA = new NanoTimer();

log.debug('Starting transmissions');

// var rpi433    = require('rpi-433'),
  
//     rfEmitter = rpi433.emitter({
//       pin: 0,                     //Send through GPIO 0 (or Physical PIN 11)
//       pulseLength: 350            //Send the code with a 350 pulse length
//     });


// var blinkInterval = setInterval(blinkLED, 250); //run the blinkLED function every 250ms

// function blinkLED() { //function to start blinking
//   if (rx.readSync() === 0) { //check the pin state, if the state is 0 (or off)
//     rx.writeSync(1); //set pin state to 1 (turn LED on)
//     log.debug('on');
//   } else {
//     rx.writeSync(0); //set pin state to 0 (turn LED off)
//     log.debug('off');
//   }
// }

var it = 0;




function send(data)
{
  for(var i = 0; i < data.length; i++)
  {
    gpio17.set(data[i]);
    data2.push(data[i]);
    itt++;
    //sleep.usleep(250);
  } 
}

var data2 = []
var itt = 0




function bitcode(array)
{
  var code = [];
  array.forEach(element => {
    if(element == 1)
    {
      code.push(1);
      code.push(0);
    }
    else if (element == 0)
    {
      code.push(0);
      code.push(1);
    }
      
  });

  return code;
}

function rxify(array)
{
  var one = [1,0];
  var zero = [1,0,0,0,0,0];
  var sync = [1,0,0,0,0,0,0,0,0,0,0];
  var pause = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  var code = [];

  code.push(sync);

  array.forEach(element => {
    if(element == 1)
      code.push(one);
    else if (element == 0)
      code.push(zero);
  });

  code.push(pause);


  return code;
}

var code =    [1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1];
            //HHHHHHHHHHHHHHHHHHHHHHHHHHGOCCEE

var bcode = bitcode(code);
var rxcode = rxify(bcode);

//send([1,0,1,0,1,1,1,1,0,0,0,0]);
setTimeout(log.debug, 1000, data2);
setTimeout(log.debug, 1000, itt);

gpio17.set();

// Send
// rfEmitter.sendCode(1609, function(error, stdout) {   //Send 1234
//   if(!error) console.log(stdout); //Should display 1234
// });

/* Or :

rfEmitter.sendCode(code);
rfEmitter.sendCode(code, {  //You can overwrite defaults options previously set (only for this sent)
  pin: 2,
  pulseLength: 350
});
rfEmitter.sendCode(code, callback);
rfEmitter.sendCode(code, {
  pin: 2,
  pulseLength: 350
}, callback);
*/

//rpi-433 uses the kriskowal's implementation of Promises so,
//if you prefer Promises, you can also use this syntax :
// rfEmitter.sendCode(0b10000000000101000001000001010100000100000101000001010100000100000101010000010000010100000101000001010000010101000001000001010100000101000001010000010100000100000101010000010000010101000001010000010000010100000101010000010100000100000101010000010100000101000001010000010000000000000000000000000000000000000000, {pin: 0, pulseLength: 250})
//   .then(function(stdout) {
//     console.log('Code sent: ', stdout);
//   }, function(error) {
//     console.log('Code was not sent, reason: ', error);
//   });

// rfEmitter.sendCode(0b111101, {pin: 0, pulseLength: 250})
// .then(function(stdout) {
//   console.log('Code sent: ', stdout);
// }, function(error) {
//   console.log('Code was not sent, reason: ', error);
// });




