/* eslint-disable no-console */
const Centrifuge = require('centrifuge')

const centrifuge = new Centrifuge('ws://realtime.zuri.chat:16800/');

console.log('connecting')
centrifuge.subscribe('news', (message) => {
    console.log(message);
});

centrifuge.on('connect', (context) => {
    // now client connected to Centrifugo and authorized
    console.log(context)
});

centrifuge.connect();