// alert('ola mundo')

class Pessoa {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
    teste(a, b) {
        console.log(a, b)
    }
}

const pessoa1 = new Pessoa();
pessoa1.a('a')
pessoa1.teste('c', 'd')