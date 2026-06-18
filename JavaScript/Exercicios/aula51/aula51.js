function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá')
const resto = fala('Mundo');
console.log(resto);

// Função dentro de outra dando return

function criaMultiplicador(multiplicador) {
    return function(n) { //return direto da funcao
        return n * multiplicador // ta pegando o multiplicador da outra funcao e returnando a conta aqui
    };
}

const duplica = criaMultiplicador(2); // esse é o valor da multiplacao
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3)); // esse é o valor que vai multiplicar
console.log(triplica(5));
console.log(quadriplica(4));