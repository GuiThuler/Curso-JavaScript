// IIFE -> Immedately invoked function expression

// O IIFE proteje do escopo global

(function(idade, peso, altura) {

    const nome = 'Guilherme';
    function criaSobrenome(sobrenome) {
        return nome + ' ' + sobrenome;
    }

    function mostraNome() {
        console.log(criaSobrenome('Thuler'));
    }

    mostraNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);

// Quando esta parenteses () ele se torna uma funcao IIFE

const nome = 'Luiz';
const sobrenome = 'Otavio';

console.log(nome, sobrenome);