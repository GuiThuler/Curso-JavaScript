/*
Escreva uma função que recebe um numero e retorne o seguinte
numero divisivel por 3 = Fizz
numero divisivel por 5 = Buzz
numero divisivel por 3 e 5 = FizzBuzz
numero NAO divisivel por 3 e 5 = retorna o proprio numero
checar se o numero é realmente um numero = retorna o proprio numero
Use a função com os numeros de 0 a 100 *******
*/
function eDivisiao(num) {
    for (let i = 1; i <= 100; i++) {
    i = num

    if (num != Number) {
        return num;
    }

    if (num % 5 === 0 && num % 3 === 0) {
       return 'FizzBuzz';
    }

    if (num % 3 === 0) {
       return 'Fizz';
    } 

    if (num % 5 === 0) {
       return 'Buzz';
    }
    
    if (num % 3 != 0 || num % 5 != 0) {
       return num;
    }
}
}

for (let i = 1; i <= 100; i++) {
    console.log(num = i)
}

console.log(eDivisiao(25));