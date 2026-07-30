// Filter -> Sempre retorna um array, com a msm quantidade de elemtos ou menos.

// RETORNE OS NUMEROS MAIORES QUE 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function numMaior10() {
    const arr = [];

        for(let i = numeros.length; i > 0; i--) {
        const num = numeros[i];
        
        if (num >= 10) {
            arr.push(num)
        }
    }
        console.log(arr)
}
numMaior10()
// COM FILTER

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados)

// Retorne as pessoas que tem o nome com 5 letras ou mais

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);