function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

const bodyColorChanger = () => {
  body.style.backgroundColor = getRandomHexColor();
};

const startColor = () => {
  btnStart.disabled = true;
  btnStop.disabled = false;
  timerId = setInterval(bodyColorChanger, 1000);
};

const stopColor = () => {
  clearInterval(timerId);
  btnStart.disabled = false;
  btnStop.disabled = true;
};

btnStart.addEventListener('click', startColor);
btnStop.addEventListener('click', stopColor);
btnStop.disabled = true;
