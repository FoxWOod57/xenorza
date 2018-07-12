const Discord = require ("discord.js");

module.exports.run = async(bot, message, args) => {
  let thingToecho = args.join(" ")
  let sondageembed = new Discord.RichEmbed()
  .setDescription("Sondage")
  .setColor("#00FF48")
  .addField(thingToecho, "Répondre avec :white_check_mark: ou :x: ")
  .setTimestamp()
  message.guild.channels.find("name", "sondage")
  return message.channel.send(sondageembed)
  .then(function(message) {
    message.react("✅")
    message.react("❌")
  }).catch(function() {
  });
}

module.exports.help = {
  name: "sondage"
}
