
// Funcional
let carrito = JSON.parse(localStorage.getItem('carrito'));
let carritoHtml = document.querySelector('#carrito-contenedor');
let html = '';
let price = document.querySelector('#informacion-price');
let cantidad = document.querySelector('#informacion-cantidad');
let acumuladorPrice = 0;
let acumuladorCantidad = 0;

for (let producto of carrito) {
    html += `
        <div class="producto">            
            <h4>${producto.nombre}</h4>
            <p>${producto.marca}</p>
            <p>${producto.precio}</p>          
            <p>${producto.cantidad}</p>            
        </div>
    `;

    acumuladorPrice = acumuladorPrice + Number(producto.precio.slice(1));
    acumuladorCantidad = acumuladorCantidad + Number(producto.cantidad);
}

carritoHtml.innerHTML = html;

price.innerText = acumuladorPrice; 
cantidad.innerText = acumuladorCantidad;

