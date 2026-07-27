const nomes = ['Maria', 'Kaio', 'Gui', 'Luiz' ,'Joao', 'Pedro']

// nomes.splice(indice atual, delete, addelemt1, addelemt2, addelemt3);
//pop
const removidos = nomes.splice(-2, Number.MAX_VALUE); // esse é o maior valor que pode existir
const resto = nomes.splice(3, 2, 'Augusto');
resto.splice(nomes.length , 1, 'Felipe')
console.log(nomes, removidos , resto);
console.log(Number.MAX_VALUE)