// Muestra el popup solo una vez por sesión
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup-overlay");
  const closeBtn = document.getElementById("popup-close");

  // Si ya lo vio en esta sesión, no lo mostramos
  if (!sessionStorage.getItem("popupVisto")) {
    popup.style.display = "flex";
  } else {
    popup.style.display = "none";
  }

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
    sessionStorage.setItem("popupVisto", "true");
  });
});