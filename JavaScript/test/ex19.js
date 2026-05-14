const nome = prompt('Digite seu nome.');
document.body.innerHTML += `Seu nome é ${nome}`;  

if (nome.length < 4) {
    alert('Nome invalido!');
}
 else {
    let hobby = prompt('O que quer mudar? Treinar mais, estudar mais ou ganhar mais?');
    document.body.innerHTML += `<br> O que voce quer é: ${hobby}`;
}


