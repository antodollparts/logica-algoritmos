function findMax(arr) {
    // CASO BASE: Si el arreglo tiene solo un elemento, ese elemento es el máximo.
    if (arr.length === 1) {
        return arr[0];
    }
    
    // Si el arreglo está vacío (por seguridad)
    if (arr.length === 0) {
        return null; 
    }

    // Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    // Resolver el problema recursivamente para encontrar el máximo en cada mitad
    const leftMax = findMax(leftHalf);
    const rightMax = findMax(rightHalf);

    // Combinar las soluciones comparando ambos máximos
    return leftMax > rightMax ? leftMax : rightMax;
}

// --- Ejemplo de uso ---
const numbers = [3, 8, 2, 10, 5, 7];
const maximo = findMax(numbers);

console.log(`El número máximo en el arreglo es: ${maximo}`);