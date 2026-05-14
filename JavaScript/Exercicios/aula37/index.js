const nome = ['Gui' , 'Thuler'];

const sexo = 'Mas';

const pessoa = {
    nome: 'Luiz' ,
    sobrenome: 'Otavio'
};

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

console.log('##########')

for (let i in sexo) {
    console.log(sexo[i])
}

console.log('##########')

for (let valor of nome) {
    console.log(valor)
}

console.log('##########')

nome.forEach(function(elemento) {
    console.log(elemento)
});

console.log('##########')

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}
