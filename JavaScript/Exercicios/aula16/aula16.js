const alunos = ['Luiz', 'Maria', 'Joao'];

// alunos[0] = 'Eduardo'; - esse aq subistitui no lugar do Luiz
// alunos[3] = 'Beto'; -  add o Beto no array
alunos.push('Otavio'); // add com mais facilidade infos no array(no fim)
alunos.unshift('Bruna'); // add no inicio do array
const removido = alunos.pop(); // remove o ultimo
alunos.shift(); // remove do começo
delete alunos[2]; - // deleta

console.log(alunos.slice(0, -1)); // fatia o que quer exibir
console.log(removido);
console.log(alunos);