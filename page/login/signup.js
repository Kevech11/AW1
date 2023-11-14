let inputNombreCompleto = document.querySelector('#input-nombre-completo');
let inputEmail = document.querySelector('#input-email');
let inputPassword = document.querySelector('#input-password');
let inputFechaNacimiento = document.querySelector('#input-fecha-nacimiento');
let botonRegistro = document.querySelector('#boton-registro');

function handleClick() {
    // Buscamos el usuario
    let chequearUsuario = localStorage.getItem(inputEmail.value);
    // Chequeamos si el usuario existe, y cancelamos el registro.
    if (chequearUsuario) {
        alert('El usuario ya existe.')
        return;
    }
    // Si el usuario no existe, lo creamos
    let payload = {
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



