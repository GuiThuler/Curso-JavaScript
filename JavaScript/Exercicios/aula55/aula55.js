// IIFE -> Immedately invoked function expression

// O IIFE proteje do escopo global

(function() {

    const nome = 'Guilherme';
    function criaSobrenome(sobrenome) {
        return nome + ' ' + sobrenome;
    }

    function mostraNome() {
        console.log(criaSobrenome('Thuler'));
    }

    mostraNome();
})();

// Quando esta parenteses () ele se torna uma funcao IIFE

const nome = 'Luiz';
const sobrenome = 'Otavio';

console.log(nome, sobrenome);