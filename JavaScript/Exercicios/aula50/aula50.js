function funcao() { // isso é parametro
    console.log(arguments[2]) // arguments todos os dados dos argumentos enviados.

    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total)
};
funcao(1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10) // isso é argumento

function somar(a , b = 2, c = 10) { // esta colocando um valor padrao no B
    console.log(a + b + c);
};
somar(3 , undefined ,  5) // o undefined assume o valor de B nesse caso.