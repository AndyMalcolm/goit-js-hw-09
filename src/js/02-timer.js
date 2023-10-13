import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }

  function updateTimer(days, hours, minutes, seconds) {
    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
  }
  function onDateSelected(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();
    if (selectedDate <= currentDate) {
      alert("Please choose a date in the future");
      document.querySelector('[data-start]').disabled = true;
    } else {
      document.querySelector('[data-start]').disabled = false;
    }
  }
  function startCountdown() {
    const selectedDate = flatpickr.parseDate(document.querySelector('#datetime-picker').value);
    const currentDate = new Date();
    const timeDifference = selectedDate - currentDate;
  
    if (timeDifference <= 0) {
      alert("Please choose a date in the future");
      return;
    }
  
    const interval = setInterval(function () {
      const time = convertMs(selectedDate - new Date());
      updateTimer(time.days, time.hours, time.minutes, time.seconds);
  
      if (timeDifference <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose: onDateSelected,
  };
  
  flatpickr('#datetime-picker', options);
  document.querySelector('[data-start]').addEventListener('click', startCountdown);