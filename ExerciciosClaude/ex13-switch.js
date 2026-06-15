// Crie uma função calcular(a, operacao, b) que use switch para decidir qual operação fazer: +, -, * ou /.
// jsfunction calcular(a, operacao, b) {
//   switch (operacao) {
//     // cases: '+', '-', '*', '/'
//   }
// }

// console.log(calcular(10, '+', 5)); // 15
// console.log(calcular(10, '/', 2)); // 5
// Dica: cada case deve ser uma string como case '+'. Não esqueça o return em cada um e o default para operações inválidas.

function calcular(a, operacao, b) {
  switch (operacao) {
     case '+': 
        return a + b
     case '-':
        return a - b
     case '*':
        return a * b
     case '/':
        return a / b
     default :
        return 'ERROR';
 }
}

console.log(calcular(10, '+', 5)); // 15
console.log(calcular(10, '/', 2)); // 5