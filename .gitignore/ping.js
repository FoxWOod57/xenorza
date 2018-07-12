const Discord = require("discord.js");
const ms = require ("ms");

module.exports.run = async(bot, message, args) => {
  message.channel.sendMessage('Temps de latence avec le serveur : `'+ `${message.createdTimestamp - Date.now()}` + 'ms`');

}

module.exports.help = {
  name: "ping"
}
