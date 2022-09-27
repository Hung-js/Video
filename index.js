const { Client } = require('discord.js');
const client = new Client({intents: 3});
const { token } = require("./config.json");


client.once("ready", () => {
  console.log(`${client.user.username} Has Online`)
});

client.login(token)
