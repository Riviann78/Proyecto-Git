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

function actualizarReloj() {
    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    const horaActual = horas + ":" + minutos + ":" + segundos;
    document.getElementById("reloj").innerText = horaActual;
}

setInterval(actualizarReloj, 1000);

actualizarReloj();

let display = document.getElementById('display');

function agregarValor(valor) {
    display.value += valor;
}

function limpiar() {
    display.value = '';
}

function calcularResultado() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}