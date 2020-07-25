
var pontos = 0

function criarBalao() {
    var balao = document.createElement('div');
    balao.setAttribute("class",'balao');

    var x = Math.floor(Math.random()*window.innerWidth-50);
    var y = Math.floor(Math.random()*(window.innerHeight-50)) + 40 ;

    balao.setAttribute('style','left:'+x+'px; top:'+y+'px');
    balao.setAttribute('onclick','estourarBalao(this)');

    document.body.appendChild(balao)
}

function estourarBalao(objeto) {
    document.body.removeChild(objeto)

    pontos++;
    var score = document.getElementById('score')
    score.innerHTML = `Balões estourados: ${pontos}`

    document.body.appendChild(score)
}

function gerarAutomaticamenteBalao() {
    setInterval(criarBalao, 500)
}

function botaoInicial() {
    var botao = document.createElement('button');
    botao.setAttribute('class','botaodeIniciar');
    botao.setAttribute('onclick','iniciarJogo(this)');
    botao.innerHTML = "INICIAR";

    document.body.appendChild(botao);
}


function iniciarJogo(objeto) {
    document.body.removeChild(objeto)
    gerarAutomaticamenteBalao()
    
}

botaoInicial()
