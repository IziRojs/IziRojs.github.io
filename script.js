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
  service1Button.id = "service-button-1";
  service1Button.classList.add("service");
  parentElement.appendChild(service1Button);

  const service2Button = document.createElement("button");
  service2Button.textContent = "Service 2";
  service2Button.id = "service-button-2";
  service2Button.classList.add("service");
  parentElement.appendChild(service2Button);

  service1Button.addEventListener("click", function() {
    createThirdLayer("service-button-1");
  });

  service2Button.addEventListener("click", function() {
    createThirdLayer("service-button-2");
  });
}

function createThirdLayer(serviceButtonId) {
  const parentElement = document.body;
  const serviceButton = document.getElementById(serviceButtonId);

  // Remove the service button
  parentElement.removeChild(serviceButton);

  // Create the third layer buttons
  for (let i = 1; i <= 3; i++) {
    const dateButton = document.createElement("button");
    dateButton.textContent = "Date " + i;
    dateButton.id = "date-button-" + i;
    dateButton.classList.add("time");
    parentElement.appendChild(dateButton);
  }
}
