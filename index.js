const venom = require("venom-bot");
const banco = require("./database");


venom
    .create()
    .then((client) => start(client));


function start(client){
    client
        .onMessage((message) => {
            // Receber mensagem
            let processo = message.body.replace("-", "").replace(".", "").replace(".", "").replace(".", "").replace(".", "").trim();
            
            try{
                parseInt(processo);
                // Processo válido
                if (processo.length == 20){
                    // Informações
                    let nome = message.notifyName;
                    let telefone = message.sender.id.replace("@c.us", "");
                    let texto = message.body;
                    let status;
                    if (message.isOnline){
                        status = "online";
                    }else{
                        status = "offline";
                    }
    
                    console.log(`\nNome: ${nome}\nTelefone: ${telefone}\nTexto: ${texto}\nStatus: ${status}`);
                    // Enviar mensagem
                    const dados = banco(message.body.trim())
                    dados.then(resultado => {
                        const nome = resultado.NomeRequisitante;
                        const documento = resultado.Documento;

                        client  
                        .sendText(message.from, `Nome: ${nome}\nDocumento: ${documento}`)
                        .then((result) => {
                            console.log(`Mensagem enviada`);
                        })
                        .catch((erro) => {
                            console.error(`Erro ao enviar mensagem: ${erro}`);
                        });
                    });
                }else{
                    console.log("Não é um processo")
                }
            }catch(err){
                console.log("Não é um processo")
            }
    });
}