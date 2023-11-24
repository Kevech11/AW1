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


// Carrito
let items = document.querySelectorAll('.item-carrito');

// El click que agrega al carrito el producto
if (items) {
    for (let item of items) {
        let btn = item.querySelector('.btn');

        btn.onclick = function () {
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

