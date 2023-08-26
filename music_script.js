document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audio");
  const toggleButton = document.getElementById("toggleAudio");
  const sphere = document.getElementById("sphere");
  var animationPaused = false;

  // Toggle audio playback on button click
  toggleButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      audio.muted = false; // Unmute when playback is initiated
    } else {
      audio.pause();
    }
  });

  // Start animation when the audio play button is clicked
  toggleButton.addEventListener("click", function() {
    if (audio.paused) {
      sphere.style.animationPlayState = "paused";
    } else {
      sphere.style.animationPlayState = "running";
    }
    animationPaused = !animationPaused;
  });

  // Pause animation when audio is paused
  audio.addEventListener("pause", function() {
    sphere.style.animationPlayState = "paused";
  });
  
  function toggleAudio() {
    var button = document.getElementById("toggleAudio");
    var currentImage = button.style.backgroundImage;

    if (currentImage.includes("Stop button.png")) {
      button.style.backgroundImage = "url('Start button.png')";
    } else {
      button.style.backgroundImage = "url('Stop button.png')";
    }
  }
});
