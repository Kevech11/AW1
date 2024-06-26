async function obtenerProductos() {
    const response = await fetch('http://localhost:3000/productos', {
        method: 'GET'
    });

    const productos = await response.json();
    let productosFiltrados = productos;
    let filtroActual = 'todo';
    const section = document.querySelector(".products-list");

    renderizarProductos();

    function renderizarProductos() {
        section.innerHTML = '';

        for (const producto of productosFiltrados) {
            section.innerHTML += plantillaProducto(producto);
            (section.querySelectorAll('.product-item')[section.querySelectorAll('.product-item').length - 1]).querySelector('.agregarProducto').onclick = () => agregarProducto(producto);// 1. Le pasamos el producto a la funcion agregarProducto
        }
    }

    function agregarProducto(producto) {
        let carrito = JSON.parse(localStorage.getItem('carrito')); // undefined -> false

        if (!carrito) {
            localStorage.setItem('carrito',JSON.stringify([producto]))
        }
        else {
            localStorage.setItem('carrito', JSON.stringify([...carrito, producto]))
        }

        alert('Producto agregado al carrito');
    }

    function plantillaProducto(producto) {
        return (`
                <div class="product-item">
                    <img class="productoImagen" src="http://localhost:3000${producto.imagen}" alt="" >                       
                    <a>${producto.nombre}</a>
                    <a>${producto.precio}</a>
                    <div class="boton">
                        <button class="quitar">-</button>
                        <p class="cantidad" id="totalClicks">1</p>
                        <button class="agregar">+</button>           
                        <button class="agregarProducto">Comprar</button>
                    </div>  
                </div>
        `);
    }

    function filtrarProductos() {
        if (filtroActual === 'todo') {
            productosFiltrados = productos;
            renderizarProductos();
        }
        else {
            productosFiltrados = productos.filter(function (producto) {// Paso 1: Filtro
                if (producto.categoria === filtroActual) {
                    return true;
                } else {
                    return false;
                }
            });
            renderizarProductos();// Paso 2: Renderizar
        }
    }

    let buttonTodo = document.querySelector("#todo");
    let buttonAviones = document.querySelector("#aviones");
    let buttonHelicopteros = document.querySelector("#helicopteros");
    let buttonTanques = document.querySelector("#tanques");
    let buttonRompecabezas = document.querySelector("#rompecabezas");
    let buttonInsumos = document.querySelector("#insumos");

    buttonTodo.onclick = function () {
        filtroActual = 'todo';
        filtrarProductos();
    }
    buttonAviones.onclick = function () {
        filtroActual = 'aviones';
        filtrarProductos();
    }
    buttonHelicopteros.onclick = function () {
        filtroActual = 'helicopteros';
        filtrarProductos();
    }
    buttonTanques.onclick = function () {
        filtroActual = 'tanques';
        filtrarProductos();
    }
    buttonRompecabezas.onclick = function () {
        filtroActual = 'rompecabezas';
        filtrarProductos();
    }
    buttonInsumos.onclick = function () {
        filtroActual = 'insumos';
        filtrarProductos();
    }
}
obtenerProductos();
