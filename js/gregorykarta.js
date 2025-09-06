console.log("JS cargado correctamente");

const canvas = document.getElementById("laserCanvas");
const ctx = canvas.getContext("2d");
const profilePic = document.getElementById("profile-pic");

// Ajustar tamaño del canvas a la pantalla
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// efecto neón
function drawLaser(x1, y1, x2, y2, color) {
  ctx.save();

  // Efecto neón
  ctx.shadowBlur = 40;      // Tamaño del brillo
  ctx.shadowColor = color;  // Color del brillo

  // Línea principal
  ctx.strokeStyle = color;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  ctx.restore();
}

// los rayos saalen desde el centro de la foto
function shootLasers() {
  const rect = profilePic.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

 const intensity = Math.random() * 0.2 + 0.5; // Entre 0.3s y 0.5s
  document.body.style.animationDuration = `${intensity}s`;
  document.body.classList.add("shake-effect");

  // después de 300ms se puede volver a activar
  setTimeout(() => {
    document.body.classList.remove("shake-effect");
  }, 300);

  // Genera los rayos láser
  for (let i = 0; i < 20; i++) {
    const targetX = Math.random() * canvas.width;
    const targetY = Math.random() * canvas.height;

    // Color amarillo neón
    const neonColor = "rgb(255, 255, 0)";

    drawLaser(centerX, centerY, targetX, targetY, neonColor);
  }

  // Limpia los rayos después de 500ms
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 500);
}

// Detectar mouse pasa por encima
profilePic.addEventListener("mouseenter", shootLasers);
