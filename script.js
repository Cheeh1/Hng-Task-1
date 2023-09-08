const dateElement = document.getElementById('currentDate')
const timeElement = document.getElementById('currentTime')

function updateDateTime() {
    const currentDate = new Date();
    const currentHours = currentDate.getHours().toString().padStart(2, "0");
    const currentMinutes = currentDate.getMinutes().toString().padStart(2, "0");
    const currentSeconds = currentDate.getSeconds().toString().padStart(2, "0");
    const currentTime = `${currentHours}:${currentMinutes}:${currentSeconds}`;
    
    // Update the HTML elements
    dateElement.textContent = currentDate.toDateString();
    timeElement.textContent = currentTime;
  }

  // Call the function initially
  updateDateTime();

  // Update the date and time every second
  setInterval(updateDateTime, 1000);