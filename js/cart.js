/*=============================================
=          CART — Quesería del Campo          =
=============================================*/

const WHATSAPP_NUMBER = '5491121834079';

// ── LocalStorage ────────────────────────────
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
}

// ── Estado inicial ──────────────────────────
let cart = loadCart();

// ── Abrir / cerrar ──────────────────────────
function openCart() {
    document.querySelector('.cart-overlay').classList.add('active');
    document.querySelector('.cart-sheet').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.querySelector('.cart-overlay').classList.remove('active');
    document.querySelector('.cart-sheet').classList.remove('active');
    document.body.style.overflow = '';
}

// ── Agregar producto ────────────────────────
function addToCart(producto) {

    const existing = cart.find(
        item => item.nombre === producto.nombre
    );

    if (existing) {
        existing.cantidad++;
    } else {
        cart.push({ ...producto, cantidad: 1 });
    }

    saveCart();
    renderCart();
    updateCartBadge();
}

// ── Cambiar cantidad ────────────────────────
function changeQty(nombre, delta) {

    const item = cart.find(i => i.nombre === nombre);
    if (!item) return;

    item.cantidad += delta;

    if (item.cantidad <= 0) {
        cart = cart.filter(i => i.nombre !== nombre);
    }

    saveCart();
    renderCart();
    updateCartBadge();
}

// ── Eliminar producto ───────────────────────
function removeItem(nombre) {
    cart = cart.filter(item => item.nombre !== nombre);
    saveCart();
    renderCart();
    updateCartBadge();
}

// ── Vaciar carrito ──────────────────────────
function clearCart() {
    cart = [];
    saveCart();
    renderCart();
    updateCartBadge();
}

// ── Extraer número del precio ───────────────
function parsePrecio(precioStr) {
    return Number(precioStr.replace(/[^0-9]/g, ''));
}

// ── Total (solo productos de precio fijo) ───
function getTotal() {
    return cart
        .filter(item => item.tipoVenta === 'fijo')
        .reduce((sum, item) => {
            return sum + parsePrecio(item.precio) * item.cantidad;
        }, 0);
}

// ── Badge del ícono ─────────────────────────
function updateCartBadge() {

    const badge = document.querySelector('.cart-badge');
    if (!badge) return;

    const totalItems = cart.reduce(
        (sum, item) => sum + item.cantidad, 0
    );

    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
}

// ── Helper: HTML de un ítem del carrito ─────
function itemHTML(item) {

    const nombreEsc = item.nombre.replace(/'/g, "\\'");

    const precioLabel = item.tipoVenta === 'horma'
        ? `<span class="cart-item-xkg">${item.precio}</span>`
        : `<span>${item.precio}</span>`;

    return `
        <div class="cart-item">
            <img src="${item.imagen}" alt="${item.alt}">
            <div class="cart-item-info">
                <p>${item.nombre}</p>
                ${precioLabel}
            </div>
            <div class="cart-item-controls">
                <button onclick="changeQty('${nombreEsc}', -1)">−</button>
                <span>${item.cantidad}</span>
                <button onclick="changeQty('${nombreEsc}', 1)">+</button>
            </div>
            <div class="cart-remove">
                <i class="bi bi-x" onclick="removeItem('${nombreEsc}')"></i>
            </div>
        </div>
    `;
}

// ── Render del carrito ──────────────────────
function renderCart() {

    const cartItems = document.querySelector('.cart-items');
    const cartFooter = document.querySelector('.cart-footer');

    if (!cartItems) return;

    // ── Carrito vacío ───────────────────────────────────────────
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="bi bi-bag-x"></i>
                <p>Tu carrito está vacío</p>
            </div>
        `;
        cartFooter.style.display = 'none';
        return;
    }

    cartFooter.style.display = 'flex';

    // ── Separar ítems por tipo de venta ────────────────────────
    const hormas = cart.filter(i => i.tipoVenta === 'horma');
    const fijos = cart.filter(i => i.tipoVenta === 'fijo');

    let html = '';

    // ── Sección HORMAS ──────────────────────────────────────────
    if (hormas.length > 0) {
        html += `
            <div class="cart-section-header">
                <i class="bi bi-basket2"></i>
                Venta de Hormas
            </div>
        `;
        html += hormas.map(itemHTML).join('');
        html += `
            <p class="cart-horma-nota">
                <i class="bi bi-info-circle"></i>
                El precio final de cada horma se confirma al momento del pesaje.
            </p>
        `;
    }

    // ── Divisor (solo si hay ambos tipos) ──────────────────────
    if (hormas.length > 0 && fijos.length > 0) {
        html += `<div class="cart-section-divider"></div>`;
    }

    // ── Sección PRECIO FIJO ─────────────────────────────────────
    if (fijos.length > 0) {
        html += `
            <div class="cart-section-header">
                <i class="bi bi-bag-check"></i>
                Otros productos
            </div>
        `;
        html += fijos.map(itemHTML).join('');
    }

    cartItems.innerHTML = html;

    // ── Total hormas en footer ──────────────────────────────────
    const hormasSummary = document.querySelector('.cart-hormas-summary');
    const hormasLabel = document.querySelector('.cart-hormas-label');

    if (hormasSummary && hormasLabel) {
        if (hormas.length > 0) {
            const totalUnidades = hormas.reduce(
                (sum, i) => sum + i.cantidad, 0
            );
            hormasLabel.textContent = `Total hormas (${totalUnidades}):`;
            hormasSummary.style.display = 'flex';
        } else {
            hormasSummary.style.display = 'none';
        }
    }

    // ── Total fijos en footer ───────────────────────────────────
    const totalEl = document.querySelector('.cart-total-amount');
    if (totalEl) {
        const total = getTotal();
        totalEl.textContent = total > 0
            ? '$' + total.toLocaleString('es-AR')
            : '—';
    }

    // ── Etiqueta del total ──────────────────────────────────────
    const totalLabel = document.querySelector('.cart-total-label');
    if (totalLabel) {
        totalLabel.textContent = hormas.length > 0 && fijos.length > 0
            ? 'Total (sin hormas):'
            : 'Total:';
    }
}


// ── Enviar a WhatsApp ───────────────────────
function sendToWhatsApp() {

    if (cart.length === 0) return;

    const hormas = cart.filter(i => i.tipoVenta === 'horma');
    const fijos = cart.filter(i => i.tipoVenta === 'fijo');

    let mensaje = '🧀 *Pedido — Quesería del Campo*\n\n';

    let totalFijos = 0;

    // ── HORMAS ───────────────────────────────
    if (hormas.length > 0) {

        const totalUnidades = hormas.reduce(
            (sum, i) => sum + i.cantidad, 0
        );

        mensaje += '───────────────\n';
        mensaje += '🥩 *VENTA DE HORMAS*\n';
        mensaje += '_(precio sujeto al pesaje final)_\n\n';

        hormas.forEach(item => {

            mensaje += `🔸 *${item.nombre}*\n`;
            mensaje += `📦 Cantidad: ${item.cantidad}\n`;

        });

        mensaje += `📊 *Total hormas:* ${totalUnidades} unidades\n`;
        mensaje += `⚖️ *Importe:* A confirmar al pesar\n\n`;
    }

    // ── PRODUCTOS FIJOS ─────────────────────
    if (fijos.length > 0) {

        mensaje += '───────────────\n';
        mensaje += '🛒 *PRODUCTOS DE PRECIO FIJO*\n\n';

        fijos.forEach(item => {

            const subtotal =
                parsePrecio(item.precio) * item.cantidad;

            totalFijos += subtotal;

            mensaje += `🔸 *${item.nombre}*\n`;
            mensaje += `📦 Cantidad: ${item.cantidad}\n`;
            mensaje += `💵 Subtotal: $${subtotal.toLocaleString('es-AR')}\n\n`;

        });

        mensaje += `💰 *Total productos fijos:* $${totalFijos.toLocaleString('es-AR')}\n\n`;
    }

    // ── RESUMEN FINAL ───────────────────────
    mensaje += '───────────────\n';
    mensaje += '📋 *RESUMEN FINAL*\n';

    if (hormas.length > 0) {
        mensaje += '⚖️ Hormas: A confirmar\n';
    }

    if (fijos.length > 0) {
        mensaje += `💰 Productos fijos: $${totalFijos.toLocaleString('es-AR')}\n`;
    }

    mensaje += '\n🙌 ¡Hola! Quisiera realizar este pedido.';

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;

    clearCart();
    closeCart();

    window.open(url, '_blank');
}

// ── Init ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

    document
        .querySelector('.cart-overlay')
        ?.addEventListener('click', closeCart);

    renderCart();
    updateCartBadge();
});