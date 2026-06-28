const fs = require('fs');
const FILE_NAME = 'notas.json';

// Función auxiliar para leer las notas del archivo de forma segura
function leerNotasDelArchivo() {
    try {
        // Si el archivo no existe, fs.existsSync ayuda a prevenir errores
        if (!fs.existsSync(FILE_NAME)) {
            fs.writeFileSync(FILE_NAME, JSON.stringify([]));
            return [];
        }
        
        const data = fs.readFileSync(FILE_NAME, 'utf-8');
        // Si el archivo está vacío por alguna razón, devolver un arreglo vacío
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Error al leer el archivo de notas:", error.message);
        return [];
    }
}

// Función auxiliar para guardar las notas en el archivo JSON
function guardarNotasEnArchivo(notas) {
    try {
        // JSON.stringify(notas, null, 2) hace que el JSON se guarde con un formato legible (identado)
        fs.writeFileSync(FILE_NAME, JSON.stringify(notas, null, 2));
    } catch (error) {
        console.error("Error al guardar en el archivo de notas:", error.message);
    }
}

// Crear una nueva nota y guardarla en el archivo
function crearNota(titulo, contenido) {
    const notas = leerNotasDelArchivo();

    // Validar si ya existe una nota con el mismo título para evitar duplicados
    const existeNota = notas.some(nota => nota.titulo.toLowerCase() === titulo.toLowerCase());
    
    if (existeNota) {
        console.log(`Error: Ya existe una nota con el título "${titulo}".`);
        return;
    }

    // Agregar la nueva nota al arreglo
    notas.push({ titulo, contenido });
    guardarNotasEnArchivo(notas);
    console.log(` Nota "${titulo}" creada y guardada con éxito.`);
}

// Leer todas las notas existentes (Listar)
function listarNotas() {
    const notas = leerNotasDelArchivo();

    console.log('--- LISTA DE NOTAS ---');
    if (notas.length === 0) {
        console.log('No hay notas guardadas actualmente.');
        return;
    }

    notas.forEach((nota, index) => {
        console.log(`${index + 1}. [${nota.titulo}]: ${nota.contenido}`);
    });
}

// Eliminar una nota específica según su título
function eliminarNota(titulo) {
    const notas = leerNotasDelArchivo();
    const notasFiltradas = notas.filter(nota => nota.titulo.toLowerCase() !== titulo.toLowerCase());

    if (notas.length === notasFiltradas.length) {
        console.log(`No se encontró ninguna nota con el título "${titulo}".`);
        return;
    }

    guardarNotasEnArchivo(notasFiltradas);
    console.log(`Nota "${titulo}" eliminada correctamente.`);
}


// --- EJECUCIÓN DE PRUEBA ---

// Notas de prueba
crearNota("Supermercado", "Comprar leche, huevos y café.");
crearNota("Tareas UT", "Terminar el reporte de desarrollo móvil.");
crearNota("Supermercado", "Intentar duplicar nota"); // Debería lanzar error de duplicado

// Listar las notas para ver el estado actual del JSON
listarNotas();

// Eliminar una nota específica
eliminarNota("Supermercado");

// listar para confirmar que se borró correctamente
listarNotas();