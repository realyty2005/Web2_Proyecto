function agregarAlCarrito(id, nombre, precio, imagen) {
  var producto = {
    id: id,
    nombre: nombre,
    precio: precio,
    imagen: imagen,
    cantidad: 1,
  };

  var carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Verificar si el producto ya está en el carrito
  var existe = carrito.find((item) => item.id === id);
  if (existe) {
    // Incrementar la cantidad del producto existente
    existe.cantidad += 1;
  } else {
    // Agregar el nuevo producto al carrito
    carrito.push(producto);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto añadido al carrito");
}
