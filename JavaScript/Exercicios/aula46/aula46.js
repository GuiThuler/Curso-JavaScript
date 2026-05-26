function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR' , {
        hour12: false
    });
}

console.log(mostraHora())

// Com mostraHora conseguimos mostras a hora quando quisermos.

const timer = setInterval(function() {
console.log(mostraHora());
} , 1000) // aqui vai mostrar as horas e vai executando o code a cada segundo

setTimeout(function() {
    clearInterval(timer);
} , 7000);

setTimeout(function() {
    console.log('Ola Mundo!')
} , 1500);

// função anonima geralmente é usada para processos simples, que nao precise replicar em outro momento