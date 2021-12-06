class Tarea {
	constructor(nombre, descripcion) {
		this.nombre = nombre;
		this.descripcion = descripcion;
	}
}


//  Evento para guardar formulario pelicula
let formulario = document.getElementById("formularioTareas");
formulario.addEventListener("submit", guardarTarea);


//  Funcion para guardar pelicula
function guardarTarea(e) {
	e.preventDefault();

	let nombre = document.getElementById("nombre").value;
	let descripcion = document.getElementById("descripcion").value;


	let listaDeTareas = cargarListaDeTareas();

	listaDeTareas.push(new Tarea(nombre, descripcion));

	guardarListaDeTareas(listaDeTareas);

	document.getElementById("formularioTareas").reset();
}

//  Funcion para cargar listado del localStorage o iniciarlo si no hay
function cargarListaDeTareas() {
	let listaDeTareas = JSON.parse(localStorage.getItem("listaDeTareas"));
	if (listaDeTareas == null) {
		return [];
	}
	return listaDeTareas;
}

//  Funcion para guardar en localStorage
function guardarListaDeTareas(listaDeTareas) {
	localStorage.setItem("listaDeTareas", JSON.stringify(listaDeTareas));
	mostrarListaDeTareas(listaDeTareas);
}

//  Funcion para mostrar listado
function mostrarListaDeTareas(listaDeTareas) {
	let lista = document.getElementById("lista");
	lista.textContent = "";
	listaDeTareas.forEach((tarea) => {
		lista.appendChild(armarTarjeta(tarea));
	});
}

//  Funcion para armar una tarjeta
function armarTarjeta(elemento) {
	const tarjeta = document.createElement("div");
	tarjeta.classList.add("tarjeta");

	const nombreTarea = document.createElement("h3");
	nombreTarea.textContent = `${elemento.nombre}`;
	tarjeta.appendChild(nombreTarea);

	const descripcion = document.createElement("div");
	descripcion.textContent = `Descripcion: ${elemento.descripcion}`;
	tarjeta.appendChild(descripcion);

	return tarjeta;
}

mostrarListaDeTareas(cargarListaDeTareas());
