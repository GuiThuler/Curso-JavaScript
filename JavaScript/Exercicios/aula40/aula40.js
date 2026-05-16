const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (num of numeros) {
    if (num === 4) {
        console.log('Pulei')
        continue;
    }
    if (num === 7) {
        console.log('Encontrei o 7');
        break;
    }
    console.log(num)
}
