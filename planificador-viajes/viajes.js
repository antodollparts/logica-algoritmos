let destinos = [];

class Destino {
    constructor(destino, fecha, transporte, costo) {
        this.destino = destino;
        this.fecha = fecha;
        this.transporte = transporte;
        this.costo = this.calcularCosto(destino, transporte);
    }

    calcularCosto(destino, transporte) {
        let costoBase = 0;

        // Costo base por destino
        if (destino === "Paris") {
            costoBase = 500;
        } else if (destino === "Londres") {
            costoBase = 400;
        } else if (destino === "New York") {
            costoBase = 600;
        }

        // Costo adicional por tipo de transporte
        if (transporte === "Avión") {
            costoBase += 200;
        } else if (transporte === "Tren") {
            costoBase += 100;
        }

        return costoBase;
    }

}

//Función para registrar un destino de viaje
export function registrarDestino(destino, fecha, transporte, costo) {
    let nuevoDestino = new Destino(destino, fecha, transporte, costo);
    destinos.push(nuevoDestino);
}

// Función para mostrar el itinerario de los viajes registrados
export function mostrarItinerario() {
    console.log("Itinerario de Viajes:");
    console.log("---------------------------");
     for (let i = 0; i < destinos.length; i++) {
        let viaje = destinos[i];
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log("---------------------------");
    }
}