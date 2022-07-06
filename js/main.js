document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".menu-btn").classList.toggle("show");
});

/*MENU DESPLEGABLE*/
document.querySelector(".apartado").addEventListener("click", () => {
    document.querySelector(".sub-menu").classList.toggle("show");
});

document.querySelector(".apartado2").addEventListener("click", () => {
    document.querySelector(".sub-menu2").classList.toggle("show");
});

/*SEARCH*/
document.querySelector(".nav-menu-right").addEventListener("click", () => {
    document.querySelector(".search-btn").classList.toggle("show");
});

document.querySelector(".nav-menu-right").addEventListener("click", () => {
    document.querySelector(".xmark-btn").classList.toggle("search");
});;