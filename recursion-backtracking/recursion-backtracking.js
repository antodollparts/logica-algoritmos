//Lista de arreglos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

function findGift(gifts, giftName, index = 0) {
    // Caso base 1: Si el índice llega al tamaño del arreglo, recorrimos todo sin éxito
    if (index === gifts.length) {
        return `El regalo ${giftName} no está en la lista.`;
    }

    // Caso base 2: Si encuentra el regalo en la posición actual
    if (gifts[index] === giftName) {
        return `El regalo ${giftName} se encuentra en la posición ${index}.`;
    }

    // Paso recursivo: Llama a la función avanzando al siguiente índice (index + 1)
    return findGift(gifts, giftName, index + 1);
}

// --- Ejemplo de uso ---

// Caso donde el regalo SÍ existe
console.log(findGift(gifts, "Lego")); 

// Caso donde el regalo NO existe
console.log(findGift(gifts, "Camión")); 
