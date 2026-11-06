
const music = document.getElementById("backgroundMusic");
const button = document.getElementById("musicButton");
const volume = document.getElementById("volumeControl");

music.volume = 0.4;

function toggleMusic() {
    if (music.paused) {
        music.play();
        button.textContent = "⏸ Pause Music";
    } else {
        music.pause();
        button.textContent = "▶ Play Music";
    }
}

volume.addEventListener("input", function () {
    music.volume = Number(volume.value);
});
