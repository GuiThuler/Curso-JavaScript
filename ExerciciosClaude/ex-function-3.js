// Ex. 3
// Função com parâmetro padrão
// fácil
// Crie uma função potencia(base, expoente) onde o expoente padrão seja 2. Se chamada com um argumento só, deve elevar ao quadrado.

// function potencia(base, expoente) {
//   // defina expoente padrão = 2
// }

// console.log(potencia(3));    // 9
// console.log(potencia(2, 10)); // 1024

function potencia(base, expoente = 2) {
  // defina expoente padrão = 2
    return base ** expoente
}
console.log(potencia(3));    // 9
console.log(potencia(2, 10)); // 1024