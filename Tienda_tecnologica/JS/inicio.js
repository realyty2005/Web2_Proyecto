//Carrito de compras

const carrito = document.getElementById("carrito");
const listaProductos = document.getElementById("lista-productos");
const contenedorCarrito = document.querySelector(".buy-card .lista_de_productos");
const vaciarCarrito = document.querySelector("#vaciar_carrito");
const totalCarrito = document.querySelector("#total_carrito"); // Corregido el selector para obtener el elemento por su ID
let articulosCarrito = []; // Declaración de la variable para almacenar los productos del carrito

registrarEventListeners(); // Llamada a la función para registrar los event listeners

function registrarEventListeners() {
  listaProductos.addEventListener("click", agregarProducto);
  carrito.addEventListener("click", eliminarProducto);
  vaciarCarrito.addEventListener("click", vaciarCarritoFuncion);
}

function agregarProducto(e) {
  if (e.target.classList.contains("agregar-carrito")) {
    const productoSeleccionado = e.target.parentElement.parentElement;
    leerInfo(productoSeleccionado);
  }
}

// Función para leer la información del producto seleccionado
function leerInfo(producto) {
  const infoProducto = {
    imagen: producto.querySelector("img").src,
    titulo: producto.querySelector("h3").textContent,
    precio: producto.querySelector(".precio").textContent,
    id: producto.querySelector("button").getAttribute("data-id"),
    cantidad: 1,
  };

  // Revisar si el producto ya existe en el carrito
  const existe = articulosCarrito.some(
    (producto) => producto.id === infoProducto.id
  );

  if (existe) {
    // Si el producto existe, se actualiza la cantidad
    articulosCarrito = articulosCarrito.map((producto) => {
      if (producto.id === infoProducto.id) {
        producto.cantidad++;
      }
      return producto;
    });
  } else {
    // Si el producto no existe, se agrega al carrito
    articulosCarrito.push(infoProducto);
  }

  // Mostrar los productos en el carrito
  mostrarCarrito();
}

// Función para eliminar un producto del carrito  
function eliminarProducto(e) {
  if (e.target.classList.contains("borrar-producto")) {
    const productoId = e.target.getAttribute("data-id");

    // Filtrar los productos para obtener aquellos que no coincidan con el ID del producto a eliminar
    articulosCarrito = articulosCarrito.filter(
      (producto) => producto.id !== productoId
    );

    // Volver a mostrar los productos en el carrito
    mostrarCarrito();
  }
}

// Función para vaciar el carrito
function vaciarCarritoFuncion() {
  articulosCarrito = []; // Vaciar el arreglo de productos del carrito
  mostrarCarrito(); // Volver a mostrar el carrito (que estará vacío)
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
  limpiarHTML(); // Limpiar el contenido previo del carrito

  // Iterar sobre los productos del carrito y agregarlos al HTML
  articulosCarrito.forEach((producto) => {
    const fila = document.createElement("div");
    fila.innerHTML = `
            <img src="${producto.imagen}"></img>
            <p>${producto.titulo}</p>
            <p>${producto.precio}</p>
            <p>${producto.cantidad}</p>
            <p><span class="borrar-producto" data-id="${producto.id}">⨉</span></p>
        `;
    contenedorCarrito.appendChild(fila);
  });

  // Calcular y mostrar el total del carrito
  const total = articulosCarrito.reduce((total, producto) => {
    return (
      total + parseFloat(producto.precio.replace("$", "")) * producto.cantidad
    );
  }, 0);
  totalCarrito.textContent = `Total: $${total.toFixed(6)}`;
}

// Función para limpiar el HTML del carrito
function limpiarHTML() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
