const Discord = require ("discord.js");

module.exports.run = async(bot, message, args) => {
  let tte = args.join(" ")
  if (!tte) {
    return message.reply("Merci de poser une question :8ball:")};

    var replys = [
      "Oui.",
      "Non.",
      "Je ne sais pas.",
      "Peut être.",
      "Demande moi plus tard.",
    ];
    let reponse = (replys[Math.floor(Math.random() * replys.length )])
    var ballemend = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#00FF48")
    .addField(":8ball:Question:\n", tte )
    .addField("\n:8ball:Réponse: \n", reponse)
    .setTimestamp();
    message.channel.send(ballemend)
}

module.exports.help = {
  name: "8ball"
}
