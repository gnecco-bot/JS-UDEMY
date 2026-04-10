class DispositivoEletronico{
    constructor(nome) {
        this.nome = nome; // nome da super classe
        this.ligado = false;
    }
    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }
        this.ligado = true;
    }
    
    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // chama o nome da super classe

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome); // chama o nome da super classe
        this.temWifi = temWifi;
    }

    ligar() { // sobrescrito o metodo da super classe, se nao existisse iria ela executar.
        console.log('Alterou o método ligar.')
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S25');
s1.ligar();
s1.ligar();
console.log(s1);
s1.desligar();
s1.desligar();
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar();
console.log(t1.ligado);
