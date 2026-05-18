/*=============================================
=        PRODUCTOS — Quesería del Campo       =
=============================================*/

const productos = [

    // ── QUESOS ─────────────────────────────────────────────────────────────────
    // tipoVenta: 'horma' → precio/kg, peso estimado, sin total fijo
    // pesoEstimado: rango orientativo de la pieza entera (ajustá según tus hormas)

    {
        nombre: "Cremoso Javifer por Horma",
        precio: "$6.030 xkg",
        pesoEstimado: "3 – 4 kg",
        imagen: "/images/quesos/2.png",
        alt: "Cremoso Javifer",
        categoria: "quesos",
        tipoVenta: "horma"
    },
    {
        nombre: "Cremoso Punta del Agua por Horma",
        precio: "$6.200 xkg",
        pesoEstimado: "3 – 4 kg",
        imagen: "/images/quesos/3.png",
        alt: "Cremoso Punta del Agua",
        categoria: "quesos",
        tipoVenta: "horma"
    },
    {
        nombre: "Barra Javifer por Horma",
        precio: "$7.700 xkg",
        pesoEstimado: "3 – 5 kg",
        imagen: "/images/quesos/1.png",
        alt: "Barra Javifer",
        categoria: "quesos",
        tipoVenta: "horma"
    },
    {
        nombre: "Muzzarella Javifer por Horma",
        precio: "$7.200 xkg",
        pesoEstimado: "1 – 2 kg",
        imagen: "/images/quesos/4.png",
        alt: "Muzzarella Javifer",
        categoria: "quesos",
        tipoVenta: "horma"
    },

    // ── FIAMBRES ───────────────────────────────────────────────────────────────

    {
        nombre: "Paleta Fox (Etiqueta Azul)",
        precio: "$3.350 xkg",
        pesoEstimado: "6 – 8 kg",
        imagen: "/images/fiambres/Etiqueta-Azul.png",
        alt: "Paleta Fox Etiqueta Azul",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Paleta Fox (Etiqueta Amarilla)",
        precio: "$3.200 xkg",
        pesoEstimado: "6 – 8 kg",
        imagen: "/images/fiambres/Etiqueta-Amarilla.png",
        alt: "Paleta Fox Etiqueta Amarilla",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Paleta Fox (Etiqueta Roja)",
        precio: "$4.100 xkg",
        pesoEstimado: "6 – 8 kg",
        imagen: "/images/fiambres/Etiqueta-Roja.png",
        alt: "Paleta Fox Etiqueta Roja",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Paleta Fox (Etiqueta Negra)",
        precio: "$4.200 xkg",
        pesoEstimado: "6 – 8 kg",
        imagen: "/images/fiambres/Etiqueta-Negra.png",
        alt: "Paleta Fox Etiqueta Negra",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Jamon Natural Bajo en Sodio Fox",
        precio: "$5.200 xkg",
        pesoEstimado: "8 – 10 kg",
        imagen: "/images/fiambres/jamon-natural.png",
        alt: "Jamon Natural Fox",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Mortadela Bocha Fox",
        precio: "$3.200 xkg",
        pesoEstimado: "3 – 4 kg",
        imagen: "/images/fiambres/mortadela.png",
        alt: "Mortadela Fox",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Matambre de Pollo Fox",
        precio: "$4.100 xkg",
        pesoEstimado: "1,5 – 2 kg",
        imagen: "/images/fiambres/matambre-pollo.png",
        alt: "Matambre de Pollo Fox",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Salamines Fox",
        precio: "$4.200 xkg",
        pesoEstimado: "0,5 – 1 kg",
        imagen: "/images/fiambres/salamines-fox.png",
        alt: "Salamines Fox",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Salame Milan Fox",
        precio: "$3.350 xkg",
        pesoEstimado: "1 – 2 kg",
        imagen: "/images/fiambres/salame-milan.png",
        alt: "Salame Milan Fox",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Salame Crespon Fox",
        precio: "$3.200 xkg",
        pesoEstimado: "1 – 2 kg",
        imagen: "/images/fiambres/salame-crespon.png",
        alt: "Salame Crespon Fox",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Salchichon c/Jamon Fox",
        precio: "$4.100 xkg",
        pesoEstimado: "1,5 – 2,5 kg",
        imagen: "/images/fiambres/salchichon-jamon.png",
        alt: "Salchichon con Jamon Fox",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Salchichon Primavera Fox",
        precio: "$4.200 xkg",
        pesoEstimado: "1,5 – 2,5 kg",
        imagen: "/images/fiambres/salchichon-primavera.png",
        alt: "Salchichon Primavera Fox",
        categoria: "fiambres",
        tipoVenta: "horma"
    },

    // ── PICADAS ────────────────────────────────────────────────────────────────
    // tipoVenta: 'fijo' → precio fijo, se suma al total del carrito

    {
        nombre: "Tabla de Quesos y Fiambre Para 10 Personas",
        precio: "$3.350",
        imagen: "/images/picadas/picada-1.png",
        alt: "Tabla para 10 personas",
        categoria: "picadas",
        tipoVenta: "fijo"
    },
    {
        nombre: "Tabla de Quesos y Fiambre Para 6 Personas",
        precio: "$3.200",
        imagen: "/images/picadas/picada-2.png",
        alt: "Tabla para 6 personas",
        categoria: "picadas",
        tipoVenta: "fijo"
    },
    {
        nombre: "Tabla de Quesos y Fiambre Para 5 Personas",
        precio: "$4.100",
        imagen: "/images/picadas/picada-3.png",
        alt: "Tabla para 5 personas",
        categoria: "picadas",
        tipoVenta: "fijo"
    },
    {
        nombre: "Tabla de Quesos y Fiambre Para 8 Personas",
        precio: "$4.200",
        imagen: "/images/picadas/picada-4.png",
        alt: "Tabla para 8 personas",
        categoria: "picadas",
        tipoVenta: "fijo"
    },
];

/*----------------------------------------------
  renderProductos(categoria)
  Genera las cards según el tipo de venta:
    • 'horma' → precio/kg + peso estimado + nota
    • 'fijo'  → precio fijo, sin nota adicional
----------------------------------------------*/
function renderProductos(categoria) {

    const container = document.querySelector(`#row-${categoria}`);
    if (!container) return;

    const filtrados = productos.filter(p => p.categoria === categoria);

    filtrados.forEach(producto => {

        const div = document.createElement('div');
        div.className = 'col';

        // ── Card para HORMAS (precio variable) ─────────────────
        if (producto.tipoVenta === 'horma') {

            div.innerHTML = `
                <div class="card h-100 position-relative">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.alt}">
                    <div class="card-body">

                        <span class="card-tag">${producto.categoria}</span>
                        <h6 class="card-title">${producto.nombre}</h6>
                        <div class="card-divider"></div>

                        <!-- Precio por kilo -->
                        <p class="card-price">${producto.precio}</p>

                        <!-- Peso estimado de la pieza -->
                        <p class="card-peso">
                            <i class="bi bi-box-seam"></i>
                            Peso estimado: <strong>${producto.pesoEstimado}</strong>
                        </p>

                        <!-- Aclaración precio variable -->
                        <p class="card-nota-horma">
                            <i class="bi bi-info-circle"></i>
                            El precio final se determina al momento del pesaje.
                        </p>

                        <div class="card-divider mt-auto"></div>
                        <button class="btn-producto">Agregar al carrito</button>
                    </div>
                </div>
            `;

        // ── Card para PRECIO FIJO (picadas, etc.) ──────────────
        } else {

            div.innerHTML = `
                <div class="card h-100 position-relative">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.alt}">
                    <div class="card-body">

                        <span class="card-tag">${producto.categoria}</span>
                        <h6 class="card-title">${producto.nombre}</h6>
                        <div class="card-divider"></div>

                        <p class="card-price">${producto.precio}</p>

                        <div class="card-divider mt-auto"></div>
                        <button class="btn-producto">Agregar al carrito</button>
                    </div>
                </div>
            `;
        }

        // ── Conectar botón al carrito ───────────────────────────
        div.querySelector('.btn-producto').addEventListener('click', () => {
            addToCart(producto);
        });

        container.appendChild(div);
    });
}

renderProductos('quesos');
renderProductos('fiambres');
renderProductos('picadas');