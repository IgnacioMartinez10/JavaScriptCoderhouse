function ingreseCosto() {
    let costoIngresado = parseInt(prompt('Ingrese el valor del producto que desea comprar'));
    return costoIngresado;
}

function suma(costo1, costo2) {
    let resultado = (costo1 + costo2);
    return resultado;
}

let costo1 = ingreseCosto();
let costo2 = ingreseCosto();
let resultado = suma(costo1, costo2);

alert ("El valor de su compra es de $" + resultado);