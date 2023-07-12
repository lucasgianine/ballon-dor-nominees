var usuario = sessionStorage.USUARIO;
// var posicao = sessionStorage.POSICAO;

// nome_craque.innerHTML = usuario;

var timesBrasil = [
    // Brasil - Campeonato Brasileiro Seria A & B
    'Palmeiras',
    'Santos FC',
    'Corinthians',
    'São Paulo FC',
    'Vasco da Gama',
    'Fluminense',
    'CR Flamengo',
    'Fortaleza',
    'Ceará SC',
    'RedBull Bragantino',
    'Grêmio',
    'Bahia',
    'Internacional',
    'Goiás',
    'Botafogo',
    'Cruzeiro',
    'Coritiba',
    'Cuiabá',
    'Athlético-PR',
    'Atlético-MG',
    'América-MG',
    'Ponte Preta',
    'EC Vitória',
    'Sport Recife',
    'Ituano',
    'Chapecoense',
    'Taubaté FC',
    'Guarani'
];

var timesEuropa = [
    // Alemanha - Bundesliga
    'RedBull Leipzig',
    'Bayern de Munique',
    'Union Berlin',
    'Borussia Dortmund',
    'Bayer Leverkusen',
    'Eintracht Frankfurt',
    'Hoffenheim',
    // Espanha - La Liga
    'Atlético de Madrid',
    'Real Madrid',
    'Barcelona',
    'Sevilla',
    'Real Sociedad',
    'Real Betis',
    'Villareal',
    // França - Ligue 1
    'Paris Saint-Germain',
    'Mônaco',
    'Olympique Lyonnais',
    'Olympique de Marseille',
    'LOSC Lille',
    // Inglaterra - Premier League
    'Manchester United',
    'Manchester City',
    'Newcastle United',
    'Liverpool FC',
    'Arsenal',
    'Tottenham Spurs',
    'Chelsea',
    'West Ham',
    'Wolverhampton',
    'Aston Villa',
    // Holanda - Eredivise
    'Ajax',
    'PSV',
    'Feyenoord',
    // Italia - Seria A TIM
    'Juventus',
    'AC Milan',
    'Internazionale de Milano',
    'AC Roma',
    'Napoli',
    'Atalanta',
    'Fiorentina',
    // Portugal - Liga Portugal Bwin
    'Benfica',
    'Porto FC',
    'Sporting FC',
    // Turquia - SüperLig
    'Galatasaray',
    'Besiktas'
];

var timesDiversos = [
    // Brasil
    'Palmeiras',
    'Santos FC',
    'Corinthians',
    'São Paulo FC',
    'Vasco da Gama',
    'Guarani',
    'Fluminense',
    'CR Flamengo',
    'Fortaleza',
    'Ceará SC',
    'RedBull Bragantino',
    'Grêmio',
    'Bahia',
    'Internacional',
    'Goiás',
    'Botafogo',
    'Cruzeiro',
    'Coritiba',
    'Cuiabá',
    'Athlético-PR',
    'Atlético-MG',
    'América-MG',
    'Ponte Preta',
    'EC Vitória',
    'Sport Recife',
    'Ituano',
    'Chapecoense',
    'Taubaté FC',
    // Estados Unidos - MLS
    'Inter Miami',
    'NewYork RedBull',
    'Orlando City',
    'LA Galaxy',
    'DC United',
    'LAFC',
    'Chicago Fire',
    'Atlanta United',
    'New York City FC',
    // Argentina
    'Lanús',
    'Independiente',
    'Boca Júniors',
    'Racing',
    'River Plate',
    "Newell's Old Boys",
    'Talleres',
    'Estudiantes',
    // México
    'Guadalajara',
    'Tigres',
    'Club América',
    'Monterrey',
    // Arábia
    'Al-Nassr',
    'Al-Hilal',
    'Al-Ittihad',
    'Al-Fateh',
    'Al-Shabab',
    // China - Superliga Chinesa
    'Shanghai Port',
    'Zhejiang FC',
    'Shanghai Shenhua FC',
    'Changchun Yatai FC',
    // Europa
    'AC Roma',
    'Napoli',
    'Atalanta',
    'Fiorentina',
    'Real Sociedad',
    'Real Betis',
    'Villareal',
    'Union Berlin',
    'Borussia Dortmund',
    'Bayer Leverkusen',
    'Eintracht Frankfurt',
    'Hoffenheim',
    'Bangu',
    'Real Madrid',
    'Barcelona',
    'Newcastle United',
    'Liverpool FC',
    'Arsenal',
    'Tottenham Spurs',
    'Ajax',
    'PSV',
    'Feyenoord',
    'Paris Saint-Germain',
    'Mônaco',
    'Olympique Lyonnais',
    'Olympique de Marseille',
    'LOSC Lille',
    'Besiktas',
    'Galatasaray'
];

function sortear() {
    // Sorteando os times dos jogadores
    var base = parseInt(Math.random() * (timesBrasil.length - 1)); // Times Brasileiros
    var profissional = parseInt(Math.random() * (timesBrasil.length - 1)); // Times Brasileiros
    var europa = parseInt(Math.random() * (timesEuropa.length - 1)); // Times europeus
    var idolo = parseInt(Math.random() * (timesEuropa.length - 1)); // Times diversos
    var aposentadoria = parseInt(Math.random() * (timesEuropa.length - 1)); // Times diversos

    var jogos = parseInt(Math.random() * (801) + 100);
    var gols = parseInt(Math.random() * 801);
    var assist = parseInt(Math.random() * 701);
    var titulos = parseInt(Math.random() * 40);
    var bola_de_ouro = parseInt(Math.random() * 9);

    div_bolasDeOuro.innerHTML = "";

    for (var i = 1; i <= bola_de_ouro; i++) {
        div_bolasDeOuro.innerHTML += `<img src="https://cdn-icons-png.flaticon.com/512/250/250618.png" style="width: 50px;">`;
        console.log(`${i} e` + bola_de_ouro)
    }

    div_timeBase.innerHTML = `<b>${timesBrasil[base]}</b>`
    div_timeProfissional.innerHTML = `<b>${timesBrasil[profissional]}</b>`;
    div_timeEuropa.innerHTML = `<b>${timesEuropa[europa]}</b>`;
    div_timeIdolo.innerHTML = `<b>${timesDiversos[idolo]}</b>`;
    div_timeAposentadoria.innerHTML = `<b>${timesDiversos[aposentadoria]}</b>`;

    div_jogos.innerHTML = `<b>${jogos}</b>`;
    div_gols.innerHTML = `<b>${gols}</b>`;
    div_assistencias.innerHTML = `<b>${assist}</b>`;
    div_titulos.innerHTML = `<b>${titulos}</b>`;

    if (bola_de_ouro > 7 || (gols > 780 && assist > 299)) {
        div_mensagem.innerHTML = `${usuario}, você e o Pelé são uma LENDA!<br>`;
    } else if (bola_de_ouro > 4 && bola_de_ouro <= 7 && gols > 499 && assist > 149) {
        div_mensagem.innerHTML = `${usuario}, bem vindo a mesa dos maiores!<br>`;
    } else if (bola_de_ouro > 4 && bola_de_ouro <= 7 && gols < 499 && assist < 149) {
        div_mensagem.innerHTML = `${usuario}, muitos se orgulharão em tê-lo visto jogar!<br>`;
    } else if (bola_de_ouro > 0 || (gols > 199 && assist > 49)) {
        div_mensagem.innerHTML = `${usuario} foi diferenciado(a)<br>`;
    } else if (bola_de_ouro == 0 && gols > 399) {
        div_mensagem.innerHTML = `${usuario} teve uma carreira subestimada<br>`;
    } else {
        div_mensagem.innerHTML = `${usuario}, bela carreira!<br>`;
    }

    // if (gols < 300 && assist > 299) {
    //     div_mensagem.innerHTML += `O/A melhor ${posicao}, garçom de qualidade!`;
    // } else if (gols > 300) {
    //     div_mensagem.innerHTML += `Você é imã de gol, o/a melhor ${posicao}!`;
    // } else if (gols < 60 && assist < 40) {
    //     div_mensagem.innerHTML += `Participações em gols nem sempre é tudo, você foi mágico(a).`;
    // } else {
    //     div_mensagem.innerHTML += `Sabe bem ser ${posicao}.`;
    // }
}