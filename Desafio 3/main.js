const numeroCorrecto = "4";
let = errores = "";

let nombreUsuario = prompt("Ingrese su nombre");
while (!nombreUsuario) {
    nombreUsuario = prompt("Ingrese su nombre POR FAVOR");
}


let numeroIngresado = prompt("Ingrese un numero del 1 al 5. Si usted acierta el numero correcto obtendrá un premio");
while (numeroIngresado != "4") {
    switch (numeroIngresado) {
        case "1":
            alert(nombreUsuario + " el numero que ingresó es INCORRECTO. Siga participando");
            errores = errores + " 1-";
            break;
        case "2":
            alert(nombreUsuario + " el numero que ingresó es INCORRECTO. Siga participando");
            errores = errores + " 2-";
            break;
        case "3":
            alert(nombreUsuario + " el numero que ingresó es INCORRECTO. Siga participando");
            errores = errores + " 3-";
            break;
        case "5":
            alert(nombreUsuario + " el numero que ingresó es INCORRECTO. Siga participando");
            errores = errores + " 5-";
            break;
    }
    numeroIngresado = prompt("Ingrese un numero del 1 al 5. Si usted acierta el numero correcto obtendrá un premio");
}
alert(nombreUsuario + " FELICIDADES, Usted acertó el numero correcto");
alert ("Sus errores fueron los numeros " + errores);
