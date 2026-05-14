/*
🟡 Exercício 4 — Saudação por horário (nível JR)

Crie uma função que:

pegue a hora atual

retorne:

"Bom dia" (5h–11h)

"Boa tarde" (12h–17h)

"Boa noite" (18h–23h)

"Boa madrugada" (0h–4h)
*/

const data = new Date();
const horas = data.getHours();

function cumprimentoDiaDia(horaDentro) {
    if (horaDentro >= 5 && horaDentro < 12) {
        return 'Bom dia';
    } else if  (horaDentro >= 12 && horaDentro < 18) {
        return 'Boa tarde';
    } else if  (horaDentro >= 18 && horaDentro <= 23) {
        return 'Boa noite';
    } else if  (horaDentro >= 0 && horaDentro <= 4) {
        return 'Boa madrugada';
    };
}
const hoursNew = cumprimentoDiaDia(horas);
console.log(horas, hoursNew);

