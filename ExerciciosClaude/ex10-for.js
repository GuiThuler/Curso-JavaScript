// Use for...of para percorrer uma string letra por letra e contar quantas vogais ela tem.
// jsfunction contarVogais(texto) {
//   const vogais = 'aeiouAEIOU';
//   let count = 0;
//   for (const letra of texto) {
//     // verifique se letra é vogal
//   }
//   return count;
// }

// console.log(contarVogais('JavaScript')); // 3
// Dica: use vogais.includes(letra) para verificar se a letra é vogal.

function contarVogais(texto) {
  const vogais = 'aeiouAEIOU';
  let count = 0;
  for (const letra of texto) {
    if (vogais.includes(letra)) {
    count++
    }
  }
  return count;
}
console.log(contarVogais('JavaScript'));
