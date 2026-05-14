// Let tem escolpo de bloco {...bloco}

const verdadeira = true;

let nome = 'Luiz'; // criada
var nome2 = 'Luiz';



if (verdadeira) {
    let nome = 'Otavio'; // redeclara
    console.log(nome, nome2);
  }

if (verdadeira) {
    let nome = 'Otavio'; // redeclara de novo
    console.log(nome, nome2);
};