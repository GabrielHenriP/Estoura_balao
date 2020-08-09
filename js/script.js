
var pontos = 0

let dificuldadeEscolhida

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
    if( dificuldadeEscolhida[0].checked ){
        setInterval(criarBalao, 700)
    } else if( dificuldadeEscolhida[1].checked ) {
        setInterval(criarBalao, 400)
    } else  if( dificuldadeEscolhida[2].checked ){
        setInterval(criarBalao,250)
    }
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

function escolherDificuldade(){
    
    let inputs = document.querySelectorAll('input[name=dificuldade]')
    dificuldadeEscolhida = inputs  
    
    var item = document.getElementById("primeira-tela");

    if( dificuldadeEscolhida[0].checked || dificuldadeEscolhida[1].checked || dificuldadeEscolhida[2].checked ){
            item.parentNode.removeChild(item);
    } else {
            alert('Por favor, escolha uma dificuldade');
            console.log(dificuldadeEscolhida)
    }
        

}

botaoInicial()


