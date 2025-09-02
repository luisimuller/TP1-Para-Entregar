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

  // hacer títulos clickeables
  titles.forEach(t => {
    t.setAttribute("tabindex", "0"); // accesible con teclado
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
