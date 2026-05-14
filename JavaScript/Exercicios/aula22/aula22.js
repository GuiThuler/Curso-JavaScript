/*
Logicos
&& -> AND - Todas as expressoes precisam ser true para retornar true
|| -> OR - Uma delas precisa ser true para retornar true
! -> NOT - Nega expressão

const expressaoAnd = true && true && true;
const expressaoOr = true || false;
console.log(expressaoAnd , expressaoOr);
*/
// EXEMPLO PRATICO

const usuario = 'Luiz';
const senha = '12345';

const vaiLogar = usuario === 'Luiz' && senha === '12345';
console.log(vaiLogar)

console.log(!true);