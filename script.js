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

  // Create Service 1 button
  const service1Button = document.createElement("button");
  service1Button.innerText = "Service 1";
  service1Button.classList.add("service-button");
  parentElement.appendChild(service1Button);

  // Create Service 2 button
  const service2Button = document.createElement("button");
  service2Button.innerText = "Service 2";
  service2Button.classList.add("service-button");
  parentElement.appendChild(service2Button);

  // Add click event listeners to Service 1 and Service 2 buttons
  service1Button.addEventListener("click", function() {
    createNestedButtons("Service 1");
  });

  service2Button.addEventListener("click", function() {
    createNestedButtons("Service 2");
  });
}

function createNestedButtons(serviceName) {
  const parentElement = document.body;

  // Remove the Service buttons
  const serviceButtons = document.querySelectorAll(".service-button");
  serviceButtons.forEach(button => {
    parentElement.removeChild(button);
  });

// Create 3 nested buttons with unique dates
for (let i = 0; i < 3; i++) {
  const button = document.createElement("button");
  const currentDate = new Date();
  const futureDate = new Date();
  futureDate.setDate(currentDate.getDate() + (i * 15)); // Add 15 days to the current date

  const buttonDate = futureDate.toLocaleDateString();
  button.innerHTML = `<div>${buttonDate}</div><div>18:30</div><div><b>Čez 15 dni</b></div>`;
  button.classList.add("btn", "m--font-inverse-light", "btn-outline-success", "btn-sm", "mr-2", "mb-3");
  parentElement.appendChild(button);
}
}
