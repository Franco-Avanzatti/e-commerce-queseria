/*=============================================
=        DESTACADOS — Quesería del Campo      =
=============================================*/

const productos = [

    // ── QUESOS ──────────────────────────────
    {
        nombre: "Cremoso Javifer por Horma",
        precio: "$6030 xkg",
        pesoEstimado: "3 – 4 kg",
        imagen: "/images/quesos/2.png",
        alt: "Cremoso Javifer",
        categoria: "quesos",
        tipoVenta: "horma"
    },
    {
        nombre: "Cremoso Punta del Agua por Horma",
        precio: "$6200 xkg",
        pesoEstimado: "3 – 4 kg",
        imagen: "/images/quesos/3.png",
        alt: "Cremoso Punta del Agua",
        categoria: "quesos",
        tipoVenta: "horma"
    },
    {
        nombre: "Barra Javifer por Horma",
        precio: "$7700 xkg",
        pesoEstimado: "3 – 5 kg",
        imagen: "/images/quesos/1.png",
        alt: "Barra Javifer",
        categoria: "quesos",
        tipoVenta: "horma"
    },
    {
        nombre: "Muzzarella Javifer por Horma",
        precio: "$7200 xkg",
        pesoEstimado: "1 – 2 kg",
        imagen: "/images/quesos/4.png",
        alt: "Muzzarella Javifer",
        categoria: "quesos",
        tipoVenta: "horma"
    },

    // ── FIAMBRES ────────────────────────────
    {
        nombre: "Paleta Fox (Etiqueta Azul)",
        precio: "$3350 xkg",
        pesoEstimado: "6 – 8 kg",
        imagen: "/images/fiambres/Etiqueta-Azul.png",
        alt: "Paleta Fox Etiqueta Azul",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Paleta Fox (Etiqueta Amarilla)",
        precio: "$3200 xkg",
        pesoEstimado: "6 – 8 kg",
        imagen: "/images/fiambres/Etiqueta-Amarilla.png",
        alt: "Paleta Fox Etiqueta Amarilla",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Paleta Fox (Etiqueta Roja)",
        precio: "$4100 xkg",
        pesoEstimado: "6 – 8 kg",
        imagen: "/images/fiambres/Etiqueta-Roja.png",
        alt: "Paleta Fox Etiqueta Roja",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Paleta Fox (Etiqueta Negra)",
        precio: "$4200 xkg",
        pesoEstimado: "6 – 8 kg",
        imagen: "/images/fiambres/Etiqueta-Negra.png",
        alt: "Paleta Fox Etiqueta Negra",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Jamon Natural Bajo en Sodio Fox",
        precio: "$5200 xkg",
        pesoEstimado: "8 – 10 kg",
        imagen: "/images/fiambres/jamon-natural.png",
        alt: "Jamon Natural Fox",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Mortadela Bocha Fox",
        precio: "$3200 xkg",
        pesoEstimado: "3 – 4 kg",
        imagen: "/images/fiambres/mortadela.png",
        alt: "Mortadela Fox",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Matambre de Pollo Fox",
        precio: "$4100 xkg",
        pesoEstimado: "1,5 – 2 kg",
        imagen: "/images/fiambres/matambre-pollo.png",
        alt: "Matambre de Pollo Fox",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Salamines Fox",
        precio: "$4200 xkg",
        pesoEstimado: "0,5 – 1 kg",
        imagen: "/images/fiambres/salamines-fox.png",
        alt: "Salamines Fox",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Salame Milan Fox",
        precio: "$3350 xkg",
        pesoEstimado: "1 – 2 kg",
        imagen: "/images/fiambres/salame-milan.png",
        alt: "Salame Milan Fox",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Salame Crespon Fox",
        precio: "$3200 xkg",
        pesoEstimado: "1 – 2 kg",
        imagen: "/images/fiambres/salame-crespon.png",
        alt: "Salame Crespon Fox",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Salchichon c/Jamon Fox",
        precio: "$4100 xkg",
        pesoEstimado: "1,5 – 2,5 kg",
        imagen: "/images/fiambres/salchichon-jamon.png",
        alt: "Salchichon con Jamon Fox",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Salchichon Primavera Fox",
        precio: "$4200 xkg",
        pesoEstimado: "1,5 – 2,5 kg",
        imagen: "/images/fiambres/salchichon-primavera.png",
        alt: "Salchichon Primavera Fox",
        categoria: "fiambres",
        tipoVenta: "horma"
    },

    // ── PICADAS ─────────────────────────────
    {
        nombre: "Tabla de Quesos y Fiambre Para 10 Personas",
        precio: "$3350",
        imagen: "/images/picadas/picada-1.png",
        alt: "Tabla para 10 personas",
        categoria: "picadas",
        tipoVenta: "fijo"
    },
    {
        nombre: "Tabla de Quesos y Fiambre Para 6 Personas",
        precio: "$3200",
        imagen: "/images/picadas/picada-2.png",
        alt: "Tabla para 6 personas",
        categoria: "picadas",
        tipoVenta: "fijo"
    },
    {
        nombre: "Tabla de Quesos y Fiambre Para 5 Personas",
        precio: "$4100",
        imagen: "/images/picadas/picada-3.png",
        alt: "Tabla para 5 personas",
        categoria: "picadas",
        tipoVenta: "fijo"
    },
    {
        nombre: "Tabla de Quesos y Fiambre Para 8 Personas",
        precio: "$4200",
        imagen: "/images/picadas/picada-4.png",
        alt: "Tabla para 8 personas",
        categoria: "picadas",
        tipoVenta: "fijo"
    },
];

/*=============================================
=              DESTACADOS                     =
=============================================*/

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

        // ── PRODUCTOS POR HORMA ─────────────
        if (producto.tipoVenta === 'horma') {

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

                        <p class="card-peso">
                            <i class="bi bi-box-seam"></i>
                            Peso estimado:
                            <strong>${producto.pesoEstimado}</strong>
                        </p>

                        <p class="card-nota-horma">
                            <i class="bi bi-info-circle"></i>
                            El precio final se determina al momento del pesaje.
                        </p>

                        <div class="card-divider"></div>

                        <button class="btn-producto mt-auto">
                            Agregar al carrito
                        </button>

                    </div>
                </div>
            `;

        // ── PRODUCTOS FIJOS ─────────────────
        } else {

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
        }

        div.querySelector('.btn-producto')
            .addEventListener('click', () => {
                addToCart(producto);
            });

        container.appendChild(div);
    });

    AOS.refresh();
}

renderDestacados();