
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var buttonLogin = document.querySelector("#loguear");

buttonLogin.onclick = function() {
    var emailUser = emailInput.value;
    var passwordUser = passwordInput.value;

    const findUser = localStorage.getItem(emailUser); 

    if (findUser) {
        localStorage.setItem("logged.in.user", findUser);
        redireccionarAInicio();
    } else {
        alert('El usuario no existe.');
    }
}
