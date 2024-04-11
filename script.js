document.addEventListener("DOMContentLoaded", function () {
  let gif = document.getElementById("background");

  let container = document.getElementById("container");
  let footer = document.getElementById("footer");

  // Función para cambiar el src de la imagen al segundo GIF después de un timeout
  function cambiarGIF() {
    gif.style.backgroundImage = 'url("assets/persona 3 gif2.gif")';

    container.style.display = "block";
    footer.style.display = "block";
  }

  // Cambiar el src después de 5 segundos (5000 milisegundos)
  setTimeout(cambiarGIF, 3500);
});
