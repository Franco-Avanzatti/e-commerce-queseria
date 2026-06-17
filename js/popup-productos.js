document.addEventListener("DOMContentLoaded", () => {

  const popupProductos = document.getElementById("popup-productos-overlay");
  const cerrarPopupProductos = document.getElementById("popup-productos-close");

  if (!sessionStorage.getItem("popupHormasProductos")) {
    popupProductos.style.display = "flex";
  }

  cerrarPopupProductos.addEventListener("click", () => {
    popupProductos.style.display = "none";
    sessionStorage.setItem("popupHormasProductos", "true");
  });

});