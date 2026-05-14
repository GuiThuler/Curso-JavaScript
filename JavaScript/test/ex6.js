// Regra: proibido console.log dentro da função

// Crie uma função que receba um número e retorne o dobro dele.


function dobroNumero() {
    const num = 50;
    return num * 2
};

console.log(dobroNumero());

/* Nota: 6 / 10

O certo é esse! USAR NO PARAMETRO

function dobroNumero(num) {
    return num * 2;
}

console.log(dobroNumero(50));
*/