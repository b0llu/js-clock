setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");
const liveDate = document.querySelector("#date");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

function date() {
  let latestDate = new Date().getDate();
  let latestMonth = new Date().getMonth();
  let latestYear = new Date().getFullYear()
  const fullYear = latestDate + ' - ' + (latestMonth + 1) + ' - ' + latestYear
  liveDate.innerHTML = fullYear;
}

setClock();
date();
