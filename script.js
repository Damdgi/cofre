const frase = "Brilla con inmensidad en las noches más oscuras";

const elementoFrase = document.getElementById("frase");
const botonComenzar = document.getElementById("comenzar");
const contenido = document.getElementById("contenido");

let indice = 0;

function escribirFrase() {
    if (indice < frase.length) {
        elementoFrase.textContent += frase.charAt(indice);
        indice++;

        setTimeout(escribirFrase, 90);
    } else {
        botonComenzar.hidden = false;
    }
}

window.addEventListener("load", escribirFrase);

botonComenzar.addEventListener("click", function () {
    contenido.hidden = false;

    contenido.scrollIntoView({
        behavior: "smooth"
    });
});