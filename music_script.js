// music_script.js

// Function to create noise squares
function createNoiseSquare() {
    const sizePercentage = Math.random() * 2 + 2; // Square size between 2% and 4%
    const positionX = Math.random() * 100; // Random X position
    const positionY = Math.random() * 100; // Random Y position
    const zIndex = Math.floor(Math.random() * 10); // Random z-index
    
    const noiseSquare = document.createElement('div');
    noiseSquare.classList.add('noise-square');
    noiseSquare.style.width = sizePercentage + '%';
    noiseSquare.style.height = sizePercentage + '%';
    noiseSquare.style.left = positionX + '%';
    noiseSquare.style.top = positionY + '%';
    noiseSquare.style.zIndex = zIndex;
    noiseSquare.style.animation = 'move 10s linear infinite';
    
    noiseBackground.appendChild(noiseSquare);
  }
  
  // Wait for the DOM to be ready
  document.addEventListener('DOMContentLoaded', function () {
    const noiseBackground = document.querySelector('.noise-background');
  
    // Create multiple noise squares
    const numSquares = 50;
    for (let i = 0; i < numSquares; i++) {
      createNoiseSquare();
    }
  });
  