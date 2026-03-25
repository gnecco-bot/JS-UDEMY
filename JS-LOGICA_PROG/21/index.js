function max(x, y) {
    // if (x > y) return x; // opcao 1
    // return y;
    return x > y ? x : y; // opcao 2
};

const max2 = (x, y) => { // opcao 3
    return x > y ? x : y;
};

const max3 = (x, y) => x > y ? x : y; // opcao 4

console.log(max3(200,145));