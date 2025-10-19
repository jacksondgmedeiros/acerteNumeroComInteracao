let listaDeNumerosAleatorios = [];
let numeroLimite = 4;
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();

exibirMensagemInicial();

function gerarNumeroAleatorio() {

    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosAleatorios.length;
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosAleatorios = [];
    }

    if(listaDeNumerosAleatorios.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosAleatorios.push(numeroEscolhido);
        console.log(listaDeNumerosAleatorios);
        return numeroEscolhido;
    }
}

function exibirNomeNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto.toString();

    // foi adicionado ao código, a fala do código, no html tem o script para o site
    //responsiveVoice.speak(texto, 'Portuguese Female', {rate:1.2});
    // já o código abaixo, é nativo para os navegadores principais
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial() {
    exibirNomeNaTela('h1', 'Jogo do número secreto');
    exibirNomeNaTela('p', 'Escolha um número entre 1 a ' + numeroLimite);
}

function verificarChute() {
    console.log("O botão foi clicado!");
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirNomeNaTela('h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirNomeNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirNomeNaTela('p', 'O número secreto é menor...');
        } else {
            exibirNomeNaTela('p', 'O número secreto é maior...');
        }
        tentativas++;
        limparCampo();
    }

}


function limparCampo() {
    chute = document.querySelector("input");
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}