function disableStartButton() {
  startButton.disabled = true;
  stopButton.disabled = false;
  startButton.dataset.isChangingColor = "true";
}
function enableStartButton() {
  startButton.disabled = false;
  stopButton.disabled = true;
  startButton.dataset.isChangingColor = "false";
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.body;

let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function changeBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
}

startButton.addEventListener('click', () => {
  if (startButton.dataset.isChangingColor === "true") return;

  intervalId = setInterval(changeBackgroundColor, 1000);
  disableStartButton();
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
  enableStartButton();
});