//Gestión de Lista de Compras

let listaDeCompras = [];

export function agregarProducto(producto) {
    if (listaDeCompras.includes(producto)) {
        console.log(`El producto "${producto}" ya está en la lista.`);
        return;
    }
    listaDeCompras.push(producto);
    console.log(`Producto agregado: ${producto}`);
}

export function eliminarProducto(producto) {
    const index = listaDeCompras.indexOf(producto);
    if (index > -1) {
        listaDeCompras.splice(index, 1);
        console.log(`Producto eliminado: ${producto}`);
    } else {
        console.log(`Producto no encontrado: ${producto}`);
    }
}

export function mostrarLista() {
    console.log("Lista de Compras:");
    listaDeCompras.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}`);
    });
}

