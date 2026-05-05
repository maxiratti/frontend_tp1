const audio = document.getElementById('audio');
const toggleButton = document.getElementById('toggle-play');

function updateButtonIcon() {
    toggleButton.textContent = audio.paused ? '▶' : '⏸';
}

window.addEventListener('load', () => {
    audio.play().catch(() => {
        updateButtonIcon();
    });
});

toggleButton.addEventListener('click', (event) => {
    event.stopPropagation();

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

audio.addEventListener('play', updateButtonIcon);
audio.addEventListener('pause', updateButtonIcon);

updateButtonIcon();

const cards = document.querySelectorAll(".profile-card");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));
