/* Esse arquivo está comentado, pois está em fase de testes o método PUT
Em breve ele será melhorado e ficará disponível */

// function alterar() {
//     var idUsuarioVar = sessionStorage.ID_USUARIO;
//     var usernameVar = input_usuario.value;
//     var emailVar = input_email.value;
//     var senhaVar = input_senha_nova.value;
//     var posicaoVar = posicao_futebol.value
//     var votoVar = jogadores_nominees.value;

//     console.log("ID: " + idUsuarioVar);
//     console.log("Nome: " + usernameVar);
//     console.log("E-mail: " + emailVar);
//     console.log("Posição: " + posicaoVar);
//     console.log("Voto: " + votoVar);

//     if (usernameVar == "" && emailVar == "" && senhaVar == "" && posicaoVar == "none" && votoVar == "none") {
//         Swal.fire({
//             position: 'center',
//             icon: 'warning',
//             title: `Não há o que atualizar!`,
//             showConfirmButton: true
//         });

//         return;
//     } else {

//         var instrucaoVar = "";

//         if (usernameVar != "") {
//             instrucaoVar += `username = '${usernameVar}'`;

//             if (emailVar != "" || senhaVar != "" || posicaoVar != "none" || votoVar != "none") {
//                 instrucaoVar += " AND ";
//             } else {
//                 instrucaoVar += ` WHERE idUsuario = ${idUsuarioVar}`;
//             };
//         }
//         if (emailVar != "") {
//             instrucaoVar += `email = '${emailVar}'`;

//             if (senhaVar != "" || posicaoVar != "none" || votoVar != "none") {
//                 instrucaoVar += " AND ";
//             } else {
//                 instrucaoVar += ` WHERE idUsuario = ${idUsuarioVar}`;
//             };
//         }
//         if (senhaVar != "") {
//             instrucaoVar += `senha = '${senhaVar}'`;

//             if (posicaoVar != "none" || votoVar != "none") {
//                 instrucaoVar += " AND ";
//             } else {
//                 instrucaoVar += ` WHERE idUsuario = ${idUsuarioVar}`;
//             };
//         }
//         if (posicaoVar != "none") {
//             instrucaoVar += `posicao = '${posicaoVar}'`;

//             if (votoVar != "none") {
//                 instrucaoVar += " AND ";
//             } else {
//                 instrucaoVar += ` WHERE idUsuario = ${idUsuarioVar}`;
//             };
//         }
//         if (votoVar != "none") {
//             instrucaoVar += `fkJogador = ${votoVar} WHERE idUsuario = ${idUsuarioVar}`;
//         }

//         console.log("UPDATE usuario SET " + instrucaoVar + ";");

//         fetch("/usuarios/update", {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 instrucaoServer: instrucaoVar
//             })
//         }).then(function (resposta) {

//             console.log("resposta: ", resposta);

//             if (resposta.ok) {
//                 // Validação
//                 Swal.fire({
//                     position: 'center',
//                     icon: 'success',
//                     title: `Seus dados foram atualizados com sucesso!`,
//                     time: 1500,
//                 });

//                 setTimeout(() => {
//                     window.location = "painel.html";
//                 }, 2000);

//             } else {
//                 Swal.fire({
//                     position: 'center',
//                     icon: 'error',
//                     title: `Erro ao tentar atualizar!`,
//                     showConfirmButton: true,
//                 })
//             }
//         }).catch(function (resposta) {
//             console.log(`#ERRO: ${resposta}`);
//         });

//         return false;
//     }
// }

// function cancelar() {
//     window.location.href = "painel.html";
// }