let productos = [];

/*=============================================
=         CARGAR PRODUCTOS DESDE JSON         =
=============================================*/

async function cargarProductos() {

    try {

        const response = await fetch('/data/productos.json');
        productos = await response.json();

        renderProductos('quesos');
        renderProductos('fiambres');
        renderProductos('picadas');
        renderProductos('almacen');

        // ── Scroll al anchor DESPUÉS de renderizar ──
        if (window.location.hash) {
            const target = document.querySelector(window.location.hash);
            if (target) {
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth' });
                }, 50);
            }
        }

    } catch (error) {
        console.error('Error cargando productos:', error);
    }

}

/*=============================================
=           CONFIGURACIÓN GENERAL             =
=============================================*/

const PRODUCTOS_POR_CARGA = 5;

const productosRenderizados = {

    quesos: 0,
    fiambres: 0,
    picadas: 0,
    almacen: 0

};

/*=============================================
=           LIMPIAR CATEGORÍA                 =
=============================================*/

function limpiarCategoria(categoria) {

    const container = document.querySelector(
        `#row-${categoria}`
    );

    if (!container) return;

    // ── Limpiar cards ──────────────────────
    container.innerHTML = '';

    // ── Reiniciar contador ─────────────────
    productosRenderizados[categoria] = 0;

    // ── Mostrar nuevamente botón ───────────
    const boton = document.querySelector(
        `.btn-ver-mas[data-categoria="${categoria}"]`
    );

    if (boton) {

        boton.style.display = 'inline-block';

    }

}

/*=============================================
=          CREAR CARD PRODUCTO                =
=============================================*/

function crearCardProducto(producto) {

    const div = document.createElement('div');

    div.className = 'col';

    // ── Contenido extra para hormas ────────
    const infoHorma = producto.tipoVenta === 'horma'
        ? `
            <p class="card-peso">
                <i class="bi bi-box-seam"></i>

                Peso estimado:
                <strong>
                    ${producto.pesoEstimado}
                </strong>
            </p>

            <p class="card-nota-horma">
                <i class="bi bi-info-circle"></i>

                El precio final se determina
                al momento del pesaje.
            </p>
        `
        : '';

    // ── Contenido extra para almacén ───────
    const infoAlmacen = producto.categoria === 'almacen'
        ? `
            <p class="card-nota-horma">
                <i class="bi bi-info-circle"></i>

                x4 unidades. Combinables entre variedades.
            </p>
        `
        : '';

    // ── Template general reutilizable ──────
    div.innerHTML = `
        <div class="card h-100 position-relative">

            <img 
                src="${producto.imagen}" 
                class="card-img-top" 
                alt="${producto.alt}"
                loading="lazy"
            >

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

                ${infoHorma}
                ${infoAlmacen}

                <div class="mt-auto w-100">

                    <div class="card-divider"></div>

                    <button class="btn-producto">
                        Agregar al carrito
                    </button>

                </div>
            </div>
        </div>
    `;

    // ── Evento carrito ─────────────────────
    div.querySelector('.btn-producto')
        .addEventListener('click', () => {

            addToCart(producto);

        });

    return div;

}

/*=============================================
=             RENDER PRODUCTOS                =
=============================================*/

function renderProductos(categoria) {

    const container = document.querySelector(
        `#row-${categoria}`
    );

    if (!container) return;

    // ── Evitar duplicados ──────────────────
    if (productosRenderizados[categoria] === 0) {

        container.innerHTML = '';

    }

    // ── Filtrar productos ──────────────────
    const filtrados = productos.filter(
        producto => producto.categoria === categoria
    );

    // ── Control de paginado ────────────────
    const inicio = productosRenderizados[categoria];

    const fin = inicio + PRODUCTOS_POR_CARGA;

    const lote = filtrados.slice(inicio, fin);

    // ── Renderizar cards ───────────────────
    lote.forEach(producto => {

        const card = crearCardProducto(producto);

        container.appendChild(card);

    });

    // ── Actualizar contador ────────────────
    productosRenderizados[categoria] += lote.length;

    // ── Ocultar botón si no hay más ────────
    const boton = document.querySelector(
        `.btn-ver-mas[data-categoria="${categoria}"]`
    );

    if (
        boton &&
        productosRenderizados[categoria] >= filtrados.length
    ) {

        boton.style.display = 'none';

    }

}

/*=============================================
=            BOTONES VER MÁS                  =
=============================================*/

document.querySelectorAll('.btn-ver-mas')
    .forEach(boton => {

        boton.addEventListener('click', () => {

            const categoria = boton.dataset.categoria;

            renderProductos(categoria);

        });

    });

/*=============================================
=                  INIT                       =
=============================================*/

cargarProductos();