
// Función que genera un color aleatorio de los tres disponibles
function coloraleatorio() {
    const colors = ["green", "blue", "red"];
    return colors[Math.floor(Math.random() * colors.length)];
}
// Defino una constante que tenga colores
// la funcion math me genera un numero aleatorio netre 0 y 1 
// y ese se multiplica or un numero aleatorio para la longitud del array osea 3 
// y me va a dar un colo aleatorio de esos 3 

// Función que cambia el color de un h5 al hacer clic
function cambioh3() {
    this.style.color = coloraleatorio(); 
}

// Agregar un evento de clic a todos los elementos con la clase "h5"
document.getElementsByClassName("h3");

for (let i = 0; i < elementosH5.length; i++) {
    elementosH5[i].addEventListener("click", cambioh3);

}



// document.getElementsByClassName("h5").addEventListener = "click", cambioh5;
// El event listener sirve para agregar funciones al html por ejemplo click en el boton para que haga una funcion 
// arrastrar imagn o hacer interaccion 
