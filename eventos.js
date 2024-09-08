document.addEventListener ("DOMContentLoaded", function() {

    const boton = document.getElementById('boton');
    const div = document.getElementById('div');

     // Modificacion click botón
    boton.addEventListener('click', function(event) {
        alert('¡Hola!');
        event.stopPropagation(); // Evita que el click en el botón también dispare el evento en el div
    });
    
    // Modificacion click div
    div.addEventListener('click', function() {
        alert('¡Hola! Soy el div');
    });

})