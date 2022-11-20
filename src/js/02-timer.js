import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const pageValue = document.querySelectorAll('.value');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const { defaultDate } = options;
    const selectedDate = selectedDates[0];
    let deltaTime = selectedDate.getTime() - defaultDate.getTime();
    startTimer(deltaTime);
  },
};

flatpickr(input, options);

function startTimer(deltaTime) {
  if (deltaTime < 0) {
    Notiflix.Notify.failure('Please choose a date in the future');
    return;
  }

  startBtn.disabled = false;
  startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    input.disabled = true;
    const intervalId = setInterval(() => {
      deltaTime -= 1000;
      if (deltaTime <= 0) {
        clearInterval(intervalId);
        return;
      }
      const convertTime = convertMs(deltaTime);

      const convertTimeArray = Object.entries(convertTime);
      convertTimeArray.forEach((el, index) => {
        const [, value] = el;
        pageValue[index].textContent = value;
      });
    }, 1000);
  });
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
