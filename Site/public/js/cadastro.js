function cadastrar() {
    var select = document.querySelector('#posicao_futebol');
    let optionValue = select.options[select.selectedIndex];

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var usuarioVar = input_usuario.value;
    var emailVar = input_email.value;
    var posicaoVar = optionValue.value;
    var senhaVar = input_senha.value;
    var confirmarSenhaVar = input_confirmar_senha.value;
    var jogadorVotadoVar = jogadores_nominees.value;

    if (usuarioVar == "" || emailVar == "" || posicaoVar == "none" || senhaVar == "" || confirmarSenhaVar == "") {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: `Os campos precisam ser preenchidos!`,
            showConfirmButton: true,
        });
    } else if (
        senhaVar.length < 8
        && senhaVar.indexOf('@') == - 1 || senhaVar.indexOf('_') == - 1 || senhaVar.indexOf('#') == - 1 || senhaVar.indexOf('%') == - 1 || senhaVar.indexOf('!') == - 1 || senhaVar.indexOf('&') == - 1
        && senhaVar.indexOf(0) == - 1 || senhaVar.indexOf(1) == - 1 || senhaVar.indexOf(2) == - 1 || senhaVar.indexOf(3) == - 1 || senhaVar.indexOf(4) == - 1 || senhaVar.indexOf(5) == - 1 || senhaVar.indexOf(6) == - 1 || senhaVar.indexOf(7) == - 1 || senhaVar.indexOf(8) == - 1 || senhaVar.indexOf(9) == - 1
    ) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: `Senha muito fraca!`,
            showConfirmButton: true,
        });
    } else if (senhaVar != confirmarSenhaVar) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: `Senha e confirmar senha estão diferentes!`,
            showConfirmButton: true,
        });
    } else if (emailVar.indexOf('@') == -1 && emailVar.indexOf('.') == -1) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: `E-mail inválido!`,
            showConfirmButton: true,
        });
    } else {
        // Enviando o valor da nova input
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js

                usuarioServer: usuarioVar,
                emailServer: emailVar,
                posicaoServer: posicaoVar,
                senhaServer: senhaVar,
                // confirmarSenhaServer: confirmarSenhaVar,
                jogadorVotadoServer: jogadorVotadoVar
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                // resposta.json().then(res => {
                //     fetch('/voto/cadastrar', {
                //         method: 'POST',
                //         headers: {
                //             "Content-Type": "application/json"
                //         },
                //         body: JSON.stringify({
                //             insertIdServer: res.insertId,
                //         })
                //     })
                // })

                // Validação
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Cadastro realizado com sucesso!`,
                    time: 1500,
                });

                setTimeout(() => {
                    window.location = "login.html";
                }, "2000")

                // limparFormulario();
                // finalizarAguardar();
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: `Erro ao cadastrar-se!`,
                    showConfirmButton: true,
                })
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            // finalizarAguardar();
        });

        return false;
    }
}

// function sumirMensagem() {
//     cardErro.style.display = "none"
// }