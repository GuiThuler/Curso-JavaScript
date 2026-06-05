// Exercício 7 — Somar array com for (fácil):

// Crie uma função somarArray(arr) que use um for clássico para somar todos os números do array.
// function somarArray(arr) {
//   let total = 0;
//   // use for para percorrer arr
//   return total;
// }

// console.log(somarArray([1, 2, 3, 4, 5])); // 15
// Dica: use arr[i] para acessar cada elemento dentro do loop.

function somarArray(arr) {
  let total = 0;
  for(let i = 0;i < arr.length; i++) {
    total = total + arr[i]
    
  } 
  return total
}
                     // 0  1  2  3  4
console.log(somarArray([1, 2, 3, 4, 5])); // 15
