// Escreva uma função que recebe dois numeros e retorne o maior deles

function maior(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(maior(30, 12)); // A QUE EU FIZ

// VERTENTES EMBAIXO

const max2 = (x, y) => x > y ? x : y
console.log(max2(64, 54));

/*
=> é mesma coisa se colocasse function

entao (x, y) => fica tipo functio(num1, num2)

? se x > y for verdadeiro, dai retorna o x

: senao, retorna y

se x for maior que y:
   retorna x
senão:
   retorna y
*/ 