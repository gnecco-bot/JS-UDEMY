function teste() {
    console.log('Estou testando')
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }
    
    // Metodo de instancia
    aumentarVolume() {
        this.volume += 2;
    }
    
    // Metodo de instancia
    diminuiVolume() {
        this.volume -= 2;
    }
    
    // Metodo estatico
    static trocaPilha() {
        console.log('Ok, trocando pilha.')
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1)

ControleRemoto.trocaPilha();