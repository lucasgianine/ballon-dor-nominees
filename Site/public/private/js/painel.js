b_usuario.innerHTML = "@" + sessionStorage.USUARIO;
b_email.innerHTML = sessionStorage.EMAIL_USUARIO;
b_posicao.innerHTML = sessionStorage.POSICAO;

var fkJogador = sessionStorage.FK_JOGADOR;

if (fkJogador == '1') {
    img_jogador.src = "../assets/img/jogador1.png";
} else if (fkJogador == '2') {
    img_jogador.src = "../assets/img/jogador2.PNG";
} else if (fkJogador == '3') {
    img_jogador.src = "../assets/img/jogador3.png";
} else if (fkJogador == '4') {
    img_jogador.src = "../assets/img/jogador4.png";
} else if (fkJogador == '5') {
    img_jogador.src = "../assets/img/jogador5.png";
} else if (fkJogador == '6') {
    img_jogador.src = "../assets/img/jogador6.png";
} else if (fkJogador == '7') {
    img_jogador.src = "../assets/img/jogador7.png";
} else if (fkJogador == '8') {
    img_jogador.src = "../assets/img/jogador8.png";
} else if (fkJogador == '9') {
    img_jogador.src = "../assets/img/jogador9.png";
} else if (fkJogador == '10') {
    img_jogador.src = "../assets/img/jogador10.png";
} else if (fkJogador == '11') {
    img_jogador.src = "../assets/img/jogador11.png";
}

function obterVotos() {
    console.log()
    fetch(`/voto/votos`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGrafico(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}
obterVotos();


Chart.register(ChartDataLabels); // Registrando o plugin DataLabels

function plotarGrafico(resposta) {
    console.log('Iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [{
            label: 'Os mais votados',
            data: [],
            fill: false,
            backgroundColor: ['#EBD937', '#FFF7D4', '#FFD95A', '#FFD93D', '#F2CD5C', '#FFFBAC', '#FFFBAC', '#FFE15D'],
            borderColor: '#4C3D3D',
            borderWidth: 1,
            tension: 0.3 // Curvatura do gráfico
        }]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterVotos" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(registro.Jogador);
        dados.datasets[0].data.push(registro.Votos);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Jogadores:');
    console.log(labels);
    console.log('Votos:');
    console.log(dados.datasets);
    console.log('----------------------------------------------');

    // Criando estrutura para plotar gráfico - config
    const config_votos = {
        type: 'bar',
        data: dados,
        options: {
            layout: {
                padding: 5
            },
            plugins: {
                legend: {
                    display: true
                },
            }
        }
    };

    // Adicionando gráfico criado em div na tela
    const chart_votos = new Chart(
        document.getElementById('chart_votos'),
        config_votos
    );
}

function obterPontos() {
    console.log()
    fetch(`/usuarios/obterPontos`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                obterPontuacao(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}
obterPontos();

function obterPontuacao(resposta) {
    console.log('Iniciando plotagem do gráfico de pontuação...');

    let users = [];

    let pontuacao = {
        labels: users,
        datasets: [{
            label: 'Pontuação',
            data: [],
            fill: false,
            backgroundColor: ['#EBD937', '#FFF7D4', '#FFD95A', '#FFD93D', '#F2CD5C', '#FFFBAC', '#FFFBAC', '#FFE15D'],
            borderColor: '#4C3D3D',
            borderWidth: 1,
            tension: 0.3 // Curvatura do gráfico
        }]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterVotos" e passados para "plotarGrafico":')
    console.log(resposta)

    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        users.push(registro.Membro);
        pontuacao.datasets[0].data.push(registro.Pontos);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Usuários:');
    console.log(users);
    console.log('Pontuação:')
    console.log(pontuacao.datasets);
    console.log('----------------------------------------------');

    const config_quiz = {
        type: 'bar',
        data: pontuacao,
        options: {
            layout: {
                padding: 5
            },
            plugins: {
                legend: {
                    display: true
                },
            }
        }
    };

    const chart_quiz = new Chart(
        document.getElementById('chart_quiz'),
        config_quiz
    );
}