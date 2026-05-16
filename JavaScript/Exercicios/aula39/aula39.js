let i = 0;

while (i <= 3) {
    console.log(i);
    i++;
}

function random(min , max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

// EQUANTO
while (rand !== 10) { // enquanto rand for diferente de 10 ele executa
    rand = random(min, max);
    console.log(rand)
}

console.log('##########')

// o do while, primeiro executa o codigo depois analisa ele se vai executar novamente
do {
    rand = random(min, max);
    console.log(rand)
} while(rand !== 10);