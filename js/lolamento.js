document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll("#Peliculas-favoritas h3");
  const modal  = document.getElementById("modal");
  const close  = document.getElementById("cerrar");

  function openModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // bloquea scroll
  }
  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }


  titles.forEach(t => {
    t.setAttribute("tabindex", "0"); 
    t.setAttribute("role", "button");
    t.addEventListener("click", openModal);
    t.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(); }
    });
  });

  // cerrar modal
  close.addEventListener("click", closeModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
});
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const starCount = 30; // cantidad de estrellas
  const headerWidth = header.offsetWidth;
  const headerHeight = header.offsetHeight;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("span");
    star.classList.add("header-star");
    star.textContent = "✦";

    // Posición aleatoria
    star.style.left = Math.random() * headerWidth + "px";
    star.style.top = Math.random() * headerHeight + "px";

    // Tamaño aleatorio
    const size = 8 + Math.random() * 12; // entre 8px y 20px
    star.style.fontSize = size + "px";

    // Animación aleatoria
    star.style.animationDuration = 1 + Math.random() * 2 + "s";
    star.style.animationDelay = Math.random() * 2 + "s";

    header.appendChild(star);
  }
});