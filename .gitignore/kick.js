const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu n'as pas les permissions nécessaires!");
    if(args[0] == "help"){
      message.reply("Faites: ./kick <utilisateur> <raison>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Je ne trouve pas cette personne.");
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut pas être kick!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#00FF48")
    .addField("Utilisateur kick", `${kUser}.`)
    .addField("Kick par", `${message.author.username}`)
    .addField("Le", message.createdAt)
    .addField("Raison", kReason)
    .setTimestamp();

    message.guild.member(kUser).kick(kReason);
    message.channel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
