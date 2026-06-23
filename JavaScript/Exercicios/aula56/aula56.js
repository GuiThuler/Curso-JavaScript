// Factory function (Função fabrica).
function criaPessoa(nome, sobrenome, a , p) {
    return { // esta retornando um objeto
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ') // split pega o valor e transforma em array com os espaços das strings
            this.nome = valor.shift(); // vai pegar o primeiro valor do array e tirar do proprio
            this.sobrenome = valor.join(' de ') // ele adiciona no espaço do sobrenome
        },

        fala(assunto = 'falando sobre NADA') { // retornando um metododo
            return `${this.nome} ${this.sobrenome} ${assunto}`
        },

        altura: a,
        peso: p,

        // Getter
        get imc() { // esse get meio que engana, fazendo com que o imc fique tipo nome e sobrenome
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
};
// METEDODO É UMA FUNÇÃO DENTRO DE UM OBJETO.
const p2 = criaPessoa('Guilherme' , 'Thuler' , 1.8 , 80);
console.log(p2.fala('Fala sobre Python'));
console.log(p2.imc);

p2.nomeCompleto = 'Maria Silva Oliveira';
console.log(p2.nome);
console.log(p2.sobrenome);
console.log(p2.fala());

// this assume o valor da const que esta interagindo com a function de criaPessoa
// EXEMPLO
// console.log(p2.sobrenome);