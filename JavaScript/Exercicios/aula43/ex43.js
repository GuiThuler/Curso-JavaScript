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
   if (typeof num !== 'number') {
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
   return num;
}
 for (let i = 1; i <= 100; i++) {
     console.log(i , eDivisiao(i));
 };

const minCod = (num) => typeof num !== 'number' ? num : num % 5 === 0 && num % 3 === 0 ? 'FizzBuzz' : num % 3 === 0 ? 'Fizz' : num % 5 === 0 ? 'Buzz' : num;
for (let i = 1; i <= 100; i++) { console.log(i , minCod(i)); };  