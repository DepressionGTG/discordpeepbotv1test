exports.run = function(client, message, args) {
    let messagecount = parseInt(args.join(' '));
    message.channel.fetchMessages({
      limit: messagecount
    }).then(messages => message.channel.bulkDelete(messages));
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['clear', 'clean'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'purge',
    description: 'Purges X amount of messages from a given channel.',
    usage: 'purge <number>'
  };
  