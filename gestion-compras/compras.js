//Gestión de Compras

import { agregarProducto, eliminarProducto, mostrarLista } from "./lista-compras.js";

function iniciarApp(){
    agregarProducto("Manzana");
    agregarProducto("Pan");
    agregarProducto("Leche");
    agregarProducto("Manzana"); // Intento de agregar un producto duplicado
    mostrarLista();
    eliminarProducto("Pan");
    mostrarLista();
}

iniciarApp();