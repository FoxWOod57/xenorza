const Discord = require ("discord.js");

module.exports.run = async(bot, message, args) => {
  message.channel.send(bot.guilds.map(r => r.name + ` | **${r.memberCount} Membres**`))
}

module.exports.help = {
  name: "serveurlist"
}
