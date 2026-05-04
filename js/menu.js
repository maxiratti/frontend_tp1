function toggleMenu() {
    document.getElementById("menuLinks").classList.toggle("active");
}

function mostrarBienvenida() {
        alert("Bienvenido a nuestro proyecto 🚀");
    }

// TOGGLE MENU MOBILE
function toggleMenu() {
    document.getElementById("menuLinks").classList.toggle("show");
}

// MODO OSCURO
const btnModo = document.getElementById("modoBtn");

btnModo.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// LINK ACTIVO AL SCROLL (PRO)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
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
