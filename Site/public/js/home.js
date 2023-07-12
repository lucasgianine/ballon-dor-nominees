Chart.register(ChartDataLabels); // Registrando o plugin DataLabels

function obterOsMaiores() {
    console.log()
    fetch(`/medidas/obterOsMaiores`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarMaiores(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

obterOsMaiores();

function plotarMaiores(resposta) {
    console.log('Iniciando plotagem do gráfico dos maiores...');

    let labels = [];

    let dados = {
        labels: labels,
        datasets: [{
            label: 'Os maiores vencedores',
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
        labels.push(registro.JogadorFut);
        dados.datasets[0].data.push(registro.BallonDor);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Jogadores:');
    console.log(labels);
    console.log('Votos:');
    console.log(dados.datasets);
    console.log('----------------------------------------------');

    const config_maiores = {
        type: 'bar',
        data: dados,
        options: {}
    };

    const chart_ranking = new Chart(
        document.getElementById('chart_ranking'),
        config_maiores
    );
}

// function obterOsAposentados() {
//     console.log()
//     fetch(`/medidas/obterOsAposentados`, { cache: 'no-store' }).then(function (response) {
//         if (response.ok) {
//             response.json().then(function (resposta) {
//                 console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
//                 resposta.reverse();

//                 plotarAposentados(resposta);
//             });
//         } else {
//             console.error('Nenhum dado encontrado ou erro na API');
//         }
//     })
//         .catch(function (error) {
//             console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
//         });
// }

// function plotarAposentados(resposta) {
//     console.log('Iniciando plotagem do gráfico dos aposentados...');

//     let labels = [];

//     let dados = {
//         labels: labels,
//         datasets: [{
//             label: 'Os maiores vencedores',
//             data: [],
//             fill: false,
//             backgroundColor: ['#EBD937', '#FFF7D4', '#FFD95A', '#FFD93D', '#F2CD5C', '#FFFBAC', '#FFFBAC', '#FFE15D'],
//             borderColor: '#4C3D3D',
//             borderWidth: 1,
//             tension: 0.3 // Curvatura do gráfico
//         }]
//     };

//     console.log('----------------------------------------------')
//     console.log('Estes dados foram recebidos pela funcao "obterVotos" e passados para "plotarGrafico":')
//     console.log(resposta)

//     for (i = 0; i < resposta.length; i++) {
//         var registro = resposta[i];
//         labels.push(registro.NomeJogador);
//         dados.datasets[0].data.push(registro.BallonDor);
//     }

//     console.log('----------------------------------------------')
//     console.log('O gráfico será plotado com os respectivos valores:')
//     console.log('Jogadores:');
//     console.log(labels);
//     console.log('Votos:');
//     console.log(dados.datasets);
//     console.log('----------------------------------------------');

//     const config_aposentados = {
//         type: 'bar',
//         data: dados,
//         options: {}
//     };

//     const chart_aposentados = new Chart(
//         document.getElementById('chart_aposentados'),
//         config_aposentados
//     );
// }

// function obterOsBrasileiros() {
//     console.log()
//     fetch(`/medidas/obterOsBrasileiros`, { cache: 'no-store' }).then(function (response) {
//         if (response.ok) {
//             response.json().then(function (resposta) {
//                 console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
//                 resposta.reverse();

//                 plotarBrasileiros(resposta);
//             });
//         } else {
//             console.error('Nenhum dado encontrado ou erro na API');
//         }
//     })
//         .catch(function (error) {
//             console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
//         });
// }

// function plotarBrasileiros(resposta) {
//     console.log('Iniciando plotagem do gráfico dos brasileiros...');

//     let labels = [];

//     let dados = {
//         labels: labels,
//         datasets: [{
//             label: 'Os maiores',
//             data: [],
//             fill: false,
//             backgroundColor: ['#EBD937', '#FFF7D4', '#FFD95A', '#FFD93D', '#F2CD5C', '#FFFBAC', '#FFFBAC', '#FFE15D'],
//             borderColor: '#4C3D3D',
//             borderWidth: 1,
//             tension: 0.3 // Curvatura do gráfico
//         }]
//     };

//     console.log('----------------------------------------------')
//     console.log('Estes dados foram recebidos pela funcao "obterVotos" e passados para "plotarGrafico":')
//     console.log(resposta)

//     for (i = 0; i < resposta.length; i++) {
//         var registro = resposta[i];
//         labels.push(registro.JogadorNome);
//         dados.datasets[0].data.push(registro.BallonDor);
//     }

//     console.log('----------------------------------------------')
//     console.log('O gráfico será plotado com os respectivos valores:')
//     console.log('Jogadores:');
//     console.log(labels);
//     console.log('Votos:');
//     console.log(dados.datasets);
//     console.log('----------------------------------------------');

//     const config_br = {
//         type: 'bar',
//         data: dados,
//         options: {}
//     };

//     const chart_brasileiros = new Chart(
//         document.getElementById('chart_brasileiros'),
//         config_br
//     );
// }

function goQuiz() {
    if (sessionStorage.USUARIO != undefined) {
        window.location.href = "private/painel.html";
    } else {
        window.location.href = "login.html";
    }
}