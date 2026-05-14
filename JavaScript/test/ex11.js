/*
🟢 Exercício 2 — Hora atual formatada

Crie uma função que:

mostre a hora atual

no formato:
HH:MM:SS
*/
// Essa função ira mostrar a hora exata
function horasAgora() {
    const dia = new Date();
    const hora = dia.getHours();
    const minuto = dia.getMinutes();
    const seg = dia.getSeconds();
    return `${hora}:${minuto}:${seg}`;
}
console.log(horasAgora());