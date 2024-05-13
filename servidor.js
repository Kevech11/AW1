// enrrutamiento
const productos = require ("./lib/Productos.json")
const ventas = require ("./lib/Ventas.json")
const usuario = require ("./lib/Usuario.json")


//Importar Express.js
const express = require('express');
const app = express();
const port = 3000;
//Middleware para manejar datos JSON
app.use(express.json());


// Obtener todas las ventas/productos consultas (GET)
app.get('/ventas/:id', (req, res) => {
  res.json(ventas.find(v => v.id === parseInt(req.params.id)));
});

app.get('/productos', (req, res) => {
  res.json(productos);
});


// Obtener un producto por su ID
app.get('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404).send('Producto no encontrado');
  }
});

// Crear una nueva venta  (POST) traigo datos sensibles desde el body
app.post('/ventas', (req, res) => {
  const nuevaVenta = req.body;
  // Aquí iría la lógica para validar y guardar la nueva venta en la base de datos
  ventas.push(nuevaVenta);
  res.status(201).send('Venta creada correctamente');
});
// Crear un nuevo producto
app.post('/productos', (req, res) => {
  const nuevoProducto = req.body;
  // Aquí iría la lógica para validar y guardar la nueva venta en la base de datos
  ventas.push(nuevoProducto);
  res.status(201).send('Producto creado correctamente');
});


// Actualizar una venta existente (PUT)
app.put('/ventas/:id', (req, res) => {
  const id = Number(req.params.id);
  const ventaIndex = ventas.findIndex(venta => venta.id === id);
  if (ventaIndex !== -1) {
    ventas[ventaIndex] = req.body;
    res.send('Venta actualizada correctamente');
  } else {
    res.status(404).send('Venta no encontrada');
  }
});

// Eliminar una venta (DELETE)
app.delete('/ventas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const ventaIndex = ventas.findIndex(v => v.id === id);
  if (ventaIndex !== -1) {
    // Aquí iría la lógica para garantizar la integridad de los datos
    ventas.splice(ventaIndex, 1);
    res.send('Venta eliminada correctamente');
  } else {
    res.status(404).send('Venta no encontrada');
  }
});


// Arrancar el servidor
app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});

