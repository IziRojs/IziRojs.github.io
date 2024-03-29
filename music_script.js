// najdi logo pa ga animiraj
const svgObject = document.getElementById('Logo_svg');

svgObject.addEventListener('load', function() {
  const svgDoc = svgObject.contentDocument;
  const darkElements = svgDoc.querySelectorAll('path[fill="#191b1f"]');
  darkElements.forEach(element => {
    element.style.animation = 'breathe 3s infinite alternate';
  });
});

// Define the toggleAudio function outside of the DOMContentLoaded event listener
function toggleAudio() {
  var button = document.getElementById("toggleAudio");
  var currentImage = button.style.backgroundImage;

  if (currentImage.includes("Stop button.png")) {
    button.style.backgroundImage = "url('Start button.png')";
  } else {
    button.style.backgroundImage = "url('Stop button.png')";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audio");
  const toggleButton = document.getElementById("toggleAudio");
  const sphere = document.getElementById("sphere");
  var animationPaused = false;

  // Toggle audio playback on button click
  toggleButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      audio.muted = false; // Unmute whean playback is initiated
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

 // Get the left and right arrow buttons
const leftButton = document.querySelector(".left-arrow-button");
const rightButton = document.querySelector(".right-arrow-button");

// Add event listeners for sphere dragging
draggableSphere.addEventListener("mousemove", checkButtonPress);
draggableSphere.addEventListener("touchmove", checkButtonPress);

function checkButtonPress(event) {
  // Get the position of the sphere and the buttons
  const sphereRect = draggableSphere.getBoundingClientRect();
  const leftButtonRect = leftButton.getBoundingClientRect();
  const rightButtonRect = rightButton.getBoundingClientRect();

  // Check if the sphere overlaps with the left button
  if (
    sphereRect.right >= leftButtonRect.left &&
    sphereRect.left <= leftButtonRect.right &&
    sphereRect.bottom >= leftButtonRect.top &&
    sphereRect.top <= leftButtonRect.bottom
  ) {
    leftButton.click(); // Simulate click on the left button
  }

  // Check if the sphere overlaps with the right button
  if (
    sphereRect.right >= rightButtonRect.left &&
    sphereRect.left <= rightButtonRect.right &&
    sphereRect.bottom >= rightButtonRect.top &&
    sphereRect.top <= rightButtonRect.bottom
  ) {
    rightButton.click(); // Simulate click on the right button
  }
}
  // Add event listeners for the left and right arrow buttons
  leftButton.addEventListener("click", () => {
    console.log("Left button clicked");
    draggableSphere.style.backgroundColor = "rgb(89, 100, 78)";
  });

  rightButton.addEventListener("click", () => {
    console.log("Right button clicked");
    draggableSphere.style.backgroundColor = "#490648";
  });
  
});

// Define the left and right arrow buttons
const leftButton = document.querySelector(".left-arrow-button");
const rightButton = document.querySelector(".right-arrow-button");

// Add an event listener to the button that changes the sphere's background color
leftButton.addEventListener("click", function() {
  // Get the computed background color of the sphere
  const computedColor = getComputedStyle(draggableSphere).backgroundColor;
  
  // Define the target background color (e.g., #59644E)
  const targetColor = "rgb(89, 100, 78)"; // Update with the actual target color

  // Check if the background color matches the target color
  if (computedColor === targetColor) {
    // Disable the left and right arrow buttons
    leftButton.disabled = true;
    rightButton.disabled = true;
  }
});

// Add an event listener to the left arrow button
leftButton.addEventListener("click", function() {
  // Add the "pulse" class to the draggable sphere
  draggableSphere.classList.add("pulse");
});
// Get a reference to the .content element
const contentElement = document.querySelector('.content');

// Get a reference to the .draggable-sphere element
const sphereElement = document.querySelector('.draggable-sphere');

// Add an animation end event listener to the .draggable-sphere element
sphereElement.addEventListener('animationend', function (e) {
  if (e.animationName === 'pulseAnimation' && e.elapsedTime >= 0.875) {
    // Remove the .content element from the DOM
    contentElement.parentNode.removeChild(contentElement);

    // Remove the animation end event listener to prevent further removals
    sphereElement.removeEventListener('animationend', arguments.callee);
  }
});

