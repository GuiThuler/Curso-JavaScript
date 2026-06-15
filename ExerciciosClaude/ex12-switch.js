// Exercício 10 — Dia da semana (fácil):
// Crie uma função diaDaSemana(numero) que receba um número de 1 a 7 e retorne o nome do dia. Use switch...case.
// jsfunction diaDaSemana(numero) {
//   switch (numero) {
//     case 1:
//       return 'Segunda-feira';
//     // complete os outros casos
//     default:
//       return 'Número inválido';
//   }
// }
// Dica: você precisa de 7 cases (1 a 7) e um default para números fora desse range.

function diaDaSemana(numero) {
  switch (numero) {
    case 1:
      return 'Segunda-feira';
    case 2:
        return 'Terça-feira';
    case 3:
        return 'Quarta-feira';
    case 4:
        return 'Quinta-feira';
    case 5:
        return 'Sexta-feira';
    case 6:
        return 'Sábado';
    case 7:
        return 'Domingo';
    default:
      return 'Número inválido';
  }
}

console.log(diaDaSemana(9));