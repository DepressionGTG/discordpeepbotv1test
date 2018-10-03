const Discord = require('discord.js');
exports.run = (client, message) => {

    message.delete();

    mention = message.mentions.users.first();

    if (mention == null) { return; }
    message.delete();
    mentionMessage = message.content.slice(5);
    mention.send (mentionMessage);
    console.log(message.author.username + mentionMessage)
};
 
exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['sm'],
        permLevel: 4
      };
      
exports.help = {
        name: 'send',
        description: 'Sends people dms',
        usage: 'send [user] [message]'
      };
