var loggedUser = localStorage.getItem("logged.in.user");
var buttonIniciarSesion = document.querySelector("#button-iniciar-sesion");
var buttonCerrarSesion = document.querySelector("#button-cerrar-sesion");

buttonCerrarSesion.onclick = function() {
    localStorage.removeItem("logged.in.user");
}

if (loggedUser) {
    // Hacer acá todo lo que  quiera hacer si el usuario esta logueado  
    buttonIniciarSesion.style.display = 'none';
    buttonCerrarSesion.style.display = 'block';
} else {
    // Y hacer aca todo lo que  quiera hacer si el usuario no está logueado
    buttonIniciarSesion.style.display = 'block';
    buttonCerrarSesion.style.display = 'none';
}