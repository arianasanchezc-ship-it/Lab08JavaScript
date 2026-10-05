class Producto {
    constructor(nombre, precio, descuento, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.descuento = descuento;
        this.imagen = imagen;
    }

    calcularPrecioFinal() {
        const precioFinal = this.precio - (this.precio * (this.descuento / 100));
        return precioFinal.toFixed(2);
    }
}

const producto1 = new Producto("Laptop", 1200, 10, "laptop.jpg");
const producto2 = new Producto("Audífonos", 150, 15, "audifonos.jpg");
const producto3 = new Producto("Teclado", 80, 20, "teclado.jpg");;

const catalogo = [producto1, producto2, producto3];

const contenedor = document.getElementById("contenedor-productos");

catalogo.forEach((producto, index) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-producto");

    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Precio: $<span>${producto.precio}</span></p>
        <button id="btn-${index}">Aplicar Descuento</button>
    `;

    contenedor.appendChild(tarjeta);
});

catalogo.forEach((producto, index) => {
    const boton = document.getElementById(`btn-${index}`);

    boton.addEventListener("click", () => {
        const precioFinal = producto.calcularPrecioFinal();
        const elementoPrecio = boton.previousElementSibling.querySelector("span");
        elementoPrecio.textContent = `${precioFinal} (¡Descuento de ${producto.descuento}% aplicado!)`;
        boton.textContent = "Descuento Aplicado";
        boton.disabled = true;
    });
});