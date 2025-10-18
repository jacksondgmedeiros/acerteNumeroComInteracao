let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();

exibirMensagemInicial();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function exibirNomeNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto.toString();
}

function exibirMensagemInicial() {
    exibirNomeNaTela('h1', 'Jogo do número secreto');
    exibirNomeNaTela('p', 'Escolha um número entre 1 a 10');
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