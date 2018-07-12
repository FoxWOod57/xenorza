const Discord = require("discord.js");
module.exports.run = async(bot, message, args) => {

      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setDescription("Informations du Bot ")
      .setColor("#00FF48")
      .setThumbnail(bicon)
      .addField("Nom du Bot", bot.user.username)
      .addField("Crée le", bot.user.createdAt)
      .addField("Créé par", "FoxWOod_ #9274")
      .setTimestamp()
      return message.channel.send(botembed)
}

module.exports.help = {
  name: "botinfo"
}
