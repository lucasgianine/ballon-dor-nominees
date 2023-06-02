var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(insertId, jogadorVotado) {
    console.log("ACESSEI O VOTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", insertId, jogadorVotado);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO votacao (fkUsuario, fkJogador, dtVoto) VALUES ('${insertId}', '${jogadorVotado}', now());
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function votos() {
    console.log("ACESSEI O VOTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT count(votacao.fkJogador) as Votos, jogadores.apelido as Jogador FROM VOTACAO
    JOIN jogadores ON jogadores.idJogador = votacao.fkJogador GROUP BY votacao.fkJogador ORDER BY Votos LIMIT 9;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    votos
};