// Exercício 4 — Perfil de usuário (fácil)
// Crie um objeto usuario com as propriedades: nome, idade, email e ativo (boolean). Depois crie uma função exibirPerfil(usuario) que mostre os dados no console formatado.
// jsconst usuario = {
//   // preencha aqui
// }

// function exibirPerfil(usuario) {
//   // exiba os dados
// }

const usuario = {
  nome: 'Guilherme',
  idade: 20,
  email: 'guilhermevthuler@gmail.com',
  ativo: true
}

function exibirPerfil(obj) {
  for (let chave in obj) {
    console.log(`${chave}: ${usuario[chave]}`)
}
}
exibirPerfil(usuario)