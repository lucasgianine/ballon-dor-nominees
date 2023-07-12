var database = require("../database/config")

function entrar(usuario, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", usuario, senha);

    var instrucao = `
        SELECT * FROM usuario WHERE username = '${usuario}' AND senha = '${senha}';
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(usuario, email, posicao, senha, jogadorVotado) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", usuario, email, posicao, senha, jogadorVotado);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (username, email, posicao, senha, fkJogador) VALUES ('${usuario}', '${email}', '${posicao}', '${senha}', '${jogadorVotado}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterPontos() {
    console.log("Acessei: USUARIO MODEL \n\n function obterPontos()");

    var instrucao = `
    SELECT SUM(quiz.pontuacao) as Pontos, usuario.username as Membro FROM quiz JOIN usuario ON usuario.idUsuario = quiz.fkUsuario GROUP BY quiz.fkUsuario ORDER BY Pontos DESC LIMIT 8;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterPlacar(fkUsuario, placar) {
    console.log("Acessei: USUARIO MODEL \n\n function obterPlacar()");

    var instrucao = `
    INSERT INTO quiz (pontuacao, dtJogo, fkUsuario) VALUES ('${placar}', NOW(), '${fkUsuario}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterTotal(fkUsuario) {
    console.log("Acessei: USUARIO MODEL \n\n function obterTotal()");

    var instrucao = `
    SELECT SUM(pontuacao) FROM quiz WHERE fkUsuario = ${fkUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// function update(
//     // usuario, email, posicao, senha, jogadorVotado, idUsuario
//     instrucaoSQL) {
//     console.log("Acessei: USUARIO MODEL \n function update():", 
//     // usuario, email, posicao, senha, jogadorVotado, idUsuario
//     instrucaoSQL);

//     var instrucao = `
//         UPDATE usuario SET ${instrucaoSQL};
//     `;

//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

module.exports = {
    entrar,
    cadastrar,
    obterPontos,
    obterPlacar,
    // update,
    obterTotal
};