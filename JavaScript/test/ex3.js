// Crie uma função que receba um array de números e some apenas os 3 primeiros valores.

function num(somar) {
    console.log(somar.slice(0, -3));
    console.log(somar[0] + somar[1] + somar[2]);
}

num([1, 55, 34, 12, 54, 2]);

/*
Acertou mas nao precisava do slice

function somarTres(arr) {
    return arr[0] + arr[1] + arr[2];
}

somarTres([1, 55, 34, 12, 54, 2]);

Nota: 8 / 10

Pontos positivos:

✅ Soma correta

✅ Índices corretos

Pontos negativos:

❌ Código desnecessário (slice)

❌ Não retornou o valor

👉 Você SABE fazer, só ainda não confia no return
*/