const
    request = require('request');

function find(data){

    return 'Cant find place'
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