/*=============================================
=          CART — Quesería del Campo          =
=============================================*/

const WHATSAPP_NUMBER = '5491168123784';

// ── LocalStorage ────────────────────────────
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
}

// ── Estado inicial ──────────────────────────
let cart = loadCart();

// ── Abrir / cerrar ──────────────────────────
function openCart() {

    document
        .querySelector('.cart-overlay')
        .classList.add('active');

    document
        .querySelector('.cart-sheet')
        .classList.add('active');

    document.body.style.overflow = 'hidden';
}

function closeCart() {

    document
        .querySelector('.cart-overlay')
        .classList.remove('active');

    document
        .querySelector('.cart-sheet')
        .classList.remove('active');

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

        cart.push({
            ...producto,
            cantidad: 1
        });
    }

    saveCart();
    renderCart();
    updateCartBadge();

    // ❌ Ya NO abre automáticamente
    // openCart();
}

// ── Cambiar cantidad ────────────────────────
function changeQty(nombre, delta) {

    const item = cart.find(
        i => i.nombre === nombre
    );

    if (!item) return;

    item.cantidad += delta;

    if (item.cantidad <= 0) {

        cart = cart.filter(
            i => i.nombre !== nombre
        );
    }

    saveCart();
    renderCart();
    updateCartBadge();
}

// ── Eliminar producto ───────────────────────
function removeItem(nombre) {

    cart = cart.filter(
        item => item.nombre !== nombre
    );

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

    return Number(
        precioStr.replace(/[^0-9]/g, '')
    );
}

// ── Total ───────────────────────────────────
function getTotal() {

    return cart.reduce((sum, item) => {

        return sum +
            parsePrecio(item.precio) *
            item.cantidad;

    }, 0);
}

// ── Badge del ícono ─────────────────────────
function updateCartBadge() {

    const badge = document.querySelector('.cart-badge');

    if (!badge) return;

    const totalItems = cart.reduce(
        (sum, item) => sum + item.cantidad,
        0
    );

    badge.textContent = totalItems;

    badge.style.display =
        totalItems > 0 ? 'flex' : 'none';
}

// ── Render del carrito ──────────────────────
function renderCart() {

    const cartItems =
        document.querySelector('.cart-items');

    const cartFooter =
        document.querySelector('.cart-footer');

    if (!cartItems) return;

    // ── Carrito vacío ───────────────────────
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

    // ── Mostrar footer ──────────────────────
    cartFooter.style.display = 'flex';

    // ── Render items ────────────────────────
    cartItems.innerHTML = cart.map(item => `

        <div class="cart-item">

            <img src="${item.imagen}" alt="${item.alt}">

            <div class="cart-item-info">

                <p>${item.nombre}</p>

                <span>${item.precio}</span>

            </div>

            <div class="cart-item-controls">

                <button
                    onclick="changeQty('${item.nombre.replace(/'/g, "\\'")}', -1)"
                >
                    −
                </button>

                <span>${item.cantidad}</span>

                <button
                    onclick="changeQty('${item.nombre.replace(/'/g, "\\'")}', 1)"
                >
                    +
                </button>

            </div>

            <!-- ❌ Eliminar -->
            <div class="cart-remove">

                <i 
                    class="bi bi-x"
                    onclick="removeItem('${item.nombre.replace(/'/g, "\\'")}')"
                ></i>

            </div>

        </div>

    `).join('');

    // ── Total ───────────────────────────────
    document.querySelector('.cart-total-amount')
        .textContent =
        '$' + getTotal().toLocaleString('es-AR');
}

// ── Enviar a WhatsApp ───────────────────────
function sendToWhatsApp() {

    if (cart.length === 0) return;

    let mensaje =
        '🧀 *Pedido — Quesería del Campo*\n\n';

    cart.forEach(item => {

        const subtotal =
            parsePrecio(item.precio) *
            item.cantidad;

        mensaje += `▪ *${item.nombre}*\n`;

        mensaje +=
            `Cantidad: ${item.cantidad} | ` +
            `Subtotal: $${subtotal.toLocaleString('es-AR')}\n\n`;

    });

    mensaje += `─────────────────────\n`;

    mensaje +=
        `💰 *Total: $${getTotal().toLocaleString('es-AR')}*\n\n`;

    mensaje +=
        `¡Hola! Me gustaría realizar este pedido 🙌`;

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;

    // ── Vaciar carrito ──────────────────────
    clearCart();

    // ── Cerrar cart sheet ───────────────────
    closeCart();

    // ── Abrir WhatsApp ──────────────────────
    window.open(url, '_blank');
}

// ── Init ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

    // Click overlay
    document
        .querySelector('.cart-overlay')
        ?.addEventListener('click', closeCart);

    // Restaurar carrito
    renderCart();

    // Restaurar badge
    updateCartBadge();
});