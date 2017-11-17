const
    MapCache = require('flat-cache'),
    cache = MapCache.load('cacheId');

function save(data){

    console.log('saving')
    cache.setKey(data, { time: new Date().toTimeString().substr(0, 5)} );
    cache.save(true);
    return 'Thank you upnepa at' + data + ' by ' + cache.getKey(data).time
}

function find(data){

    // Check if the message contains help
    if (data.indexOf("help") !== -1) {
        return 'Thanks for messaging us. \n' +
            '\n' +
            'To indicate light please use: \n' +
            'upnepa [place] e.g upnapa worldbank \n' +
            '\n' +
            'To ask about light please use: \n' +
            '[place] e.g worldbank'
    }

    console.log(cache.all())

    if (cache.getKey(data)) {

        return 'There was light at ' + data + ' by ' + cache.getKey(data).time
    }

    return 'Cant find ' + data + ' entry'
}

module.exports = function (message) {

    // Check if the message contains upnepa
    if (message.indexOf("upnepa") !== -1) {

        // Remove upnepa and save location
        return save(message.substr( message.indexOf("upnepa") + 7, message.length ))
    } else {

        // find saved location
        return find(message)
    }
};