function* gerador1() {
    yield 'valor 1'
    yield 'valor 2'
    yield 'valor 3'
};

const g1 = gerador1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

console.log('############');

function* gerador2() {
    let i = 0;

    while(true) {
        yield i;
        i++
        // vai continuar infinitamente
    };
};
const g2 = gerador2();
console.log(g2.next().value)
console.log(g2.next().value)

console.log('############');

function* gerador3() {
    yield 1;
    yield 2;
    yield 3;
};
function* gerador4() {
    yield* gerador3(); // esse meio que continua a outra funçao nessa
    yield 4;
    yield 5;
    yield 6;
};
const g4 = gerador4();
for(let valor of g4) {
    console.log(valor);
}

console.log('############');

function* gerador5() {
    yield function() {
        console.log('Executo a primera função');
    };
    yield function() {
        console.log('Executo a segunda função');
    };
    yield function() {
        console.log('Executo a terceira função');
    };
};

const g5 = gerador5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;

func1();
func2();
func3();