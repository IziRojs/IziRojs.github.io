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
  service1Button.innerHTML = '<div><!----> čet. 03.08 </div><div>18:30</div><div><b> Čez 15 dni </b></div>';
  service1Button.id = "service-button-1";
  service1Button.classList.add("btn", "m--font-inverse-light", "btn-outline-success", "btn-sm", "mr-2", "mb-3");
  service1Button.disabled = true;
  parentElement.appendChild(service1Button);

  const service2Button = document.createElement("button");
  service2Button.innerHTML = '<div><!----> čet. 03.08 </div><div>18:30</div><div><b> Čez 15 dni </b></div>';
  service2Button.id = "service-button-2";
  service2Button.classList.add("btn", "m--font-inverse-light", "btn-outline-success", "btn-sm", "mr-2", "mb-3");
  service2Button.disabled = true;
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
    dateButton.id = "date-button";
    dateButton.classList.add("time");
    parentElement.appendChild(dateButton);
  }
}
