function criaPessoa(nome, idade) {
    return {
        nome,
        idade,

        imprime() {
            console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
        }
    }
}

const p1 = criaPessoa('Guilherme' , 20);
p1.imprime();

const p2 = criaPessoa('Thuler' , 21);
p2.imprime()