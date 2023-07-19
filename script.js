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
  const service1Button = createButton("service-button-1");
  const service2Button = createButton("service-button-2");

  service1Button.addEventListener("click", function() {
    createThirdLayer("service-button-1");
  });

  service2Button.addEventListener("click", function() {
    createThirdLayer("service-button-2");
  });
}

function createButton(buttonId) {
  const parentElement = document.body;

  // Create the button
  const button = document.createElement("button");
  button.innerHTML = '<div><!----> čet. 03.08 </div><div>18:30</div><div><b> Čez 15 dni </b></div>';
  button.id = buttonId;
  button.classList.add("btn", "m--font-inverse-light", "btn-outline-success", "btn-sm", "mr-2", "mb-3");
  button.disabled = true;
  parentElement.appendChild(button);

  return button;
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
