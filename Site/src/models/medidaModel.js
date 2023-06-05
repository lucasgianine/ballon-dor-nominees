var database = require("../database/config");

function obterOsMaiores() {

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT apelido as JogadorFut, bolasDeOuro as BallonDor FROM jogadores WHERE bolasDeOuro > 0 ORDER BY bolasDeOuro DESC LIMIT 9;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterOsAposentados() {

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT apelido as NomeJogador, bolasDeOuro as BallonDor FROM jogadores WHERE bolasDeOuro > 0 AND carreira = 'APOS' ORDER BY bolasDeOuro DESC LIMIT 9;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterOsBrasileiros() {

    instrucaoSql = '';

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT apelido as JogadorNome, bolasDeOuro as BallonDor FROM jogadores WHERE bolasDeOuro > 0 AND nacionalidade = 'BRA' ORDER BY bolasDeOuro DESC LIMIT 9;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterOsMaiores,
    obterOsAposentados,
    obterOsBrasileiros
}
