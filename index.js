const audio = document.getElementById(myAudio);
const playPauseBtn = document.getElementById(playPauseBtn);
const stopBtn = document.getElementById(stopBtn);

playPauseBtn.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "Pause";
    } else {
        audio.paused();
        playPauseBtn.textContent = "Play";
    }
    });

    stopBtn.addEventListener("click", function() {
        audio.paused();
        audio.currentTime = 0;
        playPauseBtn.textContent = "Play";
    });