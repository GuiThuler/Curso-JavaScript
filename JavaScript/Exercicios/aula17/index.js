function saudacao(nome) {
    return `Bom dia ${nome}`;
}

saudacao('Maria'); // por conta do return isso é ignorado

const variavel = saudacao('Luiz');
console.log(variavel)

function soma(x = 1 , y = 1) { // os parametros X e Y pode ter ou nao valores
    const resultado = x + y; // valores pre definudos ou nao
    return resultado;
}

console.log(soma(1 , 3))
console.log(soma(1 , 5))

const raiz = n => n ** 0.5; // isso é uma funcion de uma linha resumida

console.log(raiz(9));
console.log(raiz(4));
console.log(raiz(16));