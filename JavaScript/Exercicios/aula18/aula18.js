/* const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};
console.log(pessoa1.nome);  */
                    //isso é um atributo
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    }
}

const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
const pessoa2 = criaPessoa('Bob', 'Otavio', 22)
const pessoa3 = criaPessoa('Maria', 'Otavio', 12)
const pessoa4 = criaPessoa('Lec', 'Otavio', 65)
const pessoa5 = criaPessoa('Gui', 'Otavio', 24)
const pessoa6 = criaPessoa('Julia', 'Otavio', 44)
                            //Isso é um argumento
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);           
console.log(pessoa5);
console.log(pessoa6);

const pessoaPrincipal = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala () {
        console.log(`${this.nome} ${this.sobrenome} esta falando oi...`);
        console.log(`A minha idade é ${this.idade}`);
    },

    incrementaIdade () {
        this.idade++;
    }
};

pessoaPrincipal.fala();
pessoaPrincipal.incrementaIdade();
pessoaPrincipal.fala();
pessoaPrincipal.incrementaIdade();

// o this chama a pessoaPrincipal que depois executa os valores dentro dele