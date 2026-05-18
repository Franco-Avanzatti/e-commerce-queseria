const productos = [
    // QUESOS
    { nombre: "Cremoso Javifer por Horma", precio: "$6030 xkg", imagen: "/images/quesos/2.png", alt: "Cremoso Javifer", categoria: "quesos" },
    { nombre: "Cremoso Punta del Agua por Horma", precio: "$6200 xkg", imagen: "/images/quesos/3.png", alt: "Cremoso Punta del Agua", categoria: "quesos" },
    { nombre: "Barra Javifer por Horma", precio: "$7700 xkg", imagen: "/images/quesos/1.png", alt: "Barra Javifer", categoria: "quesos" },
    { nombre: "Muzzarella Javifer por Horma", precio: "$7200 xkg", imagen: "/images/quesos/4.png", alt: "Muzzarella Javifer", categoria: "quesos" },

    // FIAMBRES
    { nombre: "Paleta Fox (Etiqueta Azul)", precio: "$3350 xkg", imagen: "/images/fiambres/Etiqueta-Azul.png", alt: "Paleta Fox Etiqueta Azul", categoria: "fiambres" },
    { nombre: "Paleta Fox (Etiqueta Amarilla)", precio: "$3200 xkg", imagen: "/images/fiambres/Etiqueta-Amarilla.png", alt: "Paleta Fox Etiqueta Amarilla", categoria: "fiambres" },
    { nombre: "Paleta Fox (Etiqueta Roja)", precio: "$4100 xkg", imagen: "/images/fiambres/Etiqueta-Roja.png", alt: "Paleta Fox Etiqueta Roja", categoria: "fiambres" },
    { nombre: "Paleta Fox (Etiqueta Negra)", precio: "$4200 xkg", imagen: "/images/fiambres/Etiqueta-Negra.png", alt: "Paleta Fox Etiqueta Negra", categoria: "fiambres" },
    { nombre: "Jamon Natural Bajo en Sodio Fox", precio: "$5200 xkg", imagen: "/images/fiambres/jamon-natural.png", alt: "Jamon Natural Fox", categoria: "fiambres" },
    { nombre: "Mortadela Bocha Fox", precio: "$3200 xkg", imagen: "/images/fiambres/mortadela.png", alt: "Mortadela Fox", categoria: "fiambres" },
    { nombre: "Matambre de Pollo Fox", precio: "$4100 xkg", imagen: "/images/fiambres/matambre-pollo.png", alt: "Matambre de Pollo Fox", categoria: "fiambres" },
    { nombre: "Salamines Fox", precio: "$4200 xkg", imagen: "/images/fiambres/salamines-fox.png", alt: "Salamines Fox", categoria: "fiambres" },
    { nombre: "Salame Milan Fox", precio: "$3350 xkg", imagen: "/images/fiambres/salame-milan.png", alt: "Salame Milan Fox", categoria: "fiambres" },
    { nombre: "Salame Crespon Fox", precio: "$3200 xkg", imagen: "/images/fiambres/salame-crespon.png", alt: "Salame Crespon Fox", categoria: "fiambres" },
    { nombre: "Salchichon c/Jamon Fox", precio: "$4100 xkg", imagen: "/images/fiambres/salchichon-jamon.png", alt: "Salchichon con Jamon Fox", categoria: "fiambres" },
    { nombre: "Salchichon Primavera Fox", precio: "$4200 xkg", imagen: "/images/fiambres/salchichon-primavera.png", alt: "Salchichon Primavera Fox", categoria: "fiambres" },

    // PICADAS
    { nombre: "Tabla de Quesos y Fiambre Para 10 Personas", precio: "$3350 xkg", imagen: "/images/picadas/picada-1.png", alt: "Tabla para 10 personas", categoria: "picadas" },
    { nombre: "Tabla de Quesos y Fiambre Para 6 Personas", precio: "$3200 xkg", imagen: "/images/picadas/picada-2.png", alt: "Tabla para 6 personas", categoria: "picadas" },
    { nombre: "Tabla de Quesos y Fiambre Para 5 Personas", precio: "$4100 xkg", imagen: "/images/picadas/picada-3.png", alt: "Tabla para 5 personas", categoria: "picadas" },
    { nombre: "Tabla de Quesos y Fiambre Para 8 Personas", precio: "$4200 xkg", imagen: "/images/picadas/picada-4.png", alt: "Tabla para 8 personas", categoria: "picadas" },
];

function renderDestacados() {
    const container = document.querySelector("#row-destacados");
    if (!container) return;

    const destacados = productos.filter(producto =>
        producto.nombre === "Cremoso Javifer por Horma" ||
        producto.nombre === "Cremoso Punta del Agua por Horma" ||
        producto.nombre === "Jamon Natural Bajo en Sodio Fox" ||
        producto.nombre === "Paleta Fox (Etiqueta Negra)" ||
        producto.nombre === "Salame Milan Fox" ||
        producto.nombre === "Salchichon Primavera Fox" ||
        producto.nombre === "Tabla de Quesos y Fiambre Para 5 Personas" ||
        producto.nombre === "Tabla de Quesos y Fiambre Para 8 Personas"
    );

    destacados.forEach((producto, index) => {

        const div = document.createElement('div');

        div.className = 'col';

        div.setAttribute("data-aos", "fade-up");
        div.setAttribute("data-aos-duration", "800");
        div.setAttribute("data-aos-delay", (index % 4) * 150);

        div.innerHTML = `
        <div class="card h-100 position-relative">

            <img src="${producto.imagen}" 
                 class="card-img-top" 
                 alt="${producto.alt}">

            <div class="card-body d-flex flex-column">

                <span class="card-tag">
                    ${producto.categoria}
                </span>

                <h6 class="card-title">
                    ${producto.nombre}
                </h6>

                <div class="card-divider"></div>

                <p class="card-price">
                    ${producto.precio}
                </p>

                <div class="card-divider"></div>

                <button class="btn-producto mt-auto">
                    Agregar al carrito
                </button>

            </div>
        </div>
    `;

        div.querySelector('.btn-producto')
            .addEventListener('click', () => {
                addToCart(producto);
            });

        container.appendChild(div);
    });

    AOS.refresh();
}

renderDestacados();