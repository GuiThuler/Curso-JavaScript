// me manda o exercicio 9 e 10

// 17:47
// Exercício 9 — for in em objetos (médio):

// Use for...in para percorrer um objeto e listar todas as chaves e valores no console.

// js
// const pessoa = {
//   nome: 'Ana',
//   idade: 28,
//   cidade: 'BH'
// }

// for (const chave in pessoa) {
//   // imprima: "nome: Ana"
// }
// Dica: dentro do for...in, use pessoa[chave] para acessar o valor de cada propriedade.

const pessoa = {
  nome: 'Ana',
  idade: 28,
  cidade: 'BH'
}


for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}