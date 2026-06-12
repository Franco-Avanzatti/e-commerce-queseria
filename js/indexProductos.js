/*=============================================
=        DESTACADOS — Quesería del Campo      =
=============================================*/

const productos = [

    // ── QUESOS ──────────────────────────────
    {
        nombre: "Cremoso Javifer por Horma",
        precio: "$7.200 xkg",
        pesoEstimado: "4 – 4.5 kg",
        imagen: "https://res.cloudinary.com/dgwhnezd8/image/upload/v1779300403/2_ajacm4.png",
        alt: "Cremoso Javifer",
        categoria: "quesos",
        tipoVenta: "horma"
    },
    {
        nombre: "Cremoso Punta del Agua por Horma",
        precio: "$9.200 xkg",
        pesoEstimado: "3.8 – 4.5 kg",
        imagen: "https://res.cloudinary.com/dgwhnezd8/image/upload/v1779300402/3_iwviux.png",
        alt: "Cremoso Punta del Agua",
        categoria: "quesos",
        tipoVenta: "horma"
    },
    {
        nombre: "Pategrast Melincue",
        precio: "$15.200 xkg",
        pesoEstimado: "4 – 4.5 kg",
        imagen: "https://res.cloudinary.com/dgwhnezd8/image/upload/v1779303045/copy_of_quesosduros-3_qogp3s.png",
        alt: "Pategrast Melincue",
        categoria: "quesos",
        tipoVenta: "horma"
    },
    // ── FIAMBES ─────────────────────────────
    {
        nombre: "Paleta Fox (Etiqueta Negra)",
        precio: "$8.600 xkg",
        pesoEstimado: "6 – 8 kg",
        imagen: "https://res.cloudinary.com/dgwhnezd8/image/upload/v1779474603/ChatGPT_Image_22_may_2026_03_12_12_p.m._ti0ky3.png",
        alt: "Paleta Fox Etiqueta Negra",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Jamon Natural Bajo en Sodio Fox",
        precio: "$14.500 xkg",
        pesoEstimado: "8 – 10 kg",
        imagen: "https://res.cloudinary.com/dgwhnezd8/image/upload/v1779300315/jamon-natural_wn9yfm.png",
        alt: "Jamon Natural Fox",
        categoria: "fiambres",
        tipoVenta: "horma"
    },
    {
        nombre: "Salame Milan Fox",
        precio: "$15.200 xkg",
        pesoEstimado: "2.2 – 2.8 kg",
        imagen: "https://res.cloudinary.com/dgwhnezd8/image/upload/v1779300317/salame-milan_mzkjsy.png",
        alt: "Salame Milan Fox",
        categoria: "fiambres",
        "tipoVenta": "horma"
    },

    // ── PICADAS ─────────────────────────────
    {
        "nombre": "Panceta Ahumada Fox",
        "precio": "$19.000 xkg",
        "pesoEstimado": "1.2 – 1.5 kg",
        "imagen": "https://res.cloudinary.com/dgwhnezd8/image/upload/v1779389901/ChatGPT_Image_21_may_2026_03_57_30_p.m._dmibmd.png",
        "alt": "Panceta Ahumada Fox",
        "categoria": "fiambres",
        "tipoVenta": "horma"
    },
    {
        "nombre": "Panceta Salada Fox",
        "precio": "$19.000 xkg",
        "pesoEstimado": "1.2 – 1.4 kg",
        "imagen": "https://res.cloudinary.com/dgwhnezd8/image/upload/v1779390745/Panceta_salada_libre_bxx8ye.png",
        "alt": "Panceta Salada Fox",
        "categoria": "fiambres",
        "tipoVenta": "horma"
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
        producto.nombre === "Pategrast Melincue" ||
        producto.nombre === "Panceta Ahumada Fox" ||
        producto.nombre === "Panceta Salada Fox"
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