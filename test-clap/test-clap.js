
const ClapDetector = require('clap-detector').default
const os = require('os');
const Logger = require('../Logger.js');

const log = new Logger();
log.debug('Program started');

const CONFIG = {
  AUDIO_SOURCE: os.type() === "Darwin" // microphone
  ? 'coreaudio default'
  : 'alsa hw:1,0',
  DETECTION_PERCENTAGE_START : '5%',
  DETECTION_PERCENTAGE_END: '5%',
  CLAP_AMPLITUDE_THRESHOLD: 0.01,
  CLAP_ENERGY_THRESHOLD: 0.95,
  CLAP_MAX_DURATION: 2000,
  MAX_HISTORY_LENGTH: 100 // no need to maintain big history
}

const clapDetector = new ClapDetector(CONFIG);

//console.log(clapDetector);

//const disposableOneClapListener = clapDetector.addClapsListener(claps => {
//  console.log("heard 1 clap (force)", claps)
//}, { number: 1, delay: 0, force: true })

//const disposableOneClapForceListener = clapDetector.addClapsListener(claps => {
//  console.log("heard 1 clap", claps)
//}, { number: 1, delay: 1000 })

const disposableTwoClapsListener = clapDetector.addClapsListener(claps => {
  console.log("heard 2 claps", claps)
}, { number: 2, delay: 1400 })

const disposableThreeClapsListener = clapDetector.addClapsListener(claps => {
  console.log("heard 3 claps", claps)
}, { number: 3, delay: 500 })

// Cancel some clap listeners
// Cancel alls claps listener but 2 claps after 10 seconds
setTimeout(() => {
  console.log("only listen to 2 claps now")
  //disposableOneClapListener()
  //disposableOneClapForceListener()
  disposableThreeClapsListener()
}, 20000)

// Dispose (stop sox process and listeners) after 30s
setTimeout(() => {
  console.log("dispose all listeners and free ressources")
  clapDetector.dispose()
}, 40000)
