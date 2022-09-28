const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: ['ms'],
    utilisation: '{prefix}ping',

    run : async(client, message) => {
        message.channel.send(`tốc độ api là: **${client.ws.ping}ms** 🏓`);
    },
};
