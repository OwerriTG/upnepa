const
    MapCache = require('map-cache'),
    cache = new MapCache();

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

    if (cache.has(data)) {

        return 'There was light at ' + data + ' by ' + cache.get(data)
    }

    return 'Cant find ' + data + ' entry'
}

function save(data){

    console.log('saving')
    cache.set(data, new Date().toTimeString().substr(0, 5));
    return 'Thank you'
}

module.exports = function (message) {

    // Check if the message contains upnepa
    if (message.indexOf("upnepa") !== -1) {

        // Remove upnepa and save location
        return save(message.substr( message.indexOf("upnepa") + 6, message.length ))
    } else {

        // find saved location
        return find(message)
    }
};