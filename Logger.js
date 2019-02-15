const EventEmmitter = require('events');

class Logger extends EventEmmitter
{
    log(message)
    {
        console.log(message);

        //raise event
        this.emit('messageLogged', {id: 1, url: 'http://fuck.com'}); //raise an event of type 'messageLogged' with the object {}
    }

    info(message)
    {
        console.log(' [Info]   %s', message);
    }

    debug(message)
    {
        console.log('\x1b[44m [Debug] \x1b[0m %s', message);
    }

    warn(message)
    {
        console.log('\x1b[43m\x1b[30m[Warning]\x1b[0m\x1b[33m %s\x1b[0m', message);
    }

    err(message)
    {
        console.log('\x1b[41m [Error] \x1b[0m\x1b[31m %s\x1b[0m', message);
    }
}

module.exports = Logger;


