// Próximo é o Exercício 6 — Tabuada com for (fácil):

// Use um for clássico para imprimir a tabuada de um número passado como argumento.
// function tabuada(numero) {
//   for (let i = 1; i <= 10; i++) {
//     // imprima: "7 x 1 = 7"
//   }
// }

// tabuada(7)
// Dica: concatene assim — numero + " x " + i + " = " + (numero * i) — ou use template literal se preferir.

function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}` );
}
}
tabuada(10);