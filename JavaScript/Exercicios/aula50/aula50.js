function funcao() { // isso é parametro
    console.log(arguments[2]) // arguments todos os dados dos argumentos enviados.

    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total)
};
funcao(1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10) // isso é argumento

console.log('###################');

function somar(a , b = 2, c = 10) { // esta colocando um valor padrao no B
    console.log(a + b + c);
};
somar(3 , undefined ,  5) // o undefined assume o valor de B nesse caso.

console.log('###################');

function desestruturacao ({nome, sobrenome, idade}) { // nos parametros ja faz a desestruturacao
    console.log(nome, sobrenome, idade);
};
let obj = {nome: 'Guilherme' , sobrenome: 'Thuler' , idade: 20};
desestruturacao(obj); // da pra fazer com array tambem!

console.log('###################');

function conta(operador, acumulador, ...numeros) { // os 3 pontos sao o rest(RESTO)
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador)
};

conta('*', 1, 20, 30, 50, 10)

console.log('###################');

const descobrir = (...args) => { 
    console.log(args); // para usar o arguments em arrow functions, use o rest
};

descobrir('*', 1, 20, 30, 50, 10)