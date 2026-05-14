/*
🟢 Exercício 1 — Data atual formatada (iniciante)

Crie uma função que:

pegue a data atual

retorne no formato:
DD/MM/AAAA
*/


// Essa função vai executar a data atual.
function dataAtual() {
    const data = new Date();
    const ano = data.getFullYear();
    const mes = data.getMonth() + 1;
    const dia = data.getDate();
    return `${dia}/${mes}/${ano}`;
}
console.log(dataAtual());
