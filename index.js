const productos = [
{ 
    nombre: "Laptop Gamer",
    precio: 1200,
    disponible: true
},
{ 
    nombre: "Teclado Mecánico",
    precio: 80,
    disponible: false
},
{
    nombre: "Mouse Inalámbrico",
    precio: 35,
    disponible: true
},
{ nombre: "Monitor UltraWide",
    precio: 450,
    disponible: true
},
{ nombre: "Auriculares Bluetooth",
    precio: 60,
    disponible: false
},
{ nombre: "Webcam HD",
    precio: 40,
    disponible: true
},
];

// 1: Imprimir productos
productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
})


// 2: Productos en oferta
let productosOfertas = productos.map(elemento => {

    if (elemento.disponible){

        elemento['descuento'] = elemento.precio * 0.9;
        // console.log('elementos disponible ', elemento.nombre, 'precio: ', elemento.precio, 'descuento: ', elemento.descuento);
        
    }else{
        elemento['descuento'] = elemento.precio;
        // console.log('elementos no disponible ', elemento.nombre, 'precio: ', elemento.precio, 'descuento: ', elemento.descuento);
    }
    return elemento;
});

console.log('Productos con descuento:', productosOfertas);


// 3: productos disponibles y Baratos
let productosDisponibles = productos.filter( productos => productos.disponible && productos.precio <= 100 );

console.log('Productos disponibles y baratos:', productosDisponibles);


// 4: Valor total del inventario
let valorTotal = productos.reduce((acc, producto) => acc + producto.precio, 0);

console.log('Valor total del inventario: $', valorTotal);


// 5: Encontrar un producto especifico
let productoEspecifico = productos.find(productos => productos.nombre === 'Webcam HD');

console.log('Producto específico encontrado:', productoEspecifico);






