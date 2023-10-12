function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.body;
let intervalId;
function changeBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
}
function onStartButtonClick() {
  startButton.disabled = true;
  stopButton.disabled = false;
  intervalId = setInterval(changeBackgroundColor, 1000);
}
function onStopButtonClick() {
  startButton.disabled = false;
  stopButton.disabled = true;
  clearInterval(intervalId);
}
startButton.addEventListener('click', onStartButtonClick);
stopButton.addEventListener('click', onStopButtonClick);