function mostrarCarrito() {
  var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  var carritoDiv = document.getElementById("carrito");

  if (carrito.length === 0) {
    carritoDiv.innerHTML = "<p>No hay productos en el carrito.</p>";
    return;
  }

  var html = '<table class="carrito-table">';
  html +=
    "<tr><th>Imagen</th><th>Nombre</th><th>Precio</th><th>Cantidad</th><th>Eliminar</th></tr>";

  carrito.forEach((producto, index) => {
    html += `
                    <tr>
                        <td><img src="${producto.imagen}" alt="${producto.nombre}" width="50"></td>
                        <td>${producto.nombre}</td>
                        <td>$${producto.precio}</td>
                        <td>${producto.cantidad}</td>
                        <td><button class="eliminar-btn" onclick="eliminarDelCarrito(${index})">⨉</button></td>
                    </tr>
                `;
  });

  html += "</table>";
  carritoDiv.innerHTML = html;
}

function eliminarDelCarrito(index) {
  var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

mostrarCarrito();
