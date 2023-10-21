function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.body;

let intervalId;
let isChangingColor = false;

function changeBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
}

startButton.addEventListener('click', () => {
  if (isChangingColor) return;

  intervalId = setInterval(changeBackgroundColor, 1000);
  isChangingColor = true;

  startButton.disabled = true;
  stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
  isChangingColor = false;

  startButton.disabled = false;
  stopButton.disabled = true;
});