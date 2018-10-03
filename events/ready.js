const chalk = require('chalk');
module.exports = client => {
  console.log(chalk.bgGreen.yellow('Peep BOT Online'));

  client.user.setStatus('online');
};
