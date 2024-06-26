let loggedUser = localStorage.getItem("logged.in.user");
let buttonIniciarSesion = document.querySelector("#button-iniciar-sesion");
let buttonCerrarSesion = document.querySelector("#button-cerrar-sesion");

buttonCerrarSesion.onclick = function() {
    localStorage.removeItem("logged.in.user");
    localStorage.removeItem("carrito");
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




//aumentar - disminuir

function totalClick(click, cantidad) {
    const sumvalue = parseInt(cantidad.innerText) + click;
    cantidad.innerText = sumvalue;
}

let botones = document.querySelectorAll('.boton'); // -, +, cantidad

for(let boton of botones) {
    let quitar = boton.querySelector('.quitar');
    let agregar = boton.querySelector('.agregar');
    let cantidad = boton.querySelector('.cantidad');

    quitar.onclick = function() {
        totalClick(-1, cantidad);
    };
    agregar.onclick = function() {
        totalClick(1, cantidad);
    };
}




async function obtenerVentas() {
    const response = await fetch(`http://localhost:3000/ventas`, {
        method: 'GET'
    });

    const json = await response.json();

    console.log('Ventas fetch; ', json);
}

obtenerVentas(); 
