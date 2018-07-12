const Discord = require ("discord.js");
module.exports.run = async (bot, message, args) => {

      let sicon = message.guild.iconURL;
      let serverembed = new Discord.RichEmbed()
      .setDescription(" Informations du Serveur")
      .setColor("#00FF48")
      .setThumbnail(sicon)
      .addField("Nom du Serveur", message.guild.name)
      .addField("Créé le", message.guild.createdAt)
      .addField("Tu as rejoins le", message.member.joinedAt)
      .addField("Total des membres ", message.guild.memberCount)
      .setTimestamp();
      return message.channel.send(serverembed);
}

      module.exports.help = {
      name: "serveurinfo"
}
