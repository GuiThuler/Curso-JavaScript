// Crie uma função que receba um array e retorne o primeiro e o último elemento.

function arraysRecebido(receba) {
    console.log(`${receba}`);
    console.log(`Esse é o primeiro numero do seu array: ${receba.slice(0, 1)}`);
    console.log(`Esse é o ultimo numero do seu array: ${receba.slice(4, 5)}`);
}

arraysRecebido([1, 2, 3, 5, 65]);

/*
Certo é esse!

function primeiroUltimo(arr) {
    return [arr[0], arr[arr.length - 1]];
}

primeiroUltimo([1, 2, 3, 5, 65]);

Nota: 6 / 10

Por que não foi maior?

❌ Não retornou valor

❌ Fixou índice (slice(4,5))

❌ Resultado não veio em formato pedido (array)

Por que não foi menor?

✅ Entendeu acesso ao array

✅ Tentou resolver sozinho

✅ Usou método corretamente (slice)

👉 Lógica boa, execução fraca
*/