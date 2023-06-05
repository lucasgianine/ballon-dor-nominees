var database = require("../database/config")

// // Coloque os mesmos parâmetros aqui. Vá para a var instrucao
// function cadastrar(insertId, jogadorVotado) {
//     console.log("ACESSEI O VOTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", insertId, jogadorVotado);

//     // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
//     //  e na ordem de inserção dos dados.
//     var instrucao = `
//         INSERT INTO votacao (fkUsuario, fkJogador, dtVoto) VALUES ('${insertId}', '${jogadorVotado}', now());
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

function votos() {
    console.log("ACESSEI O VOTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT count(usuario.fkJogador) as Votos, jogadores.apelido as Jogador FROM usuario
    JOIN jogadores ON jogadores.idJogador = usuario.fkJogador GROUP BY usuario.fkJogador ORDER BY Votos DESC LIMIT 8;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    // cadastrar,
    votos
};