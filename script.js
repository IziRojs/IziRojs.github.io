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
  const service1Button = createServiceButton("Service 1", "03.08");
  const service2Button = createServiceButton("Service 2", "04.08");

  service1Button.addEventListener("click", function() {
    createThirdLayer(service1Button);
  });

  service2Button.addEventListener("click", function() {
    createThirdLayer(service2Button);
  });
}

function createServiceButton(serviceName, date) {
  const parentElement = document.body;

  // Create the service button
  const serviceButton = document.createElement("button");
  serviceButton.innerHTML = `<div><!----> ${date} </div><div>18:30</div><div><b> Čez 15 dni </b></div>`;
  serviceButton.classList.add("btn", "service");
  serviceButton.textContent = serviceName;
  parentElement.appendChild(serviceButton);

  return serviceButton;
}

function createThirdLayer(serviceButton) {
  const parentElement = document.body;

  // Remove the service button
  parentElement.removeChild(serviceButton);

  // Create the third layer buttons
  for (let i = 1; i <= 3; i++) {
    const dateButton = document.createElement("button");
    dateButton.textContent = "Date " + i;
    dateButton.classList.add("time");
    parentElement.appendChild(dateButton);
  }
}
