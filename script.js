document.addEventListener('DOMContentLoaded', function() {
  let gif = document.getElementById('background');

  // Función para cambiar el src de la imagen al segundo GIF después de un timeout
  function cambiarGIF() {
    gif.style.backgroundImage  = 'url("assets/persona 3 gif2.gif")';
  }

  // Cambiar el src después de 5 segundos (5000 milisegundos)
  setTimeout(cambiarGIF, 5000);
});
