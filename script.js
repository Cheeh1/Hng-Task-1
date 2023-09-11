const dayElement = document.getElementById("currentDay");
const timeElement = document.getElementById("currentTime");

function updateDayOfWeekAndTime() {
  const currentDate = new Date();

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayOfWeek = daysOfWeek[currentDate.getDay()];

  const currentMilliseconds = new Date().getTime();
  

  dayElement.textContent = currentDayOfWeek;
  timeElement.textContent = currentMilliseconds;
}

updateDayOfWeekAndTime();

setInterval(updateDayOfWeekAndTime, 1);


