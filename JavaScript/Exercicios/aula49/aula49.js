// Declaração de função (Funcition hoisting)

falaOi();

function falaOi () {
    console.log('Oi');
}

// First-class objects (Objetos de primeria classe)
// Function expression

const souUmDado = function() {
    console.log('Sou um dado');
};
souUmDado();

function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souUmDado);

// Arrow function

const arrow = () => {
    console.log('Sou uma arrow function')
};

arrow();

