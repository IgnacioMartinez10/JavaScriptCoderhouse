//  https://api.jquery.com/Jquery.ajax/

$(() => {

    const APIURL = 'https://jsonplaceholder.typicode.com/todos';

    $(".to-do-list").prepend('<button id="get" class="btn btn-success m-2">Mostrar 10 tareas mas realizadas en el 2021</button>');

    $("#get").click(() => {
        $.ajax({
            method: "GET",
            url: APIURL,
            success: function (res) {
                for (const { id, title, completed } of res) {
                    $(".tareasMasRealizadas").append(`
                                <div class="cointainer-xl">
                                    <div class="card col-sm-3 m-2">
                                        <div class="h3" style="color:black">${id}</div>
                                        <div class="p" style="color:black">Title: ${title} </div>
                                    </div>
                                </div>`);
                }
            }
        });
    });
})