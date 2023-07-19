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
  service1Button.classList.add("service");
  parentElement.appendChild(service1Button);

  const service2Button = document.createElement("button");
  service2Button.textContent = "Service 2";
  service2Button.classList.add("service");
  parentElement.appendChild(service2Button);

  service1Button.addEventListener("click", function() {
    createThirdLayer(service1Button);
  });

  service2Button.addEventListener("click", function() {
    createThirdLayer(service2Button);
  });
}

function createThirdLayer(serviceButton) {
  const parentElement = document.body;
  const serviceButtons = document.querySelectorAll(".service");

  // Remove the service buttons
  serviceButtons.forEach(function(button) {
    parentElement.removeChild(button);
  });

  // Create the third layer buttons
  const dates = generateRandomDates(3); // Generate 3 random dates
  for (let i = 0; i < 3; i++) {
    const dateButton = document.createElement("button");
    dateButton.textContent = dates[i];
    dateButton.classList.add("time");
    parentElement.appendChild(dateButton);
  }
}

function generateRandomDates(count) {
  const dates = [];
  const currentDate = new Date();

  for (let i = 0; i < count; i++) {
    const randomDate = new Date(currentDate.getTime() + Math.random() * 10 * 24 * 60 * 60 * 1000); // Add random days
    dates.push(randomDate.toDateString());
  }

  return dates;
}
