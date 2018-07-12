const Discord = require ("discord.js");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
     if(!tomute) return message.reply("je ne trouve pas l'utilisateur.");
     if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("je ne peux pas le mute.");
     let muterole = message.guild.roles.find(`name`, "muted");

     if(!muterole){
       try{
         muterole = await message.guild.createRole({
           name: "mute",
           color: "#000000",
           permissions:[]
         })
         message.guild.channels.forEach(async (channel, id) => {
           await channel.overwritePermissions(muterole, {
             SEND_MESSAGES: false,
             ADD_REACTIONS: false
           });
         });
       }catch(e){
         console.log(e.stack);
       }
     }
     //end of create role
     let mutetime = args[1];
     if(!mutetime) return message.reply("tu n'as pas précisé le temps.");

     await(tomute.addRole(muterole.id));
     message.reply(`<@${tomute.id}> a bien été mute pendant ${ms(ms(mutetime))}`);

     setTimeout(function(){
       tomute.removeRole(muterole.id);
       message.channel.send(`<@${tomute.id}> a bien été unmute`);
     }, ms(mutetime));
   }
module.exports.help = {
  name: "mute"
}
