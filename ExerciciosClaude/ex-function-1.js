// Ex. 1
// Calculadora de IMC
// fácil
// Crie uma função chamada calcularIMC que receba peso (kg) e altura (m) e retorne o IMC. Teste com pelo menos 3 valores.

// function calcularIMC(peso, altura) {
//   // seu código aqui
// }

// console.log(calcularIMC(70, 1.75)); // deve ser ~22.9


function calcularIMC(peso, altura) {
   const resAltura = altura * altura
   const conta = peso / resAltura
   return conta.toFixed(1)
}

console.log(calcularIMC(79, 1.82));
