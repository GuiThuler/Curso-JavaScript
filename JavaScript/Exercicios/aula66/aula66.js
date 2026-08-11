// Dobre os numeros

const numeros = [5, 50, 1, 2, 3, 8, 7, 88, 15, 54, 27];

const dobro = numeros.map((valor => valor * 2));
console.log(dobro)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

// Para cada elemento:
// retorne apenas uma string com o nome da pessoa

const nome = pessoas.map(valor => valor.nome);
console.log(nome);

// Remova apenas a chave "nome" do objeto

const idade = pessoas.map(obj => ({idade: obj.idade }));
console.log(idade);

// Adicione uma chave id e cada objeto

const ids = pessoas.map(function (obj , indice) {
    const newObj = { ...obj }; // isso faz nao mudar o array original
    newObj.id = indice;
    return newObj;
});
console.log(ids);
