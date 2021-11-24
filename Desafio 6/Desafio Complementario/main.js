class Cliente {
    constructor(nombre, telefono, dia) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.dia = dia;
    }
}
const turnos = [];
turnos.push(new Cliente("Lucas", 1127536426, "Martes"));
turnos.push(new Cliente("Tomás", 1524894167, "Miercoles"));
turnos.push(new Cliente("Matías", 1127452126, "Miercoles"));
turnos.push(new Cliente("Martín", 11273242346, "Jueves"));
turnos.push(new Cliente("Nicolás", 1187515426, "Viernes"));
console.log(turnos);


let turnosMiercoles = turnos.filter (Cliente => Cliente.dia == "Miercoles");
console.log (turnosMiercoles);