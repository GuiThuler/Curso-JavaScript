// Exercício 7 — Constructor Function
// Agora a mesma coisa, mas usando constructor function. Crie CriaPessoa com nome, idade e o método apresenta.

function CriaPessoa(nome, idade) {
    this.nome = nome
    this.idade =  idade

    this.apresenta = () => console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
}
const p1 = new CriaPessoa('Guilherme', 21);
const p2 = new CriaPessoa('Habia', 19);

p1.apresenta();
p2.apresenta();