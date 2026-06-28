function findLongestWord(text) {
    // Convertimos el texto en un arreglo de palabras separadas por espacios
    const words = text.split(' ');

    let longestWord = "";

    // Deslizamos la ventana elemento por elemento sobre el arreglo
    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];

        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
    }
    return longestWord;
}

// --- Ejemplo de uso ---
const parrafo = "Aprender a programar abre un mundo lleno de posibilidades maravillosas";
const resultado = findLongestWord(parrafo);

console.log(`La palabra más larga es: "${resultado}"`); 
// Salida: La palabra más larga es: "posibilidades"