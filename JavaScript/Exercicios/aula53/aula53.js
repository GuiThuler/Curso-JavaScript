function closures(nome) {
    return function() {
        return nome;
    }
}
const nome1 = closures('Luiz');
const nome2 = closures('Guilerme');

console.dir(nome1);
console.dir(nome2);

console.log(closures() , nome1() , nome2())

// Closure consegue acessar o escopo Léxico. 
