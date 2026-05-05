// 🔹 ELEMENTOS
const menuToggle = document.getElementById("menuToggle");
const menuLinks = document.getElementById("menuLinks");
const btnModo = document.getElementById("modoBtn");

// 🔹 MENU HAMBURGUESA
menuToggle.addEventListener("click", () => {
    menuLinks.classList.toggle("show");
});

// 🔹 CERRAR MENU AL HACER CLICK EN UN LINK
document.querySelectorAll("#menuLinks a").forEach(link => {
    link.addEventListener("click", () => {
        menuLinks.classList.remove("show");
    });
});

// 🔹 BOTÓN BIENVENIDA
function mostrarBienvenida() {
    alert("Bienvenido a nuestro proyecto 🚀");
}

// 🔹 MODO OSCURO
btnModo.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// 🔹 LINK ACTIVO AL SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});