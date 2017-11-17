const
    request = require('request');

function find(data){

    // Check if the message contains help
    if (data.indexOf("help") !== -1) {
        return 'Thanks for messaging us. \n' +
            '\n' +
            'To indicate light please use: \n' +
            '"upnepa [place]" e.g "upnapa worldbank" \n' +
            '\n' +
            'To ask about light please use: \n' +
            '"[place]" e.g "worldbank"'
    }

    return 'Cant find place ' + data
}

function save(data){
    console.log('saving')

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