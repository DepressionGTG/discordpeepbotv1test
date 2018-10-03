const Discord = require('discord.js');
exports.run = (client, message, args) => {
let argresult = args.join(' ');
client.user.setStatus(argresult);
message.delete();

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setactivity'],
  permLevel: 4
};

exports.help = {
  name: 'setstatus',
  description: 'Sets The Bots Status. But, Only Owner Can Do That..',
  usage: 'setstatus <status>'
};
