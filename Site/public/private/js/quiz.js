// Dados que serão alterados:
// Let: definido apenas para esse escopo específico
let instrucoes = document.querySelector('#instrucoes')
// let titulo = document.querySelector('h1'); 
let aviso = document.querySelector('#aviso');
let pontos = 0;
let placar = 0;

let numQuestao = document.querySelector('#numQuestao'); //  "Seletor de consulta", Essa função só retorna o primeiro elemento encontrado que tem a mesma configuração do seletor passado como parâmetro.
let pergunta = document.querySelector('#pergunta');

// Alternativas da questão
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');
let d = document.querySelector('#d');

let articleQuestoes = document.querySelector('.questoes');

let alternativas = document.querySelector('#alternativas');

var q0 = {
    numQuestao: 1,
    pergunta: "",
    alternativaA: "",
    alternativaB: "",
    alternativaC: "",
    alternativaD: "",
    correta: "0"
} // Essa questão 0 será importante na estrutura do array, que sempre puxa o primeiro valor sendo 0, então nesse caso utilizaremos o q0 para ser melhor construído os atributos lá em baixo

var q1 = {
    numQuestao: 1,
    pergunta: "Quantas Bolas de Ouro o maior vencedor contém?",
    alternativaA: "5",
    alternativaB: "6",
    alternativaC: "7",
    alternativaD: "8",
    correta: "7"
}

var q2 = {
    numQuestao: 2,
    pergunta: "Quem o último brasileiro a vencer a Bola de Ouro?",
    alternativaA: "Ronaldo",
    alternativaB: "Ronaldinho",
    alternativaC: "Neymar Jr.",
    alternativaD: "Kaká",
    correta: "Kaká"
}

var q3 = {
    numQuestao: 3,
    pergunta: "Qual nacionalidade mais contém Bolas de Ouro?",
    alternativaA: "Argentina",
    alternativaB: "Portugal",
    alternativaC: "Brasil",
    alternativaD: "Espanha",
    correta: "Brasil"
}

var q4 = {
    numQuestao: 4,
    pergunta: "Quem venceu a Bola de Ouro de 18/19?",
    alternativaA: "Cristiano Ronaldo",
    alternativaB: "Messi",
    alternativaC: "Modric",
    alternativaD: "Mbappé",
    correta: "Modric"
}

var q5 = {
    numQuestao: 5,
    pergunta: "Quantos gols Messi marcou em um ano?",
    alternativaA: "90",
    alternativaB: "91",
    alternativaC: "89",
    alternativaD: "92",
    correta: "91"
}

var q6 = {
    numQuestao: 6,
    pergunta: "Quem é o brasileiro com mais gols na Champions League?",
    alternativaA: "Kaká",
    alternativaB: "Neymar Jr.",
    alternativaC: "Ronaldo",
    alternativaD: "Ronaldinho",
    correta: "Neymar Jr."
}

var q7 = {
    numQuestao: 7,
    pergunta: "Qual a maior vencedora da Bola de Ouro feminina?",
    alternativaA: "Marta",
    alternativaB: "Alexia Putellas",
    alternativaC: "Megan Rapione",
    alternativaD: "Birgit Prinz",
    correta: "Marta"
}

var q8 = {
    numQuestao: 8,
    pergunta: "Quando foi a criação da Bola de Ouro?",
    alternativaA: "1955",
    alternativaB: "1957",
    alternativaC: "1967",
    alternativaD: "1956",
    correta: "1956"
}

var q9 = {
    numQuestao: 9,
    pergunta: "Quantas Bolas de Ouro Pelé teria?",
    alternativaA: "8",
    alternativaB: "7",
    alternativaC: "6",
    alternativaD: "9",
    correta: "7"
}

var q10 = {
    numQuestao: 10,
    pergunta: "Qual é o campeonato mais disputado?",
    alternativaA: "Valendo Refri",
    alternativaB: "Liberadores da América",
    alternativaC: "UEFA Champions League",
    alternativaD: "Mundial de Clubes",
    correta: "Valendo Refri"
}

var q11 = {
    numQuestao: 10,
    pergunta: "Quem foi o primeiro vencedor da Bola de Ouro?",
    alternativaA: "Di Stéfano",
    alternativaB: "Luis Suarez",
    alternativaC: "Cruyff",
    alternativaD: "Pelé",
    correta: "Di Stéfano"
}

// Criando uma lista contendo as questões
var questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11];

let numero = document.querySelector('#numero');
let total = document.querySelector('#total');

numero.textContent = q1.numQuestao; // TextContent representa o conteúdo de texto de um nó e dos seus descendentes, que será retornado para nós

let totalDeQuestoes = (questoes.length) - 1;
console.log('Total de questões ' + totalDeQuestoes);
total.textContent = totalDeQuestoes;

// Montando a primeira questão para início do quiz
numQuestao.textContent = q1.numQuestao;
pergunta.textContent = q1.pergunta;
a.textContent = q1.alternativaA;
b.textContent = q1.alternativaB;
c.textContent = q1.alternativaC;
d.textContent = q1.alternativaD;

a.setAttribute('value', '1A'); // Estou dando um atributo para a tag que contém ID "a"
b.setAttribute('value', '1B');
c.setAttribute('value', '1C');
d.setAttribute('value', '1D');

function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao;
    numQuestao.textContent = questoes[nQuestao].numQuestao;
    pergunta.textContent = questoes[nQuestao].pergunta;
    a.textContent = questoes[nQuestao].alternativaA;
    b.textContent = questoes[nQuestao].alternativaB;
    c.textContent = questoes[nQuestao].alternativaC;
    d.textContent = questoes[nQuestao].alternativaD;

    a.setAttribute('value', nQuestao + 'A');
    b.setAttribute('value', nQuestao + 'B');
    c.setAttribute('value', nQuestao + 'C');
    d.setAttribute('value', nQuestao + 'D');
}

function bloquearAlternativas() {
    a.classList.add('bloqueado');
    b.classList.add('bloqueado');
    c.classList.add('bloqueado');
    d.classList.add('bloqueado');
}

function bloquearAlternativas() {
    a.classList.remove('bloqueado');
    b.classList.remove('bloqueado');
    c.classList.remove('bloqueado');
    d.classList.remove('bloqueado');
}

function verificarAcerto(nQuestao, resposta) {
    let numeroDaQuestao = nQuestao.value;
    console.log(numeroDaQuestao);

    let respostaEscolhida = resposta.textContent;
    console.log(respostaEscolhida);

    let certa = questoes[numeroDaQuestao].correta;
    console.log(certa);

    if (respostaEscolhida == certa) {
        pontos += 10;
    } else {
        pontos -= 5;
    }

    // Atualizando placar
    placar = pontos;
    instrucoes.textContent = "Pontuação " + placar;

    // Bloquenado a escolha de opções
    bloquearAlternativas();

    setTimeout(function () {
        proxima = numeroDaQuestao + 1;

        // Verificando se estou no final das questões
        if (proxima > totalDeQuestoes) {
            fimDoJogo();
        } else {
            proximaQuestao(proxima);
        }
    }, 250);

    desbloquearAlternativas();
}

function fimDoJogo() {
    var placarVar = placar;
    var idUsuarioVar = sessionStorage.ID_USUARIO;
    var usuario = sessionStorage.USUARIO;

    instrucoes.textContent = "Fim de Jogo!";
    numQuestao.textContent = "";

    var finalizado = "";
    if (placar >= 0 && placar < 10) {
        finalizado = `Total de ${pontos} pontos de ${usuario}. Abaixo de 10, hein! Mais sorte na próxima.`;
    } else if (placar <= 30) {
        finalizado = `Total de ${pontos} pontos de ${usuario}. Bom começo, mas dá para melhorar.`;
    } else if (placar <= 60) {
        finalizado = `Total de ${pontos} pontos de ${usuario}. Tava tãaaao próximo da média.`;
    } else if (placar <= 90) {
        finalizado = `Total de ${pontos} pontos de ${usuario}. Totalmente acima da média.`;
    } else if (placar < 110) {
        finalizado = `Total de ${pontos} pontos de ${usuario}. Foi quaaaase!`;
    }
    else {
        finalizado = `Total de ${pontos} pontos de ${usuario}. Gabaritou, lenda!`;
    }

    aviso.textContent = finalizado;

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0');
    b.setAttribute('value', '0');
    c.setAttribute('value', '0');
    d.setAttribute('value', '0');

    // Ocultando o article da questão
    articleQuestoes.style.display = 'none';

    if (placarVar == undefined && idUsuarioVar == undefined) {
        console.log("erro!")
    } else {
        fetch("/usuarios/obterPlacar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                placarServer: placarVar,
                fkUsuarioServer: idUsuarioVar,
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                console.log('Vitória! ' + pontos);

                setTimeout(function () {
                    window.location.href = "painel.html";
                }, 3500);
            } else {
                console.log('Erro ao enviar dados');
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        return false;
    }
}