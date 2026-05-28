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
                Peso estimado: <strong>${producto.pesoEstimado}</strong>
            </p>
            <p class="card-nota-horma">
                <i class="bi bi-info-circle"></i>
                El precio final se determina al momento del pesaje.
            </p>
        `
        : '';

    // ── Contenido extra para picadas ───────
    const infoPicada = producto.categoria === 'picadas'
        ? `
            <p class="card-nota-horma">
                <i class="bi bi-info-circle"></i>
                El precio se confirma según la selección.
            </p>
        `
        : '';

    // ── Selector de variedades para almacén ─
    const tieneVariedades =
        producto.categoria === 'almacen' &&
        Array.isArray(producto.variedades) &&
        producto.variedades.length > 0;

    const infoAlmacen = producto.categoria === 'almacen'
        ? `
            <p class="card-nota-horma">
                <i class="bi bi-info-circle"></i>
                x4 unidades. Combinables entre variedades.
            </p>
            ${tieneVariedades ? `
            <div class="card-variedades">
                <p class="card-variedades-label">
                    <i class="bi bi-funnel"></i> Elegí tu variedad:
                </p>
                <div class="card-variedades-pills">
                    ${producto.variedades.map((v, i) => `
                        <button
                            type="button"
                            class="pill-variedad ${i === 0 ? 'activa' : ''}"
                            data-variedad="${v}"
                        >${v}</button>
                    `).join('')}
                </div>
            </div>
            ` : ''}
        `
        : '';

    div.innerHTML = `
        <div class="card h-100 position-relative">
            <img
                src="${producto.imagen}"
                class="card-img-top"
                alt="${producto.alt}"
                loading="lazy"
            >
            <div class="card-body d-flex flex-column">
                <span class="card-tag">${producto.categoria}</span>
                <h6 class="card-title">${producto.nombre}</h6>
                <div class="card-divider"></div>
                <p class="card-price">${
                    producto.categoria === 'picadas'
                        ? 'A confirmar'
                        : producto.precio
                }</p>
                ${infoHorma}
                ${infoPicada}
                ${infoAlmacen}
                <div class="mt-auto w-100">
                    <div class="card-divider"></div>
                    <button class="btn-producto">Agregar al carrito</button>
                </div>
            </div>
        </div>
    `;

    // ── Lógica de pills ────────────────────
    if (tieneVariedades) {
        const pills = div.querySelectorAll('.pill-variedad');

        pills.forEach(pill => {
            pill.addEventListener('click', () => {
                pills.forEach(p => p.classList.remove('activa'));
                pill.classList.add('activa');
            });
        });
    }

    // ── Evento carrito ─────────────────────
    div.querySelector('.btn-producto')
        .addEventListener('click', () => {

            // Si tiene variedades, incluye la seleccionada
            if (tieneVariedades) {
                const activa = div.querySelector('.pill-variedad.activa');
                const variedadElegida = activa ? activa.dataset.variedad : null;
                addToCart({ ...producto, variedadElegida });
            } else {
                addToCart(producto);
            }

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