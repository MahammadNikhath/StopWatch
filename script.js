let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let isRunning = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

function updateDisplay() {
    let ms = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
    let sec = seconds < 10 ? `0${seconds}` : seconds;
    let min = minutes < 10 ? `0${minutes}` : minutes;
    display.innerHTML = `${min}:${sec}:${ms}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            milliseconds += 1;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds += 1;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes += 1;
            }
            updateDisplay();
        }, 10);
    }
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();
