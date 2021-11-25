class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.cantidad = 0;
    }
    venta = function (cantidad) {
        if (this.cantidad >= 0) {
            this.cantidad -= cantidad;
        } else {
            alert('No hay suficientes productos en stock');
        }
    }
    reposicion = function (cantidad) {
        this.cantidad += cantidad;
    }
}

const producto1 = new Producto(01, "Mate camionero", 1500, "Mate");
const producto2 = new Producto(02, "Mate torpedo", 1700, "Mate");
const producto3 = new Producto(03, "Mate con virola sincelada", 1950, "Mate");
const producto4 = new Producto(04, "Yerba Canarias 1KG", 900, "Yerba");
const producto5 = new Producto(05, "Termo Stanley 1L", 11000, "Termo");

producto1.reposicion(parseFloat(prompt("Ingresar cantidad a reponer de " + producto1.nombre)))
producto1.venta(50)
console.log(producto1);

producto2.reposicion(parseFloat(prompt("Ingresar cantidad a reponer de " + producto2.nombre)))
producto2.venta(50)
console.log(producto2);

producto3.reposicion(parseFloat(prompt("Ingresar cantidad a reponer de " + producto3.nombre)))
producto3.venta(50)
console.log(producto3);

producto4.reposicion(parseFloat(prompt("Ingresar cantidad a reponer de " + producto4.nombre)))
producto4.venta(50)
console.log(producto4);

producto5.reposicion(parseFloat(prompt("Ingresar cantidad a reponer de " + producto5.nombre)))
producto5.venta(50)
console.log(producto5);


let agregarAlCarrito = prompt('Indicar numero de ID de los productos que desea agregar al carrito, PARA TERMINAR DE AGREGAR ESCRIBA"ESC"\n LOS ID SON : \n 01 MATE CAMIONERO \n  02 MATE TORPEDO \n  03 MATE CON VIROLA CINCELADA \n  04 YERBA CANARIAS 1KG \n  05 Termo Stanley 1L');

const productosEnCarrito = [];

while (agregarAlCarrito != "ESC") {
    switch (agregarAlCarrito) {
        case "01":
            productosEnCarrito.push(producto1.precio);
            break;
        case "02":
            productosEnCarrito.push(producto2.precio);
            break;
        case "03":
            productosEnCarrito.push(producto3.precio);
            break;
        case "04":
            productosEnCarrito.push(producto4.precio);
            break;
        case "05":
            productosEnCarrito.push(producto5.precio);
            break;
        default:
            alert('Ingrese un ID válido. LOS ID SON 01 02 03 04 05');
    }
    agregarAlCarrito = prompt ('Indicar numero de ID de los productos que desea agregar al carrito, PARA TERMINAR DE AGREGAR ESCRIBA"ESC"\n LOS ID SON : \n 01 MATE CAMIONERO \n  02 MATE TORPEDO \n  03 MATE CON VIROLA CINCELADA \n  04 YERBA CANARIAS 1KG \n  05 Termo Stanley 1L');
}
console.log(productosEnCarrito);

let total = 0;
for (let i of productosEnCarrito) total += i;

alert ("Precio total a pagar: $" + total);
console.log (total);
