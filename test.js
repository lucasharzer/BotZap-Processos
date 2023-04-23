const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Olá' || message.body === 'Oi') {
      client
        .sendText(message.from, 'Welcome Venom 🕷')
        .then((result) => {
          console.log(result); 
        })
        .catch((erro) => {
          console.error(erro);
        });
    }
  });
}