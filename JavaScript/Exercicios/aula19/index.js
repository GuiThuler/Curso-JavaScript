/*

Valor Primitivo é imutavel ou seja, ele nao pode ser alterado. - string - number - boolean e etc

Referencia é mutavel - array, object, funcion

*/

const a = {
nome: 'gui',
sobrenome: 'Otavio'
};
const b = a;

b.nome = 'Joao';
console.log(a);
console.log(b);