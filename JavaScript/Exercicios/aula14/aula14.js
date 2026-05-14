let num1 = 0.8 // number
let num2 = 0.1 // number

num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
num1 += num2; // 2.0

num1 = Number(num1.toFixed(2));
// colocando a conta fica com numero redondo

console.log(num1);
console.log(Number.isInteger(num1)); // isso fala se é number inteiro ou nao

console.log(num1.toFixed(2)); // esse codigo pega um numero quebrado tipo 10.2098889 e tranforma em 10.20