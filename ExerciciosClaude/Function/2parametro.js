function calculaDesconto(preco , desconto = 10) {
    if (desconto >= 0){
        const valorDesconto = preco * desconto / 100
        const res = preco - valorDesconto
        return `O valor do desconto foi de ${valorDesconto}, o total do pedido ficou ${res} `;
    }
    else {
        return `ERROR`;
    }
    
}
console.log(calculaDesconto(500 , 50));