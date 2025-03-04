document.getElementById("btnCambio").addEventListener("click", function() {
    const colores = ["#ff5733", "#33ff57", "#3357ff", "#ff33a1", "#f4f4f4"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
});

const numeroSecreto = Math.floor(Math.random()* 10) + 1;

document.getElementById("botonAdivinar").addEventListener("click", function () {

    let input = document.getElementById("inputNumero");
    let resultado = document.getElementById("resultado");

    let numeroUsuario = parseInt(input.value);

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        resultado.textContent = "Ingresa un número válido entre 1 y 100";
        return;
    }

    if (numeroUsuario === numeroSecreto) {
        resultado.textContent = "¡Felicidades! Adivinaste el número.";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Número incorrecto. Intenta de nuevo.";
        resultado.style.color = "red";
    }
});

