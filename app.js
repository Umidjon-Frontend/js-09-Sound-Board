const sounds = [
    "charchadim",
    "esla-meni",
    "maktabimda",
    "musofir",
    "ona-qizim",
    "tentakcham",
];

sounds.forEach((sound) => {
    const btn = document.createElement("button");

    btn.innerHTML = sound;

    btn.addEventListener("click", () => {
        stopSong();
        document.getElementById(sound).play();
    });

    document.querySelector(".buttons").appendChild(btn);
});

function stopSong() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}
