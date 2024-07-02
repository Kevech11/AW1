
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let buttonLogin = document.querySelector("#loguear");

buttonLogin.onclick = function() {
    let emailUser = emailInput.value;
    let passwordUser = passwordInput.value;

    const findUser = localStorage.getItem(emailUser); 

    if (findUser) {
        localStorage.setItem("logged.in.user", findUser);
        redireccionarAInicio();
    } else {
        alert('El usuario no existe.');
    }
}
