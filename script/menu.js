let menu = document.querySelector(".menu-lateral");
let mas = document.querySelector(".mas");
let menos = document.querySelector(".cerrar");

mas.addEventListener("click", function(){
    menu.classList.toggle("abierto");
});

menos.addEventListener("click", function(){
    menu.classList.remove("abierto");
});
