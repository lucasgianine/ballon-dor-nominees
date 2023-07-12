function entrar() {

    var usuarioVar = input_usuario.value;
    var senhaVar = input_senha.value;

    if (usuarioVar == "" || senhaVar == "") {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: `Os campos precisam ser preenchidos!`,
            showConfirmButton: true,
        });
        return false;
    }
    else {
        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                usuarioServer: usuarioVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    // Validação
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Olá, ${usuarioVar}!\nBom te ver de volta, craque! :D`,
                        time: 1500
                    });

                    sessionStorage.USUARIO = json.username;
                    sessionStorage.ID_USUARIO = json.idUsuario;
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.POSICAO = json.posicao;
                    sessionStorage.FK_JOGADOR = json.fkJogador;

                    setTimeout(function () {
                        window.location = "private/painel.html";
                    }, 3000); // apenas para exibir o loading

                });

            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: `Usuário e/ou senha incorreto!`,
                    showConfirmButton: true,
                });

                resposta.text().then(texto => {
                    console.error(texto);
                    // finalizarAguardar(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
    }
}