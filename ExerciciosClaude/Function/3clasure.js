function contador() {
    let num = 0
    return function() {
        if (num <= 10) {
           return num++;
        };
    }
}
const numero = contador();
console.log(numero());
console.log(numero());
console.log(numero());
