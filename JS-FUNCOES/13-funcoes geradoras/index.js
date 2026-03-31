// Gerador finito
function* geradora1() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}
const g1 = geradora1();
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());

// for (let valor of g1) {
//     console.log(valor);
// }

// Gerador infinito
function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3(); // delegação do gerador 3
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
    // console.log(valor);
};

function* geradora5() {
    yield function() { // yield 1
        console.log('Vim do y1');
    };

    yield function() { // yield 2
        console.log('Vim do y2');
    };

    return function() { // mais nenhum yield sera executado a baixo do return
        console.log('Vim do return');
    };
}

const g5 = geradora5();
const func1 = g5.next().value; // captura a funcao do primeiro yield
const func2 = g5.next().value; // captura a segunda funcao
const func3 = g5.next().value; // captura a terceira funcao

func1();
func2();
func3();