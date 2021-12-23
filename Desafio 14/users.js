//  https://api.jquery.com/Jquery.ajax/

$(() => {

    const URL_API = 'https://jsonplaceholder.typicode.com/todos';
    const URL_TAREAS = "./JSON/tareas.json";

    $(".to-do-list").prepend('<button id="get" class="btn btn-info m-2">Mostrar 10 tareas mas realizadas en el 2021</button>');

    $("#get").click(() => {
        $.ajax({
            method: "GET",
            url: URL_TAREAS,
            success: function (res) {
                for (const { id, title} of res) {
                    $(".tareasMasRealizadas").append(`
                                <div class="cointainer-xl">
                                    <div class="card col-sm-3 m-2">
                                        <div class="h3">${id}</div>
                                        <div class="p" style="color:black">Descripción: ${title} </div>
                                    </div>
                                </div>`);
                }
            }
        });
    });
})