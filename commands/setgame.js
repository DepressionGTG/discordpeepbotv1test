const Discord = require('discord.js');
exports.run = (client, message, args) => {
let argresult = args.join(' ');
client.user.setActivity(argresult);
message.delete();

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'setgame',
  description: 'Sets The Bots Game. But, Only Owner Can Do That..',
  usage: 'setgame <game>'
};
