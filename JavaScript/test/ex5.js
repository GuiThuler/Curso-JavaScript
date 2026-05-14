// Crie uma função que receba um array com 2 posições e retorne um novo array com os valores invertidos.

function posicoes (inverter) {
    console.log(inverter);
    const inv1 = (inverter[0] += inverter[1]);
    const inv2 = (inverter[1]);
    console.log(inv1 , inv2);
};

posicoes(['Primeiro', 'Segundo']);

/*
Esse era o certo !

function inverter(arr) {
    return [arr[1], arr[0]];
}

inverter(['Primeiro', 'Segundo']);

Nota: 3 / 10

Problemas:

❌ Uso incorreto de +=

❌ Alterou o array original

❌ Não retornou novo array

Por que não foi 0?

✅ Entendeu que precisava manipular posições

✅ Tentou criar variáveis

👉 Ideia quase certa, execução errada
*/