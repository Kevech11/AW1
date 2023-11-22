let loggedUser = localStorage.getItem("logged.in.user");
let buttonIniciarSesion = document.querySelector("#button-iniciar-sesion");
let buttonCerrarSesion = document.querySelector("#button-cerrar-sesion");

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


// Carrito
let items = document.querySelectorAll('.item-carrito');

if (items) {
    for (let item of items) {
        item.onclick = function () {
            // Saca lo que quiere guardar del producto
            let precio = item.querySelector('.price').innerText;
            let nombre = item.querySelector('#title').innerText;
            let cantidad = item.querySelector('.cantidad').innerText;
            let marca = item.querySelector('.marca').innerText;       
            let productoAGuardar = {
                precio,
                nombre,
                cantidad,
                marca            
            };
    
            // Lo guarda
            let carrito = JSON.parse(localStorage.getItem('carrito'));
    
            if (carrito) {
                carrito.push(productoAGuardar);
            } else {
                carrito = [productoAGuardar];
            }    
            localStorage.setItem('carrito', JSON.stringify(carrito));
        }
    }
}

//aumentar - disminuir

function totalClick (click){
    const totalClick = document.getElementById('totalClicks');
    const sumvalue = parseInt (totalClicks.innerText) + click;
    console.log (sumvalue + click);
    totalClicks.innerText = sumvalue;
}