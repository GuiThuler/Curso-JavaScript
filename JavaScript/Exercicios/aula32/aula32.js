const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNum , segundoNum, ,quartoNum,  ...resto] = numeros;
console.log(primeiroNum, segundoNum ,quartoNum);
console.log(resto);

// indices
//                0          1          2
//             0  1  2    0  1  2    0  1  2           
const num = [[1, 2 ,3], [4, 5 ,6], [7, 8 ,9]];
console.log(num[2][0])
const [lista1 , lista2, lista3] = num;
console.log([lista3[2]]);