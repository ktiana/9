function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

startBtn.addEventListener('click', onStartClick);
function onStartClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
}

stopBtn.addEventListener('click', onStopClick);
function onStopClick() {
  clearInterval(timerId);
  stopBtn.setAttribute('disabled', true);
  startBtn.removeAttribute('disabled');
}
