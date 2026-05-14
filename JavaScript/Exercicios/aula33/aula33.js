const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// atribuição via desestruturação !IMPORTAT
const { nome, endereco: {rua, numero}, ...resto } = pessoa;
console.log(nome, resto, rua, numero);