class Car {
    startEngine()
    {
        console.log('Enter key to start engine');
    }

    stopEngine()
    {
        console.log('Stop the engine and remove the key');
    }
}

class Innova extends Car {
    brand() {
        console.log('Innova from toyota');
    }

}

let tyota = new Innova()
tyota.startEngine()
tyota.stopEngine()
tyota.brand()