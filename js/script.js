const contenedorTarjetas = document.querySelector(".contProductos");

/** Crea las tarjetas de productos teniendo en cuenta la lista en productos.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevoProducto = document.createElement("div");
    nuevoProducto.classList = "produ"
    nuevoProducto.innerHTML = `
    <h3 class="nombre">${producto.nombre}</h3>
                    <img class="cappu" src="img/${producto.nombre}.jpg" alt="${producto.nombre}" width="100px">
                    <div class="precio">
                        <img class="bolsa" src="img/bolsa.png" alt="comprar" width="15px">
                        <p class="valor">$${producto.precio}</p>
                    </div>`
    contenedorTarjetas.appendChild(nuevoProducto);
    nuevoProducto.querySelector(".bolsa").addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(productos);