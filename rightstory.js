// Define the right arrow button
const rightButton = document.querySelector(".right-arrow-button");

// Add an event listener to the right arrow button
rightButton.addEventListener("click", function() {
    console.log("Right button clicked");

    // Delayed creation of the first image (City 1)
    setTimeout(() => {
        // Create an img element
        const cityImg1 = document.createElement("img");

        // Set the source and alt attributes
        cityImg1.src = "city1.png";
        cityImg1.alt = "City 1";

        // Apply CSS class for styling (fade-in animation)
        cityImg1.classList.add("fade-iner-1");

        // Apply z-index property
        cityImg1.style.zIndex = "1";

        // Apply absolute position
        cityImg1.style.position = "absolute";
        cityImg1.style.top = "0";
        cityImg1.style.left = "0";

        // Append the img element to the city-img div
        const cityImgContainer = document.querySelector(".city-img");
        cityImgContainer.appendChild(cityImg1);
    }, 4100); // 4100 milliseconds is equivalent to 4.1 seconds

    // Delayed creation of the second image (City 2)
    setTimeout(() => {
        // Create an img element
        const cityImg2 = document.createElement("img");

        // Set the source and alt attributes
        cityImg2.src = "city2.png";
        cityImg2.alt = "City 2";

        // Apply CSS class for styling (fade-in animation)
        cityImg2.classList.add("fade-iner-2");

        // Apply z-index property
        cityImg2.style.zIndex = "2";

        // Apply absolute position
        cityImg2.style.position = "absolute";
        cityImg2.style.top = "0";
        cityImg2.style.left = "0";

        // Append the img element to the city-img div
        const cityImgContainer = document.querySelector(".city-img");
        cityImgContainer.appendChild(cityImg2);
    }, 4900); // 4900 milliseconds is equivalent to 4.2 seconds

    // Delayed creation of the third image (City 3)
    setTimeout(() => {
        // Create an img element
        const cityImg3 = document.createElement("img");

        // Set the source and alt attributes
        cityImg3.src = "city3.png";
        cityImg3.alt = "City 3";

        // Apply CSS class for styling (fade-in animation)
        cityImg3.classList.add("fade-iner-2");

        // Apply z-index property
        cityImg3.style.zIndex = "4";

        // Apply absolute position
        cityImg3.style.position = "absolute";
        cityImg3.style.top = "0";
        cityImg3.style.left = "0";

        // Append the img element to the city-img div
        const cityImgContainer = document.querySelector(".city-img");
        cityImgContainer.appendChild(cityImg3);
    }, 5600); // 5600 milliseconds is equivalent to 5.6 seconds

    // Delayed creation of the fourth image (City 4)
    setTimeout(() => {
        // Create an img element
        const cityImg4 = document.createElement("img");

        // Set the source and alt attributes
        cityImg4.src = "city4.png";
        cityImg4.alt = "City 4";

        // Apply CSS class for styling (fade-in animation)
        cityImg4.classList.add("fade-iner-2");

        // Apply z-index property
        cityImg4.style.zIndex = "3";

        // Apply absolute position
        cityImg4.style.position = "absolute";
        cityImg4.style.top = "0";
        cityImg4.style.left = "0";

        // Append the img element to the city-img div
        const cityImgContainer = document.querySelector(".city-img");
        cityImgContainer.appendChild(cityImg4);
    }, 6300); // 6300 milliseconds is equivalent to 6.3 seconds
    
    setTimeout(() => {
        // Create an h1 element
        const heading = document.createElement("h1");
    
        // Set the text content
        heading.textContent = "Power of Music in Gaming"
    
        // Apply CSS styles
        heading.style.textAlign = "center";
        heading.style.fontFamily = "'Chakra Petch', sans-serif";
        heading.style.fontWeight = "600";
        
        // Check screen width and set font size and top margin accordingly
        if (window.innerWidth < 768) {
            heading.style.fontSize = "2.8vh";
            heading.style.top = "50%";
        } else {
            heading.style.fontSize = "3.8vh";
            heading.style.top = "65%";
        }
        
        heading.style.color = "rgb(87, 76, 87)";
        heading.style.zIndex = "5";
        heading.style.position = "absolute";
        heading.style.left = "50%";
        heading.style.transform = "translate(-50%, -50%)"; // Centering
    
        // Apply typewriter animation
        heading.classList.add("typewriter_1");
    
        // Append the h1 element to the .city-img div
        const cityImgContainer = document.querySelector(".city-img");
        cityImgContainer.appendChild(heading);
    }, 7300); // 7300 milliseconds is equivalent to 4.3 seconds 
    
    setTimeout(() => {
        // Create an h2 element
        const heading = document.createElement("h2");
    
        // Set the text content
        heading.textContent = "In the realm of interactive entertainment, where pixels paint worlds and narratives come alive, music emerges as an unsung hero, wielding unparalleled influence over the player's experience. It transcends the confines of mere auditory stimulation, becoming a cornerstone that enriches, guides, and immerses players in the virtual landscapes they traverse."
    
        // Apply CSS styles
        heading.style.textAlign = "center";
        heading.style.fontFamily = "'Chakra Petch', sans-serif";
        heading.style.fontWeight = "600";
        
        // Check screen width and set font size and top margin accordingly
        if (window.innerWidth < 768) {
            heading.style.fontSize = "1.8vh";
            heading.style.top = "70%";
        } else {
            heading.style.fontSize = "2.5vh";
            heading.style.top = "80%";
        }
        
        heading.style.color = "rgb(87, 76, 87)";
        heading.style.zIndex = "5";
        heading.style.position = "absolute";
        heading.style.left = "50%";
        heading.style.transform = "translate(-50%, -50%)"; // Centering
    
        // Apply typewriter animation
        heading.classList.add("fade-iner-2");
    
        // Append the h1 element to the .city-img div
        const cityImgContainer = document.querySelector(".city-img");
        cityImgContainer.appendChild(heading);
    }, 7900); // 7300 milliseconds is equivalent to 4.3 seconds
    
});

