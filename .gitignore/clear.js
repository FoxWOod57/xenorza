const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!clear 15
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu n'as pas les permissions.");
  if(!args[0]) return message.channel.send("Indiquez le nombre de message à supprimer.");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send( `${args[0]} messages supprimés.`).then(msg => msg.delete(4000));
  });
}

module.exports.help = {
  name: "clear"
}
