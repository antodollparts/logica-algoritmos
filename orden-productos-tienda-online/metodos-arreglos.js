//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.
const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

console.log("Productos con precio menor a 100:");
productos.filter(producto => producto.precio < 100).forEach(producto => console.log(producto.nombre));

console.log("Productos ordenados alfabéticamente:");
productos.sort((a, b) => a.nombre.localeCompare(b.nombre)).forEach(producto => console.log(producto.nombre));

console.log("Nombres de los productos:");
const nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);

const totalPrecio = productos.reduce((total, producto) => total + producto.precio, 0);
console.log("Precio total de los productos:", totalPrecio);