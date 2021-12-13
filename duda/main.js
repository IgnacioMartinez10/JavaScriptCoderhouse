class Tarea {
	constructor(nombre, descripcion) {
		this.nombre = nombre;
		this.descripcion = descripcion;
	}
}


let formulario = document.getElementById("formularioTareas");
formulario.addEventListener("submit", guardarTarea);


function guardarTarea(e) {
	e.preventDefault();

	let nombre = $('#nombre').val();
	let descripcion = $('#descripcion').val();

	if (nombre !== '') {
		let listaDeTareas = cargarListaDeTareas();

		listaDeTareas.push(new Tarea(nombre, descripcion));

		guardarListaDeTareas(listaDeTareas);

		document.getElementById("formularioTareas").reset();
	}

}


function cargarListaDeTareas() {
	let listaDeTareas = JSON.parse(localStorage.getItem("listaDeTareas"));
	if (listaDeTareas == null) {
		return [];
	}
	return listaDeTareas;
}


function guardarListaDeTareas(listaDeTareas) {
	localStorage.setItem("listaDeTareas", JSON.stringify(listaDeTareas));
	mostrarListaDeTareas(listaDeTareas);
}


function mostrarListaDeTareas(listaDeTareas) {
	let lista = document.getElementById("lista");
	lista.textContent = "";
	listaDeTareas.forEach((tarea) => {
		lista.appendChild(armarTarjeta(tarea));
	});
}


function armarTarjeta(elemento) {
	const tarjeta = document.createElement("div");
	tarjeta.classList.add("tarjeta");

	const nombreTarea = document.createElement("h3");
	nombreTarea.textContent = `${elemento.nombre}`;
	tarjeta.appendChild(nombreTarea);

	const descripcion = document.createElement("p");
	descripcion.textContent = `Descripcion: ${elemento.descripcion}`;
	tarjeta.appendChild(descripcion);

	const deleteBtn = document.createElement('button');
	deleteBtn.textContent = "X";
	deleteBtn.className = "borrarTarea";
	tarjeta.appendChild(deleteBtn);

	return tarjeta;
}


deleteBtn.addEventListener('click', (e) => {
	const item = e.target.parentElement;
	tarjeta.removeChild(item);
})




mostrarListaDeTareas(cargarListaDeTareas());
