/*
FALSY
false
0
'' "" ``
null / undefined
NaN
*/

function falaOi () {
    return 'Oi';
}

const vaiExec = 'Pedro'
console.log(vaiExec && falaOi()); // se colocar false na variavel, vai mostrar false na tela e nao vai falar Oi

// EXEMPLO PRATICO

const corUsuario = null; // se tiver uma cor aqui, vai ser ele que vai ser mostrado ou selecionado
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);