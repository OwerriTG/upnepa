'use strict';

// Imports dependencies and set up http server
const
    request = require('request');

const PAGE_ACCESS_TOKEN = 'EAAFSLILNs0QBAMmeZCwCX2CidxlSUdxO0dcYDvepIuPDHMjZCE5MnYVBwB4sDQDvQ1mWDD4w5e788aq2BZBLAz3iDzwh16FEr8YMQ7yvVoZApAAFHSIg4NNqM4aZCKmZC0DCGlPjEgQowL4NEwEilkfOyqii2grIXkEiAbP6h5ppzomNGBVjGVBpJIaWiPDNIZD'

// Sends response messages via the Send API
function callSendAPI (sender_psid, response) {
    // Construct the message body
    let request_body = {
        recipient: {
            id: sender_psid
        },
        message: response
    }

    // Send the HTTP request to the Messenger Platform
    request({
        url: "https://graph.facebook.com/v2.6/me/messages",
        qs: { access_token: PAGE_ACCESS_TOKEN },
        method: "POST",
        json: request_body
    }, (err, res, body) => {
        if (!err) {
            console.log('message sent!')
        } else {
            console.error("Unable to send message:" + err);
        }
    });
}

module.exports = {

    // Handles messages events
    handleMessage: function (sender_psid, received_message) {
        let response;

        // Check if the message contains text
        if (received_message.text) {

            // Create the payload for a basic text message
            response = {
                "text": `You sent the message: "${received_message.text}". Now send me an image!`
            }
        }

        // Sends the response message
        callSendAPI(sender_psid, response);

    },

    // Handles messaging_postbacks events
    handlePostback: function (sender_psid, received_postback) {
        // let response;
        //
        // // Check if the message contains text
        // if (received_message.text) {
        //
        //     // Create the payload for a basic text message
        //     response = {
        //         "text": `You sent the message: "${received_message.text}". Now send me an image!`
        //     }
        // }
        //
        // // Sends the response message
        // callSendAPI(sender_psid, response);
    },


}

