const pessoas = [
  { nome: "Gui", idade: 20 },
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 30 }
];
for (let i = 0; i < pessoas.length; i++) {
    const {nome , idade} = pessoas[i]
    console.log(`${nome} tem ${idade} anos`);
}