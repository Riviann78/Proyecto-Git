document.getElementById("btnCambio").addEventListener("click", function() {
    const colores = ["#ff5733", "#33ff57", "#3357ff", "#ff33a1", "#f4f4f4"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
});

const numeroSecreto = Math.floor(Math.random()* 10) + 1;

function verficarNumero() {
    let numeroUsuario = parseInt (document.getElementById("inputNumero").value);
    let mensaje = "";

    if (numeroUsuario === numeroSecreto) {
        mensaje = "¡Felicidades! Adivinaste el número secreto.";
    } else {
        mensaje = "Número incorrecto. Intenta de nuevo.";
    }

    document.getElementById("resultado").textContent = mensaje;
}