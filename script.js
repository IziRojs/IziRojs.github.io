document.addEventListener("DOMContentLoaded", function() {
  const parentElement = document.body;

  // Event delegation for the "btn-click-me" button
  parentElement.addEventListener("click", function(event) {
    if (event.target.id === "btn-click-me") {
      createButtons(parentElement);
    }
  });
});

function createButtons(parentElement) {
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

  // Create Service 3 button
  const service3Button = document.createElement("button");
  service3Button.innerText = "Service 3";
  service3Button.classList.add("service-button");
  parentElement.appendChild(service3Button);

  // Create Service 4 button
  const service4Button = document.createElement("button");
  service4Button.innerText = "Service 4";
  service4Button.classList.add("service-button");
  parentElement.appendChild(service4Button);

  // Add click event listener using event delegation
  parentElement.addEventListener("click", function(event) {
    const clickedButton = event.target;
    if (clickedButton.classList.contains("service-button")) {
      const serviceName = clickedButton.innerText;
      createNestedButtons(serviceName, parentElement);
      parentElement.removeChild(clickedButton); // Remove the clicked button
    }
  });
}

function createNestedButtons(serviceName, parentElement) {
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
