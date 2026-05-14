// Ex. 2
// Função que retorna função
// médio
// Crie uma função criarSaudacao(idioma) que retorne outra função. A função retornada deve receber um nome e saudar no idioma certo (pt, en, es).

// function criarSaudacao(idioma) {
//   // retorne uma função aqui
// }

// const ptBR = criarSaudacao('pt');
// console.log(ptBR('Maria')); // "Olá, Maria!"

function criarSaudacao(idioma) {

  function imprimirSaudacao(nome) {
    if (idioma === 'pt') return `Olá, ${nome}!`
    if (idioma === 'en') return `Hello, ${nome}!`
    if (idioma === 'es') return `Hola, ${nome}!`
}
return imprimirSaudacao
}

const ptBR = criarSaudacao('pt');
console.log(ptBR('Maria'))