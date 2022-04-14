let activarOscuro = document.getElementById("activar");
let cuerpoOscuro = document.querySelector("body");
let logo = document.querySelector(".logo-container");
let menuLateral = document.querySelector(".menu-lateral")
let cabeza = document.querySelector(".cabeza");
let profile = document.querySelector(".profile");
let redesSociales = document.querySelector(".redes-sociales");
let descripcion = document.querySelector(".descripcion");
let redOscuro = document.querySelectorAll(".red");

activarOscuro.addEventListener("click", function(){
    cuerpoOscuro.classList.toggle("oscuro");
    logo.classList.toggle("tarjeta");
    menuLateral.classList.toggle("tarjeta");
    cabeza.classList.toggle("tarjeta");
    profile.classList.toggle("tarjeta");
    redesSociales.classList.toggle("tarjeta");
    descripcion.classList.toggle("tarjeta");
    activarOscuro.classList.toggle("activado");
    activarOscuro.style.right = 0;
    // redOscuro.classList.toggle("negro");
    redOscuro.forEach(item => {
        item.classList.toggle("negro");
    });
});