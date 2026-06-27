const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // Compara las iniciales (el primer carácter de cada nombre)
        let inicial1 = invitados[inicio][0].toUpperCase();
        let inicial2 = invitados[siguiente][0].toUpperCase();

        // Si coinciden, devuelve el par
        if (inicial1 === inicial2) {
            return [invitados[inicio], invitados[siguiente]];
        }

        // Si no coinciden, avanzamos ambos punteros
        inicio++;
        siguiente++;
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]