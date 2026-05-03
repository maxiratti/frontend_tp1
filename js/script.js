// SALUDO
function saludo() {
    alert("¡Hola! Soy Maxi 👨‍💻");
}

// MODO OSCURO
const btnModo = document.getElementById("modoBtn");

btnModo.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// BOTÓN VOLVER ARRIBA
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// ANIMACIONES SCROLL
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach(el => observer.observe(el));