const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Otavio' // ela esta no escopo da funçao
    falaNome();
}

usaFalaNome();