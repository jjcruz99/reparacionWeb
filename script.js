function colorAleatorio() {
    const colors = ["green", "blue", "red"];
    const randomColors = colors[Math.floor(Math.random() * colors.length)];
    return randomColors;
}

// Agregar un evento de clic al documento
document.addEventListener("click", function () {
    const elements = document.getElementsByTagName("h5"); // Obtiene todas las etiquetas <h5>
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = colorAleatorio(); // Cambia el color de cada etiqueta <h5>
    }
    
});
