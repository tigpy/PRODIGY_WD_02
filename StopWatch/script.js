let startTime;
let updatedTime;
let difference = 0;
let tInterval;
let running = false;

const minDisplay = document.getElementById('min');
const secDisplay = document.getElementById('sec');
const msDisplay = document.getElementById('ms');
const startButton = document.getElementById('Start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('Reset');

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);

function start() {
    if (!running) {
        startTime = new Date().getTime() - difference;
        tInterval = setInterval(getShowTime, 10);
        running = true;
        startButton.disabled = true;
        stopButton.disabled = false;
        resetButton.disabled = false;
    }
}

function stop() {
    if (running) {
        clearInterval(tInterval);
        running = false;
        startButton.disabled = false;
        stopButton.disabled = true;
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    minDisplay.textContent = "00";
    secDisplay.textContent = "00";
    msDisplay.textContent = "00";
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    minDisplay.textContent = minutes;
    secDisplay.textContent = seconds;
    msDisplay.textContent = milliseconds;
}

// Initial state of buttons
stopButton.disabled = true;
resetButton.disabled = true;
