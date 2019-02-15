
const Logger = require('../Logger');
const log = new Logger();

log.debug('Listening for radio transmissions');

var rpi433    = require('rpi-433'),
    rfSniffer = rpi433.sniffer({
      pin: 2,                     //Snif on GPIO 2 (or Physical PIN 13)
      debounceDelay: 500          //Wait 500ms before reading another code
    });

// Receive (data is like {code: xxx, pulseLength: xxx})
rfSniffer.on('data', function (data) {
  log.debug('Code received: '+data.code+' pulse length : '+data.pulseLength);
});
