function numeroPedido() {
    let numeroIngresado = parseInt(prompt('INGRESE UN PRECIO, EL PROGRAMA SE LO DEVOLVERÁ CON IVA INCLUIDO'))

    while (!numeroIngresado) {
        alert("INGRESE OTRO NUMERO VALIDO")
        numeroIngresado = parseInt(prompt('INGRESE UN PRECIO, EL PROGRAMA SE LO DEVOLVERÁ CON IVA INCLUIDO'))
    }
    return numeroIngresado;
}

function operacion(precio1) {
    let resultado = (precio1 * 1.21);
    return resultado;
}

let precio1 = numeroPedido();
let resultado = operacion(precio1);
alert(resultado);


