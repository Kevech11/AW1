var inputNombreCompleto = document.querySelector('#input-nombre-completo');
var inputEmail = document.querySelector('#input-email');
var inputPassword = document.querySelector('#input-password');
var inputFechaNacimiento = document.querySelector('#input-fecha-nacimiento');
var botonRegistro = document.querySelector('#boton-registro');

function handleClick() {
    // Buscamos el usuario
    var chequearUsuario = localStorage.getItem(inputEmail.value);
    // Chequeamos si el usuario existe, y cancelamos el registro.
    if (chequearUsuario) {
        alert('El usuario ya existe.')
        return;
    }
    // Si el usuario no existe, lo creamos
    var payload = {
        email: inputEmail.value,
        fullName: inputNombreCompleto.value,
        password: inputPassword.value,
        birthDate: inputFechaNacimiento.value
    }
    localStorage.setItem(inputEmail.value, JSON.stringify(payload));
    redireccionarAInicio();
    alert('Usuario creado, redirigiendo a la página.');
}
botonRegistro.onclick = handleClick;



