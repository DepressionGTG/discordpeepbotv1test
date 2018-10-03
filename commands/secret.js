const Discord = require('discord.js');
exports.run = (client, message) => {
  
  message.delete();{ 
  if(message.guild != null){
  return message.channel.send("To use **~secret,**  you must DM <@487840752995532810> in order to remain anonymous.");
};

message.delete();
if(message.dm != true){
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let secretmessage = args.join(" ");
  message.delete().catch();
  client.guilds.get('476110625261748264').channels.get('476112510076977172').send("Anonymous Secret: " + '"' + secretmessage + '"');
  message.delete();
  message.reply("Message was sent"); 
  console.log(message.author.username,`:`  + secretmessage)
 
}}};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ['s'],
    permLevel: 0
  };

exports.help = {
  name: 'secret',
  description: 'Tell us a secret anonymously. (DM the bot)',
  usage: 'DM the bot ~secret'
};