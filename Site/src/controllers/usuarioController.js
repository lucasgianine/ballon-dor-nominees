var usuarioModel = require("../models/usuarioModel");

// var sessoes = [];

function entrar(req, res) {
    var usuario = req.body.usuarioServer;
    var senha = req.body.senhaServer;

    if (usuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.entrar(usuario, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Usuário e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var usuario = req.body.usuarioServer;
    var email = req.body.emailServer;
    var posicao = req.body.posicaoServer;
    var senha = req.body.senhaServer;
    var jogadorVotado = req.body.jogadorVotadoServer;

    // Faça as validações dos valores
    if (posicao == undefined) {
        res.status(400).send("Sua posição está undefined!");
    } else if (usuario == undefined) {
        res.status(400).send("Seu username está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        console.log("passei por aqui")

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(usuario, email, posicao, senha, jogadorVotado)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function obterPontos(req, res) {
    usuarioModel.obterPontos()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function obterPlacar(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var placar = req.body.placarServer;

    if (fkUsuario == undefined) {
        res.status(400).send("fkUsuario está undefined!");
    } else if (placar == undefined) {
        res.status(400).send("Placar está undefined!");
    } else {

        console.log('Obtive Placar')
        usuarioModel.obterPlacar(fkUsuario, placar)
            .then(function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!")
                }
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function obterTotal(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;

    if (fkUsuario == undefined) {
        res.status(400).send("fkUsuario está undefined!");
    } else {

        console.log('Obtive o total')
        usuarioModel.obterPlacar(fkUsuario)
            .then(function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!")
                }
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

// function update(req, res) {
//     // var usuario = req.body.usuarioServer;
//     // var email = req.body.emailServer;
//     // var posicao = req.body.posicaoServer;
//     // var jogadorVotado = req.body.jogadorVotadoServer;
//     // var senha = req.body.senhaServer;
//     // var idUsuario = req.body.idServer;
//     var instrucaoSQL = req.body.instrucaoServer;

//     // if (posicao == undefined) {
//     //     res.status(400).send("Sua posição está undefined!");
//     // } else if (usuario == undefined) {
//     //     res.status(400).send("Seu username está undefined!");
//     // } else if (email == undefined) {
//     //     res.status(400).send("Seu email está undefined!");
//     // } else if (senha == undefined) {
//     //     res.status(400).send("Sua senha está undefined!");
//     // } else if (jogadorVotado == undefined) {
//     //     res.status(400).send("Seu voto está undefined!");
//     // } else if (idUsuario == undefined) {
//     //     res.status(400).send("Seu ID está undefined!");}
//     if (instrucaoSQL) {
//         res.status(400).send("Instrução undefined!");
//     } else {
//         console.log('Estou na função "update" em usuarioController.js!');

//         usuarioModel.update(
//             // usuario, email, posicao, senha, jogadorVotado, idUsuario
//             instrucaoSQL)
//             .then(
//                 function (resultado) {
//                     res.json(resultado);
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log(
//                         "\nHouve um erro ao realizar o update! Erro: ",
//                         erro.sqlMessage
//                     );
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }
// }

module.exports = {
    entrar,
    cadastrar,
    obterPontos,
    obterPlacar,
    // update,
    obterTotal
}