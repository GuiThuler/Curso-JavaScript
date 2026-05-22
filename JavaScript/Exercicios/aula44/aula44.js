function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.'); // Criamos um erro personalizado para um sitema.
    }
    return x + y;
}

try { // esse comando vai tentar executar, como se fosse um if
    console.log(soma(1, 2));
    console.log(soma('1' , 2))
} catch(err) { // aqui ele valida try e mostra o erro que vc colocar
    console.log(err)
    console.log('Sempre coisa bonita para o usuario') // nao mostre o erro diretamente para o usurio
}