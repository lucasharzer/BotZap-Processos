require("dotenv").config();
const mysql = require("mysql2/promise");


async function banco(nDepre) {
    // Conectar ao banco de dados
    const connection = await mysql.createConnection(
        `mysql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`
    );

    await connection.connect();
    
    // Selecionar os dados
    const infos = await connection.query(
        "SELECT NomeRequisitante, Documento FROM PrecatorioDocumentos WHERE NumeroDepre = ?",
        [nDepre]
    );

    await connection.end();
    
    return infos[0][0];
}


module.exports = banco;