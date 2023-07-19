document.addEventListener("DOMContentLoaded", function() {
    const clickMeButton = document.getElementById("btn-click-me");
    clickMeButton.addEventListener("click", function() {
      createButtons();
    });
  });
  
  function createButtons() {
    const parentElement = document.body;
    const clickMeButton = document.getElementById("btn-click-me");
  
    // Remove the "Click Me" button
    parentElement.removeChild(clickMeButton);
  
    // Create the new buttons
    const service1Button = document.createElement("button");
    service1Button.textContent = "Service 1";
    parentElement.appendChild(service1Button);
  
    const service2Button = document.createElement("button");
    service2Button.textContent = "Service 2";
    parentElement.appendChild(service2Button);
  }
  
