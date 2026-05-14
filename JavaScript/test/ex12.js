/*
🟡 Exercício 3 — Dia da semana por extenso

Crie uma função que:

descubra o dia da semana atual

retorne:

"Hoje é terça-feira"
*/

const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();

function getDaySemText(diaSemana) {
    let diaSemanaTexto; // sem valor
    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo'
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda'
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça'
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta'
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta'
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta'
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sabado'
        return diaSemanaTexto;
    default:
        diaSemanaTexto = ''; //
        return diaSemanaTexto;
}
}
const dateNew = getDaySemText(diaSemana);
console.log(diaSemana, dateNew);

