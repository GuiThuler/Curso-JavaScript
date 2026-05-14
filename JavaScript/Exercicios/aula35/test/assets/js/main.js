const elementos = [
    {tag: 'p' , texto: 'frase 1'},
    {tag: 'div' , texto: 'frase 2'},
    {tag: 'section' , texto: 'frase 3'},
    {tag: 'footer' , texto: 'frase 4'}
];
const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag , texto} = elementos[i];
    let criar = document.createElement(tag);
    let textCriado = document.createTextNode(texto);

    criar.appendChild(textCriado);
    div.appendChild(criar);
};

container.appendChild(div);