// Variables
const startButton = document.getElementById('startButton');
const thrillerAudio = document.getElementById('thrillerAudio');
const zombiesDiv = document.getElementById('zombies');

// Función para iniciar la canción y mostrar los zombies
startButton.addEventListener('click', () => {
    // Reproducir música
    thrillerAudio.play();

    // Mostrar imagen de los zombies
    zombiesDiv.classList.remove('hidden');

    // Desactivar el botón
    startButton.disabled = true;
    startButton.textContent = '¡Escuchando Thriller!';

    // Agregar sonido adicional o efectos si lo deseas
    thrillerAudio.loop = true; // Loop para mantener la música
});
