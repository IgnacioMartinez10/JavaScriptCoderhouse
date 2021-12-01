const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", guardarDatos)

function guardarDatos(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const celular = document.getElementById("celular").value;
    const dia = document.getElementById("dia").value;

    if (nombre != "") {
        console.log('Cliente: ' + nombre);
        console.log('Numero de telefono ' + celular);
        console.log ('Dia de turno ' + dia);
        alert('Gracias por reservar tu turno, se estaran contactando contigo para acordar un horario');
    } else{
        alert('Ingrese los datos correctamente POR FAVOR');
    }
}