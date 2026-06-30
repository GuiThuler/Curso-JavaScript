// Função construtora
// Sempre começa com letra maiuscula
// Construtora -> Pessoa (New)

function Pessoa(nome, sobrenome) {
    // Atributo ou Metodo privado
    const ID = 123456;
    const metodoInterno = () => {

    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    // Atributo ou Metodo publico
    this.metodo = () => {
        console.log(this.nome + ': sou um metodo!')
    }
};

// NEW = cria um objeto vazio, e faz o this apontar pro P que chamou.

const p1 = new Pessoa('Luiz Otavio' , 'Miranda');
const p2 = new Pessoa('Guilherme' , 'Thuler');

console.log(p1.nome);
console.log(p2.sobrenome);
p2.metodo();