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
// Get the draggable sphere element
const draggableSphere = document.getElementById("draggableSphere");

// Initialize variables to track dragging state
let isDragging = false;
let offsetX, initialX;

// Add event listeners for both mouse and touch interactions
draggableSphere.addEventListener("mousedown", startDragging);
draggableSphere.addEventListener("touchstart", startDragging);

function startDragging(e) {
  e.preventDefault(); // Prevents unintended selections or scrolling
  isDragging = true;
  
  if (e.type === "mousedown") {
    offsetX = e.clientX - draggableSphere.getBoundingClientRect().left;
  } else if (e.type === "touchstart") {
    const touch = e.touches[0];
    offsetX = touch.clientX - draggableSphere.getBoundingClientRect().left;
  }
  
  initialX = draggableSphere.getBoundingClientRect().left;
  draggableSphere.style.cursor = "grabbing";
  
  // Add event listeners for move and end events
  document.addEventListener("mousemove", drag);
  document.addEventListener("touchmove", drag, { passive: false });
  document.addEventListener("mouseup", stopDragging);
  document.addEventListener("touchend", stopDragging);
}

function drag(e) {
  if (!isDragging) return;
  
  const clientX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
  const newX = clientX - offsetX;
  const maxX = window.innerWidth - draggableSphere.offsetWidth;
  
  if (newX >= 0 && newX <= maxX) {
    draggableSphere.style.left = `${newX}px`;
  }
}

function stopDragging() {
  if (!isDragging) return;
  
  isDragging = false;
  draggableSphere.style.cursor = "grab";
  
  // Remove event listeners for move and end events
  document.removeEventListener("mousemove", drag);
  document.removeEventListener("touchmove", drag);
  document.removeEventListener("mouseup", stopDragging);
  document.removeEventListener("touchend", stopDragging);
}
