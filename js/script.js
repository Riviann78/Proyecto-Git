document.getElementById("btnCambio").addEventListener("click", function() {
    const colores = ["#ff5733", "#33ff57", "#3357ff", "#ff33a1", "#f4f4f4"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
});