// For in le indice
const frutas = ['PERA' , 'MAÇA', 'UVA'];

for (let index in frutas) {
    console.log(frutas[index])
}

const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Thuler',
    idade: 20
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}