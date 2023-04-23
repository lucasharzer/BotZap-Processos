# BotZap - Processos

Bot de WhatsApp usando a biblioteca do venom-bot do Node js. Ao receber o número do processo busca o nome e o documento e envia para o contato que solicitou.

# Pacotes

- dotenv: Pacote que carrega variáveis ​​de ambiente de um arquivo .env;
- mysql2: Pacote que conecta e executa comandos no banco de dados MySql de forma assíncrona;
- venom-bot: Pacote feito em JavaScript que fornece suporte para criar qualquer interação, como atendimento ao cliente, envio de mídia, reconhecimento de sentença baseado em inteligência artificial e todos os tipos de arquitetura de design para WhatsApp.

# Comandos

Instalar todas as dependências
```bash
npm install
```

Executar. Ao executar pela primeira vez é necessário escanear o QRCode, depois de conectar será criada a sessão do WhatsApp e uma pasta tokens
```bash
npm start
```

# Resultados

- Terminal:
<span>
    <img src="https://user-images.githubusercontent.com/85804895/233867815-231bb8c2-4c8f-4406-9a26-2d9630cb1df6.gif">
</span>

- WhatsApp:
<span>
    <img src="https://user-images.githubusercontent.com/85804895/233868058-55026864-191c-423a-bedc-64a31f29bcb5.png">
</span>
