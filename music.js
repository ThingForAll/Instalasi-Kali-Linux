// === MUSIC PLAYER SYSTEM ===
const cdIcon = document.getElementById('cd-icon');
const music = document.getElementById('bg-music');
const statusText = document.getElementById('music-status');
let isPlaying = false;

cdIcon.addEventListener('click', () => {
  if (!isPlaying) {
    music.play();
    cdIcon.classList.add('playing');
    statusText.textContent = "Music: ON";
    isPlaying = true;
  } else {
    music.pause();
    cdIcon.classList.remove('playing');
    statusText.textContent = "Music: OFF";
    isPlaying = false;
  }
});
