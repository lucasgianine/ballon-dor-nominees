function irPainel() {
    window.parent.location.href = "../private/painel.html"
}
function irVotos() {
    window.parent.location.href = "../private/voto.html"
}
function irBattle() {
    window.parent.location.href = "../private/legendBattle.html"
}
function irQuiz() {
    window.parent.location.href = "../private/quiz.html"
}
function irCarreira() {
    window.parent.location.href = "../private/modoCarreira.html"
}

function sair() {
    sessionStorage.clear();
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Deslogado(a) com sucesso!`,
        time: 1500
    });
    setTimeout(function () {
        window.location.href = "../index.html";
    }, 1500);
}