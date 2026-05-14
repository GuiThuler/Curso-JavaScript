// Crie uma função que receba dois valores e retorne um array com esses valores.

function valoresDif(array) {
    const num = ([array[0], array[1]]);
    console.log(num);
};

valoresDif('js' , 'html');

/*
Esse é o certo!

function criarArray(valor1, valor2) {
    return [valor1, valor2];
}

criarArray('js', 'html');

Nota: 4 / 10

Problemas sérios:

❌ Função recebe 1 parâmetro, mas usa 2

❌ Confusão entre string e array

❌ Não retornou

Por que não foi zero?

✅ Tentativa válida

✅ Ideia correta (criar array)

👉 Aqui foi falha de conceito, normal nessa fase
*/