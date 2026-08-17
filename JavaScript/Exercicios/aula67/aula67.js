// Some todos os numeros (reduce
// Retorne um array com os pares (Filter
// Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 1, 2, 3, 8, 7, 88, 15, 54, 27];

const total = numeros.reduce(function(acumulador, valor) {
acumulador += valor;
    return acumulador;
});
console.log(total);

const filter = numeros.reduce(function(acumulador, valor) {
if(valor % 8 === 0) acumulador.push(valor);
    return acumulador;
} , [] );
console.log(filter);

const map = numeros.reduce(function(acumulador, valor) {
acumulador.push(valor * 2);
    return acumulador;
} , [] );
console.log(map);

// RETORNE A PESSOA MAIS VELHA

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 72},
    {nome: 'Wallace', idade: 47}
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);