const elementos = [
  { tag: 'p', texto: 'frase 1' },
  { tag: 'div', texto: 'frase 2' },
  { tag: 'footer', texto: 'frase 3' }
];

for (let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i];
    console.log(`${tag}: ${texto}`);
}