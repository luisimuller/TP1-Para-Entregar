
// carlos.js
// Efecto: Máquina de escribir en el título principal con cursor parpadeante

document.addEventListener('DOMContentLoaded', function() {
	const texto = 'Carlos HardDrive';
	const typewriter = document.getElementById('typewriter');
	const cursor = document.getElementById('cursor');
	if (!typewriter || !cursor) return;
	let i = 0;
	let cursorInterval;
	function escribir() {
		if (i < texto.length) {
			typewriter.textContent += texto.charAt(i);
			i++;
			setTimeout(escribir, 100);
		} else {
			clearInterval(cursorInterval);
			cursor.style.display = 'none';
		}
	}
	escribir();

	// Cursor parpadeante
	cursorInterval = setInterval(() => {
		cursor.style.visibility = (cursor.style.visibility === 'hidden') ? 'visible' : 'hidden';
	}, 500);
});
