
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

const datetimePicker = document.getElementById("datetime-picker");
const startButton = document.querySelector("[data-start]");
const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

function newCalendar(timeRemaining) {
  daysElement.textContent = addLeadingZero(timeRemaining.days);
  hoursElement.textContent = addLeadingZero(timeRemaining.hours);
  minutesElement.textContent = addLeadingZero(timeRemaining.minutes);
  secondsElement.textContent = addLeadingZero(timeRemaining.seconds);
}

const options = {
  enableTime: true,
  time_24hr: true,
  minuteIncrement: 1,
  onClose: function (selectedDates) {

    if (selectedDate <= new Date()) {
      alert("Please choose a date in the future");
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  }
};

flatpickr(datetimePicker, options);

startButton.addEventListener("click", function () {
  const selectedDate = flatpickr.parseDate(datetimePicker.value);
  const countdown = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const timeRemaining = getTimeRemaining(selectedDate);

    if (timeRemaining.total <= 0) {
      clearInterval(countdown);
      daysElement.textContent = "00";
      hoursElement.textContent = "00";
      minutesElement.textContent = "00";
      secondsElement.textContent = "00";
    } else {
      newCalendar(timeRemaining);
    }
  }
});

