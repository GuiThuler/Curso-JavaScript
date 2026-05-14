// Regra: proibido console.log dentro da função

//Crie uma função que receba um array e retorne somente o último valor.

function arrayUltimo() {
    const arrays = [1, 54, 23, 453, 6];
    return arrays[0], arrays[arrays.length - 1];
};
console.log(arrayUltimo());

/*
Nota: 4 / 10

Erros importantes:

A função não recebe o array

function arrayUltimo(arr) {
    return arr[arr.length - 1];
}

console.log(arrayUltimo([1, 54, 23, 453, 6]));
*/